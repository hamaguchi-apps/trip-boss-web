import { useState } from "react"

import { getTripDetails } from "../../services/tripService"

interface TripPlannerFormData {
  origin: string
  destination: string
  departureDate: string
  returnDate: string
}

interface Airport {
  name: string
  id: string
  city: string
  country: string
}

interface Flight {
  departureAirport: Airport
  arrivalAirport: Airport
  departureTime: string
  arrivalTime: string
  duration: string
  price: number
  airline: string
  flightNumber: string
}

interface Review {
  score: number
  count: number
}

interface CoffeeShop {
  name: string
  address: string
  neighborhood: string
  review: Review
  description: string
  googleReviewsUrl: string
  photosUrl: string
  websiteUrl: string
}

interface Activity {
  name: string
  address: string
  review: Review
  description: string
  websiteUrl: string
  price?: number
  duration?: string
}

interface Neighborhood {
  name: string
  coffeeShops: CoffeeShop[]
}

interface ScheduledActivity extends Activity {
  scheduledDate: string
  startTime: string
  endTime: string
}

interface DayItinerary {
  date: string
  activities: ScheduledActivity[]
  coffeeShop?: CoffeeShop
}

export interface TripDetails {
  outboundFlight: Flight | null
  returnFlight: Flight | null
  neighborhoods: Neighborhood[]
  activities: Activity[]
  dailyItinerary: DayItinerary[]
  loading: boolean
  error: string | null
}

export function Component() {
  // Initialize with today and tomorrow as default dates
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [formData, setFormData] = useState<TripPlannerFormData>({
    origin: "",
    destination: "",
    departureDate: today.toISOString().split("T")[0] ?? "",
    returnDate: tomorrow.toISOString().split("T")[0] ?? "",
  })

  const [tripDetails, setTripDetails] = useState<TripDetails>({
    outboundFlight: null,
    returnFlight: null,
    neighborhoods: [],
    activities: [],
    dailyItinerary: [],
    loading: false,
    error: null,
  })

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate dates
    const departureDate = new Date(formData.departureDate)
    const returnDate = new Date(formData.returnDate)

    if (returnDate < departureDate) {
      setTripDetails((prev) => ({
        ...prev,
        error: "Return date must be after departure date.",
        loading: false,
      }))
      return
    }

    setTripDetails((prev) => ({
      ...prev,
      loading: true,
      error: null,
    }))

    try {
      const tripDetails = await getTripDetails({
        origin: formData.origin,
        destination: formData.destination,
        departureDate,
        returnDate,
        useMock: false,
      })

      setTripDetails(tripDetails)
    } catch {
      setTripDetails((prev) => ({
        ...prev,
        error: "Failed to fetch trip details. Please try again.",
        loading: false,
      }))
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trip Boss Planner</h1>
          <p className="text-lg text-gray-600">Plan your perfect solo adventure</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
                Origin Airport Code
              </label>
              <input
                type="text"
                id="origin"
                name="origin"
                placeholder="e.g., JFK"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Destination Airport Code
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="e.g., LAX"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700">
                Departure Date
              </label>
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.departureDate}
                onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">
                Return Date
              </label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.returnDate}
                onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Plan My Trip
            </button>
          </div>
        </form>

        {/* Results sections */}
        {tripDetails.loading ?
          (
            <div className="mt-12 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-600 border-t-transparent" />
              <p className="mt-2 text-gray-600">Planning your trip...</p>
            </div>
          ) :
          tripDetails.error ?
            (
              <div className="mt-12 p-4 bg-red-50 text-red-700 rounded-lg">
                {tripDetails.error}
              </div>
            ) :
            (
              <div className="mt-12 space-y-8">
                {/* Flight Details Section */}
                <section className="bg-white p-8 rounded-lg shadow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Flight Details</h2>
                  {tripDetails.outboundFlight ? (
                    <div className="space-y-6">
                      <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold mb-2">Outbound Flight</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">From</p>
                            <p className="font-medium">{tripDetails.outboundFlight.departureAirport.name} ({tripDetails.outboundFlight.departureAirport.id})</p>
                            <p className="text-sm text-gray-600">{tripDetails.outboundFlight.departureTime}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">To</p>
                            <p className="font-medium">{tripDetails.outboundFlight.arrivalAirport.name} ({tripDetails.outboundFlight.arrivalAirport.id})</p>
                            <p className="text-sm text-gray-600">{tripDetails.outboundFlight.arrivalTime}</p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">Duration: {tripDetails.outboundFlight.duration}</p>
                          <p className="text-sm text-gray-500">Flight: {tripDetails.outboundFlight.airline} {tripDetails.outboundFlight.flightNumber}</p>
                          <p className="text-sm font-semibold text-indigo-600">Price: ${tripDetails.outboundFlight.price}</p>
                        </div>
                      </div>

                      {tripDetails.returnFlight && (
                        <div className="pt-4">
                          <h3 className="text-lg font-semibold mb-2">Return Flight</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">From</p>
                              <p className="font-medium">{tripDetails.returnFlight.departureAirport.name} ({tripDetails.returnFlight.departureAirport.id})</p>
                              <p className="text-sm text-gray-600">{tripDetails.returnFlight.departureTime}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">To</p>
                              <p className="font-medium">{tripDetails.returnFlight.arrivalAirport.name} ({tripDetails.returnFlight.arrivalAirport.id})</p>
                              <p className="text-sm text-gray-600">{tripDetails.returnFlight.arrivalTime}</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">Duration: {tripDetails.returnFlight.duration}</p>
                            <p className="text-sm text-gray-500">Flight: {tripDetails.returnFlight.airline} {tripDetails.returnFlight.flightNumber}</p>
                            <p className="text-sm font-semibold text-indigo-600">Price: ${tripDetails.returnFlight.price}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-gray-500">No flight details available yet.</div>
                  )}
                </section>

                {/* Local Itinerary Section */}
                <section className="bg-white p-8 rounded-lg shadow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Local Itinerary</h2>

                  {/* Coffee Meetup Options */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Coffee Meetup Options</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {tripDetails.neighborhoods.map((neighborhood, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-3">{neighborhood.name}</h4>
                          {neighborhood.coffeeShops.map((shop, shopIndex) => (
                            <div key={shopIndex} className="mb-4 last:mb-0">
                              <h5 className="font-medium">{shop.name}</h5>
                              <p className="text-sm text-gray-600">{shop.address}</p>
                              <div className="flex items-center mt-1">
                                <span className="text-yellow-400">★</span>
                                <span className="text-sm text-gray-600 ml-1">{shop.review.score} ({shop.review.count} reviews)</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{shop.description}</p>
                              <div className="mt-2 space-x-2">
                                <a href={shop.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800">Reviews</a>
                                <a href={shop.photosUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800">Photos</a>
                                <a href={shop.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800">Website</a>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                      {tripDetails.neighborhoods.length === 0 && (
                        <div className="text-gray-500">No coffee shop recommendations available yet.</div>
                      )}
                    </div>
                  </div>

                  {/* Solo Activities */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Solo Activity Recommendations</h3>
                    <div className="space-y-4">
                      {tripDetails.activities.map((activity, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-medium">{activity.name}</h4>
                          <p className="text-sm text-gray-600">{activity.address}</p>
                          <div className="flex items-center mt-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm text-gray-600 ml-1">{activity.review.score} ({activity.review.count} reviews)</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                          {activity.price && (
                            <p className="text-sm text-gray-600">Price: ${activity.price}</p>
                          )}
                          {activity.duration && (
                            <p className="text-sm text-gray-600">Duration: {activity.duration}</p>
                          )}
                          <div className="mt-2">
                            <a href={activity.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800">Visit Website</a>
                          </div>
                        </div>
                      ))}
                      {tripDetails.activities.length === 0 && (
                        <div className="text-gray-500">No activity recommendations available yet.</div>
                      )}
                    </div>
                  </div>
                </section>

                {/* Trip Calendar Section */}
                {!tripDetails.loading && !tripDetails.error && tripDetails.dailyItinerary.length > 0 && (
                  <section className="bg-white p-8 rounded-lg shadow mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Calendar</h2>
                    <div className="space-y-8">
                      {tripDetails.dailyItinerary.map((day, index) => (
                        <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {formatDate(day.date)}
                          </h3>
                          <div className="space-y-4">
                            {day.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                                <div className="w-32 flex-shrink-0">
                                  <p className="text-sm font-medium text-gray-900">
                                    {formatTime(activity.startTime)} - {formatTime(activity.endTime)}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="text-base font-medium text-gray-900">{activity.name}</h4>
                                  <p className="text-sm text-gray-600">{activity.address}</p>
                                  {activity.price && (
                                    <p className="text-sm text-gray-600">Price: ${activity.price}</p>
                                  )}
                                  <p className="text-sm text-gray-600">{activity.description}</p>
                                </div>
                              </div>
                            ))}
                            {day.coffeeShop && (
                              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500">
                                <div className="w-32 flex-shrink-0">
                                  <p className="text-sm font-medium text-gray-900">Recommended Coffee</p>
                                </div>
                                <div>
                                  <h4 className="text-base font-medium text-gray-900">{day.coffeeShop.name}</h4>
                                  <p className="text-sm text-gray-600">{day.coffeeShop.address}</p>
                                  <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-sm text-gray-600 ml-1">
                                      {day.coffeeShop.review.score} ({day.coffeeShop.review.count} reviews)
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}
      </div>
    </main>
  )
}

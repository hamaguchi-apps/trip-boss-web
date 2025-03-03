import axios from "axios"

import { getMockTripDetails } from "../mocks/tripDetailsMock"
import type { TripDetails } from "../pages/(main)/index"

interface GetTripDetailsParams {
  origin: string
  destination: string
  departureDate: Date
  returnDate: Date
  useMock?: boolean
}

export const getTripDetails = async ({
  origin,
  destination,
  departureDate,
  returnDate,
  useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true",
}: GetTripDetailsParams): Promise<TripDetails> => {
  if (useMock) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return getMockTripDetails(departureDate, returnDate)
  }

  try {
    const response = await axios.post(import.meta.env.VITE_API_GRAPHQL_URL, {
      query: `
        mutation getItinerary($payload: ItineraryGeneratorInput!) {
          generateItinerary(payload: $payload) {
            activities {
              address
              description
              endTime
              name
              review {
                count
                score
              }
              scheduledDate
              startTime
              websiteUrl
            }
            dailyItinerary {
              activities {
                address
                description
                endTime
                name
                review {
                  count
                  score
                }
                scheduledDate
                startTime
                websiteUrl
              }
              coffeeShop {
                address
                description
                googleReviewsUrl
                name
                neighborhood
                photosUrl
                review {
                  count
                  score
                }
                websiteUrl
              }
              date
            }
            error
            loading
            neighborhoods {
              coffeeShops {
                address
                description
                googleReviewsUrl
                name
                neighborhood
                photosUrl
                review {
                  count
                  score
                }
                websiteUrl
              }
              name
            }
            outboundFlight {
              airline
              arrivalAirport {
                city
                country
                id
                name
              }
              arrivalTime
              departureAirport {
                city
                country
                id
                name
              }
              departureTime
              duration
              flightNumber
              price
            }
            returnFlight {
              airline
              arrivalAirport {
                city
                country
                id
                name
              }
              arrivalTime
              departureAirport {
                city
                country
                id
                name
              }
              departureTime
              duration
              flightNumber
              price
            }
          }
        }
      `,
      operationName: "getItinerary",
      variables: {
        payload: {
          origin,
          destination,
          departureDate: departureDate.toISOString().split("T")[0],
          arrivalDate: returnDate.toISOString().split("T")[0],
        },
      },
    }, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "insomnia/10.0.0",
      },
    })

    return response.data.data.generateItinerary
  } catch (error) {
    console.error("Error fetching trip details:", error)
    throw error
  }
}

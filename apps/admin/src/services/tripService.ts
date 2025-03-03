import { getMockTripDetails } from "../mocks/tripDetailsMock"
import { ITINERARY_SYSTEM_PROMPT, ITINERARY_USER_PROMPT } from "../prompts/itineraryPrompt"
import type { TripDetails } from "../types"

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
    // TODO: Implement actual OpenAI API call
    // const userPrompt = ITINERARY_USER_PROMPT
    //   .replace("{origin}", origin)
    //   .replace("{destination}", destination)
    //   .replace("{departureDate}", departureDate.toISOString().split("T")[0])
    //   .replace("{returnDate}", returnDate.toISOString().split("T")[0])
    //   // TODO: Add actual flight and location data
    //   .replace("{flightData}", "")
    //   .replace("{locationData}", "")

    // TODO: Make OpenAI API call here
    // const response = await openai.createChatCompletion({
    //   model: "gpt-4",
    //   messages: [
    //     { role: "system", content: ITINERARY_SYSTEM_PROMPT },
    //     { role: "user", content: userPrompt }
    //   ]
    // })

    throw new Error("Real implementation not yet available")
  } catch (error) {
    console.error("Error fetching trip details:", error)
    throw error
  }
}

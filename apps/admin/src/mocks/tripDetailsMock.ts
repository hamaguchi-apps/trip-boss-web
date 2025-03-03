import type { TripDetails } from "../types"

export const getMockTripDetails = (
  departureDate: Date,
  returnDate: Date,
): TripDetails => {
  // Calculate middle day
  const middleDate = new Date(departureDate)
  middleDate.setDate(departureDate.getDate() + 1)
  const middleDateStr = middleDate.toISOString().split("T")[0] ?? ""

  return {
    "outboundFlight": {
      "departureAirport": {
        "name": "Santos Dumont Airport",
        "id": "SDU",
        "city": "Rio de Janeiro",
        "country": "Brazil"
      },
      "arrivalAirport": {
        "name": "São Paulo/Guarulhos–Governor André Franco Montoro International Airport",
        "id": "GRU",
        "city": "São Paulo",
        "country": "Brazil"
      },
      "airline": "LATAM",
      "flightNumber": "LA 3974",
      "departureTime": "12:45 PM",  // 12:45 PM
      "arrivalTime": "1:40 PM",   // 1:40 PM
      "duration": "55m",
      "price": 123
    },
    "returnFlight": {
      "departureAirport": {
        "name": "São Paulo/Guarulhos–Governor André Franco Montoro International Airport",
        "id": "GRU",
        "city": "São Paulo",
        "country": "Brazil"
      },
      "arrivalAirport": {
        "name": "Santos Dumont Airport",
        "id": "SDU",
        "city": "Rio de Janeiro",
        "country": "Brazil"
      },
      "airline": "LATAM",
      "flightNumber": "LA 3975",
      "departureTime": "2:20 PM",
      "arrivalTime": "3:30 PM",
      "duration": "1h 10m",
      "price": 123
    },
    "neighborhoods": [
      {
        "name": "Cumbica",
        "coffeeShops": [
          {
            "name": "We Coffee Guarulhos",
            "address": "São Paulo/Guarulhos–Governor André Franco Montoro Int'l Airport, Terminal 2, Cumbica, Guarulhos - SP, 07190-100, Brazil",
            "neighborhood": "Cumbica",
            "review": {
              "score": 5.0,
              "count": 1
            },
            "description": "A perfect spot to grab a coffee before your flight.",
            "googleReviewsUrl": "https://serpapi.com/search.json?data_id=0x94ce8bfe88e0f23d%3A0x6a593e46e462441c&engine=google_maps_reviews&hl=en",
            "photosUrl": "https://serpapi.com/search.json?data_id=0x94ce8bfe88e0f23d%3A0x6a593e46e462441c&engine=google_maps_photos&hl=en",
            "websiteUrl": "http://www.wecoffee.com.br/"
          },
          {
            "name": "Starbucks | T3 Desembarque",
            "address": "Rod. Hélio Smidt, s/n - Cumbica, Guarulhos - SP, 07190-100, Brazil",
            "neighborhood": "Cumbica",
            "review": {
              "score": 3.3,
              "count": 28
            },
            "description": "International coffee chain known for its great beverages.",
            "googleReviewsUrl": "https://serpapi.com/search.json?data_id=0x94ce8b6eaf014af9%3A0x583320d257adb3db&engine=google_maps_reviews&hl=en",
            "photosUrl": "https://serpapi.com/search.json?data_id=0x94ce8b6eaf014af9%3A0x583320d257adb3db&engine=google_maps_photos&hl=en",
            "websiteUrl": "https://www.starbucks.com.br/lojas"
          },
          {
            "name": "Gran Coffee",
            "address": "R. Interna do Aeroporto Internacional de Guarulhos, s/n - Cumbica, Guarulhos - SP, 07190-100, Brazil",
            "neighborhood": "Cumbica",
            "review": {
              "score": 4.0,
              "count": 10
            },
            "description": "Cosy space inside the airport to enjoy a gourmet coffee.",
            "googleReviewsUrl": "https://serpapi.com/search.json?data_id=0x94ce8af853d00c79%3A0x9c8ae29284799996&engine=google_maps_reviews&hl=en",
            "photosUrl": "https://serpapi.com/search.json?data_id=0x94ce8af853d00c79%3A0x9c8ae29284799996&engine=google_maps_photos&hl=en",
            "websiteUrl": "https://store.grancoffee.com.br/"
          }
        ]
      }
    ],
    "activities": [
      {
        "name": "São Paulo Zoo",
        "address": "Av. Miguel Stéfano, 4241 - Água Funda, São Paulo - SP, 04301-905",
        "review": {
          "score": 4.5,
          "count": 8526
        },
        "description": "Explore one of the most diverse zoos in Latin America.",
        "websiteUrl": "https://www.zoologico.com.br/",
        "price": 21,
        "duration": "2-3 hours"
      },
      {
        "name": "Pinacoteca do Estado de São Paulo",
        "address": "Praça da Luz, 2 - Luz, São Paulo - SP, 01120-010",
        "review": {
          "score": 4.7,
          "count": 5296
        },
        "description": "Marvel at classic and contemporary art in a historic building.",
        "websiteUrl": "https://pinacoteca.org.br/",
        "price": 15,
        "duration": "2 hours"
      }
    ],
    "dailyItinerary": [
      {
        "date": "2025-10-01",
        "activities": [
          {
            "name": "São Paulo Zoo",
            "address": "Av. Miguel Stéfano, 4241 - Água Funda, São Paulo - SP, 04301-905",
            "review": {
              "score": 4.5,
              "count": 8526
            },
            "description": "Explore one of the most diverse zoos in Latin America.",
            "websiteUrl": "https://www.zoologico.com.br/",
            "scheduledDate": "2025-10-01",
            "startTime": "15:30",
            "endTime": "18:00"
          }
        ],
        "coffeeShop": {
          "name": "We Coffee Guarulhos",
          "address": "São Paulo/Guarulhos–Governor André Franco Montoro Int'l Airport, Terminal 2, Cumbica, Guarulhos - SP, 07190-100, Brazil",
          "neighborhood": "Cumbica",
          "review": {
            "score": 5.0,
            "count": 1
          },
          "description": "A perfect spot to grab a coffee before your flight.",
          "googleReviewsUrl": "https://serpapi.com/search.json?data_id=0x94ce8bfe88e0f23d%3A0x6a593e46e462441c&engine=google_maps_reviews&hl=en",
          "photosUrl": "https://serpapi.com/search.json?data_id=0x94ce8bfe88e0f23d%3A0x6a593e46e462441c&engine=google_maps_photos&hl=en",
          "websiteUrl": "http://www.wecoffee.com.br/"
        }
      },
      {
        "date": "2025-10-02",
        "activities": [
          {
            "name": "Pinacoteca do Estado de São Paulo",
            "address": "Praça da Luz, 2 - Luz, São Paulo - SP, 01120-010",
            "review": {
              "score": 4.7,
              "count": 5296
            },
            "description": "Marvel at classic and contemporary art in a historic building.",
            "websiteUrl": "https://pinacoteca.org.br/",
            "scheduledDate": "2025-10-02",
            "startTime": "09:00",
            "endTime": "11:00"
          }
        ],
        "coffeeShop": {
          "name": "Starbucks | T3 Desembarque",
          "address": "Rod. Hélio Smidt, s/n - Cumbica, Guarulhos - SP, 07190-100, Brazil",
          "neighborhood": "Cumbica",
          "review": {
            "score": 3.3,
            "count": 28
          },
          "description": "International coffee chain known for its great beverages.",
          "googleReviewsUrl": "https://serpapi.com/search.json?data_id=0x94ce8b6eaf014af9%3A0x583320d257adb3db&engine=google_maps_reviews&hl=en",
          "photosUrl": "https://serpapi.com/search.json?data_id=0x94ce8b6eaf014af9%3A0x583320d257adb3db&engine=google_maps_photos&hl=en",
          "websiteUrl": "https://www.starbucks.com.br/lojas"
        },
      },
      {
        "date": "2023-12-10",
        "activities": [
          {
            "name": "Historical Museum Tour",
            "address": "100 History Rd, Historic Town",
            "review": {
              "score": 4.7,
              "count": 325
            },
            "description": "Explore two centuries of history at this captivating museum.",
            "websiteUrl": "https://example.com/museum",
            "scheduledDate": "2023-12-10",
            "startTime": "14:00",
            "endTime": "16:00"
          }
        ],
        "coffeeShop": {
          "name": "Old Town Brews",
          "address": "101 Main St, Historic Town",
          "neighborhood": "Historic Town",
          "review": {
            "score": 4.8,
            "count": 150
          },
          "description": "A cozy spot for artisan coffee in the heart of the old city.",
          "googleReviewsUrl": "https://example.com/reviews",
          "photosUrl": "https://example.com/photos",
          "websiteUrl": "https://example.com"
        }
      },
      {
        "date": "2023-12-11",
        "activities": [
          {
            "name": "City Park Nature Walk",
            "address": "250 Park Ave, Central City",
            "review": {
              "score": 4.5,
              "count": 200
            },
            "description": "A guided nature walk through the city's largest park.",
            "websiteUrl": "https://example.com/park",
            "scheduledDate": "2023-12-11",
            "startTime": "10:00",
            "endTime": "12:00"
          },
          {
            "name": "Art Gallery Visit",
            "address": "200 Arts Rd, Central City",
            "review": {
              "score": 4.6,
              "count": 180
            },
            "description": "An afternoon exploring contemporary artworks.",
            "websiteUrl": "https://example.com/gallery",
            "scheduledDate": "2023-12-11",
            "startTime": "13:00",
            "endTime": "15:00"
          }
        ],
        "coffeeShop": {
          "name": "Canvas Coffee House",
          "address": "201 Arts Rd, Central City",
          "neighborhood": "Central City",
          "review": {
            "score": 4.9,
            "count": 120
          },
          "description": "Perfect spot to relax after exploring the art district.",
          "googleReviewsUrl": "https://example.com/reviews",
          "photosUrl": "https://example.com/photos",
          "websiteUrl": "https://example.com"
        }
      },
      {
        "date": "2023-12-12",
        "activities": [
          {
            "name": "Maritime Excursion",
            "address": "300 Coastal Blvd, Seaside",
            "review": {
              "score": 4.9,
              "count": 210
            },
            "description": "Embark on a scenic boat tour around the harbor.",
            "websiteUrl": "https://example.com/boat",
            "scheduledDate": "2023-12-12",
            "startTime": "09:30",
            "endTime": "11:30"
          },
          {
            "name": "Seaside Sculpture Park",
            "address": "350 Coastal Blvd, Seaside",
            "review": {
              "score": 4.8,
              "count": 195
            },
            "description": "Stroll among stunning sculptures by the sea.",
            "websiteUrl": "https://example.com/sculptures",
            "scheduledDate": "2023-12-12",
            "startTime": "12:00",
            "endTime": "14:00"
          }
        ],
        "coffeeShop": {
          "name": "Harborview Cafe",
          "address": "400 Coastal Blvd, Seaside",
          "neighborhood": "Seaside",
          "review": {
            "score": 4.9,
            "count": 165
          },
          "description": "Enjoy the best ocean views while sipping premium blends.",
          "googleReviewsUrl": "https://example.com/reviews",
          "photosUrl": "https://example.com/photos",
          "websiteUrl": "https://example.com"
        }
      }
    ],
    "loading": false,
    "error": null
  }
  

  return {
    outboundFlight: {
      departureAirport: {
        name: "John F. Kennedy International Airport",
        id: "JFK",
        city: "New York",
        country: "United States",
      },
      arrivalAirport: {
        name: "Los Angeles International Airport",
        id: "LAX",
        city: "Los Angeles",
        country: "United States",
      },
      airline: "Mock Airlines",
      flightNumber: "MA123",
      departureTime: "10:00 AM",
      arrivalTime: "1:00 PM",
      duration: "3h 00m",
      price: 299.99,
    },
    returnFlight: {
      departureAirport: {
        name: "Los Angeles International Airport",
        id: "LAX",
        city: "Los Angeles",
        country: "United States",
      },
      arrivalAirport: {
        name: "John F. Kennedy International Airport",
        id: "JFK",
        city: "New York",
        country: "United States",
      },
      airline: "Mock Airlines",
      flightNumber: "MA456",
      departureTime: "3:00 PM",
      arrivalTime: "6:00 PM",
      duration: "3h 00m",
      price: 319.99,
    },
    neighborhoods: [
      {
        name: "Downtown",
        coffeeShops: [
          {
            name: "Urban Brew",
            address: "123 Main St",
            neighborhood: "Downtown",
            review: { score: 4.5, count: 128 },
            description: "Cozy downtown cafe with artisanal coffee",
            googleReviewsUrl: "https://maps.google.com/example",
            photosUrl: "https://example.com/photos",
            websiteUrl: "https://example.com",
          },
          {
            name: "Coffee Haven",
            address: "456 Market St",
            neighborhood: "Downtown",
            review: { score: 4.7, count: 256 },
            description: "Modern cafe with specialty brews and pastries",
            googleReviewsUrl: "https://maps.google.com/example",
            photosUrl: "https://example.com/photos",
            websiteUrl: "https://example.com",
          },
        ],
      },
      {
        name: "Arts District",
        coffeeShops: [
          {
            name: "Gallery Coffee",
            address: "789 Arts Ave",
            neighborhood: "Arts District",
            review: { score: 4.8, count: 189 },
            description: "Artistic cafe featuring local artwork and premium coffee",
            googleReviewsUrl: "https://maps.google.com/example",
            photosUrl: "https://example.com/photos",
            websiteUrl: "https://example.com",
          },
          {
            name: "Creative Cup",
            address: "321 Studio St",
            neighborhood: "Arts District",
            review: { score: 4.6, count: 167 },
            description: "Inspiring coffee shop with creative atmosphere",
            googleReviewsUrl: "https://maps.google.com/example",
            photosUrl: "https://example.com/photos",
            websiteUrl: "https://example.com",
          },
        ],
      },
    ],
    activities: [
      {
        name: "City Museum Tour",
        address: "456 History Ave",
        review: { score: 4.8, count: 350 },
        description: "Fascinating museum showcasing local history",
        websiteUrl: "https://example.com",
        price: 25,
        duration: "2-3 hours",
      },
      {
        name: "Botanical Gardens",
        address: "789 Garden Path",
        review: { score: 4.7, count: 420 },
        description: "Beautiful gardens with rare plant species",
        websiteUrl: "https://example.com",
        price: 15,
        duration: "1-2 hours",
      },
      {
        name: "Local Food Tour",
        address: "101 Foodie Lane",
        review: { score: 4.9, count: 280 },
        description: "Guided tour of local cuisine highlights",
        websiteUrl: "https://example.com",
        price: 65,
        duration: "3 hours",
      },
    ],
    dailyItinerary: [
      {
        date: departureDate.toISOString().split("T")[0] ?? "",
        activities: [
          {
            name: "Arrival & Check-in",
            address: "LAX Airport",
            review: { score: 4.5, count: 1000 },
            description: "Arrive at LAX and check in to your hotel",
            websiteUrl: "https://example.com",
            scheduledDate: departureDate.toISOString().split("T")[0] ?? "",
            startTime: "13:00",
            endTime: "14:30",
          },
        ],
        coffeeShop: {
          name: "Urban Brew",
          address: "123 Main St",
          neighborhood: "Downtown",
          review: { score: 4.5, count: 128 },
          description: "Cozy downtown cafe with artisanal coffee",
          googleReviewsUrl: "https://maps.google.com/example",
          photosUrl: "https://example.com/photos",
          websiteUrl: "https://example.com",
        },
      },
      {
        date: middleDateStr,
        activities: [
          {
            name: "City Museum Tour",
            address: "456 History Ave",
            review: { score: 4.8, count: 350 },
            description: "Fascinating museum showcasing local history",
            websiteUrl: "https://example.com",
            price: 25,
            duration: "2-3 hours",
            scheduledDate: middleDateStr,
            startTime: "10:00",
            endTime: "13:00",
          },
          {
            name: "Botanical Gardens",
            address: "789 Garden Path",
            review: { score: 4.7, count: 420 },
            description: "Beautiful gardens with rare plant species",
            websiteUrl: "https://example.com",
            price: 15,
            duration: "1-2 hours",
            scheduledDate: middleDateStr,
            startTime: "14:00",
            endTime: "16:00",
          },
        ],
        coffeeShop: {
          name: "Gallery Coffee",
          address: "789 Arts Ave",
          neighborhood: "Arts District",
          review: { score: 4.8, count: 189 },
          description: "Artistic cafe featuring local artwork and premium coffee",
          googleReviewsUrl: "https://maps.google.com/example",
          photosUrl: "https://example.com/photos",
          websiteUrl: "https://example.com",
        },
      },
      {
        date: returnDate.toISOString().split("T")[0] ?? "",
        activities: [
          {
            name: "Local Food Tour",
            address: "101 Foodie Lane",
            review: { score: 4.9, count: 280 },
            description: "Guided tour of local cuisine highlights",
            websiteUrl: "https://example.com",
            price: 65,
            duration: "3 hours",
            scheduledDate: returnDate.toISOString().split("T")[0] ?? "",
            startTime: "09:00",
            endTime: "12:00",
          },
          {
            name: "Departure",
            address: "LAX Airport",
            review: { score: 4.5, count: 1000 },
            description: "Head to LAX for your return flight",
            websiteUrl: "https://example.com",
            scheduledDate: returnDate.toISOString().split("T")[0] ?? "",
            startTime: "13:00",
            endTime: "15:00",
          },
        ],
      },
    ],
    loading: false,
    error: null,
  }
}

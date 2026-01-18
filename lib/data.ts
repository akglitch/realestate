export interface Property {
    id: number;
    address: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    sqft: string;
    yearBuilt: string;
    lotSize: string;
    description: string;
    features: string[];
    images: string[];
}

export interface Neighborhood {
    name: string;
    state: string;
    description: string;
    image: string;
    properties: string;
}

export const properties: Property[] = [
    {
        id: 1,
        address: "127 Vineyard Lane",
        location: "Napa Valley, CA",
        price: "$8,500,000",
        beds: 5,
        baths: 6,
        sqft: "7,500",
        yearBuilt: "2019",
        lotSize: "2.5 acres",
        description: "Nestled among rolling vineyards, this exquisite estate exemplifies wine country luxury. Featuring custom finishes throughout, a gourmet chef's kitchen, and floor-to-ceiling windows that showcase breathtaking valley views. The property includes a temperature-controlled wine cellar, infinity pool, and outdoor entertainment pavilion.",
        features: [
            "Gourmet Chef's Kitchen",
            "Temperature-Controlled Wine Cellar",
            "Infinity Pool & Spa",
            "Home Theater",
            "Private Gym",
            "Guest House",
            "Outdoor Kitchen",
            "Smart Home System",
        ],
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
        ],
    },
    {
        id: 2,
        address: "45 Mountain Ridge Drive",
        location: "Aspen, CO",
        price: "$12,000,000",
        beds: 6,
        baths: 8,
        sqft: "10,000",
        yearBuilt: "2021",
        lotSize: "1.8 acres",
        description: "A masterpiece of modern mountain design, this Aspen estate offers ski-in/ski-out access and panoramic mountain views. The open-concept living area features vaulted ceilings and massive stone fireplaces. Includes a luxury spa, home cinema, and heated outdoor terraces for year-round enjoyment.",
        features: [
            "Ski-in/Ski-out",
            "Panoramic Mountain Views",
            "Luxury Spa & Sauna",
            "Home Cinema",
            "Heated Terraces",
            "Wine Room",
            "Elevator",
            "Smart Lighting",
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
        ],
    },
    {
        id: 3,
        address: "888 Pacific Coast Highway",
        location: "Malibu, CA",
        price: "$15,500,000",
        beds: 7,
        baths: 9,
        sqft: "12,500",
        yearBuilt: "2020",
        lotSize: "1.2 acres",
        description: "Experience the ultimate in coastal living at this stunning Malibu beachfront estate. With direct beach access and uninterrupted ocean views from nearly every room, this home defines California luxury. Features include a rooftop deck, infinity edge pool, and a state-of-the-art media room.",
        features: [
            "Direct Beach Access",
            "Oceanfront Infinity Pool",
            "Rooftop Deck",
            "Media Room",
            "Gourmet Kitchen",
            "Master Suite with private balcony",
            "3-Car Garage",
            "Security System",
        ],
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
        ],
    },
    {
        id: 4,
        address: "234 Ocean Boulevard",
        location: "Miami, FL",
        price: "$6,200,000",
        beds: 4,
        baths: 5,
        sqft: "5,500",
        yearBuilt: "2018",
        lotSize: "0.5 acres",
        description: "Modern luxury meets tropical paradise in this Miami waterfront home. dock your yacht in your backyard and enjoy the sunset from your private pool deck. The interior features sleek, contemporary design with floor-to-ceiling glass and high-end finishes throughout.",
        features: [
            "Private Dock",
            "Waterfront Pool",
            "Summer Kitchen",
            "Rooftop Terrace",
            "Glass Elevator",
            "Smart Home Automation",
            "Designer Furnishings",
            "Lush Landscaping",
        ],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
        ],
    },
    {
        id: 5,
        address: "567 Harbor View",
        location: "San Francisco, CA",
        price: "$9,800,000",
        beds: 5,
        baths: 6,
        sqft: "8,200",
        yearBuilt: "1925 (Renovated 2015)",
        lotSize: "0.3 acres",
        description: "A historic gem reimagined for modern living, this San Francisco estate offers sweeping views of the Golden Gate Bridge and the bay. Classic architectural details blend seamlessly with contemporary upgrades. Includes a private garden oasis and a climate-controlled wine cellar.",
        features: [
            "Golden Gate Bridge Views",
            "Historic Architecture",
            "Private Garden",
            "Wine Cellar",
            "Library",
            "Chef's Kitchen",
            "Guest Quarters",
            "Garage Parking",
        ],
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
        ],
    },
    {
        id: 6,
        address: "123 Lake Shore Drive",
        location: "Chicago, IL",
        price: "$4,500,000",
        beds: 4,
        baths: 4,
        sqft: "6,000",
        yearBuilt: "2010",
        lotSize: "N/A (Condo)",
        description: "Luxury living in the sky. This penthouse apartment on Lake Shore Drive offers unparalleled views of Lake Michigan and the city skyline. Features include a private elevator entrance, wrap-around terrace, and custom millwork throughout.",
        features: [
            "Lake Michigan Views",
            "Penthouse Level",
            "Private Elevator",
            "Wrap-around Terrace",
            "Concierge Service",
            "Fitness Center",
            "Indoor Pool",
            "Parking Included",
        ],
        images: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
        ],
    },
];

export const neighborhoods: Neighborhood[] = [
    {
        name: "Napa Valley",
        state: "California",
        description: "World-renowned wine country with rolling vineyards and elegant estates",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
        properties: "48 properties",
    },
    {
        name: "Aspen",
        state: "Colorado",
        description: "Prestigious mountain resort town featuring luxury ski-in/ski-out properties",
        image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1200",
        properties: "32 properties",
    },
    {
        name: "Malibu",
        state: "California",
        description: "Exclusive beachfront community with stunning Pacific Ocean views",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
        properties: "56 properties",
    },
    {
        name: "Miami Beach",
        state: "Florida",
        description: "Vibrant coastal paradise with modern luxury high-rises and waterfront living",
        image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=1200",
        properties: "64 properties",
    },
    {
        name: "San Francisco",
        state: "California",
        description: "Iconic city living with Victorian architecture and bay views",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200",
        properties: "72 properties",
    },
    {
        name: "Scottsdale",
        state: "Arizona",
        description: "Desert luxury with championship golf courses and resort-style living",
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1200",
        properties: "41 properties",
    },
];

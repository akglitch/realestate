import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Maximize2, Calendar, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would normally come from a database or API
const property = {
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
}

export default function PropertyDetailPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Back Button */}
            <div className="pt-32 pb-8 bg-[#FBFBF9]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <Link
                        href="/properties"
                        className="inline-flex items-center gap-2 font-display text-xs tracking-[0.15em] text-black/60 hover:text-black transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        BACK TO PROPERTIES
                    </Link>
                </div>
            </div>

            {/* Property Images */}
            <section className="bg-[#FBFBF9]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src={property.images[0]}
                                alt={property.address}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {property.images.slice(1).map((image, i) => (
                                <div key={i} className="relative aspect-[4/3]">
                                    <Image src={image} alt={`View ${i + 2}`} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Property Details */}
            <section className="py-16 bg-[#FBFBF9]">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h1 className="font-display font-semibold text-4xl tracking-wide text-black/90 mb-2">
                                    {property.address}
                                </h1>
                                <div className="flex items-center gap-2 text-black/60 mb-6">
                                    <MapPin className="w-5 h-5" />
                                    <span className="font-sans font-light">{property.location}</span>
                                </div>
                                <p className="font-display font-light text-4xl text-black/90">
                                    {property.price}
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-black/10">
                                <div>
                                    <Bed className="w-6 h-6 text-black/60 mb-2" />
                                    <p className="font-display font-semibold text-2xl text-black/90">{property.beds}</p>
                                    <p className="font-sans font-light text-sm text-black/60">Bedrooms</p>
                                </div>
                                <div>
                                    <Bath className="w-6 h-6 text-black/60 mb-2" />
                                    <p className="font-display font-semibold text-2xl text-black/90">{property.baths}</p>
                                    <p className="font-sans font-light text-sm text-black/60">Bathrooms</p>
                                </div>
                                <div>
                                    <Maximize2 className="w-6 h-6 text-black/60 mb-2" />
                                    <p className="font-display font-semibold text-2xl text-black/90">{property.sqft}</p>
                                    <p className="font-sans font-light text-sm text-black/60">Square Feet</p>
                                </div>
                                <div>
                                    <Calendar className="w-6 h-6 text-black/60 mb-2" />
                                    <p className="font-display font-semibold text-2xl text-black/90">{property.yearBuilt}</p>
                                    <p className="font-sans font-light text-sm text-black/60">Year Built</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="font-display font-semibold text-2xl tracking-wide text-black/90 mb-4">
                                    About This Property
                                </h2>
                                <p className="font-sans font-light text-black/70 leading-relaxed">
                                    {property.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div>
                                <h2 className="font-display font-semibold text-2xl tracking-wide text-black/90 mb-4">
                                    Key Features
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {property.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-black/60 rounded-full" />
                                            <span className="font-sans font-light text-black/70">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <div className="bg-[#F1F0EB] p-8 sticky top-24">
                                <h3 className="font-display font-semibold text-lg tracking-wide text-black/90 mb-6">
                                    Schedule a Viewing
                                </h3>
                                <div className="space-y-4">
                                    <Button className="w-full h-12 bg-black text-white hover:bg-black/80 font-display font-medium tracking-[0.15em] text-xs rounded-none">
                                        CONTACT AGENT
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full h-12 border-2 border-black text-black hover:bg-black hover:text-white font-display font-medium tracking-[0.15em] text-xs rounded-none"
                                    >
                                        SAVE PROPERTY
                                    </Button>
                                </div>

                                <div className="mt-8 pt-8 border-t border-black/10">
                                    <p className="font-display text-xs tracking-[0.15em] uppercase text-black/60 mb-2">
                                        Listing Agent
                                    </p>
                                    <p className="font-display font-semibold text-lg text-black/90">Sarah Johnson</p>
                                    <p className="font-sans font-light text-sm text-black/60 mt-1">(555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

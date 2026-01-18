import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { properties } from "@/lib/data"

export default function PropertiesPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-[#F1F0EB]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                    <h1 className="font-display font-light text-5xl md:text-7xl tracking-[0.08em] text-black/90 mb-6">
                        FEATURED <span className="font-bold">PROPERTIES</span>
                    </h1>
                    <p className="font-sans font-light text-black/60 text-lg max-w-2xl mx-auto">
                        Discover our curated collection of exceptional homes in the world's most desirable locations
                    </p>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="py-16 bg-[#FBFBF9]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {properties.map((property) => (
                            <Link
                                key={property.id}
                                href={`/property/${property.id}`}
                                className="group block"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                                    <Image
                                        src={property.images[0]}
                                        alt={property.address}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Details */}
                                <div className="space-y-2">
                                    <h3 className="font-display font-semibold text-xl tracking-wide text-black/90 group-hover:text-black transition-colors">
                                        {property.address}
                                    </h3>
                                    <div className="flex items-center gap-2 text-black/50">
                                        <MapPin className="w-4 h-4" />
                                        <span className="font-sans font-light text-sm">{property.location}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-black/60 font-sans font-light">
                                        <span>{property.beds} beds</span>
                                        <span>•</span>
                                        <span>{property.baths} baths</span>
                                        <span>•</span>
                                        <span>{property.sqft} sq ft</span>
                                    </div>
                                    <p className="font-display font-light text-2xl tracking-wide text-black/80 pt-2">
                                        {property.price}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

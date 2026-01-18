"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { properties } from "@/lib/data"

export function FeaturedListings() {
    return (
        <section className="py-24 bg-[#FBFBF9]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-display font-light text-4xl md:text-6xl tracking-[0.08em] text-black/90">
                        FEATURED <span className="font-bold">PROPERTIES</span>
                    </h2>
                    <p className="font-sans font-light text-black/60 text-lg max-w-2xl mx-auto">
                        Explore our handpicked collection of extraordinary homes
                    </p>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {properties.slice(0, 4).map((property, i) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                        >
                            <Link href={`/property/${property.id}`} className="group block">
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
                                    <p className="font-display font-light text-2xl tracking-wide text-black/80">
                                        {property.price}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-16">
                    <Link
                        href="/properties"
                        className="inline-block font-display font-medium text-xs tracking-[0.2em] text-black/80 hover:text-black border-b border-black/20 hover:border-black pb-1 transition-all"
                    >
                        VIEW ALL PROPERTIES
                    </Link>
                </div>
            </div>
        </section>
    )
}

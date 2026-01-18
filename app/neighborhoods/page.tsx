import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

import { neighborhoods } from "@/lib/data"

export default function NeighborhoodsPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-[#F1F0EB]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                    <h1 className="font-display font-light text-5xl md:text-7xl tracking-[0.08em] text-black/90 mb-6">
                        EXPLORE <span className="font-bold">NEIGHBORHOODS</span>
                    </h1>
                    <p className="font-sans font-light text-black/60 text-lg max-w-2xl mx-auto">
                        Discover the distinctive character and lifestyle of each community we serve
                    </p>
                </div>
            </section>

            {/* Neighborhoods Grid */}
            <section className="py-16 bg-[#FBFBF9]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {neighborhoods.map((neighborhood) => (
                            <div key={neighborhood.name} className="group">
                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                                    <Image
                                        src={neighborhood.image}
                                        alt={neighborhood.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                    {/* Overlay Text */}
                                    <div className="absolute bottom-8 left-8 right-8 text-white">
                                        <p className="font-sans font-light text-sm mb-2">{neighborhood.properties}</p>
                                        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-wide mb-2">
                                            {neighborhood.name}
                                        </h2>
                                        <p className="font-sans font-light text-sm text-white/80">
                                            {neighborhood.state}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="font-sans font-light text-black/60 leading-relaxed">
                                    {neighborhood.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

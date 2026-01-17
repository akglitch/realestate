"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F1F0EB]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/wine_country_estate.png"
                    alt="Wine Country Estate"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <h1 className="font-display font-light text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] leading-tight">
                        DISCOVER YOUR
                        <br />
                        <span className="font-bold">DREAM HOME</span>
                    </h1>

                    <p className="font-sans font-light text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Sophisticated living spaces in the world's most desirable locations
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button
                            size="lg"
                            className="h-14 px-10 bg-white text-black hover:bg-white/90 font-display font-medium tracking-[0.15em] text-xs rounded-none group"
                        >
                            EXPLORE PROPERTIES
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-10 border-2 border-white text-white hover:bg-white hover:text-black font-display font-medium tracking-[0.15em] text-xs rounded-none"
                        >
                            CONTACT US
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-white/60 text-xs font-display tracking-[0.2em] flex flex-col items-center gap-2"
                >
                    <span>SCROLL</span>
                    <div className="w-px h-12 bg-white/40" />
                </motion.div>
            </div>
        </div>
    )
}

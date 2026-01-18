"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <div ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#F1F0EB] py-32">
            {/* Parallax Background */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/wine_country_estate.png"
                        alt="Wine Country Estate"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-10 sm:mt-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="space-y-8 md:space-y-10"
                >
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="font-display font-light text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] leading-[1.1]"
                        >
                            DISCOVER YOUR
                            <br />
                            <span className="font-bold relative inline-block">
                                DREAM HOME
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
                                    className="absolute bottom-2 left-0 right-0 h-[2px] bg-white origin-left"
                                />
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="font-sans font-light text-white/90 text-base md:text-xl max-w-2xl mx-auto leading-relaxed tracking-wide px-4"
                    >
                        Sophisticated living spaces in the world's most desirable locations
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8"
                    >
                        <Button
                            size="lg"
                            className="h-12 sm:h-14 px-8 sm:px-12 bg-white text-black hover:bg-white/90 font-display font-medium tracking-[0.2em] text-[10px] sm:text-xs rounded-none group transition-all duration-300"
                        >
                            EXPLORE
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 sm:h-14 px-8 sm:px-12 border border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-black font-display font-medium tracking-[0.2em] text-[10px] sm:text-xs rounded-none transition-all duration-300"
                        >
                            CONTACT US
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{
                        opacity: { delay: 1.5, duration: 1 },
                        y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                    }}
                    className="text-white/60 text-[10px] font-display tracking-[0.3em] flex flex-col items-center gap-4"
                >
                    <span>SCROLL</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
                </motion.div>
            </div>
        </div>
    )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useUIStore } from "@/lib/store"
import Link from "next/link"
import { X, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Neighborhoods", href: "/neighborhoods" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export function SideNav() {
    const { isMenuOpen, closeMenu } = useUIStore()

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMenu}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-[#F1F0EB] z-50 shadow-2xl flex flex-col h-full"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-8 border-b border-black/5">
                            <span className="font-display font-bold text-lg tracking-[0.15em] text-black">
                                MENU
                            </span>
                            <button
                                onClick={closeMenu}
                                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-black" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto py-12 px-8 flex flex-col justify-between">
                            {/* Links */}
                            <nav className="space-y-6">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="block font-display font-light text-4xl text-black hover:text-black/60 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Footer Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-8 mt-12"
                            >
                                <div className="space-y-4 font-sans font-light text-black/60">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4" />
                                        <span>(555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4" />
                                        <span>hello@estatepro.com</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-4 h-4" />
                                        <span>123 Main St, San Francisco, CA</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                        <Link
                                            key={i}
                                            href="#"
                                            className="w-10 h-10 border border-black/20 hover:border-black hover:bg-black hover:text-white flex items-center justify-center text-black/60 transition-all rounded-full"
                                        >
                                            <Icon className="w-4 h-4" />
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

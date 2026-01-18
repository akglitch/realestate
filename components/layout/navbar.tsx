"use client"

import * as React from "react"
import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUIStore } from "@/lib/store"
import { SideNav } from "@/components/layout/side-nav"

const navItems = [
    { name: "PROPERTIES", href: "/properties" },
    { name: "NEIGHBORHOODS", href: "/neighborhoods" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
]

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false)
    const { toggleMenu } = useUIStore()

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <SideNav />
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
                    scrolled
                        ? "bg-[#F1F0EB] shadow-sm"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        {/* Mobile Menu Trigger */}
                        <div className="lg:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleMenu}
                                className={cn(
                                    "rounded-none transition-colors",
                                    scrolled ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"
                                )}
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </div>

                        {/* Logo */}
                        <Link href="/" className="font-display font-bold text-lg tracking-[0.15em] absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
                            <span className={cn(scrolled ? "text-black" : "text-white")}>
                                ESTATEPRO
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-[11px] font-display font-medium tracking-[0.2em] transition-colors",
                                        scrolled
                                            ? "text-black hover:text-black/70"
                                            : "text-white/80 hover:text-white"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Search & Desktop Menu Trigger */}
                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn(
                                    "rounded-none transition-colors hidden lg:flex",
                                    scrolled ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"
                                )}
                            >
                                <Search className="w-5 h-5" />
                            </Button>

                            {/* Optional: Add a Menu button for desktop too if we want the side nav accessible there */}
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleMenu}
                                className={cn(
                                    "rounded-none transition-colors hidden lg:flex",
                                    scrolled ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"
                                )}
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

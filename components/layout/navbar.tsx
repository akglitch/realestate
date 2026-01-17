"use client"

import * as React from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "PROPERTIES", href: "/properties" },
    { name: "NEIGHBORHOODS", href: "/neighborhoods" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
]

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-[#F1F0EB] shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="font-display font-bold text-lg tracking-[0.15em]">
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
                                        ? "text-black/70 hover:text-black"
                                        : "text-white/80 hover:text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Search */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                            "rounded-none transition-colors",
                            scrolled ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"
                        )}
                    >
                        <Search className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}

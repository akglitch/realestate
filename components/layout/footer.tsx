import Link from "next/link"
import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react"

const footerLinks = [
    {
        title: "PROPERTIES",
        links: [
            { name: "For Sale", href: "/for-sale" },
            { name: "For Rent", href: "/for-rent" },
            { name: "Luxury Homes", href: "/luxury" },
            { name: "New Listings", href: "/new" },
        ],
    },
    {
        title: "RESOURCES",
        links: [
            { name: "Buying Guide", href: "/buying" },
            { name: "Selling Guide", href: "/selling" },
            { name: "Neighborhoods", href: "/neighborhoods" },
            { name: "Market Reports", href: "/reports" },
        ],
    },
    {
        title: "COMPANY",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Our Team", href: "/team" },
            { name: "Contact", href: "/contact" },
            { name: "Careers", href: "/careers" },
        ],
    },
]

export function Footer() {
    return (
        <footer className="bg-[#F1F0EB] py-16">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="inline-block font-display font-bold text-lg tracking-[0.15em] text-black/90">
                            ESTATEPRO
                        </Link>
                        <p className="font-sans font-light text-black/60 max-w-sm leading-relaxed">
                            Sophisticated real estate services for discerning clients seeking exceptional properties.
                        </p>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-black/60">
                                <Phone className="w-4 h-4" />
                                <span className="font-sans font-light">(555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-black/60">
                                <Mail className="w-4 h-4" />
                                <span className="font-sans font-light">hello@estatepro.com</span>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 border border-black/20 hover:border-black hover:bg-black hover:text-white flex items-center justify-center text-black/60 transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-display font-semibold text-[10px] tracking-[0.25em] mb-6 text-black/80">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="font-sans font-light text-sm text-black/60 hover:text-black transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="font-sans font-light text-black/50">
                        © {new Date().getFullYear()} EstatePro. All rights reserved.
                    </p>
                    <div className="flex gap-6 font-sans font-light text-black/50">
                        <Link href="/privacy" className="hover:text-black transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-black transition-colors">
                            Terms of Use
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

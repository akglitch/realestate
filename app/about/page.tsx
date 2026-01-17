import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Award, Users, TrendingUp, MapPin } from "lucide-react"
import Image from "next/image"

const team = [
    {
        name: "Sarah Johnson",
        title: "Founder & Principal Broker",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
    },
    {
        name: "Michael Chen",
        title: "Luxury Property Specialist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
    },
    {
        name: "Emily Rodriguez",
        title: "Senior Real Estate Advisor",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600",
    },
    {
        name: "David Thompson",
        title: "Investment Properties Director",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
    },
]

const stats = [
    { icon: Award, value: "$2.5B+", label: "Total Sales Volume" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
    { icon: MapPin, value: "12", label: "Luxury Markets" },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-[#F1F0EB]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                    <h1 className="font-display font-light text-5xl md:text-7xl tracking-[0.08em] text-black/90 mb-6">
                        ABOUT <span className="font-bold">ESTATEPRO</span>
                    </h1>
                    <p className="font-sans font-light text-black/60 text-lg max-w-2xl mx-auto">
                        Defining excellence in luxury real estate for over 20 years
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-[#FBFBF9]">
                <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
                    <div className="space-y-8 text-center">
                        <h2 className="font-display font-light text-3xl md:text-4xl tracking-[0.08em] text-black/90">
                            OUR <span className="font-bold">STORY</span>
                        </h2>
                        <div className="space-y-6 font-sans font-light text-black/70 text-lg leading-relaxed">
                            <p>
                                Founded in 2004, EstatePro has grown from a boutique brokerage to one of the nation's most respected luxury real estate firms. Our commitment to excellence, discretion, and personalized service has earned us the trust of discerning clients worldwide.
                            </p>
                            <p>
                                We specialize in the finest properties across the most prestigious markets in the United States. From wine country estates to oceanfront villas, mountain retreats to urban penthouses, we offer unparalleled access to extraordinary homes.
                            </p>
                            <p>
                                Our team of seasoned professionals brings decades of combined experience, intimate market knowledge, and a passion for matching exceptional properties with exceptional people.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-[#F1F0EB]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center space-y-4">
                                <stat.icon className="w-8 h-8 mx-auto text-black/60" />
                                <p className="font-display font-bold text-4xl text-black/90">{stat.value}</p>
                                <p className="font-display font-light text-xs tracking-[0.2em] uppercase text-black/60">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-[#FBFBF9]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-light text-3xl md:text-4xl tracking-[0.08em] text-black/90">
                            OUR <span className="font-bold">TEAM</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {team.map((member) => (
                            <div key={member.name} className="text-center group">
                                <div className="relative aspect-square mb-6 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <h3 className="font-display font-semibold text-lg tracking-wide text-black/90 mb-1">
                                    {member.name}
                                </h3>
                                <p className="font-sans font-light text-sm text-black/60">
                                    {member.title}
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

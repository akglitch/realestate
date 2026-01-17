"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
    }

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-[#F1F0EB]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                    <h1 className="font-display font-light text-5xl md:text-7xl tracking-[0.08em] text-black/90 mb-6">
                        GET IN <span className="font-bold">TOUCH</span>
                    </h1>
                    <p className="font-sans font-light text-black/60 text-lg max-w-2xl mx-auto">
                        We're here to help you find your dream home or answer any questions you may have
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-[#FBFBF9]">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="font-display font-light text-2xl tracking-[0.08em] text-black/90 mb-8">
                                SEND US A <span className="font-bold">MESSAGE</span>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="font-display text-xs tracking-[0.15em] uppercase text-black/60 mb-2 block">
                                        Your Name
                                    </label>
                                    <Input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="h-12 rounded-none border-black/20 focus:border-black bg-white font-sans"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="font-display text-xs tracking-[0.15em] uppercase text-black/60 mb-2 block">
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="h-12 rounded-none border-black/20 focus:border-black bg-white font-sans"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="font-display text-xs tracking-[0.15em] uppercase text-black/60 mb-2 block">
                                        Phone Number
                                    </label>
                                    <Input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="h-12 rounded-none border-black/20 focus:border-black bg-white font-sans"
                                    />
                                </div>

                                <div>
                                    <label className="font-display text-xs tracking-[0.15em] uppercase text-black/60 mb-2 block">
                                        Message
                                    </label>
                                    <Textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="min-h-[160px] rounded-none border-black/20 focus:border-black bg-white font-sans"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="h-14 px-12 bg-black text-white hover:bg-black/80 font-display font-medium tracking-[0.15em] text-xs rounded-none w-full sm:w-auto"
                                >
                                    SEND MESSAGE
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="font-display font-light text-2xl tracking-[0.08em] text-black/90 mb-8">
                                    CONTACT <span className="font-bold">INFORMATION</span>
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-5 h-5 text-black/60 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-display text-xs tracking-[0.15em] uppercase text-black/60 mb-1">
                                                Office Location
                                            </p>
                                            <p className="font-sans font-light text-black/80">
                                                123 Main Street<br />
                                                Suite 200<br />
                                                San Francisco, CA 94102
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Phone className="w-5 h-5 text-black/60 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-display text-xs tracking-[0.15em] uppercase text-black/60 mb-1">
                                                Phone
                                            </p>
                                            <p className="font-sans font-light text-black/80">
                                                (555) 123-4567
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="w-5 h-5 text-black/60 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-display text-xs tracking-[0.15em] uppercase text-black/60 mb-1">
                                                Email
                                            </p>
                                            <p className="font-sans font-light text-black/80">
                                                hello@estatepro.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#F1F0EB] p-8">
                                <h3 className="font-display font-semibold text-lg tracking-wide text-black/90 mb-4">
                                    Office Hours
                                </h3>
                                <div className="space-y-2 font-sans font-light text-black/70">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: By Appointment Only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

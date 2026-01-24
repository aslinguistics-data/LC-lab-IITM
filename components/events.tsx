"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { eventsData } from "@/lib/eventData"

const EventImageSlideshow = ({ images, title }: { images: string[], title: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }, [images.length])

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        resetTimer()
    }

    const manualNext = () => {
        nextImage()
        resetTimer()
    }

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current)
        if (!isHovered) {
            timerRef.current = setInterval(nextImage, 5000)
        }
    }

    useEffect(() => {
        if (!isHovered) {
            timerRef.current = setInterval(nextImage, 5000)
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [isHovered, nextImage])

    return (
        <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <img
                        src={src}
                        alt={`${title} - image ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
            ))}

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all border border-slate-200"
                    >
                        <ChevronLeft size={16} className="text-slate-700" />
                    </button>
                    <button
                        onClick={manualNext}
                        className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all border border-slate-200"
                    >
                        <ChevronRight size={16} className="text-slate-700" />
                    </button>
                </>
            )}
        </div>
    )
}

export function EventsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id="events" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6 mt-8">
                            Events
                        </h2>
                        <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                            We have been hosting exciting events that advanced the study of language and cognition through collaboration and innovation.
                        </p>
                    </div>

                    {/* Events List */}
                    <div className="space-y-16">
                        {eventsData.map((event, index) => (
                            <div
                                key={event.id}
                                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                            >
                                {/* Text Content */}
                                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <div className="space-y-4">
                                        <Badge variant="outline" className="border-[#000080] text-[#000080] bg-blue-50/50 rounded-full px-4 py-1.5 text-sm font-medium">
                                            {event.tag}
                                        </Badge>
                                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                            {event.heading}
                                        </h3>
                                    </div>

                                    <div className="bg-slate-50 border-l-4 border-[#000080] p-6 rounded-r-lg space-y-3">
                                        <div className="flex items-start gap-4">
                                            <Calendar className="text-[#000080] mt-1 shrink-0" size={20} />
                                            <div>
                                                <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wide">Date</span>
                                                <span className="text-lg text-slate-900 font-medium">{event.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <MapPin className="text-[#000080] mt-1 shrink-0" size={20} />
                                            <div>
                                                <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wide">Venue</span>
                                                <span className="text-lg text-slate-900 font-medium">{event.venue}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {event.description.map((desc, idx) => (
                                            <p key={idx} className="text-lg text-slate-700 leading-relaxed font-light">
                                                {desc}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Image Slideshow */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                    <EventImageSlideshow
                                        images={event.images}
                                        title={event.heading}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Brain, ChevronLeft, ChevronRight, Eye, Globe, Microscope, LucideIcon } from "lucide-react"
import { facilityImages } from "@/lib/imagesData"

// Feature data structure
interface Feature {
    icon: LucideIcon
    title: string
    description: string
}

const features: Feature[] = [
    {
        icon: Brain,
        title: "Language & Cognition",
        description: "Investigating the neural and psychological mechanisms underlying human language processing and comprehension.",
    },
    {
        icon: Eye,
        title: "Eye Tracking Analysis",
        description: "Utilizing advanced pupillometry and gaze-tracking technology to capture real-time linguistic processing data.",
    },
    {
        icon: Globe,
        title: "Cross-linguistic Studies",
        description: "Conducting comparative research across diverse language families to uncover universal linguistic patterns.",
    },
    {
        icon: Microscope,
        title: "Experimental Methods",
        description: "Employing rigorous experimental designs and computational modeling to analyze complex linguistic datasets.",
    },
]

const FacilitySlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % facilityImages.length)
    }, [])

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)
        resetTimer()
    }

    const manualNext = () => {
        nextImage()
        resetTimer()
    }

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current)
        if (!isPaused) {
            timerRef.current = setInterval(nextImage, 5000)
        }
    }

    useEffect(() => {
        if (!isPaused) {
            timerRef.current = setInterval(nextImage, 5000)
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [isPaused, nextImage])

    return (
        <figure
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group isolate bg-slate-200"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Laboratory Facilities Gallery"
        >
            {/* STACKING LOGIC: Render ALL images, toggle opacity */}
            {facilityImages.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <img
                        src={src}
                        alt={`Research facility view ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                    {/* subtle gradient for text contrast if needed, or just depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
            ))}

            {/* Navigation Buttons (Visible on Hover) */}
            <div className="absolute inset-0 z-20 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 backdrop-blur-sm"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); manualNext(); }}
                    className="bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 backdrop-blur-sm"
                    aria-label="Next image"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                {facilityImages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => { setCurrentIndex(idx); resetTimer(); }}
                        className={`h-1.5 rounded-full transition-all duration-300 shadow-sm backdrop-blur-sm ${idx === currentIndex
                                ? "w-6 bg-white"
                                : "w-1.5 bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </figure>
    )
}

export function AboutSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-24 bg-slate-50/50" // Slightly lighter background
            aria-label="About our linguistics research lab"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <header className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Exploring Linguistics
                    </h1>
                    <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6" />
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Our lab investigates a wide range of linguistic phenomena through theoretical, typological, and experimental approaches.
                    </p>
                </header>

                <div className={`transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

                    {/* Top Grid: Content + Slideshow */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                        {/* Text content */}
                        <article className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Research Philosophy</h2>
                                <p className="text-lg text-slate-700 leading-relaxed text-justify">
                                    We believe that understanding language requires a multidisciplinary approach.
                                    Through state-of-the-art experimental facilities and partnerships with leading national and international institutions,
                                    we investigate how linguistic structures interact with cognitive processes.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
                                <p className="text-slate-700 italic">
                                    "Focusing especially on Indian languages, we bridge the gap between theoretical linguistics and practical cognitive applications."
                                </p>
                            </div>
                        </article>

                        {/* Image slideshow component */}
                        <div className="relative">
                            {/* Decorative background blob */}
                            <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl -z-10 blur-xl opacity-70"></div>
                            <FacilitySlideshow />
                        </div>
                    </div>

                    {/* IMPROVISED Features Grid */}
                    <section aria-label="Lab features and research areas">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <article
                                    key={index}
                                    className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Hover Gradient Line */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                    {/* Icon Container */}
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center mb-5 transition-colors duration-300">
                                        <feature.icon
                                            className="text-slate-600 group-hover:text-blue-600 transition-colors duration-300"
                                            size={28}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </section>
    )
}
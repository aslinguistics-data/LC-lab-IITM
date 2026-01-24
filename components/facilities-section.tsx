"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Eye, Monitor } from "lucide-react"
import { eyeLinkPortableDuoImage } from "@/lib/imagesData";

const equipment = [
    {
        icon: Eye,
        name: "EyeLink Portable Duo",
        description: "High-precision eye-tracking system for real-time gaze analysis",
        specs: "1000Hz sampling rate, 0.25° accuracy",
    },
    {
        icon: Monitor,
        name: "Experimental Stations",
        description: "Dedicated workstations for psycholinguistic experiments",
        specs: "High-resolution displays, audio recording",
    },
]

export function FacilitiesSection() {
    return (
        <section id="facilities" className="pt-24 pb-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6 mt-8">Research Facilities</h2>
                    <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                        State-of-the-art equipment and infrastructure supporting cutting-edge language and cognition
                        research.
                    </p>
                </div>

                {/* Featured Equipment: EyeLink */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-16">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative h-[400px] lg:h-auto bg-slate-100 flex items-center justify-center p-8">
                            {/* Ideally use Next.js Image here, but sticking to img tag as per original code structure flexibility */}
                            <img
                                src={eyeLinkPortableDuoImage}
                                alt="EyeLink Portable Duo System"
                                className="max-w-full max-h-full object-contain drop-shadow-xl"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">EyeLink Portable Duo System</h3>
                            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                                <p>
                                    Our lab is equipped with the industry-leading EyeLink Portable Duo eye-tracking system
                                    from SR Research.
                                    This high-precision device captures eye movement data with millisecond accuracy,
                                    enabling us to study
                                    real-time language processing, reading comprehension, and visual attention patterns.
                                </p>
                                <p>
                                    The system's portability and flexibility allow us to conduct experiments across diverse
                                    participant
                                    populations and experimental paradigms, supporting our research in cognitive
                                    linguistics,
                                    psycholinguistics, and cross-cultural language studies.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-8 mt-4 border-t border-slate-100">
                                <div>
                                    <div className="text-3xl font-bold text-[#000080] mb-1">1000Hz</div>
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Sampling Rate</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#000080] mb-1">0.25°</div>
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Accuracy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Equipment Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {equipment.map((item, index) => (
                        <Card key={index} className="bg-white hover:shadow-md transition-all rounded-xl duration-300 border border-slate-200">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="bg-blue-50/50 rounded-xl flex items-center justify-center w-16 h-16 text-[#000080]">
                                            <item.icon size={32} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">{item.name}</h4>
                                        <p className="text-slate-600 text-base mb-4 leading-relaxed font-light">{item.description}</p>
                                        <div className="inline-block bg-slate-100 px-3 py-1 rounded text-xs font-semibold text-slate-600 uppercase tracking-wide">
                                            {item.specs}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
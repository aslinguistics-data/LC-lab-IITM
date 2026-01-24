"use client"

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin } from "lucide-react"
import { internationalCollaborators, IndianCollaborators } from "@/lib/teamData"
import Image from "next/image"
import { PartnerData, partnersData } from "@/lib/cerai";

export function CollaborationsSection() {
    const router = useRouter()

    return (
        <section
            id="collaborations"
            className="pt-24 pb-16 bg-slate-50"
            aria-label="Research Collaborations"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6 mt-8">
                        Research Collaborators
                    </h1>
                    <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                        Building bridges across institutions to advance language and cognition research through diverse
                        partnerships.
                    </p>
                </header>

                {/* Partners */}
                <section className="mb-16" aria-labelledby="partners-heading">
                    <h2 id="partners-heading" className="text-3xl font-bold text-slate-900 mb-8 text-center">
                        Partners
                        <div className="w-16 h-1 bg-[#000080] mx-auto rounded-full mt-3"></div>
                    </h2>

                    <div className="max-w-6xl mx-auto flex flex-col gap-8">
                        {partnersData.map((partner, index) => (
                            <Card
                                key={index}
                                className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden"
                            >
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row items-center md:items-stretch">
                                        <div
                                            className="md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-slate-100 flex items-center justify-center bg-slate-50/50">
                                            <div className="w-full max-w-[200px]">
                                                {partner.logo ? (
                                                    <a href={partner.link} target="_blank"
                                                        rel="noopener noreferrer" className="block relative group">
                                                        <Image
                                                            src={partner.logo}
                                                            alt={`${partner.name} logo`}
                                                            width={320}
                                                            height={320}
                                                            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 opacity-80 hover:opacity-100"
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                ) : (
                                                    <div
                                                        className="w-full aspect-square bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                                                        <span className="text-sm font-medium">No Logo</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#000080] transition-colors">
                                                {partner.name}
                                            </h3>
                                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                                {partner.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* International Collaborators */}
                <section className="py-12" aria-labelledby="international-collaborators-heading">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2
                            id="international-collaborators-heading"
                            className="text-3xl font-bold text-slate-900 mb-4"
                        >
                            International Collaborators
                        </h2>
                        <div className="w-16 h-1 bg-[#000080] mx-auto rounded-full"></div>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                        role="list"
                        aria-label="International research collaborators"
                    >
                        {internationalCollaborators.map((collaborator, index) => (
                            <Card
                                key={`intl-${index}`}
                                className="group relative overflow-hidden border border-slate-200 bg-white hover:border-blue-200 transition-all duration-300 hover:shadow-md rounded-xl"
                                role="listitem"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-6">
                                        {/* Image Container */}
                                        <div className="relative flex-shrink-0">
                                            <div
                                                className="relative h-20 w-20 rounded-full overflow-hidden shadow-sm border border-slate-100">
                                                <Image
                                                    src={collaborator.image || "/placeholder.svg"}
                                                    alt={`Portrait of ${collaborator.name}`}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="80px"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#000080] transition-colors truncate">
                                                {collaborator.name}
                                            </h3>
                                            <p className="text-sm text-slate-500 font-medium mb-3 line-clamp-2">
                                                {collaborator.institution}
                                            </p>

                                            {/* Location Badge */}
                                            {collaborator.country && (
                                                <div
                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-100 text-xs font-semibold uppercase tracking-wider">
                                                    <MapPin
                                                        size={10}
                                                        className="text-[#000080]"
                                                        aria-hidden="true"
                                                    />
                                                    {collaborator.country}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="mt-20 text-center" aria-labelledby="cta-heading">
                    <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
                        <Globe
                            className="w-12 h-12 text-[#000080] mx-auto mb-6"
                            strokeWidth={1.5}
                            aria-hidden="true"
                        />
                        <h2
                            id="cta-heading"
                            className="text-2xl font-bold text-slate-900 mb-4"
                        >
                            Interested in Collaboration?
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                            We welcome partnerships with researchers and institutions worldwide. Let's explore how
                            we can work
                            together to advance language and cognition research.
                        </p>
                        <button
                            onClick={() => router.push("/lclab/contact")}
                            className="bg-[#000080] hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:-translate-y-0.5"
                            aria-label="Navigate to contact page to start collaboration"
                        >
                            Contact Us
                        </button>
                    </div>
                </section>
            </div>
        </section>
    )
}

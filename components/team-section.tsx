"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { principalInvestigator, teamMembers, othersMembers, researchStaff, friends, type TeamMember } from "@/lib/teamData"
import { Badge } from "@/components/ui/badge";

export function TeamSection() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
    const router = useRouter()

    return (
        <section id="team" className="pt-24 pb-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 mt-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6">
                        Our Team
                    </h2>
                    <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Meet the dedicated researchers advancing our understanding of language and cognition.
                    </p>
                </div>


                {/* Principal Investigator */}
                <div className="mb-24">
                    <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Principal Investigator</h3>
                    <Card className="max-w-5xl mx-auto shadow-sm border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-8 md:p-10">
                            <div className="flex flex-col md:flex-row gap-10 items-start">
                                <div className="relative flex-shrink-0 w-full md:w-auto flex justify-center md:block">
                                    <img
                                        src={principalInvestigator.image || "/placeholder.svg"}
                                        alt={principalInvestigator.name}
                                        className="w-56 h-64 object-cover rounded-xl shadow-sm filter grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="flex-1 text-center md:text-left space-y-6">
                                    <div>
                                        <h4 className="text-3xl font-bold text-slate-900 mb-2">{principalInvestigator.name}</h4>
                                        <p className="text-lg text-[#000080] font-medium mb-4">{principalInvestigator.title}</p>
                                        <p className="text-slate-700 leading-relaxed text-lg">
                                            <span className="font-semibold text-slate-900">Research Interests:</span> {principalInvestigator.interests}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                                        <a
                                            href={principalInvestigator.linkedInLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-sm font-medium"
                                        >
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                                alt="LinkedIn"
                                                className="w-4 h-4"
                                            />
                                            LinkedIn
                                        </a>
                                        <a
                                            href={principalInvestigator.iitmprofile}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-sm font-medium"
                                        >
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
                                                alt="IITM"
                                                className="w-4 h-4 object-contain"
                                            />
                                            IIT Madras
                                        </a>
                                        <a
                                            href={principalInvestigator.cerai}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-sm font-medium"
                                        >
                                            <img
                                                src="https://res.cloudinary.com/dgzbrujvx/image/upload/e_background_removal/f_png/v1752322335/0a251fb5-6fba-4a47-90f7-e88790143a00.png"
                                                alt="CeRAI"
                                                className="w-4 h-4 object-contain"
                                            />
                                            CeRAI
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* PhD Scholars */}
                <div className="flex flex-col gap-8">
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                            PhD Scholars
                        </h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {teamMembers.map((member, index) => (
                                <Card
                                    key={index}
                                    className="group hover:shadow-md border border-slate-200 rounded-xl transition-all duration-300 bg-white cursor-pointer w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm"
                                    onClick={() => setSelectedMember(member)}
                                >
                                    <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                        <div className="mb-6 relative">
                                            <img
                                                src={member.image || "/anindita/placeholder.svg"}
                                                alt={member.name}
                                                className="w-32 h-32 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#000080] transition-colors">
                                            {member.name}
                                        </h4>
                                        {member.role && (
                                            <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">
                                                {member.role}
                                            </p>
                                        )}
                                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                                            {member.research}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Other Members */}
                    <div>
                        <div className="flex flex-wrap justify-center gap-8">
                            {othersMembers.map((member, index) => (
                                <Card
                                    key={index}
                                    className="group hover:shadow-md border border-slate-200 rounded-xl transition-all duration-300 bg-white cursor-pointer w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm"
                                    onClick={() => setSelectedMember(member)}
                                >
                                    <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                        <div className="mb-6 relative">
                                            <img
                                                src={member.image || "/anindita/placeholder.svg"}
                                                alt={member.name}
                                                className="w-32 h-32 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#000080] transition-colors">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">
                                            ({member.role})
                                        </p>
                                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                                            {member.research}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Research Staff */}
                <div className="mb-24 mt-24">
                    <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Research Project Staff</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {researchStaff.map((member, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-md border border-slate-200 rounded-xl transition-all duration-300 bg-white cursor-pointer w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm"
                                onClick={() => setSelectedMember(member)}
                            >
                                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                    <div className="mb-6 relative">
                                        <img
                                            src={member.image || "/anindita/placeholder.svg"}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#000080] transition-colors">{member.name}</h4>
                                    <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">{member.role}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">{member.research}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Friends */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Friends of LC Lab</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {friends.map((member, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-md border border-slate-200 rounded-xl transition-all duration-300 bg-white cursor-pointer w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm"
                            >
                                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                    <div className="mb-6 relative">
                                        <img
                                            src={member.image || "/anindita/placeholder.svg"}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#000080] transition-colors">{member.name}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{member.contribution}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Open Position */}
                <div className="mt-16 text-center">
                    <div className="inline-block p-8 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-white hover:border-[#000080] transition-all duration-300 group max-w-lg w-full">
                        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#000080]">Join Our Team</h4>
                        <p className="text-slate-600 mb-4">
                            We're always looking for passionate researchers to join our lab.
                        </p>
                        <button
                            onClick={() => router.push("/lclab/contact")}
                            className="text-[#000080] font-semibold hover:text-blue-800 hover:underline decoration-2 underline-offset-4"
                        >
                            Get in touch →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
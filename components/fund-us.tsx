"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, TrendingUp, Users, Globe, Award, Brain, Microscope, GraduationCap, MapPin, Calendar, Target, Zap, Lightbulb, BookOpen, Coffee, Telescope, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function FundUsSection() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDonationClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
                {/* Header Section */}
                <section className="text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6 mt-6">
                            Support the LC Lab
                        </h1>
                        <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full"></div>
                    </div>
                    <p className="text-xl text-slate-700 leading-relaxed font-light">
                        Your support drives research in theoretical, applied, experimental, and cognitive linguistics, language science, and linguistic technology.
                        <span className="font-semibold text-slate-900"> Here's why your contribution matters.</span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default">
                            <Telescope className="text-[#000080]" size={20} />
                            <span className="text-slate-800 font-medium text-sm tracking-wide">Language-Focused Research</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default">
                            <Brain className="text-[#000080]" size={20} />
                            <span className="text-slate-800 font-medium text-sm tracking-wide">Cognitive Investigation</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default">
                            <Microscope className="text-[#000080]" size={20} />
                            <span className="text-slate-800 font-medium text-sm tracking-wide">Collaborative Science</span>
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="grid md:grid-cols-2 gap-12">
                    {/* Why Fund Us */}
                    <Card className="bg-white/80 backdrop-blur-sm border border-slate-200 text-card-foreground shadow-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-left-8 duration-1000 group">
                        <CardHeader className="bg-slate-50/80 border-b border-slate-100 p-10 pb-8">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-blue-50/50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                    <HeartHandshake className="text-[#000080]" size={40} strokeWidth={1.5} />
                                </div>
                                <CardTitle className="text-3xl font-bold text-slate-900">Why Fund Us?</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-10 pt-8 space-y-8">
                            <div className="flex gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                <div className="mt-1 p-2 bg-slate-50 rounded-lg h-fit text-slate-400 group-hover/item:text-[#000080] group-hover/item:bg-blue-50 transition-colors duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Linguistic Diversity</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">To advance language and cognition research against the backdrop of India’s linguistic richness.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                <div className="mt-1 p-2 bg-slate-50 rounded-lg h-fit text-slate-400 group-hover/item:text-[#000080] group-hover/item:bg-blue-50 transition-colors duration-300">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Innovation Drive</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">To empower interdisciplinary innovation across linguistics, neuroscience, and computation</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                <div className="mt-1 p-2 bg-slate-50 rounded-lg h-fit text-slate-400 group-hover/item:text-[#000080] group-hover/item:bg-blue-50 transition-colors duration-300">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Knowledge Production</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">To produce knowledge to uncover the interfaces of linguistics research</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                <div className="mt-1 p-2 bg-slate-50 rounded-lg h-fit text-slate-400 group-hover/item:text-[#000080] group-hover/item:bg-blue-50 transition-colors duration-300">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Global Collaboration</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">To expand cross-cultural academic collaboration</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* What We'll Do */}
                    <Card className="bg-white/80 backdrop-blur-sm border border-slate-200 text-card-foreground shadow-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-right-8 duration-1000 group">
                        <CardHeader className="bg-slate-50/80 border-b border-slate-100 p-10 pb-8">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-teal-50/50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                    <TrendingUp className="text-teal-700" size={40} strokeWidth={1.5} />
                                </div>
                                <CardTitle className="text-3xl font-bold text-slate-900">What We'll Do</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-10 pt-8 space-y-8">
                            <div className="flex gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                <div className="mt-1 p-2 bg-slate-50 rounded-lg h-fit text-slate-400 group-hover/item:text-teal-700 group-hover/item:bg-teal-50 transition-colors duration-300">
                                    <Microscope size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Research Equipment</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">Purchase research equipment (eye-tracking, EEG, etc.)</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                <div className="mt-1 p-2 bg-slate-50 rounded-lg h-fit text-slate-400 group-hover/item:text-teal-700 group-hover/item:bg-teal-50 transition-colors duration-300">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Student Support</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">Offer student fellowships and research assistantships</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                <div className="mt-1 p-2 bg-slate-50 rounded-lg h-fit text-slate-400 group-hover/item:text-teal-700 group-hover/item:bg-teal-50 transition-colors duration-300">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Field Research</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">Fund fieldwork and multilingual data collection</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                <div className="mt-1 p-2 bg-slate-50 rounded-lg h-fit text-slate-400 group-hover/item:text-teal-700 group-hover/item:bg-teal-50 transition-colors duration-300">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Knowledge Sharing</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">Host workshops and knowledge-sharing events</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Impact Grid - Simplified */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                    <div className="text-center p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default">
                        <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Brain className="text-[#000080]" size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Research Excellence</h3>
                        <p className="text-slate-600 font-light text-lg">Pioneering linguistic and cognitive research</p>
                    </div>
                    <div className="text-center p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default">
                        <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Globe className="text-[#000080]" size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Cultural Preservation</h3>
                        <p className="text-slate-600 font-light text-lg">Maintaining cultural linguistic roots</p>
                    </div>
                    <div className="text-center p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default">
                        <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Award className="text-[#000080]" size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
                        <p className="text-slate-600 font-light text-lg">Interdisciplinarity in language research</p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-[#000080] rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-1000 delay-500">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Users size={400} className="text-white" />
                    </div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
                    <div className="relative z-10 px-8 py-20 text-center max-w-4xl mx-auto space-y-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Be a Part of Our Journey
                        </h2>
                        <div className="space-y-6 text-blue-100 text-xl leading-relaxed font-light">
                            <p>
                                Whether you are an individual donor, corporate sponsor, or institution, your contribution supports the future of
                                <span className="text-white font-medium block mt-2 text-2xl"> inclusive, diverse, and rigorous language science research. </span>
                            </p>
                            <p className="text-lg opacity-80">
                                Join us in contributing to language and cognition research with special focus on Indian societies and Indian languages.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                            <Button
                                onClick={handleDonationClick}
                                className="bg-white text-[#000080] hover:bg-blue-50 font-bold px-10 py-8 text-xl rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all h-auto"
                            >
                                <Lightbulb className="mr-3" size={24} />
                                Make a Donation
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => router.push('/lclab/contact')}
                                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold px-10 py-8 text-xl rounded-full transition-all h-auto bg-transparent hover:-translate-y-1"
                            >
                                <Coffee className="mr-3" size={24} />
                                Join Us
                            </Button>
                        </div>

                    </div>
                </section>

                {/* Donation Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[1000] p-4 animate-in fade-in duration-300">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-300">
                            <div className="p-8 pb-6 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
                                <h2 className="text-2xl font-bold text-slate-900">Thank You!</h2>
                                <button
                                    onClick={closeModal}
                                    className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-full"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-8 space-y-8">
                                <div className="text-center mb-6">
                                    <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                        <HeartHandshake size={32} />
                                    </div>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        We deeply appreciate your interest in supporting the LC Lab's mission.
                                    </p>
                                </div>
                                <div className="space-y-4 text-center">
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Your generosity helps us drive innovation, support students, and preserve linguistic diversity.
                                        To further fund our initiatives or discuss partnership opportunities, please reach out to us.
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <Button
                                        onClick={() => router.push("/lclab/contact")}
                                        className="w-full bg-[#000080] hover:bg-blue-900 text-white font-bold py-6 text-lg h-auto rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                                    >
                                        <Mail className="mr-2" size={20} />
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
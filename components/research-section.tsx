"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { researchProjects, publications, conferences } from "@/lib/researchData"
import { Calendar, MapPin, Users, Award, Link2, ExternalLink, BookOpen } from "lucide-react"

export function ResearchSection() {
  const [activeTab, setActiveTab] = useState("publications") // Default to publications to show changes
  const [projectPage, setProjectPage] = useState(0)
  const [publicationPage, setPublicationPage] = useState(0)
  const [conferencePage, setConferencePage] = useState(0)

  const itemsPerPage = 6

  // Split data into chunks of 6
  const projectChunks = []
  for (let i = 0; i < researchProjects.length; i += itemsPerPage) {
    projectChunks.push(researchProjects.slice(i, i + itemsPerPage))
  }
  const publicationChunks = []
  for (let i = 0; i < publications.length; i += itemsPerPage) {
    publicationChunks.push(publications.slice(i, i + itemsPerPage))
  }
  const conferenceChunks = []
  for (let i = 0; i < conferences.length; i += itemsPerPage) {
    conferenceChunks.push(conferences.slice(i, i + itemsPerPage))
  }

  return (
    <section id="research" className="pt-24 pb-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6 mt-8">Research Portfolio</h2>
          <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our ongoing projects, publications, and contributions to the field of language and cognition
            research.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12 h-auto p-1 bg-white border border-slate-200 rounded-full shadow-sm">
            <TabsTrigger
              value="projects"
              className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium data-[state=active]:bg-[#000080] data-[state=active]:text-white transition-all duration-300"
            >
              <Users size={16} />
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="publications"
              className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium data-[state=active]:bg-[#000080] data-[state=active]:text-white transition-all duration-300"
            >
              <BookOpen size={16} />
              Publications
            </TabsTrigger>
            <TabsTrigger
              value="conferences"
              className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium data-[state=active]:bg-[#000080] data-[state=active]:text-white transition-all duration-300"
            >
              <MapPin size={16} />
              Conferences
            </TabsTrigger>
          </TabsList>

          {/* Projects */}
          <TabsContent value="projects" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-8">
              {projectChunks[projectPage]?.map((project, index) => (
                <Card key={index} className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-blue-50 rounded-lg text-[#000080] group-hover:scale-110 transition-transform duration-300">
                        <Users size={24} />
                      </div>
                      {project.year && (
                        <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
                          <Calendar size={12} className="mr-1" />
                          {project.year}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-[#000080] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed font-light">
                      {project.description}
                    </p>
                    <div className="pt-6 border-t border-slate-100">
                      <div className="text-sm">
                        <span className="font-semibold text-slate-900 block mb-1">Funded by</span>
                        <span className="text-slate-600">{project.sponsor}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )) || <p className="text-slate-600 text-center col-span-2">No projects available.</p>}
            </div>
            {projectChunks.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {projectChunks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setProjectPage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === projectPage ? "bg-[#000080] scale-125" : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Publications - Refined UI */}
          <TabsContent value="publications" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {publicationChunks[publicationPage]?.map((pub, index) => (
                <Card key={index} className="bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl group relative overflow-hidden h-full flex flex-col">
                  {/* Decorative side accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#000080] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <CardContent className="p-8 flex flex-col h-full flex-grow">
                    <div className="flex justify-between items-start mb-5 gap-4">
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-3 border-blue-200 text-[#000080] bg-blue-50/30 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                          {pub.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#000080] transition-colors duration-300">
                          {pub.title}
                        </h3>
                      </div>
                      <div className="p-2 bg-slate-50 rounded-full text-slate-400 group-hover:bg-[#000080] group-hover:text-white transition-all duration-300">
                        <BookOpen size={20} />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <p className="text-slate-600 text-base leading-relaxed font-serif italic border-l-2 border-slate-100 pl-4 py-2 my-2 group-hover:border-blue-100 transition-colors">
                        {pub.citation}
                      </p>
                    </div>

                    {pub.link && (
                      <div className="mt-6 border-t border-slate-50 flex items-center justify-end">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#000080] transition-colors group/link px-4 py-2 hover:bg-blue-50 rounded-lg">
                          Read Publication
                          <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )) || <p className="text-slate-600 text-center col-span-2">No publications available.</p>}
            </div>
            {publicationChunks.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {publicationChunks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPublicationPage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === publicationPage ? "bg-[#000080] scale-125" : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Conferences */}
          <TabsContent value="conferences" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-8">
              {conferenceChunks[conferencePage]?.map((conf, index) => (
                <Card key={index} className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 rounded-xl group">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-blue-50 rounded-lg text-[#000080] group-hover:rotate-12 transition-transform duration-300">
                        <MapPin size={24} />
                      </div>
                      <div className="flex items-center text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        <Calendar size={14} className="mr-2" />
                        {conf.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#000080] transition-colors leading-tight">
                      {conf.title}
                    </h3>

                    <div className="space-y-3 pt-2 text-sm">
                      <div className="flex gap-2">
                        <span className="font-semibold text-slate-900 min-w-[80px]">Authors:</span>
                        <span className="text-slate-600 font-light">{conf.authors.join(", ")}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-slate-900 min-w-[80px]">Conference:</span>
                        <span className="text-slate-600 font-light">{conf.conference}</span>
                      </div>
                      {conf.organizer && (
                        <div className="flex gap-2">
                          <span className="font-semibold text-slate-900 min-w-[80px]">Organizer:</span>
                          <span className="text-slate-600 font-light">{conf.organizer}</span>
                        </div>
                      )}
                      <div className="flex gap-2 items-center text-slate-500 pt-2">
                        <MapPin size={14} />
                        <span>{conf.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )) || <p className="text-slate-600 text-center col-span-2">No conferences available.</p>}
            </div>
            {conferenceChunks.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {conferenceChunks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setConferencePage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === conferencePage ? "bg-[#000080] scale-125" : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
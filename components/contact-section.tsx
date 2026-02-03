"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, ExternalLink, Linkedin } from "lucide-react"
import { labDetails } from "@/lib/teamData"
import { useRouter } from "next/navigation";

export function ContactSection() {
  const router = useRouter();
  return (
      <section
          id="contact"
          className="pt-24 pb-16 bg-white"
          aria-labelledby="contact-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Contact Header */}
          <header className="text-center mb-20">
            <h1
                id="contact-heading"
                className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6 mt-8"
            >
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              We’d love to hear from you! If you’re a student interested in our research, a collaborator, or simply curious about our work, feel free to reach out.
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Form and Links */}
            <section aria-labelledby="form-links-heading" className="space-y-10">
              <div className="flex items-center justify-between">
                <h2
                    id="form-links-heading"
                    className="text-2xl font-bold text-slate-900"
                >
                  Send Us a Message
                </h2>
                <a
                    href="https://forms.gle/d1ebU3yL2xsBduMz5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#000080] font-medium text-sm hover:underline flex items-center gap-1"
                >
                  Open in new tab <ExternalLink size={14} />
                </a>
              </div>

              <Card className="shadow-sm hover:shadow-md transition-all duration-300 rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                <CardContent className="p-0">
                  <div className="w-full h-[600px]">
                    <iframe
                        src="https://forms.gle/d1ebU3yL2xsBduMz5"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Contact Form"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                        href="https://www.iitm.ac.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-slate-600 hover:text-[#000080] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#000080] transition-colors"></span>
                      IIT Madras <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a
                        href="https://hss.iitm.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-slate-600 hover:text-[#000080] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#000080] transition-colors"></span>
                      Department of HSS <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Right: Info and Map */}
            <section aria-labelledby="contact-info-heading" className="space-y-8">
              <h2 id="contact-info-heading" className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <div className="grid gap-6">
                <Card className="hover:shadow-md transition-all duration-300 rounded-xl bg-white border border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-[#000080]">
                        <Mail size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                        <a
                            href={`mailto:${labDetails.email}`}
                            className="text-slate-600 hover:text-[#000080] transition-colors"
                        >
                          {labDetails.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* LinkedIn Card Matching UI Style */}
                <Card className="hover:shadow-md transition-all duration-300 rounded-xl bg-white border border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-[#000080]">
                        <a
                            href={labDetails.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#000080]"
                        >
                          <Linkedin size={24} strokeWidth={1.5} />
                        </a>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">LinkedIn</h3>
                        <a
                            href={`mailto:lclab@smail.iitm.ac.in`}
                            className="text-black hover:text-gray-700 transition-colors"
                        >
                          {'lclab@smail.iitm.ac.in'}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300 rounded-xl bg-white border border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-[#000080]">
                        <Phone size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                        <p className="text-slate-600">{labDetails.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300 rounded-xl bg-white border border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-[#000080]">
                        <MapPin size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                        <address className="text-slate-600 not-italic leading-relaxed">
                          {labDetails.addresses[0]}
                          <br />
                          {labDetails.addresses[1]}
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-2">
                <Card className="h-80 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <iframe
                      title="IIT Madras Precise Location"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=12.989680310247959,80.23191098658076&z=18&output=embed&layer=s"
                      className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </section>
  );
}
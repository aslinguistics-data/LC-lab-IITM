import Link from "next/link";
import { labDetails } from "@/lib/teamData"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Lab Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/anindita/lightLogo.png"
                alt="LC Lab"
                className="h-10 w-auto opacity-90"
              />
              <div>
                <h3 className="font-serif font-bold text-lg tracking-wide">Language & Cognition Lab</h3>
                <p className="text-sm text-slate-400 font-medium">Department of Humanities and Social Sciences</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">IIT Madras</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-7 max-w-md">
              Advancing our understanding of language, cognition, and communication through innovative experimental and computational research at one of India's premier institutes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-slate-200">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/anindita/lclab/research" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Research Portfolio
                </a>
              </li>
              <li>
                <a href="/anindita/lclab/team" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="/anindita/lclab/facilities" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Facilities
                </a>
              </li>
              <li>
                <a href="/anindita/lclab/events" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Events & Workshops
                </a>
              </li>
              <li>
                <a href="/anindita/lclab/collaborations" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Collaborations
                </a>
              </li>
              <li>
                <a href="/anindita/lclab/donate" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Fund Our Research
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Link href="/lclab/contact">
              <h3 className="font-semibold text-lg mb-6 text-slate-200 cursor-pointer hover:text-blue-400 transition-colors">
                Contact Us
              </h3>
            </Link>
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <div className="flex items-start gap-3 group">
                <p className="group-hover:text-white transition-colors">{labDetails.email}</p>
              </div>
              <div className="flex items-start gap-3 group">
                <p className="group-hover:text-white transition-colors">{labDetails.phone}</p>
              </div>
              <div className="flex items-start gap-3 group">
                <p className="group-hover:text-white transition-colors">
                  {labDetails.addresses[0]}
                  <br />
                  {labDetails.addresses[1]}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 mt-8 flex justify-center items-center">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Language & Cognition Laboratory, IIT Madras.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { createPortal } from "react-dom"
import { Menu, X, Type, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useFont } from "@/app/FontContext"

// Defined outside component to prevent re-creation on every render
const NAV_ITEMS = [
    { label: "Home", href: "/lclab" },
    { label: "Research", href: "/lclab/research" },
    { label: "Team", href: "/lclab/team" },
    { label: "Facilities", href: "/lclab/facilities" },
    { label: "Events", href: "/lclab/events" },
    { label: "Collaborations", href: "/lclab/collaborations" },
    { label: "Contact", href: "/lclab/contact" },
    { label: "Fund Us", href: "/lclab/donate" },
]

export function Navigation() {
    const router = useRouter()
    const pathname = usePathname()

    // Handle trailing slashes gracefully
    const isHomePage = pathname === "/lclab" || pathname === "/lclab/"

    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(!isHomePage)
    const [showOverflow, setShowOverflow] = useState(false)
    const [overflowItems, setOverflowItems] = useState<typeof NAV_ITEMS>([])
    const [showDyslexicTip, setShowDyslexicTip] = useState(false)
    const [mounted, setMounted] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const { isDyslexic, toggleDyslexic } = useFont()

    const handleScroll = useCallback(() => {
        if (isHomePage) {
            setIsScrolled(window.scrollY > 20)
        } else {
            setIsScrolled(true)
        }
    }, [isHomePage])

    useEffect(() => {
        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll])

    // Handle Tooltip Visibility
    useEffect(() => {
        let timer: NodeJS.Timeout

        if (isHomePage) {
            // Wait 5.5 seconds before showing the tip
            timer = setTimeout(() => {
                setShowDyslexicTip(true)
            }, 5500)
        } else {
            setShowDyslexicTip(false)
        }

        // Cleanup timer if user leaves page before 4.5s
        return () => clearTimeout(timer)
    }, [isHomePage])

    const closeTooltip = (e: React.MouseEvent) => {
        e.stopPropagation()
        setShowDyslexicTip(false)
    }

    // Check for overflow in dyslexia mode
    useEffect(() => {
        if (!isDyslexic) {
            setOverflowItems([])
            return
        }

        const checkOverflow = () => {
            if (navRef.current) {
                const containerWidth = navRef.current.offsetWidth
                const minSpaceNeeded = 900
                if (containerWidth < minSpaceNeeded) {
                    setOverflowItems(NAV_ITEMS.slice(-3))
                } else {
                    setOverflowItems([])
                }
            }
        }

        checkOverflow()
        window.addEventListener("resize", checkOverflow)
        return () => window.removeEventListener("resize", checkOverflow)
    }, [isDyslexic])

    const visibleItems = isDyslexic && overflowItems.length > 0
        ? NAV_ITEMS.slice(0, -3)
        : NAV_ITEMS

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.currentTarget
        target.onerror = null
        target.src = "/placeholder.svg"
    }

    // Tooltip Component
    const DyslexiaTooltip = () => (
        <div className={`
            absolute top-14 right-0 z-50 animate-in fade-in slide-in-from-top-2 duration-500
            ${!showDyslexicTip ? 'hidden' : 'block'}
        `}>
            <div className="relative bg-red-600 text-white text-xs font-semibold tracking-wide px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap">
                {/* Arrow pointing up */}
                <div className="absolute -top-1.5 right-3 w-3 h-3 bg-red-600 rotate-45 transform" />

                <span>Try Dyslexia Font</span>

                <button
                    onClick={closeTooltip}
                    className="ml-1 hover:bg-red-700 rounded-full p-0.5 transition-colors"
                >
                    <X size={12} strokeWidth={3} />
                </button>
            </div>
        </div>
    )

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-in-out border-b ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm border-slate-200/50 py-2"
                : "bg-transparent border-transparent py-4"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 md:h-16">

                    {/* --- Logo Section --- */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
                            alt="IIT Madras Logo"
                            onClick={() => window.open("https://www.iitm.ac.in", "_blank")}
                            className="h-10 md:h-12 w-auto cursor-pointer hover:opacity-90 transition-opacity"
                            onError={handleImageError}
                        />

                        <div className="h-8 w-[1px] bg-slate-400/30 hidden sm:block"></div>

                        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => router.push("/lclab")}>
                            <img
                                src={isScrolled ? "/anindita/darkLogo.png" : "/anindita/lightLogo.png"}
                                alt="LC Lab Logo"
                                className="h-8 md:h-10 w-auto transition-all duration-300 group-hover:scale-105"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.onerror = null;
                                    target.src = "/anindita/placeholder.svg"
                                }}
                            />
                            <div className="hidden sm:block">
                                <h1 className={`text-base md:text-lg font-bold leading-none tracking-tight font-serif ${isScrolled ? "text-slate-900" : "text-white"}`}>
                                    Language & Cognition Lab
                                </h1>
                                <p className={`text-[10px] uppercase tracking-widest font-medium mt-1 ${isScrolled ? "text-slate-500" : "text-slate-300"}`}>IIT Madras</p>
                            </div>
                        </div>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <div className={`hidden lg:flex items-center gap-1 xl:gap-2 ${isDyslexic ? "flex-shrink-0" : ""
                        }`} ref={navRef}>
                        {visibleItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${pathname === item.href
                                    ? "bg-blue-600/10 text-blue-700"
                                    : isScrolled
                                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                        : "text-white/90 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Overflow Menu (Desktop Dyslexia) */}
                        {isDyslexic && overflowItems.length > 0 && (
                            <div className="relative ml-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowOverflow(!showOverflow)
                                    }}
                                    className={`p-2 rounded-full transition-all duration-300 ${isScrolled
                                        ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                        : "bg-white/10 text-white hover:bg-white/20"
                                        }`}
                                >
                                    <MoreVertical size={18} />
                                </button>

                                {showOverflow && (
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                                        {overflowItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setShowOverflow(false)}
                                                className={`block px-4 py-2.5 text-sm transition-colors ${pathname === item.href
                                                    ? "bg-blue-50 text-blue-700 font-medium"
                                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* --- Desktop Accessibility Font Toggle --- */}
                        <div className="relative ml-2">
                            <button
                                onClick={toggleDyslexic}
                                title="Toggle Dyslexia-Friendly Font"
                                className={`h-9 w-9 flex items-center justify-center rounded-full transition-all duration-300 border ${isDyslexic
                                    ? "bg-blue-600 text-white border-blue-600 shadow-md transform scale-105"
                                    : isScrolled
                                        ? "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700"
                                        : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                                    }`}
                            >
                                <Type size={16} strokeWidth={2.5} />
                                <span className="sr-only">Toggle Dyslexic Font</span>
                            </button>
                            {/* Desktop Tooltip */}
                            <DyslexiaTooltip />
                        </div>
                    </div>

                    {/* --- Mobile Menu Button --- */}
                    <div className="flex items-center gap-3 lg:hidden">
                        {/* Mobile Font Toggle */}
                        <div className="relative">
                            <button
                                onClick={toggleDyslexic}
                                className={`h-9 w-9 flex items-center justify-center rounded-full transition-colors ${isDyslexic ? "bg-blue-600 text-white" : isScrolled ? "text-slate-700 bg-slate-100" : "text-white bg-white/10 backdrop-blur-sm"
                                    }`}
                            >
                                <Type size={18} />
                            </button>
                            {/* Mobile Tooltip */}
                            <DyslexiaTooltip />
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                            className={`h-9 w-9 p-0 rounded-full hover:bg-transparent ${isScrolled ? "text-slate-900" : "text-white"}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>

                {/* --- Mobile Dropdown (Full Screen Revamp with Portal) --- */}
                {isOpen && mounted && createPortal(
                    <div className="fixed inset-0 z-[9999] bg-white text-slate-900 animate-in slide-in-from-right-full duration-300 flex flex-col">
                        {/* Header within Mobile Menu */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/anindita/darkLogo.png"
                                    alt="LC Lab Logo"
                                    className="h-8 w-auto"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.onerror = null;
                                        target.src = "/anindita/placeholder.svg"
                                    }}
                                />
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsOpen(false)}
                                className="h-10 w-10 p-0 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
                            >
                                <X size={24} />
                            </Button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center gap-6">
                            <div className="space-y-4 max-w-md mx-auto w-full">
                                {NAV_ITEMS.map((item, idx) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            style={{ animationDelay: `${idx * 50}ms` }}
                                            className={`
                                                block w-full text-center px-4 py-4 text-2xl font-bold rounded-2xl transition-all duration-300 animate-in slide-in-from-bottom-8 fill-mode-backwards
                                                ${isActive
                                                    ? "text-[#000080]"
                                                    : "text-slate-400 hover:text-slate-900"
                                                }
                                            `}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Mobile Footer Area */}
                        <div className="p-8 text-center bg-slate-50 border-t border-slate-100">
                            <p className="text-slate-400 text-sm font-medium tracking-widest uppercase">IIT Madras</p>
                        </div>
                    </div>,
                    document.body
                )}
            </div>

            {/* Click outside to close overflow menu */}
            {showOverflow && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowOverflow(false)}
                />
            )}
        </nav>
    )
}
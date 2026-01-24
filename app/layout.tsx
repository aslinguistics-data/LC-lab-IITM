import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Crimson_Text } from 'next/font/google'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"
import { FontProvider } from "@/app/FontContext";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const crimsonText = Crimson_Text({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-crimson',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://home.iitm.ac.in/anindita/'),
    title: {
        default: "Language and Cognition Laboratory - IIT Madras",
        template: "%s | LC Lab IIT Madras"
    },
    description: "A premier research lab at IIT Madras exploring the intersection of language, cognition, and communication through cutting-edge experimental and computational methods.",
    keywords: ["linguistics", "cognition", "language processing", "eye-tracking", "IIT Madras", "research lab", "psycholinguistics", "Anindita"],
    authors: [{ name: "Language and Cognition Laboratory, IIT Madras" }],
    publisher: "IIT Madras",
    icons: {
        icon: '/anindita/darkLogo2.png',
    },
    openGraph: {
        title: "Language and Cognition Laboratory - IIT Madras",
        description: "Premier research lab exploring language, cognition, and communication",
        url: 'https://home.iitm.ac.in/anindita',
        siteName: 'LC Lab IIT Madras',
        locale: 'en_US',
        type: "website",
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Language and Cognition Laboratory - IIT Madras',
        description: "Premier research lab exploring language, cognition, and communication at IIT Madras",
    },
    alternates: {
        canonical: './',
    },
    robots: {
        index: true,
        follow: true,
    }
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#1e293b"
}

export default function RootLayout({ children, }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${crimsonText.variable} scroll-smooth`}>
            <body className="antialiased min-h-screen bg-white">
                <JsonLd />
                <FontProvider>
                    <Navigation />
                    {children}
                    <Footer />
                </FontProvider>
            </body>
        </html>
    )
}
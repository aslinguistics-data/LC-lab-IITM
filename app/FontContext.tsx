"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

interface FontContextType {
    isDyslexic: boolean
    toggleDyslexic: () => void
}

const FontContext = createContext<FontContextType | undefined>(undefined)

export function FontProvider({ children }: { children: React.ReactNode }) {
    const [isDyslexic, setIsDyslexic] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem("dyslexic-mode")
        if (saved === "true") {
            setIsDyslexic(true)
        }
    }, [])

    useEffect(() => {
        if (isDyslexic) {
            document.body.classList.add("dyslexic-mode")
            localStorage.setItem("dyslexic-mode", "true")
        } else {
            document.body.classList.remove("dyslexic-mode")
            localStorage.setItem("dyslexic-mode", "false")
        }
    }, [isDyslexic])

    const toggleDyslexic = () => setIsDyslexic((prev) => !prev)

    return (
        <FontContext.Provider value={{ isDyslexic, toggleDyslexic }}>
    {children}
    </FontContext.Provider>
)
}

export function useFont() {
    const context = useContext(FontContext)
    if (context === undefined) {
        throw new Error("useFont must be used within a FontProvider")
    }
    return context
}
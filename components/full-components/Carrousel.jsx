"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function Carousel() {
    const [current, setCurrent] = useState(0)
    const images = [
        "/imagen1.jpg",
        "/imagen2.jpg",
        "/imagen3.jpg",
        "/imagen8.jpg",
        "/imagen5.webp",
        "/imagen6.jpg"
    ]

    const next = () => {
        setCurrent((current) => (current === images.length - 1 ? 0 : current + 1))
    }

    const prev = () => {
        setCurrent((current) => (current === 0 ? images.length - 1 : current - 1))
    }

    // Auto-advance the carousel
    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {/* Full-screen carousel */}
            <div className="relative w-full h-screen overflow-hidden">
                {/* Carousel */}
                <div className="relative w-full h-full">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <Image
                                src={src || "/placeholder.svg"}
                                alt={`World Cup image ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                    ))}
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        La aplicación que el mundial necesita
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Bienvenido al futuro del turismo con gabow
                    </p>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${index === current ? "bg-white" : "bg-white/50"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="flex flex-col items-center text-white">
                        <span className="text-sm mb-1">Scroll para más</span>
                        <ChevronDown className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </>
    )
}


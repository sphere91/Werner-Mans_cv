// components/ui/VideoComponent.tsx
import React from 'react'

interface BackgroundVideoComponentProps {
    src: string
    className: string
}

export function BackgroundVideoComponent({ src, className }: BackgroundVideoComponentProps) {
    return (
        <video
            className={className}
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={src} type="video/webm" />
            Your browser does not support the video tag.
        </video>
    )
}
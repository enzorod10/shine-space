'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeftRightIcon } from './Icons';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
    };

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isDragging) {
            handleMove(e.clientX);
        }
    }, [isDragging, handleMove]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (isDragging) {
            handleMove(e.touches[0].clientX);
        }
    }, [isDragging, handleMove]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp, handleTouchMove]);


    return (
        <div 
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl cursor-e-resize select-none group"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <img 
                src={beforeImage}
                alt="Before cleaning"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />
            <div 
                className="absolute inset-0 w-full h-full overflow-hidden" 
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img 
                    src={afterImage}
                    alt="After cleaning"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />
            </div>
            
            <div
                className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize"
                style={{ left: `calc(${sliderPosition}% - 1px)` }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 bg-white/90 rounded-full flex items-center justify-center shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <ChevronLeftRightIcon className="w-6 h-6 text-primary" />
                </div>
            </div>
            
            <div className="absolute top-4 left-4 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">BEFORE</div>
            <div 
                className="absolute top-4 right-4 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm transition-opacity duration-300"
                style={{ opacity: sliderPosition > 80 ? 1 : 0 }}
            >
                AFTER
            </div>

        </div>
    );
};

export default BeforeAfterSlider;

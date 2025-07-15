'use client';
import { useState, useEffect } from 'react';

export default function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        handleResize(); // Set initial width
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return screenWidth;
}
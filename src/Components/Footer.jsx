'use client';

import React, { useRef, useEffect } from 'react';
import { useLayoutHeights } from '../Context/LayoutHeightsContext';

export default function Footer() {
  const footerRef = useRef(null);
  const { setFooterHeight } = useLayoutHeights();

  useEffect(() => {
    if (footerRef.current) {
      const height = footerRef.current.getBoundingClientRect().height;
      setFooterHeight(height);
    }
  }, []);

  return (
    <footer
      ref={footerRef} className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                rel="noopener noreferrer"
                >© 2025 Rusty Namata. Built using Next.js 
            </a>
         </footer>
    );
}
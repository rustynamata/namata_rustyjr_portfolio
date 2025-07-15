'use client';

import { createContext, useState, useContext,useEffect } from 'react';

const LayoutHeightsContext = createContext();

export function LayoutHeightsProvider({ children }) {
  const [navHeight, setNavHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [bg, setBg] = useState('#00001b');
  const [fg, setFg] = useState('#ffffff');
  useEffect(() => {
  if (darkMode) {
    setBg('#00001b');
    setFg('#ffffff');
  } else {
    setBg('#ffffff');
    setFg('#000000ff');
  }
}, [darkMode]); // This effect runs whenever darkMode changes

useEffect(() => {
  // This effect runs whenever bg or fg changes, ensuring they are updated in the DOM
  document.documentElement.style.setProperty('--background', `${bg}`);
  document.documentElement.style.setProperty('--foreground', `${fg}`);
  console.log(bg + " " + fg); // This will log the updated values
}, [bg, fg]);

  return (
    <LayoutHeightsContext.Provider value={{ navHeight, setNavHeight, footerHeight, setFooterHeight, bg, setBg, fg,setFg,darkMode, setDarkMode}}>
      {children}
    </LayoutHeightsContext.Provider>
  );
}

export function useLayoutHeights() {
  const context = useContext(LayoutHeightsContext);
  if (!context) {
    throw new Error('useLayoutHeights must be used within LayoutHeightsProvider');
  }
  return context;
}

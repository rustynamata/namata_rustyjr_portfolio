'use client';
import React, {useRef, useState, useEffect } from 'react';
import useScreenWidth from './takeScreenWidth';
import { useLayoutHeights } from '../Context/LayoutHeightsContext';

export default function Navigation() {
  const screenWidth = useScreenWidth();
  const [contacts, setContacts] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [listDisplay, setListDisplay] = useState('');
  const navRef = useRef(null);
  const { bg, fg, darkMode, setNavHeight, setDarkMode } = useLayoutHeights();
  const popupLayout ="block absolute top-12 -right-0 z-3 w-[40%] min-w-[300px] bg-gray-800 p-5 rounded-lg mr-5";
  useEffect(() => {
    if (navRef.current) {
      const height = navRef.current.getBoundingClientRect().height;
      setNavHeight(height);
    }
    if (screenWidth > 820) {
      setContacts('flex space-x-15');
      setListDisplay('');
    } else {
      setContacts('hidden');
    }
  }, [screenWidth]);

  const popUp=() => {
    setIsOpen(!isOpen);
    setContacts(isOpen ? "hidden" : popupLayout);
    setListDisplay('flex items-center p-1.5')
  }

  let navList = 
  <ul className={contacts}>
        <li className={listDisplay}>
          <a href="https://m.me/mutae.ga" target='_blank' className={`${listDisplay} hover:underline hover:underline-offset-4`}>
            <svg className="w-[40px] h-[40px] hover:bg-[#50609b97] transition-colors duration-150" viewBox="0 0 48 48" version="1.1">
                <title>Contact my Messenger</title>
                <desc>Created with Sketch.</desc>
                <defs>
            </defs>
                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Color-" transform="translate(-301.000000, -860.000000)" fill="#007FFF">
                      <path d="M325,860 C311.745143,860 301,869.949185 301,882.222222 C301,889.215556 304.489988,895.453481 309.944099,899.526963 L309.944099,908 L318.115876,903.515111 C320.296745,904.118667 322.607155,904.444444 325,904.444444 C338.254857,904.444444 349,894.495259 349,882.222222 C349,869.949185 338.254857,860 325,860 L325,860 Z M327.385093,889.925926 L321.273292,883.407407 L309.347826,889.925926 L322.465839,876 L328.726708,882.518519 L340.503106,876 L327.385093,889.925926 L327.385093,889.925926 Z" id="Messenger">
                      </path>
                    </g>
                </g>
            </svg>
            {contacts === popupLayout && (<h3 className='ml-8'>Namata Rusty-Jr</h3>)}
          </a>
        </li>
        <li className={listDisplay}>
          <a href="mailto:namata.rusty1@gmail.com" className={`${listDisplay} hover:underline hover:underline-offset-4`}>
          <svg className="w-[50px] h-[37px] hover:bg-[#50609b97] transition-colors duration-150" viewBox="0 0 134 100" fill="none" xmlns="http://www.w3.org/2000/svg">
           <title>Send me an Email</title>
            <g clipPath="url(#clip0_1:194)">
              <path d="M9.09091 100H30.303V48.4848L0 25.7576V90.9091C0 95.9394 4.07576 100 9.09091 100Z" fill="#4285F4"/>
              <path d="M103.03 100H124.242C129.273 100 133.333 95.9242 133.333 90.9091V25.7576L103.03 48.4848" fill="#34A853"/>
              <path d="M103.03 9.09091V48.4848L133.333 25.7576V13.6364C133.333 2.39394 120.5 -4.01515 111.515 2.72727" fill="#FBBC04"/>
              <path d="M30.303 48.4848V9.09091L66.6667 36.3636L103.03 9.09091V48.4848L66.6667 75.7576" fill="#EA4335"/>
              <path d="M0 13.6364V25.7576L30.303 48.4848V9.09091L21.8182 2.72727C12.8182 -4.01515 0 2.39394 0 13.6364" fill="#C5221F"/>
            </g>
            <defs>
              <clipPath id="clip0_1:194">
              <rect width="133.333" height="100" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          {contacts === popupLayout && (<h3 className='ml-6'>rustyjrnamata@gmail.com</h3>)}
          </a>
        </li>
        <li className={listDisplay}>
          <a href="https://github.com/rustynamata" target='_blank' className={`hover:underline hover:underline-offset-4 ${listDisplay}`}>
           <svg className="w-[40px] h-[40px] hover:bg-[#50609b97] transition-colors duration-150" viewBox="0 0 20 20" version="1.1">
                  <title>Visit my Github</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
              </defs>
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill={`${fg}`}>
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                          </g>
                      </g>
                  </g>
            </svg>
            {contacts === popupLayout && (<h3 className='ml-8'>rustynamata</h3>)}
          </a>
        </li>
      </ul>
  // Check if screenWidth is 0 to prevent rendering on the server side
  if (screenWidth === 0) return null; // Prevent rendering on the server side

  return (
    <nav ref={navRef} className="flex justify-between items-center py-5 px-10 bg-black-800 text-white">
      <div className='relative'>
        <div className={`w-10 h-5 left-5  bg-${fg} rounded-full border-2 border-blue-800`}>
        </div>
        <button onClick={() =>{ 
          setDarkMode(!darkMode);
        }} className={`cursor-pointer absolute z-1 -top-0.5 ${darkMode ? " bg-[#ffffff] " : "left-5 bg-[#000000] "} w-6 h-6 rounded-full border-2 border-red-800`}>
        </button>
      </div>
      

      {screenWidth > 820 ? (navList ) : (
      <>
        <a onClick={popUp} className={`${darkMode?"text-white":"text-black"} hover:underline text-2xl cursor-pointer `} aria-label='Contacts'>Contacts</a>
        {navList}
       </>
       )}

    </nav>
  );
}


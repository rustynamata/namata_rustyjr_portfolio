'use client';
import Image from "next/image";
import useScreenWidth from "@/Components/takeScreenWidth";
import { useLayoutHeights } from '../Context/LayoutHeightsContext';
import { useState } from "react";

function imageContainer(location){
  return(
    <img
    loading="lazy"
    placeholder="empty"
    src={location}
    width="100%"
    height="auto"
    className="rounded-lg my-2"
    style={{ aspectRatio: "16/9", objectFit: "cover" }}
  />
  )
}

function imagetopIcon({directory,bg}){
  const bgClass = bg ? `bg-${bg}` : '';
  return(
    <div className={`${bgClass} rounded-lg my-1`}>
      <img
      loading="lazy"
      src={directory}
      width="50px"
      height="auto"
      className='my-1' 
      style={{ aspectRatio: "1/1" }}
      />
    </div>
  )
}

function incode(){
  let formatImage = ({directory, width="140px",invert})=>{
      return(<img
      loading="lazy"
      src={directory}
      width={width}
      height="auto"
      className={`my-1 p-3 ${invert? 'invert dark:invert-0':''}`}
      />)
  }
  return(
    <div className="min-w-120">
      <ul className="flex justify-center items-center p-2">
        <li>
          <svg className="w-[130px] h-[130px] p-3" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
          <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
          <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
        </li>
        <li>
          <svg className="w-[130px] h-[130px] p-3" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
          <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
          <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
          </svg>
        </li>
      </ul>
      <ul className="flex justify-center items-center p-2">
        <li>
          <svg className="w-[130px] h-[130px] p-3" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="28" height="28" fill="#FFCA28"/>
            <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E"/>
            <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E"/>
          </svg>
        </li>
        <li>{formatImage({directory:'/images/php.svg'})}</li>
      </ul>
      <ul className="flex p-2 justify-center">
        <li>{formatImage({directory:'/next.svg'})}</li>
      </ul>
      <ul className="flex p-2 justify-center">
        <li>{formatImage({directory:'/images/mysql.svg',invert:true})}</li>
      </ul>
    </div>
  )
}

const javaTopLibs = <p className="text-3xl text-semibold py-2">Queue Monitoring Software</p>
const pythonLibs = <p className="text-3xl text-semibold py-2">Attendance Monitoring Software</p>

const pythonCont=<div>
  <div className="flex justify-between items-center border-b-lg border-b-black p-1">
    <p>Libraries:</p>
    <div className="flex ap-2 items-center">
    {imagetopIcon({'directory':'/images/OpenCV_logo_black.svg','bg':''})}
    {imagetopIcon({'directory':'/images/py_tk.svg', 'bg':'white'})}
    </div>
  </div>
  {imageContainer("/images/python_log_in.png")}
  <p className="text-lg">
    This project is a Attedance Monitor Computer Application that scans students qr code and logs its name into todays date table. Utilizing cv2 for camera access, pyzbar to decode qrcode and, tkinter  for layout of it canvas
    With the help of python is a versatility and simplicity the project is the 1st functional  software that I've develop.
    Python as the 1st programming language that I've delve into. Providing strong basic reference for other programming language I'm studying into.
  </p>
  {imageContainer("/images/python-reg.png")}
  {imageContainer("/images/python_mainMenu.png")}
  
</div>;

const javaCont=<div>
  {imageContainer("/images/jv_log_in.png")}
  <p className="text-gray-700 text-lg">
    Qeueing system that integrates mail verification, OTP to confirm and provide paperless appointment reservation. 
  </p>
  {imageContainer("/images/jv_reg.png")}
  {imageContainer("/images/jvDashboard.png")}
</div>;

export default function Home() {
  const screenWidth = useScreenWidth();
  const isLarge = screenWidth > 1350;
  const isMedium = screenWidth > 720 && screenWidth <= 1249;
  const isSmall = screenWidth < 720;
  const { navHeight } = useLayoutHeights(); // Adjust based on your actual navigation height
  const { footerHeight } = useLayoutHeights(); // Adjust based on your actual footer height
  const [prioritized, setPrioritized] = useState(0);
  const [cVal1, setCVal1] = useState();
   const { bg, fg, darkMode}=useLayoutHeights();

  const def = <p>default</p>
  const def2=<></>


  const info = <p className={`text-${fg} text-4xl pl-10 leading-relaxed pt-20 mw-700`}>
                Driven by deep interest in software development and web technologies and creating real-world solutions through softwares. 
                Enthusiast to learn and discover new things that is benificial and worthy.
              </p>

  const [cVal2, setCVal2] = useState();
  return (
    <div className="px-5 font-[family-name:var(--font-geist-sans)]">
      <main className={`${!isLarge ? 'block':''}relative w-full overflow-auto`} style={{minHeight: `calc(95vh - ${navHeight}px - ${footerHeight}px)`}}>
      <g className={`${  isLarge? prioritized==0? 'absolute translate-x-1/3':'':''}`}>
        <h1 className={` ${isLarge ? "relative z-1 text-8xl text-left" : isSmall ? "text-3xl text-center" : "text-6xl text-center"} font-bold `}>
          Hi, I'm<span className={isLarge ? "opacity-70" : "opacity-100"}> Rus</span>ty Namata
        </h1>

        <p className={` ${isLarge ? "relative z-1 text-2xl text-left" : isSmall ? "text-lg text-center" : "text-xl text-center"} font-light`}>
          An aspiring developer with a passion for building web applications.
        </p>

        <Image
          loading="lazy"
          placeholder="empty"
          src="/images/DSC_062221.png"
          alt="Rusty Namata Portrait"
          width={800}
          height={100}
          className={`${isLarge ? darkMode? "opacity-70 absolute z-2  -top-25 -left-10 h-[800px] object-cover object-[center_0%] rounded-full":"absolute z-0  -top-25 -left-10 h-[800px] object-cover object-[center_0%] rounded-full" :isMedium? "-top-5  h-120 object-cover object-[center_9%] ":"-top-5 h-100 object-cover object-[center_9%] "}`}
        />
        <div className={`${isLarge ? "relative w-85 h-150 left-130" : "flex justify-between items-center py-5 mt-5 overflow-x-scroll scrollbar-hide gap-5"}`}>
          <button onClick={
            () =>{setPrioritized(1);
            setCVal1();
            setCVal2(info)
           }} className={`${isLarge? prioritized==1?"absolute z-3 top-56 right-6": "absolute z-2 top-25":  ""} cursor-pointer rounded-full bg-[rgba(255, 255, 255, 0.99)] p-5 rounded-3xl hover:bg-[#50609b97] transition-colors duration-150`}>
              <svg fill={!darkMode? prioritized==1?bg:fg:fg} version="1.1" width={isLarge?"30px":"60px"} height={isLarge?"30px":"60px"} className={`${isLarge && prioritized === 1 ? "scale-170" : ""}`} viewBox="0 0 16 16">
                <desc>about button</desc>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>
          </button>
       
          <button onClick={() => {
            setPrioritized(2)
            setCVal1();
            setCVal2(incode)
          }} className={`${isLarge? prioritized==2?"absolute z-3 top-56 right-5":"absolute z-2 top-40 left-15": ""} cursor-pointer p-3 rounded-3xl hover:bg-[#50609b97] transition-colors duration-150`}>
            <svg width="50px" height="50px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <desc>code</desc>
              <path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z" fill={!darkMode? prioritized==2?bg:fg:fg}/>
              <path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z" fill={!darkMode? prioritized==2?bg:fg:fg}/>
              <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z" fill={!darkMode? prioritized==2?bg:fg:fg}/>
            </svg>
          </button>

          <button onClick={() => {setPrioritized(3)
             setCVal1(pythonLibs);
            setCVal2(pythonCont)
          }} className={`${isLarge? prioritized==3?"absolute z-3 top-57 right-6":"absolute z-2 top-65 left-25": ""} cursor-pointer  p-1.5 rounded-3xl hover:bg-[#50609b97] transition-colors duration-150`}>
            <svg width={isLarge?prioritized==3? "55px":"75px":"60px"} height={isLarge?prioritized==3? "55px":"75px":"60px"}  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <desc>python</desc>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
              <defs>
                <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse" >
                  <stop stopColor="#327EBD"/>
                  <stop offset="1" stopColor="#1565A7"/>
                </linearGradient>
                <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFDA4B"/>
                  <stop offset="1" stopColor="#F9C600"/>
                </linearGradient>
              </defs>
            </svg>
          </button>

          <button onClick={() => {setPrioritized(4)
             setCVal1(javaTopLibs);
            setCVal2(javaCont)
          }} className={`${isLarge? prioritized==4?"absolute z-3 top-54 right-5": "absolute z-2 left-12 top-90": ""} cursor-pointer  p-1.5 rounded-3xl hover:bg-[#50609b97] transition-colors duration-150`}>
                <svg width={isLarge? prioritized==4? "65px":"95px":"60px"} height={isLarge? prioritized==4? "65px":"95px":"60px"}  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <desc>java</desc>
                  <path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00"/>
                  <path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00"/>
                  <path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1"/>
                  <path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1"/>
                  <path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1"/>
                  <path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1"/>
                  <path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1"/>
                  <path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1"/>
                </svg>
            </button> 
           <button onClick={() => {setPrioritized(5)
             setCVal1();
            setCVal2()
           }} className={`${isLarge? prioritized==5?"absolute z-3 top-55 right-5": "absolute z-2 right-70 top-115": ""} cursor-pointer p-1.5 rounded-3xl hover:bg-[#50609b97] hover:shadow-5xl transition-colors duration-150`}>
              <svg width={isLarge? prioritized==5?"65px":"100px":"60px"} height={isLarge? prioritized==5?"65px":"100px":"60px"}  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <desc>react</desc>
                <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/>
              </svg>
          </button>
          {isLarge &&(<div className="absolute z-1 rounded-full border-l-5 border-l-red top-55 right-5 w-20 h-20 bg-black"></div>)}
          
        </div>
        </g>
            {isLarge&& prioritized!= 0 &&(fluorescent(isLarge))}
            <aside
              className={`${isLarge ?"absolute z-0 top-30 left-220 w-[calc(100%-100)]  max-w-[1000px] h-145 pl-10" : "border-t-20 border-t-gray-700 border-t-gray-500 w-full h-150 w-140 mt-5"}  overflow-y-auto scrollbar scrollbar-thumb-red-500 scrollbar-track-blue-200 rounded-lg`}>
              {!isLarge&&(fluorescent(isLarge))}
              {container(cVal1,cVal2,darkMode)}
            </aside>
           
      </main>
      <div className="relative h-100 bottom-0">

      </div>
    </div>
  );
}

const fluorescent =(varb) =>{
  return (
    <div className={`${varb?"absolute z-0 left-200 top-95 w-10 h-10 block":""}`}>
      <div        
        className={`${varb?"relative w-3 h-3":"w-full h-3 mb-5" }  rounded-full bg-gradient-to-b from-white via-white to-gray-300 shadow-[0_0_64px_16px_rgba(255,255,255,0.7)]`}
        style={{boxShadow: "-20px 0 300px 100px rgba(255,255,255,0.85), 0 8px 32px 0px #e0e7ef" }}
      ></div>
    </div>
  )
}

const container = (upper,lower,mode)=>{
  return(
    <div>
      <div className={`${upper? `border-y-3 flex justify-center items-center`:""} `}>
        {upper?upper:<></>}
      </div>
      <div className="flex grid items-center text-center">
        {lower?lower:<></>}
      </div>

    </div>
  )
}
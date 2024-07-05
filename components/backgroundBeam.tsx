"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React, { ReactNode, useEffect } from "react";
import Aos from "aos";
interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const generateBackground=()=>{
    let banner = document.querySelector('.newbanner');
let canvas : any = document.getElementById('dotsCanvas');
canvas.width = canvas?.offsetWidth;
canvas.height = canvas.offsetHeight;
const ctx = canvas.getContext('2d');
const dots : any = [];
const arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];
for (let index = 0; index < 80; index++) {
    dots.push({
        x:  Math.floor(Math.random() * canvas.width),
        y:  Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random()* 5)]
    });
}
const drawDots = () => {
    dots.forEach((dot: any) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
        ctx.fill();
    })
}
drawDots();
banner?.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    let mouse = {
        x:  event.pageX - banner.getBoundingClientRect().left,
        y:  event.pageY - banner.getBoundingClientRect().top
    }
    dots.forEach((dot:any) => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if(distance < 300){
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})
banner?.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
})
window.addEventListener('resize', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = banner?.offsetWidth;
    canvas.height = banner?.offsetHeight;

    const dots:any  = [];
    for (let index = 0; index < 50; index++) {
        dots.push({
            x:  Math.floor(Math.random() * canvas.width),
            y:  Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5,
            color: arrayColors[Math.floor(Math.random()* 5)]
        });
    }
    drawDots();
})
  }
  useEffect(()=>{

  Aos.init()
  generateBackground()
  },[])
  return (
    <main>
      <div
        className={cn(
          "relative flex w-full  h-[100vh] items-center justify-center bg-slate-900 newbanner text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        {/* <div> */}
          <canvas id="dotsCanvas"  className="absolute left-0 top-0 w-full
         h-full  overflow-hidden"></canvas>
        {/* </div> */}
        {children}
      </div>
    </main>
  );
};
export function AuroraBackgroundDemo() {
    return (
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative h-screen w-full flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className=" z-10 text-3xl md:w-3/5 md:text-7xl font-bold dark:text-white text-center  outline-dottedtext-ellipsis text">
           Full Stack Flutter Developer
          </div>
          <div className=" z-10 w-2/5 h-2 bg-slate-200">

          </div>
          <div className="z-10 w-1/5 h-2 bg-slate-200">

</div>
          <div className=" z-10 font-semibold text-base md:text-xl md:w-3/5 w-4/5 text-neutral-200 py-4">
          With extensive experience in both front-end and back-end development, I specialize in delivering seamless and visually appealing user experiences. 
          </div>
        <img  src="/images/her.webp" className="md:mt-auto mt-32 block  brightness-50 z-0  w-[700px] h-[600px] object-contain absolute right-0 bottom-0"/>
        </motion.div>
      </AuroraBackground>
    );
  }
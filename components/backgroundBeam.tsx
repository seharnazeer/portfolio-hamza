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
  useEffect(()=>{
  Aos.init()
  },[])
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col  h-[100vh] items-center justify-center bg-slate-900  text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
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
        <img  src="/images/her.webp" className="sm:block  brightness-50 hidden z-0  w-[700px] h-[600px] object-contain absolute right-0 bottom-0"/>
        </motion.div>
      </AuroraBackground>
    );
  }
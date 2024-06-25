"use client";
import React,{useState} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({

  item,
link
}: {
  link:string;
  item: string;

}) => {
  return (
    <Link  href={link} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer  md:text-md text-sm hover:opacity-[0.9] text-white"
      >
        {item}
      </motion.p>
              


    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border-2  bg-slate-900 border-white/[0.2]  shadow-input flex justify-center md:space-x-4 space-x-2 px-4 py-4 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50 h-4")}
      >
        <Menu setActive={setActive}>
          <MenuItem  link="/"  item="About">
          </MenuItem>
          <MenuItem  link="#testy"  item="Testimonial">
          </MenuItem>
          <MenuItem  link="#skills"  item="Skills">
          </MenuItem>
          <MenuItem  link="#project"  item="Projects">
          </MenuItem>
          <MenuItem  link="#contact"  item="Contact">
          </MenuItem>
        </Menu>
      </div>
    );
  }


import { ABout } from "@/components/about";
import { AuroraBackground, AuroraBackgroundDemo } from "@/components/backgroundBeam";
import Contact from "@/components/contact";
import { HoveredLink, MenuItem , Navbar} from "@/components/navbar";
import ProjectCard from "@/components/projectCard";
import Skills from "@/components/skills";
import { InfiniteMovingCardsDemo } from "@/components/testimonials";
import Title from "@/components/title";
import Image from "next/image";


export default function Home() {

  return (
  <div className="bg-slate-900 ">
   <Navbar className=" h-2" />
<AuroraBackgroundDemo />
<ABout />
<div className="flex flex-col w-full  items-center overflow-hidden mt-10">
  <Title title="Skills" />
  </div>
<Skills />

<div className="flex flex-col items-center overflow-hidden mt-10">
<Title title="Testimonials" />
<InfiniteMovingCardsDemo />
</div>

<ProjectCard />
<div id="contact" className="flex flex-col items-center overflow-hidden mt-10">
<Title title="Contact Me" />
<Contact />
</div>
  </div>
  );
}

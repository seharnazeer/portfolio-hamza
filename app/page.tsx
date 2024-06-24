import { ABout } from "@/components/about";
import { AuroraBackground, AuroraBackgroundDemo } from "@/components/backgroundBeam";
import { HoveredLink, MenuItem , Navbar} from "@/components/navbar";
import Skills from "@/components/skills";
import { InfiniteMovingCardsDemo } from "@/components/testimonials";
import Title from "@/components/title";
import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-slate-900">
   <Navbar className=" h-2" />
<AuroraBackgroundDemo />
<ABout />
<Skills />
<div className="flex flex-col items-center overflow-hidden">
<Title title="Testimonials" />
<InfiniteMovingCardsDemo />
</div>
  </div>
  );
}

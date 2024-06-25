import Image from "next/image";
import React from "react";
import { Technology } from "./technology";

import Title from "./title";


type Props = {};
type Projects= {
    id:number,
    name:string,
    desc:string,
    projImg:string,
    style:string,
    data:string,
    icons : Icon[]

}
type Icon ={
    id:number,
    name:string,
    image:string
}
const projects : Array<Projects> = [
  {
    id: 1,
    name: "WAA WORLD",
    desc: "PopCheck is an innovative app designed for baseball enthusiasts, team managers, and fantasy league participants. It offers a comprehensive platform to manage and analyze baseball player stats, facilitate bidding processes, and monitor subscription statuses. The app combines real-time data, user-friendly interfaces, and advanced features to enhance the experience of tracking and managing baseball players.",
    projImg:"/images/1.png",
    style:'md:flex-row-reverse flex-col-reverse',
    data:'fade-left',
    icons: [
      {
        id: 1,
        name: "Flutter",
        image: "/images/flutter.png",
      },
      {
        id: 2,
        name: "Amplify",
        image: "/images/amplify.png",
      },
      {
        id: 3,
        name: "Firebase",
        image: "/images/firebase.jpeg",
      },
      {
        id: 4,
        name: "Bloc",
        image: "/images/bloc.png",
      },
      {
        id: 5,
        name: "Node JS",
        image: "/images/node.jpeg",
      },
      {
        id: 6,
        name: "AWS",
        image: "/images/aws.png",
      },
    ],
  },
  {
    id: 2,
    name: "FNT PORTAL",
    desc: "The FNT Portal project involved developing a robust mobile application focused on SIM allocation through barcode scanning. Designed to streamline the allocation process, the app ensures that the allocation status is checked efficiently and accurately. Built using Flutter, it features barcode scanning for SIM allocation, seamless API integration with a backend that handles allocation statuses, and secure user authentication for authorized access. Additionally, push notifications inform users about SIM allocation statuses and system updates.",
    projImg:"/images/3.png",
    style:"md:flex-row flex-col",
    data:'fade-right',
    icons: [
      {
        id: 1,
        name: "Flutter",
        image: "/images/flutter.png",
      },

      {
        id: 3,
        name: "Firebase",
        image: "/images/firebase.jpeg",
      },
      {
        id: 4,
        name: "Bloc",
        image: "/images/bloc.png",
      },
      {
        id: 5,
        name: "AWS",
        image: "/images/aws.png",
      },
    ],
  },{
    id: 3,
    name: "POP CHECK",
    projImg:"/images/2.png",
    desc: "PopCheck is an innovative app designed for baseball enthusiasts, team managers, and fantasy league participants. It offers a comprehensive platform to manage and analyze baseball player stats, facilitate bidding processes, and monitor subscription statuses. The app combines real-time data, user-friendly interfaces, and advanced features to enhance the experience of tracking and managing baseball players.",
    style:"md:flex-row-reverse flex-col-reverse",
    data:'fade-left',
    icons: [
      {
        id: 1,
        name: "Flutter",
        image: "/images/flutter.png",
      },

      {
        id: 3,
        name: "Firebase",
        image: "/images/firebase.jpeg",
      },
      {
        id: 4,
        name: "Bloc",
        image: "/images/bloc.png",
      },
      {
        id: 5,
        name: "AWS",
        image: "/images/aws.png",
      },
    ],
  },
];
const ProjectCard = (props: Props) => {
  return (
    <div className="flex items-center overflow-hidden flex-col" id="project">
   <Title title="Projects" />
    {
        projects.map((elm : Projects)=>(
<div className={`bg-slate-900 text-white w-4/5 flex ${elm.style} justify-center`}>

  
      <Image
      data-aos={elm.data}
        className=""
        src={elm.projImg}
        height={500}
        width={500}
        alt="project-1"
      />
   
      <div className="flex flex-col gap-5 p-4 justify-center relative">
        <h2 className=" font-bold italic font-mono text-3xl">{elm.name}</h2>
        <p className="text-base " data-aos="fade-up">
          {elm.desc}
        </p>
        <div className=" self-start">
          <Technology technology={elm.icons} />
        </div>
      </div>
    </div>
  
        ))
    }
    </div>
);
};

export default ProjectCard;

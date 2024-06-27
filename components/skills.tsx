import React from 'react'
import { AuroraBackground, AuroraBackgroundDemo } from './backgroundBeam'
import { GlowingStarsBackgroundCardPreview } from './bg'
import Title from './title'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div id="skills" className='flex justify-center md:h-screen h-[1100px] mt-10'>
        
    <div className="banner">
        
        <div className="slider" style={{"--quantity": 7} as React.CSSProperties}>    
          
            <div className="item" style={{"--position": 4} as React.CSSProperties}>
            <GlowingStarsBackgroundCardPreview title='AI Integration' />
                </div>
            <div className="item" style={{"--position": 5}as React.CSSProperties}>
            <GlowingStarsBackgroundCardPreview title='Node js' />
                </div>
            <div className="item" style={{"--position": 6}as React.CSSProperties}>
            <GlowingStarsBackgroundCardPreview title='Payment Gateways' />
                </div>
            <div className="item" style={{"--position": 7}as React.CSSProperties}>
            <GlowingStarsBackgroundCardPreview title='Bloc' />
                </div>
            <div className="item" style={{"--position": 8}as React.CSSProperties}>
            <GlowingStarsBackgroundCardPreview title='Firebase' />
                </div>
            <div className="item" style={{"--position": 9}as React.CSSProperties}>
                <GlowingStarsBackgroundCardPreview title='AWS' />
                </div>
            <div className="item" style={{"--position": 10}as React.CSSProperties}>
                {/* <AuroraBackgroundDemo />
                <h3 className='skill-text'>Flutter</h3> */}
                <GlowingStarsBackgroundCardPreview title="Flutter" />
                {/* <img src="images/dragon_10.jpg" alt="" /> */}
            </div>
        </div>
    
    </div>
    </div>
  )
}

export default Skills
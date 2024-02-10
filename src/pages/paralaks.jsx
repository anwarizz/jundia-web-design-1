import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import React from 'react'

import cloud from '../assets/cloud.png'
import wheel from '../assets/wheel.png'
import tree from '../assets/tree.png'
import mountain from '../assets/mountain.png'
import mountain2 from '../assets/hai.png'
import mountain3 from '../assets/hai2.png'
import sign from '../assets/sign.png'


export default function Wheel() {
  return (
    <Parallax className='wil' rotate={[0, 360]} style={{borderRadius: '100%', overflow: 'hidden'}} >
        <img src={wheel} alt="" style={{width: '100%'}}/>
    </Parallax>
  )
}

export function Cloud() {
  return (
    <Parallax speed={-30} style={{width: '344px', height: '344px', borderRadius: '100%'}} >
        <img src={cloud} alt="" style={{width: '100%'}}/>
    </Parallax>
  )
}

export function Cloud1() {
  return (
    <Parallax speed={-30} style={{width: '344px', height: '344px', borderRadius: '100%'}} >
        <img src={cloud} alt="" style={{width: '100%'}}/>
    </Parallax>
  )
}

export function Wheel2() {
  return (
    <Parallax speed={-150} style={{ marginTop: '60px', marginLeft:'1012px'}} >
      <div style={{width: '1px', height: '700px', backgroundColor:'#E8E8E8', borderRadius: '40px'}}></div>
    </Parallax>
  )
}

export function Wheel3() {
  return (
    <Parallax speed={-90} style={{ marginTop: '60px', marginLeft:'902px'}} >
      <div style={{width: '1px', height: '150px', backgroundColor:'#E8E8E8', borderRadius: '40px'}}></div>
    </Parallax>
  )
}


export function Tree() {
  return (
    <div className='berak' style={{width: '90px', height: '90px', position: 'absolute', bottom: 0, left: 8, top: -91}}>
      <img src={tree} alt="" style={{width: '100%'}} />
    </div>
  )
}


export function Mountain() {
  return (
    <Parallax className='ooo' speed={-15} style={{width: '900px', height: '300px', marginTop: 50 }}>
      <img src={mountain} alt="" style={{width: '130%'}}/>
    </Parallax>
  )
  }


  export function Mountain2() {
    return (
      <Parallax speed={-9} style={{ width: '400px', height: 'auto', position: 'relative', left: -150}}>
        <img src={mountain2} alt="" style={{width: '190%'}}/>
      </Parallax>
  )
}

export function Mountain3() {
  return (
    <Parallax speed={-9} style={{ width: '400px', height: 'auto'}}>
      <img src={mountain3} alt="" style={{width: '180%'}}/>
    </Parallax>
)
}



export function Sign() {
  return (
  <Parallax  className='sign' style={{}} easing={'easeOutQuad'} translateX={[0, 10]} rotate={[0, -20]}>
      <img src={sign} alt="" style={{width: '230%'}}/>
      <span style={{color: 'white', position: 'absolute', top: 150, fontWeight: 600}}>STILL DEVELOP</span>
  </Parallax>
  )
}

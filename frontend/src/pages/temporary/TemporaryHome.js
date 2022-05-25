import React from 'react'
import './style.css'


import heroImg from './assets/hero-img.svg'
import TSLogoDreamy from './assets/dreamy-logo.svg' 
import TSLogoRoseGold from './assets/rosegold-logo.svg' 
import ticaLogo from './assets/tica-logo.png'
import CFALogo from './assets/cfa-logo.png'


import { MCSubscribe } from './components/MCSubscribe'
import { SectionOne } from './components/SectionOne'
import { SectionTwo } from './components/SectionTwo'
import { SectionThree } from './components/SectionThreee'
import { TempFooter } from './components/TempFooter'
import { SectionFour } from './components/SectionFour'



const TemporaryHome = () => {
  return (
    <>
        <section className='hero'>

            <div className="wrapper">
                <img className='TS-logo' src={TSLogoDreamy} alt="" />
                {/* <div className="title"> */}
                    <h1>Ethically Bred Predigree Kittens</h1>
                    <h6>From Registered Breeders You Can Trust</h6>
                {/* </div> */}

                {/* <EmailPrompt></EmailPrompt> */}
                <MCSubscribe></MCSubscribe>

                <img className='hero-bg-img' src={heroImg} alt="" />
            </div>


        </section>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
        <TempFooter></TempFooter>
        

        {/* <section className='intro'>

            <div className="wrapper">
                <h4>Join us in supporting responsible breeding</h4>
                <p>TopSeed is a platform where cat lovers can find registered breeders across the US.
                    We take extra steps to verify the ligitamacy of our breeders so owners can rest 
                    assured that evey kitten they take home with is as healthy, happy, and protected as it is supposed to be.
                </p>

                <div className="association-logos">

                    <a href='https://cfa.org/' className="logo-wrapper" target='_blank'>
                        <img src={CFALogo} alt="" />
                        <p>CFA</p>
                    </a>
                    <a href='https://tica.org/' className="logo-wrapper" target='_blank'>
                        <img src={ticaLogo} alt="" />
                        <p>TICA</p>
                    </a>

                </div>

                <div className="divider"></div>

                <img className='TS-logo' src={TSLogoRoseGold} alt="" />
                <p>Copyright © TopSeed Inc.</p>

                <p>Sign up now and be the first to hear from us when we launch!</p>
            </div>


        </section> */}
    </>

  )
}

export default TemporaryHome
import React from 'react'
import './style.css'


import EmailPrompt from './components/EmailPrompt'
import MailchimpSubscribe from 'react-mailchimp-subscribe'


import BGImg from './assets/bg-img.svg'
import TSLogoDreamy from './assets/dreamy-logo.svg' 
import TSLogoRoseGold from './assets/rosegold-logo.svg' 
import ticaLogo from './assets/tica-logo.png'
import CFALogo from './assets/cfa-logo.png'
import { MCSubscribe } from './components/MCSubscribe'



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

                <img className='hero-bg-img' src={BGImg} alt="" />
            </div>


        </section>


        <section className='intro'>

            <div className="wrapper">
                <h4>Join us in supporting responsible breeding</h4>
                <p>TopSeed is a platform where cat lovers can find registered breeders across the US.
                    We take extra steps to verify the ligitamacy of our breeders so owners can rest 
                    assured that evey kitten they take home with is as healthy, happy, and protected as it is supposed to be.
                </p>

                <div className="association-logos">

                    <div className="logo-wrapper">
                        <img src={CFALogo} alt="" />
                        <p>CFA</p>
                    </div>
                    <div className="logo-wrapper">
                        <img src={ticaLogo} alt="" />
                        <p>TICA</p>
                    </div>

                </div>

                <div className="divider"></div>

                <img className='TS-logo' src={TSLogoRoseGold} alt="" />
                <p>Copyright © TopSeed Inc.</p>

                <p>Sign up now and be the first to hear from us when we launch!</p>
            </div>


        </section>
    </>

  )
}

export default TemporaryHome
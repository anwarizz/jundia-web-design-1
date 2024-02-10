import React, { useEffect, useRef, useState } from "react";
import Wheel, { Wheel2, Wheel3, Tree, Cloud, Cloud1, Mountain, Sign, Mountain2, Mountain3} from "./paralaks";
import { useNavigate } from "react-router-dom";
import ReCAPTHCA from 'react-google-recaptcha'
import { Helmet } from 'react-helmet'

import "../style/home.css";
import "../style/editProfile.css";
import "../style/addTools.css";
import AOS from "aos";
import "aos/dist/aos.css";

import nodeJsLogo from '../assets/nodejs.png'
import cssLogo from '../assets/css.png'
import jsLogo from '../assets/js.png'
import mongodbLogo from '../assets/mongodb.png'
import htmlLogo from '../assets/html.png'
import reactLogo from '../assets/react.png'

import dcLogo from '../assets/discord.png'
import githubLogo from '../assets/github.png'
import igLogo from '../assets/instagram.png'
import tailwindLogo from '../assets/tailwind.png'

import profilePicture from '../assets/jundia.jpeg'

import discussthinkVisual from '../assets/discussthink.png'



import emailjs from '@emailjs/browser'



const userData = {
  _id: '65a734f4a205daf276e95eba',
  profilePicture: profilePicture,
  name: "Jundia Anwari",
  password: "khdmdcm258",
  description: `Hi, my name is Jundia Anwari, I'm 16 years old, I live in Mataram, Lombok, Indonesia. I like learning something new and experimenting with technology.`,
  mds: [
    {
      sourceName: "discord",
      link: "https://discord.com/users/985842141676834887",
      logo: dcLogo,
    },
    { sourceName: "github", link: "https://github.com/gettingdev", logo: githubLogo},
    {
      sourceName: "instagram",
      link: "instagram.com",
      logo: igLogo,
    },
  ],

  languageAndTools: [
    { sourceName: "css", link: "https://www.w3schools.com/css/", logo: cssLogo },
    { sourceName: "javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: jsLogo },
    { sourceName: "tailwind", link: "https://tailwindcss.com/", logo: tailwindLogo},
    { sourceName: "nodejs", link: "https://nodejs.org/", logo: nodeJsLogo },
    {
      sourceName: "mongodb",
      link: "https://www.mongodb.com/",
      logo: mongodbLogo,
    },
    { sourceName: "html", link: "https://www.w3.org/html/", logo: htmlLogo },
    { sourceName: "react", link: "https://reactjs.org/", logo: reactLogo },
  ],
  project: [
    {
      name: "Our Gallery",
      visual:
        "https://assets-global.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png",
      description:
        "The Innovation Collaboration Group - a PropTech collective providing new solutions for the property industry.",
      link: "OurGallery.com",
      imageShadow: "purple",
    },
    {
      name: "Discussthink",
      visual: discussthinkVisual,
      description:
        "Join diverse clubs, gaming circles, or global art communities. Connect effortlessly with close friends. Experience daily conversations and frequent gatherings",
      link: "OurGallery.com",
      imageShadow: "blue",
    },
  ],
};


const Potofolio = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(232, 232, 232, 1)"
  );
  const [transform, setTransform] = useState({});
  const [mobileActive, setMobileActive] = useState(false)

  const navigate = useNavigate()
  
  const projectBox = useRef(null);
  const capRef =  useRef(null)

  const [idle, setIdle] = useState(true)

  const form = useRef()

  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState(false)
  const [captchaValue, setCaptchaValue] = useState(false)
  const [messageToShort, setMessageToShort] = useState(false)
  const [thanks, sayThanks] = useState(false)

  const [noMessage, setNoMessage] = useState(false)


  const sendEmail = (e) => {
    e.preventDefault()

    
    if(captchaValue) {
      // setName('haloo')
      if (notes.length > ('Hello, i ve got a project that i d like to discuss further').length) {
        setIdle(false)
        emailjs.send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          {from_name: name, message: notes, from_email: email, 'g-recaptcha-response': captchaValue},
          import.meta.env.VITE_PUBLIC_KEY,
          ).then(() => {
            setName('')
            setEmail('')
            setNotes('')
            setIdle(true)
            setCaptchaValue(false)
            sayThanks(true)
        })
        
      } else {
        setNoMessage(true)
      }

    }


  }



  
  
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (    <>
    {userData ? (<>

      {/* {contact ? (
        <ThanksContact/>
      ):(
        <></>
      )} */}

        <Helmet>
          <title>Jundia Anwari Portofolio | Getting Develop</title>
          <meta name="keywords" content="Jundia Web Dev Jundia Anwari Portofolio" />
          <meta name="description" content="Hi, my name is Jundia Anwari, I'm 16 years old, I live in Mataram, Lombok, Indonesia. I like learning something new and experimenting with technology."/>
          <meta name="theme-color" content="#ffffff"/>
        </Helmet>
        
        <div className="portofolio-container">
          {/* <Wheel2 />
          <Wheel3 /> */}
          <div
            className="portofolio-tagline-home"
            style={{
              backgroundColor,
              
            }}
          >
            <div
              className="cihuy"
            >
              <span className="getting-develop">
                GETTING DEVELOP
              </span>
              <Wheel />

            </div>
            <div style={{ width: '1200px', height: '100px', display: 'flex', justifyContent: 'space-between', marginTop: 520, marginBottom: 530}}>
                <Cloud />
                <Cloud1 />
            </div>

            <Mountain />
            <div className="custom-mountain" style={{height: '150px', position: 'absolute', bottom: 50, display: 'flex', justifyContent: "space-between"}}>
              <Mountain2/>
              <Mountain3/>
            </div>
            {/* <div style={{color: 'red', width: '100%', height: '100px', backgroundColor: 'blue', position: 'absolute', bottom: 0}}>Haloooo</div> */}

            <div className="portofolio-navbar" style={{ display: "none" }}>
              <div className="portofolio-left">
                <span className="portofolio-jundia-anwari">JUNDIA ANWARI</span>
              </div>
              <div className="portofolio-right">
                <span className="portofolio-contact">CONTACT</span>
                <span className="portofolio-project">PROJECT</span>
                <span className="portofolio-about">ABOUT</span>
              </div>
            </div>
          </div>
          <div className="portofolio-content">
            {/* <div style={{width: '36px', height: '36px', position: 'absolute', right: '110px', marginTop: '110px'}}>
              <img style={{width: '100%'}} src="src/images/bone1.png" alt="" />
            </div> */}
            <div className="portofolio-side" style={{ position: "relative" }}>
            </div>
            <div className="portofolio-main">
              <Tree />
              <span className="portofolio-aboutme">
                <span
                  className="portofolio-text">
                  ABOUT ME
                </span>
                <br></br>
              </span>
              <div className="portofolio-picture-mds">
                <div
                  className="portofolio-picture"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src={userData.profilePicture}
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="portofolio-mds">
                  <span className="portofolio-mediasocial">FIND ME ON</span>
                  <div className="portofolio-acc">
                    {userData.mds.map((media, index) => (
                      <div
                        className="portofolio-container1"
                        style={{ position: "relative" }}
                        key={index}
                      >
                        <a
                          href={media.link}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        ></a>
                        <img src={media.logo} alt="" style={{ width: "100%" }} />
                      </div>
                    ))}
                  </div>
                  <span className="portofolio-lnt">LANGUAGES AND TOOLS</span>
                  <div className="portofolio-sss">
                    {userData.languageAndTools.map((media, index) => (
                      <div
                        className="portofolio-container4"
                        style={{ position: "relative" }}
                        key={index}
                      >
                        <a
                          href={media.link}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        ></a>
                        <img src={media.logo} alt="" style={{ width: "100%" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <span className="portofolio-name">Jundia Anwari</span>
              <span className="portofolio-text02">
                {userData.description}
              </span>
              <Sign/>

              <span className="portofolio-text03">
                {/* Lebih dari sekadar senjata dan peluru, kamu akan memilih Agen
                bersenjatakan kemampuan yang adaptif, tangkas, dan mematikan untuk
                membuktikan keahlian menembakmu. */}
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <div className="portofolio-project-container">
                <span
                  className="portofolio-project-container-header"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  PROJECT
                </span>

                {userData.project.map((data, index) => (
                  <div className="portofolio-pembalut" key={index}>
                    <div
                      className="portofolio-project-box"
                      style={{ borderRadius: "30px" }}
                      // onMouseOver={() => setTransform({[index]: true})}
                      // onMouseOut={() => setTransform({[index]: false})}
                    >
                      <div className="portofolio-left1">
                        <span className="portofolio-text04">{data.name}</span>
                        <span
                          className="portofolio-text05"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                          }}
                        >
                          <span className="dsc">{data.description}</span>
                          <a
                            href="youtube.com"
                            style={{
                              color: "#ffffff",
                              marginTop: "20px",
                              fontSize: "24px",
                            }}
                          >
                            View project
                          </a>
                        </span>
                      </div>
                      <div className="portofolio-right1">
                        <div className="portofolio-image-box" ref={projectBox}>
                          <img
                            src={data.visual}
                            alt=""
                            // style={{
                            //   boxShadow: `35px 10px 0px ${data.imageShadow}`,
                            //   // transform: transform[index] ? `rotateZ(-10deg)` : 'rotateZ(10deg)',
                            //   // width: transform[index] ? '100%' : '120%',
                            // }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="portofolio-contact1">
            {idle ? 
              thanks ? (<span style={{color: 'white', fontSize: '22px'}}>Thank you for contacting me!!!</span>) : (
                <form className="portofolio-form" onSubmit={sendEmail} ref={form} style={{position: 'relative'}}>
                <span className="portofolio-text18">CONTACT</span>
  
                <div className="portofolio-input">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="portofolio-textinput input"
                    name="subject"
                    onChange={e => setName(e.target.value)}
                    required
                    value={name}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="portofolio-textinput1 input"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    value={email}
                  />
                </div>
  
  
                {noMessage ? (
                  <p className="message-warning">The message has no intention</p>
                ):(<></>)}
  
                <textarea
                  placeholder="Message"
                  className="portofolio-textarea textarea"
                  name="body"
                  required
                  onChange={e => setNotes(e.target.value)}
                  value={notes}
                  style={
                    noMessage ? {border: '1px solid red', outline: 'none'} : {border: '1px solid #ffffff4c', outline: 'none'}
                  }
                  >
                    
                  </textarea>
  
                <div className="portofolio-container-for-button" style={{paddingTop: '25px'}}>
                <ReCAPTHCA 
                  sitekey={import.meta.env.VITE_SITE_KEY_CAPTCHA}
                  onChange={e => setCaptchaValue(e)}
                  theme="dark"
                  ref={capRef}
                />
                  <button type="submit" className="portofolio-button button">
                    Submit
                  </button>
  
                </div>
              </form>


              )
            :(<div className="loader"></div>)}
          </div>
        </div>
    
    
    </>):('loading init....')}
    </>
  );
};

export default Potofolio;

import React, { useEffect, useRef, useState } from "react";
import { getImage, docSnap } from '../firebase'

import ReCAPTHCA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "../style/home.css";
import "../style/editProfile.css";
import "../style/addTools.css";
import AOS from "aos";
import "aos/dist/aos.css";

import nodeJsLogo from "../assets/nodejs.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import mongodbLogo from "../assets/mongodb.png";
import bootstrapLogo from "../assets/bootstrap.png";
import htmlLogo from "../assets/html.png";
import reactLogo from "../assets/react.png";
import newsPaper from "../assets/newspaper.png";

import dcLogo from "../assets/discord.png";
import githubLogo from "../assets/github.png";
import igLogo from "../assets/instagram.png";
import tailwindLogo from "../assets/tailwind.png";

import firebaseLogo from "../assets/firebase.png";
import gitLogo from "../assets/git.png";
import mysqlLogo from "../assets/mysql.png";

import profilePicture from "../assets/jundia.jpeg";

import discussthinkVisual from "../assets/discussthink.png";
import findBookVisual from "../assets/findBook.png";
import Tictactoe from "./Tictactoe";

import emailjs from "@emailjs/browser";




const userData1 = {
  _id: "65a734f4a205daf276e95eba",
  profilePicture: profilePicture,
  name: "Jundia Anwari",
  password: "khdmdcm258",
  description: `Hello! I'm Jundia Anwari, a 16-year-old web developer based in the beautiful island of Lombok, Indonesia. I'm enthusiastic about delving into the world of web development and dream of bringing digital creations to life`,
  mds: [
    {
      sourceName: "discord",
      link: "https://discord.com/users/985842141676834887",
      logo: dcLogo,
    },
    {
      sourceName: "github",
      link: "https://github.com/gettingdev",
      logo: githubLogo,
    },
    {
      sourceName: "instagram",
      link: "instagram.com",
      logo: igLogo,
    },
  ],

  languageAndTools: [
    {
      sourceName: "css",
      link: "https://www.w3schools.com/css/",
      logo: cssLogo,
    },
    {
      sourceName: "javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: jsLogo,
    },
    {
      sourceName: "tailwind",
      link: "https://tailwindcss.com/",
      logo: tailwindLogo,
    },
    { sourceName: "nodejs", link: "https://nodejs.org/", logo: nodeJsLogo },
    {
      sourceName: "mongodb",
      link: "https://www.mongodb.com/",
      logo: mongodbLogo,
    },
    { sourceName: "html", link: "https://www.w3.org/html/", logo: htmlLogo },
    { sourceName: "react", link: "https://reactjs.org/", logo: reactLogo },
    { sourceName: "react", link: "https://reactjs.org/", logo: gitLogo },
    {
      sourceName: "bootstrap",
      link: "https://getbootstrap.com/",
      logo: bootstrapLogo,
    },
    { sourceName: "react", link: "https://reactjs.org/", logo: firebaseLogo },
    { sourceName: "react", link: "https://reactjs.org/", logo: mysqlLogo },
  ],
  project: [
    {
      name: "Findbook📕",
      visual: findBookVisual,
      description:
        "A book search application built using ReactJS that interacts with the Google Books API. The application allows users to search for books based on title, author, or specific topic, and displays the search results in a scrollable list.",
      link: "https://findigibook.netlify.app/",
      imageShadow: "purple",
      tools: [firebaseLogo, tailwindLogo, reactLogo],
      status: true,
    },
    {
      name: "LumoSites💡",
      visual: discussthinkVisual,
      description:
        "Join diverse clubs, gaming circles, or global art communities. Connect effortlessly with close friends. Experience daily conversations and frequent gatherings",
      link: "#",
      imageShadow: "blue",
      tools: [jsLogo, tailwindLogo],
      status: false,
    },
  ],
};


const Potofolio = () => {
  const capRef = useRef(null);
  const [idle, setIdle] = useState(true);
  const form = useRef();
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [email, setEmail] = useState("");
  const [captchaValue, setCaptchaValue] = useState(false);
  const [thanks, sayThanks] = useState(false);

  const [noMessage, setNoMessage] = useState(false);

  const [userData, setUserData] = useState({})
  const all = async () => {
    const response = await docSnap('userData')
    console.log(response.data())
    setUserData(response.data())
  }
  

  const sendEmail = (e) => {
    e.preventDefault();
    if (captchaValue) {
      if (
        notes.length >
        "Hello, i ve got a project that i d like to discuss further".length
      ) {
        setIdle(false);
        emailjs
          .send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
              from_name: name,
              message: notes,
              from_email: email,
              "g-recaptcha-response": captchaValue,
            },
            import.meta.env.VITE_PUBLIC_KEY
          )
          .then(() => {
            setName("");
            setEmail("");
            setNotes("");
            setIdle(true);
            setCaptchaValue(false);
            sayThanks(true);
          });
      } else {
        setNoMessage(true);
      }
    }
  };

  const [up, setUp] = useState(false);

  const goPlay = () => {
    if (!up) {
      window.scrollTo({
        top: 897,
        behavior: "smooth",
      });
      return setUp(!up);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setUp(!up);
  };

  const [cursorMove, setCursorMove] = useState(0);

  const handleCursor = (e) => {
    const parentRect = e.target.getBoundingClientRect();
    const x = e.clientX - parentRect.left;
    setCursorMove(x);
  };

  useEffect(() => {
    AOS.init();
    all()
  }, []);

  return (
    <>
      {userData && userData.mds && userData.languageAndTools && userData.projects? (
        <>
          {!up ? (
            <>
              <button
                onClick={goPlay}
                className="fixed right-3 bottom-3 text-white w-10 h-10 bg-gray-700 border rounded-[5px] border-gray-400 p-2"
              >
                <svg
                  fill="#ffffff"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Launch</title>
                  <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
                </svg>
              </button>
            </>
          ) : (
            <></>
          )}

          <Helmet>
            <title>Hi there👋</title>
            <meta
              name="keywords"
              content="Jundia Web Dev Jundia Anwari Portofolio Personal Website"
            />
            <meta
              name="description"
              content="Hi, my name is Jundia Anwari, I'm 16 years old, I live in Mataram, Lombok, Indonesia. I like learning something new and experimenting with technology."
            />
            <meta name="theme-color" content="#ffffff" />
          </Helmet>

          <div className="portofolio-container">
            {/* <Wheel2 />
          <Wheel3 /> */}
            <div className="md:h-[900px] flex flex-col md:flex-row items-end md:items-start md:justify-between xl:w-[1200px] w-[92%] md:pl-0 pl-4">
              <div className="flex items-center md:items-start md:flex-col md:pr-0 pr-1">
                <h1 className="font-bold md:text-[56px] text-[23px] text-white md:pt-[300px] pt-6">
                  Hi there👋
                </h1>
                <p className="text-white md:text-[18px] text-[14px] pt-[28px] pl-1 md:pl-0 md:pt-0 font-extralight md:block hidden">
                  Welcome to my personal website
                </p>
              </div>

              <Tictactoe />

              {/* <div style={{color: 'red', width: '100%', height: '100px', backgroundColor: 'blue', position: 'absolute', bottom: 0}}>Haloooo</div> */}
            </div>
            <div className="portofolio-content">
              {/* <div style={{width: '36px', height: '36px', position: 'absolute', right: '110px', marginTop: '110px'}}>
              <img style={{width: '100%'}} src="src/images/bone1.png" alt="" />
            </div> */}
              <div
                className="portofolio-side"
                style={{ position: "relative" }}
              ></div>
              <div className="w-full xl:w-[1200px] pt-10  xl:pl-0 lg:pl-6">
                <span className="md:text-[20px] font-bold mb-[53px]">
                  <span className="md:text-white text-[#818181] md:bg-[#818181] ml-9 md:ml-12 lg:ml-0">
                    ABOUT ME
                  </span>
                  <br></br>
                </span>
                <div className="flex mt-4 justify-between lg:flex-row flex-col pb-8 border-white md:w-auto w-[92%] m-auto">
                  <div className="flex flex-col">
                    <div className="flex items-center md:items-start pl-3 md:pl-12 lg:pl-0">
                      <div className="md:w-[160px] md:h-[163px] w-[150px] h-[153px] flex items-start mr-4 md:mr-[35px] rounded-[21px] flex-shrink-0 overflow-hidden">
                        <img
                          src={userData.profilePicture}
                          alt="Jundia Anwari"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="flex flex-col md:w-full w-[52%]">
                        <span className="portofolio-mediasocial">
                          FIND ME ON
                        </span>
                        <div className="flex md:gap-[19px] gap-[13px] mb-[16px]">
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
                              <img
                                src={media.logo}
                                alt=""
                                style={{ width: "100%" }}
                              />
                            </div>
                          ))}
                        </div>
                        <span className="portofolio-lnt">
                          LANGUAGES AND TOOLS
                        </span>
                        <div
                          onMouseMove={handleCursor}
                          className="flex md:gap-[19px] gap-[13px] mb-[13px] flex-wrap relative group"
                        >
                          {userData.languageAndTools
                            .slice(0, 7)
                            .map((media, index) => (
                              <div
                                onMouseMove={(e) => e.stopPropagation()}
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
                                <img
                                  src={media.logo}
                                  alt=""
                                  style={{ width: "100%" }}
                                />
                              </div>
                            ))}
                          <div className="w-full h-full absolute "></div>
                          <button className="text-blue-600 text-[16px] flex items-start">
                            {userData.languageAndTools.length - 7}+
                          </button>
                          <div
                            className="p-2 bg-gray-700 rounded-[7px] border border-gray-400 group-hover:flex gap-[12px] absolute md:top-[-62px] top-[70px] z-30 hidden"
                            style={{ left: `${cursorMove}px` }}
                          >
                            {userData.languageAndTools
                              .slice(7, userData.languageAndTools.length)
                              .map((media, index) => (
                                <div className="portofolio-container4 relative">
                                  <img
                                    src={media.logo}
                                    alt=""
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:mt-[10px] mt-9">
                      <h1 className="text-white font-medium md:text-[42px] text-[32px] pl-4 md:pl-12 lg:pl-0 mb-2">
                        Jundia Anwari
                      </h1>
                      <p className="text-white w-[95%] md:w-[600px] md:text-[20px] md:pl-12 pl-4 lg:pl-0">
                        {userData.description}
                      </p>
                    </div>
                  </div>
                  <section className="bg-black-200 border-gray-200 rounded-[10px] md:mr-14 md:pl-12 pl-4 lg:pl-0 lg:mt-0 mt-9 md:w-[406.5px] lg:ml-10">
                    <h2 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Short trip
                    </h2>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-7">
                      <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          2021-2022
                        </time>
                        <h3 className="text-white font-thin">
                          Start code from middle school through C and C++
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
                      </li>
                      <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          March 2022
                        </time>
                        <h3 className="text-white font-thin">
                          Trying to understand web development
                        </h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                      </li>
                      <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          Now
                        </time>
                        <h3 className="text-white font-thin">....</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                      </li>
                    </ol>

                    <Link to="/about" className="text-blue-700">
                      More about me and my trip..
                    </Link>
                  </section>
                </div>

                <div className="md:mt-10 mt-12 flex flex-col items-center lg:items-start">
                  <span
                    className="m-auto text-white w-[92%] md:justify-end md:pr-20 items-center flex md:text-[32px] text-[26px] md:mb-12 mb-16 md:pl-0 pl-4 font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    My projects{" (2)"}🔥
                  </span>

                  {userData.projects.map((data, index) => (
                    <div
                      className="xl:w-[1200px] w-[92%] lg:items-center md:items-start items-center mb-[100px] md:pl-10 md:pr-10 lg:pl-0 lg:pr-0 flex flex-col md:flex-row"
                      key={index}
                    >
                      <div className="lg:w-[700px] md:w-[420px] w-[93%] rounded-[10px] overflow-hidden border">
                        <div className="border-b h-10 overflow-hidden flex items-center gap-[6px] pl-4">
                          <div className="w-[9px] h-[9px] bg-red-500 rounded-full"></div>
                          <div className="w-[9px] h-[9px] bg-yellow-500 rounded-full"></div>
                          <div className="w-[9px] h-[9px] bg-green-500 rounded-full"></div>
                        </div>
                        <div className="w-full">
                          <img
                            src={data.visual}
                            alt=""
                            className="opacity-0 hover:opacity-[1] transition-all"
                          />
                        </div>
                      </div>
                      <div className="md:w-[480px] md:pl-12 pl-4 md:pt-4 pt-6 flex flex-col gap-4">
                        <h3 className="text-white text-[20px]">{data.name}</h3>
                        <div className="flex items-center gap-5">
                          <button className=" rounded-[5px] relative w-auto h-[40px] text-white flex items-center bg-gray-700 border border-gray-400 font-bold">
                            <Link
                              target="blank"
                              to={data.link}
                              className="flex items-center pl-4 pr-5 pb-2 pt-2 gap-2 justify-center w-full h-full"
                            >
                              Launch
                              <div className="w-4 h-4">
                                <svg
                                  fill="#ffffff"
                                  viewBox="0 0 32 32"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>Launch</title>
                                  <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
                                </svg>
                              </div>
                            </Link>
                          </button>
                          {data.status ? (
                            <div className="text-lime-400 flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-lime-400"></div>
                              available to run
                            </div>
                          ) : (
                            <div className="text-red-400 flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-red-400"></div>
                              not available to run
                            </div>
                          )}
                        </div>
                        <p className="text-white">{data.description}</p>
                        <div className="w-full flex flex-wrap gap-2 pt-10">
                          {data.tools.map((tool, index) => (
                            <div className="w-8 h-8">
                              <img src={tool} alt="" key={index} />
                            </div>
                          ))}
                        </div>
                        <div className="lg:mt-[2px] mt-0">
                          <button className="md:text-blue-500 text-white text-[22px] flex items-center lg:justify-start lg:pr-0 pr-5 justify-end w-full">
                            ....
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-20 overflow-hidden mb-[100px] xl:w-[1200px] w-full justify-center lg:justify-start">
              {idle ? (
                thanks ? (
                  <span style={{ color: "white", fontSize: "22px" }}>
                    Thank you for contacting me!!!
                  </span>
                ) : (
                  <form
                    className="md:w-auto w-[92%] p-4 pt-14 md:m-0 m-auto"
                    onSubmit={sendEmail}
                    ref={form}
                    style={{ position: "relative" }}
                  >
                    <span className="font-medium text-[46px] text-white mb-10">
                      Contact
                    </span>
                    <div className="flex flex-col gap-3 mt-[20px]">
                      <input
                        type="text"
                        placeholder="Name"
                        className="h-11 p-3"
                        name="subject"
                        onChange={(e) => setName(e.target.value)}
                        required
                        value={name}
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="h-11 p-3"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        value={email}
                      />
                    </div>

                    {noMessage ? (
                      <p className="message-warning">
                        The message has no intention
                      </p>
                    ) : (
                      <></>
                    )}

                    <textarea
                      placeholder="Message"
                      className="mt-3 w-full md:w-[700px] xl:w-[700px] h-[160px] p-3 mb-1"
                      name="body"
                      required
                      onChange={(e) => setNotes(e.target.value)}
                      value={notes}
                      style={
                        noMessage
                          ? { border: "1px solid red", outline: "none" }
                          : { border: "3px solid #ffffff", outline: "none" }
                      }
                    ></textarea>

                    <div className="flex justify-between items-center flex-wrap">
                      <ReCAPTHCA
                        sitekey={import.meta.env.VITE_SITE_KEY_CAPTCHA}
                        onChange={(e) => setCaptchaValue(e)}
                        theme="dark"
                        ref={capRef}
                      />
                      <button
                        type="submit"
                        className="bg-white border-2 border-white h-12 pl-8 pr-8"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )
              ) : (
                <div className="loader"></div>
              )}
              <div className="hidden lg:block">
                <p className="text-white mb-1">Also me:</p>
                <div className="w-[300px] rotate-0 h-[max-content] hover:-rotate-6 transition-all rounded-[10px] overflow-hidden ">
                  <img src={newsPaper} alt="" />
                </div>
              </div>
            </div>
          </div>
          <footer className=" w-[92%] 2xl:w-[1300px] m-auto border-t flex pt-4 justify-center gap-3 h-[120px]">
            <p className="text-white font-medium opacity-30 text-[14px]">
              Thank you for coming 🙏
            </p>
            {/* <div className="w-4 h-4 bg-gray-500"></div>
          <div className="w-6 h-6 bg-gray-500"></div>
          <div className="w-4 h-4 bg-gray-500"></div> */}
          </footer>
        </>
      ) : (
        "loading init...."
      )}
    </>
  );
};

export default Potofolio;

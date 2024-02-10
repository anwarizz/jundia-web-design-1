import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'










const userData = {
  _id: '65a734f4a205daf276e95eba',
  profilePicture: "src/images/jundia.jpeg",
  name: "Jundia Anwari",
  password: "khdmdcm258",
  description: `Hi, I'm 15 years old, I live in Mataram, Lombok, Indonesia. I like learning something new and experimenting with technology.`,
  mds: [
    {
      sourceName: "discord",
      link: "discord.com",
      logo: "src/images/discord.png",
    },
    { sourceName: "github", link: "github.com", logo: "src/images/github.png" },
    {
      sourceName: "instagram",
      link: "instagram.com",
      logo: "src/images/instagram.png",
    },
  ],

  languageAndTools: [
    { sourceName: "css", link: "css.com", logo: "src/images/css (2).png" },
    { sourceName: "javascript", link: "js.com", logo: "http://localhost:5173/src/images/js.png" },
    { sourceName: "nodejs", link: "nodejs.com", logo: "src/images/nodejs.png" },
    {
      sourceName: "mongodb",
      link: "mongodb.com",
      logo: "src/images/mongodb.png",
    },
    { sourceName: "html", link: "html.com", logo: "src/images/html.png" },
    { sourceName: "react", link: "react.com", logo: "src/images/react.png" },
  ],
  project: [
    {
      name: "Our Gallery",
      visual:
        "https://assets-global.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png",
      description:
        "The Innovation Collaboration Group - a PropTech collective providing new solutions for the property industry.",
      link: "OurGallery.com",
      imageShadow: "red",
    },
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
      name: "Our Gallery",
      visual:
        "https://s.yimg.com/ny/api/res/1.2/I7V_8x.T2ZeanWFYzunE6g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2020-05/9c143b80-9134-11ea-bfdf-54dbdb5316e4",
      description:
        "The Innovation Collaboration Group - a PropTech collective providing new solutions for the property industry.",
      link: "OurGallery.com",
      imageShadow: "pink",
    },
    {
      name: "Our Gallery",
      visual:
        "https://assets-global.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png",
      description:
        "The Innovation Collaboration Group - a PropTech collective providing new solutions for the property industry.",
      link: "OurGallery.com",
      imageShadow: "blue",
    },
    {
      name: "Our Gallery",
      visual:
        "https://assets-global.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png",
      description:
        "The Innovation Collaboration Group - a PropTech collective providing new solutions for the property industry.",
      link: "OurGallery.com",
      imageShadow: "yellow",
    },
  ],
};





const AddTools = ({userID, target, onClose}) => {


  return (
    <form className="edit-mds-container" >
      <div className="edit-mds-input-container">
        <div className="edit-mds-input-right">
          <span className="edit-mds-text">Resource Name</span>
          <input
            type="text"
            required
            placeholder="Example"
            className="edit-mds-textinput input"
          />
          <span className="edit-mds-text1">Link</span>
          <input
            type="text"
            required
            placeholder="Example.com"
            className="edit-mds-textinput1 input"
            onChange={(e) => setLink(e.target.value)}
          />
          <span className="edit-mds-text2">Logo</span>
          <input
            type="file"
            required
            name="logo"
            placeholder="Jundia anwari"
            className="edit-mds-textinput2 input"
          />
        </div>
      </div>
      <button type="submit" className="edit-mds-button button">
        Add
      </button>
    </form>
  )
}



export default AddTools

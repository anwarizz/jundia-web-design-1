import React from 'react'

import PropTypes from 'prop-types'

const EditProfile = (props) => {
  return (
    <form className="edit-profile-container" onClick={e => e.stopPropagation()}>
      <div className="edit-profile-input-container">
        <div className="edit-profile-input-leftt">
          <span className="edit-profile-text">{props.text1}</span>
          <div className="edit-profile-picture">
            <img
              src={props.image_src}
              alt={props.image_alt}
              className="edit-profile-image"
            />
          </div>
          <button type="button" className="edit-profile-button button">
            {props.button2}
          </button>
        </div>
        <div className="edit-profile-input-right">
          <span className="edit-profile-text1">{props.text}</span>
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            required
            className="edit-profile-textinput input"
          />
          <span className="edit-profile-text2">{props.text3}</span>
          <div className="edit-profile-password">
            <input
              type="password"
              required
              placeholder="Password"
              className="edit-profile-textinput1 input"
            />
            <button type="button" className="edit-profile-button1 button">
              {props.button1}
            </button>
          </div>
          <span className="edit-profile-text3">{props.text2}</span>
          <textarea
            placeholder={props.textarea_placeholder}
            className="edit-profile-textarea textarea"
          ></textarea>
        </div>
      </div>
      <button type="button" className="edit-profile-button2 button">
        {props.button}
      </button>
    </form>
  )
}

EditProfile.defaultProps = {
  text1: 'Picture',
  text: 'Name',
  textinput_placeholder: 'Jundia anwari',
  text2: 'Description',
  textinput_placeholder1: 'Password',
  text3: 'Password',
  textinput_placeholder2: 'Jundia Anwari',
  textarea_placeholder: 'Description',
  button: 'Save',
  button1: 'Change',
  button2: 'Change picture',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

EditProfile.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text3: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  button2: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default EditProfile

import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'

import './Contact.css'
function Contact() {
  return (
    <>
      <Header title="Get in Touch" image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente sit et consectetur vel minima aliquid, in repellendus?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:ahmedd.code@gmail.com" target="_blank" rel='noreferrer'>
              <AiOutlineMail />
            </a>
            <a href="https://facebook.com/ahmdreshad" target="_blank" rel='noreferrer'>
              <FaFacebookMessenger />
            </a>
            <a href="https://wa.me/+918919033872" target="_blank" rel='noreferrer'>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
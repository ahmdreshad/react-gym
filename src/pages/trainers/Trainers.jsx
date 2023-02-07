import React from 'react'
import Header from '../../components/Header'
import Trainer from '../../components/Trainer'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Trainers.css'
function Trainers() {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad recusandae
        reprehenderit eos obcaecati, aspe
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, name, job, image, socials }) => {
            return (
              <Trainer
                key={id}
                name={name}
                image={image}
                job={job}
                socials={[
                  {
                    icon: <FaInstagram />,
                    link: socials[0],
                  },
                  {
                    icon: <FaTwitter />,
                    link: socials[1],
                  },
                  {
                    icon: <FaFacebook />,
                    link: socials[2],
                  },
                  {
                    icon: <FaLinkedin />,
                    link: socials[3],
                  },
                ]}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Trainers

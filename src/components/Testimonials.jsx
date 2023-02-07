import SectionHead from './SectionHead'
import { useState } from 'react'
import Card from '../UI/Card'
import { ImQuotesLeft } from 'react-icons/im'
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa'
import { testimonials } from '../data'
import React from 'react'

function Testimonials() {
  const [index, setIndex] = useState(0)
  const { name, quote, job, avatar } = testimonials[index]

  const nextSlideHandler = () => {
    setIndex((prev) => prev + 1)

    if (index >= testimonials.length - 1) {
      setIndex(0)
    }
  }

  const prevSlideHandler = () => {
    setIndex((prev) => prev - 1)
    if (index <= 0) {
      setIndex(testimonials.length - 1)
    }
  }

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt="" />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button className="testimonials__btn" onClick={prevSlideHandler}>
            <FaChevronCircleLeft />
          </button>
          <button className="testimonials__btn" onClick={nextSlideHandler}>
            <FaChevronCircleRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

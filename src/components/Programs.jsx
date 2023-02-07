import React from 'react'
import { Link } from 'react-router-dom'
import { FaCrown, FaChevronCircleRight } from 'react-icons/fa'
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import { programs } from '../data'

function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />
        <div className="programs__wrapper">
          {programs.map(({ id, title, info, icon, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <FaChevronCircleRight />
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Programs

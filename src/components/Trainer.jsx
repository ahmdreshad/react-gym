import React from 'react'
import Card from '../UI/Card'
function Trainer({ image, name, job, socials }) {
  return (
    <Card className="trainer">
      <div className="trainer__img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer__icons">
        {socials.map(({ icon, link }, index) => {
          return (
            <a href={link} key={index} target="_blank" rel="noreferrer">
              {icon}
            </a>
          )
        })}
      </div>
    </Card>
  )
}

export default Trainer
import Image from '../images/values.jpg'
import { values } from '../data'
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import { GiCutDiamond } from 'react-icons/gi'

function Values() {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ad
            quisquam quibusdam debitis quidem{' '}
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values

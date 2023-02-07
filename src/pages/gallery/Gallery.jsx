import React from 'react'
import Header from '../../components/Header'
import GalleryImage from '../../images/header_bg_3.jpg'
import './Gallery.css'
function Gallery() {
  const imagesLength = 15
  const images = []
  for (let i = 1; i <= imagesLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  console.log(images)
  return (
    <>
      <Header title="Our Gallery" image={GalleryImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi
        ullam, architecto reprehenderit iste, commodi hic saep
      </Header>
      <section className="gellery">
        <div className="container gallery__container">
          {images.map((img, idx) => {
            return (
              <article key={idx}>
                <img src={img} alt={`Gallery Img ${idx + 1}`} />
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery

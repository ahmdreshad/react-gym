import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './About.css'
function About() {
  return (
    <>
      <Header title="About" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
        pariatur! ctetur adipisicing elit. Labore, pariatur!
      </Header>

      {/* ==== story section  */}
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-img">
            <img src={StoryImage} alt="Story img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              beatae fugit fugiat voluptatem tempore sunt natus molestiae eum ab
              porro? at voluptatem tempore sunt natus molestiae eum ab porro
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              beatae fugit fugiat voluptatem tempore sunt natus molestiae eum ab
              porro? at voluptatem tempore sunt natus molestiae eum ab porro
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              beatae fugit ?
            </p>
          </div>
        </div>
      </section>

      {/* ==== vision section  */}
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              beatae fugit fugiat voluptatem tempore sunt natus molestiae eum ab
              porro? at voluptatem tempore sunt natus molestiae eum ab porro
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              beatae fugit fugiat voluptatem tempore sunt natus molestiae eum ab
              porro? at voluptatem tempore sunt natus molestiae eum ab porro
            </p>
          </div>
          <div className="about__section-img">
            <img src={VisionImage} alt="vision img" />
          </div>
        </div>
      </section>

      {/* ==== mission section  */}
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-img">
            <img src={MissionImage} alt="mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              beatae fugit fugiat voluptatem tempore sunt natus molestiae eum ab
              porro? at voluptatem tempore sunt natus molestiae eum ab porro
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              beatae fugit fugiat voluptatem tempore sunt natus molestiae eum ab
              porro? at voluptatem tempore sunt natus molestiae eum ab porro
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              beatae fugit ?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <main className="page">
      <header className="hero">
        <StaticImage src="../assets/images/lawn.jpg" alt="home page image" 
        className="hero-img" placeholder="tracedSVG" layout="fullWidth"
        />
        <div className="hero-container">
          <div className="hero-text">
            <h1>quality lawn services</h1>
            <h4>no cruff, just quality</h4>
          </div>
        </div>
      <div className="home-flex">
        <div><p><span className="bold">A</span> well maintained property has numerous benefits. It increases the value of the property; it welcomes you
        after a hard days work; it looks inviting and friendly; spurs creativity; promotes optimism; 
        encourages the right type of wild life; and stimulates enjoyable, playful moments in the yard.</p>
        <p>You have invested much in your property. Let<span className="bold">CQLS</span> take care of all your lawn care.</p></div>
        <div className="home-flex-nest">
          <div className="home-flex-span2"><h3 className="">Services</h3> </div>
          <div>
            <ul>
              <li>
                Mowing
              </li>
              <li>Weeding</li>
              <li>Edging</li>
              <li>Shrub trimming and removal</li>
            </ul>
            </div>
            <div>
              <ul>
                <li>
                  Tree trimming
                </li>
                <li>Fallen branch removal</li>
                <li>Yard cleanup</li>
                <li>Green trash removal</li>
              </ul>
              </div>
          </div>
        </div>
      </header>
      </main>
    </Layout>
  )
}

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
            <h4>no fluff, just quality</h4>
          </div>
        </div>
      <div></div>
      </header>
      </main>
    </Layout>
  )
}

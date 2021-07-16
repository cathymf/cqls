import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                    <h2>About Us</h2>
                    <p>I am just a young man, trying to use my passion for the outdoors into a profession

                    </p>
                    <p></p>
                    </article>
                    <StaticImage src="../assets/images/IMG_203.jpg" alt="another project" 
                    className="about-img" placeholder="tracedSVG" />
                </section>
            </main>
        </Layout>
    )
}

export default About

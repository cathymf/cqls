import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { GiHighGrass } from 'react-icons/gi'

const gallery = () => {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                    <h2>Recent Projects</h2>
                    <p><span><GiHighGrass /> </span><span className="bold"> C</span>oming soon!!!!

                    </p>
                    <p></p>
                    </article>
                    
                </section>
            </main>
        </Layout>
    )
}

export default gallery

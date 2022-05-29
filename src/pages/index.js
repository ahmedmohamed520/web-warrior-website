import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const img = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design!!</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Cairo.</p>
          <Link className={styles.btn} to="/projects">
            My Portofolio Projects
          </Link>
        </div>
        <GatsbyImage image={img} alt="banner" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  query image {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
          placeholder: BLURRED
        )
      }
    }
  }
`

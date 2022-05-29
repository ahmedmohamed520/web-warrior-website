import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function projectDetails({ data }) {
  const {
    frontmatter: { stack, title, featuredImg },
    html,
  } = data.markdownRemark
  const imageData = featuredImg.childImageSharp.gatsbyImageData
  const image = getImage(imageData)

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={image} alt={title} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TemplateData($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              width: 960
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 25
            )
          }
        }
      }
    }
  }
`

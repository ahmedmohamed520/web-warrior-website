import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes
  const contact = data.contact.siteMetadata.contact
  // const nodes = data.allMarkdownRemark.nodes
  // console.log(data.allMarkdownRemark.nodes)

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portofolio</h2>
        <h3>Projects & Websites I've Created</h3>

        <div className={styles.projects}>
          {projects.map(project => {
            const { title, slug, stack, thumb } = project.frontmatter
            const imageData = thumb.childImageSharp.gatsbyImageData
            const image = getImage(imageData)
            return (
              <Link key={project.id} to={`/projects/${slug}`}>
                <GatsbyImage image={image} alt={project.id} />
                <h3> {title}</h3>
                <p>{stack}</p>
              </Link>
            )
          })}
        </div>
        <p>like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}
// Export page query
export const query = graphql`
  query ProjectPage {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                width: 250
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        id
      }
    }

    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`

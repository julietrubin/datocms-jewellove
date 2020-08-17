import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const Index = ({ data: { links } }) => (
  <Layout>
  <article className="sheet">
      <div className="sheet__inner">
        <div
          className="sheet__body"
        />
        <ul>
          {links.edges.map(({ node: link }) => (
            <li className="buttons">
              <a
                key={link.profileType}
                href={link.url}
                target="blank"
                className="button"
              >
                {link.profileType}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  </Layout>
)

export default Index


export const query = graphql`
  query LinksQuery {
    links: allDatoCmsLink(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          profileType
          url
        }
      }
    }
  }
`
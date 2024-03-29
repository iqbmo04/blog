import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import './index.css';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      <section id='blogs'>
        <div className='container blogs__container'>
          {
            data.allMdx.nodes.map((node) => (
              <div className='blogs__item'>
                <article key={node.id}>    
                  <h2>
                    <Link to={`/blog/${node.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>Posted: {node.frontmatter.date}</p>
                </article>
              </div>
            ))
          }
        </div>
      </section>
    </Layout>
  )
}


export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM, D YYYY")
          }
        }
      }
    }
  }
`

export default BlogPage
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout/layout'

const BlogPost = ({ data }) => {
    // const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <section id='blog'>
                <div className='container blog__container'>
                    <div className='container blog__head'>
                        <p>Posted: {data.mdx.frontmatter.date}</p>
                        {/* <h1>{data.mdx.frontmatter.title}</h1> */}
                        <div className='container blog__hero-image'>
                        {/* <GatsbyImage
                            image={image}
                            alt={data.mdx.frontmatter.hero_image_alt}
                        /> */}
                        {/* <p>
                            Photo Credit:{" "}
                            <a href={data.mdx.frontmatter.hero_image_credit_link}>
                                {data.mdx.frontmatter.hero_image_credit_text}
                            </a>
                        </p> */}
                        </div>
                    </div>
                    <div className='container blog__content'>
                        <MDXRenderer>
                            {data.mdx.body}
                        </MDXRenderer>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export default BlogPost

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedPosts from "../components/featured-posts"
import Container from "../components/container"
import Overview from "../components/overview"
import Sidebar from "../components/sidebar"
import RecentPost from "../components/recent-post"

class IndexTemplate extends React.Component {
	render() {
		const { data, pageContext, location } = this.props
		const { language } = pageContext
		const siteTitle = data.site.siteMetadata.title
		const posts = data.allMarkdownRemark.edges

		return (
			<Layout location={location} title={siteTitle} language={language}>
				<SEO title="All posts"/>
				<FeaturedPosts/>
				<Container>
					<Overview lang={language} posts={posts}/>
					<Sidebar>
						<RecentPost lang={language} posts={posts}/>
					</Sidebar>
				</Container>
			</Layout>
		)
	}
}

export default IndexTemplate

export const pageQuery = graphql`
	query IndexByLang($language: String!) {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(filter: {frontmatter: {lang: {eq: $language}}}, sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						lang
						title
						description
						tags
						thumbnail {
							childImageSharp {
								fluid (maxWidth:500, quality:50){
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`

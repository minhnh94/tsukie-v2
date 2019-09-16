import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagPageBanner from "../components/tag-page-banner"
import Container from "../components/container"
import Overview from "../components/overview"
import Sidebar from "../components/sidebar"

class TagIndexTemplate extends React.Component {
	render() {
		const { data, pageContext, location } = this.props
		const { language } = pageContext
		const siteTitle = data.site.siteMetadata.title
		const posts = data.allMarkdownRemark.edges

		return (
			<Layout location={location} title={siteTitle} language={language}>
				<SEO title="All posts"/>
				<TagPageBanner/>
				<Container>
					<Overview lang={language} posts={posts}/>
					<Sidebar/>
				</Container>
			</Layout>
		)
	}
}

export default TagIndexTemplate

export const pageQuery = graphql`
	query IndexByLangAndTag($language: String!, $tag: String!) {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(filter: {frontmatter: {lang: {eq: $language}, tags: {eq: $tag}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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

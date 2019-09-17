import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagPageBanner from "../components/tag-page-banner"
import Container from "../components/container"
import Overview from "../components/overview"
import Sidebar from "../components/sidebar"
import RecentPost from "../components/recent-post"

class TagIndexTemplate extends React.Component {
	render() {
		const { data, pageContext, location } = this.props
		const { language } = pageContext
		const siteTitle = data.site.siteMetadata.title
		const tagPosts = data.tagPosts.edges
		const allPosts = data.allPosts.edges

		return (
			<Layout location={location} title={siteTitle} language={language}>
				<SEO title="All posts"/>
				<TagPageBanner/>
				<Container>
					<Overview lang={language} posts={tagPosts}/>
					<Sidebar>
						<RecentPost lang={language} posts={allPosts}/>
					</Sidebar>
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
		tagPosts: allMarkdownRemark(filter: {frontmatter: {lang: {eq: $language}, tags: {eq: $tag}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
		allPosts: allMarkdownRemark(filter: {frontmatter: {lang: {eq: $language}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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

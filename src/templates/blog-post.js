import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleDetail from "../components/article-detail"
import Container from "../components/container"
import Sidebar from "../components/sidebar"
import RecentPostWidget from "../components/recent-post-widget"

class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark
		const { tags } = post.frontmatter
		const allPosts = this.props.data.allMarkdownRemark.edges
		const siteTitle = this.props.data.site.siteMetadata.title
		const { language } = this.props.pageContext

		return (
			<Layout location={this.props.location} title={siteTitle} language={language}>
				<SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description || post.excerpt}
				/>
				<Container>
					<ArticleDetail post={post} tags={tags} lang={language}/>
					<Sidebar>
						<RecentPostWidget lang={language} posts={allPosts}/>
					</Sidebar>
				</Container>
			</Layout>
		)
	}
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!, $language: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				lang
				description
				tags
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

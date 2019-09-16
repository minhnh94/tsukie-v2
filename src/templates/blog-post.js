import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleDetail from "../components/article-detail"

class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark
		const siteTitle = this.props.data.site.siteMetadata.title
		const { previous, next, language } = this.props.pageContext

		return (
			<Layout location={this.props.location} title={siteTitle} language={language}>
				<SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description || post.excerpt}
				/>
				<ArticleDetail post={post}/>
			</Layout>
		)
	}
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
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
			}
		}
	}
`

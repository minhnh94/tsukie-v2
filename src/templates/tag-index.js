import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagPageBanner from "../components/tag-page-banner"
import Container from "../components/container"
import Overview from "../components/overview"
import Sidebar from "../components/sidebar"
import RecentPostWidget from "../components/widgets/recent-post-widget"
import AllTagsWidget from "../components/widgets/all-tags-widget"

class TagIndexTemplate extends React.Component {
	render() {
		const { data, pageContext, location } = this.props
		const { language, currentPage, numPages, tag } = pageContext
		const siteTitle = data.site.siteMetadata.title
		const tagPosts = data.tagPosts.edges
		const allPosts = data.allPosts.edges

		const linkWithLang = language === "en" ? `/tags/${tag}` : `/${language}/tags/${tag}`
		const isFirst = currentPage === 1
		const isLast = currentPage === numPages
		const prevPage = currentPage - 1 === 1 ? `${linkWithLang}` : `${linkWithLang}${currentPage - 1}`
		const nextPage = `${linkWithLang}${currentPage + 1}`
		const pagingData = {
			isFirst,
			isLast,
			prevPage,
			nextPage,
		}

		return (
			<Layout location={location} title={siteTitle} language={language}>
				<SEO title="All posts"/>
				<TagPageBanner/>
				<Container>
					<Overview lang={language} posts={tagPosts} pagingData={pagingData}/>
					<Sidebar>
						<RecentPostWidget lang={language} posts={allPosts}/>
						<AllTagsWidget edges={allPosts} lang={language}/>
					</Sidebar>
				</Container>
			</Layout>
		)
	}
}

export default TagIndexTemplate

export const pageQuery = graphql`
	query IndexByLangAndTag($language: String!, $tag: String!, $limit: Int!, $skip: Int!) {
		site {
			siteMetadata {
				title
			}
		}
		tagPosts: allMarkdownRemark(
			filter: {frontmatter: {lang: {eq: $language}, tags: {eq: $tag}}},
			sort: { fields: [frontmatter___date], order: DESC },
			limit: $limit,
			skip: $skip
		) {
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

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedPosts from "../components/featured-posts"
import Container from "../components/container"
import Overview from "../components/overview"
import Sidebar from "../components/sidebar"
import RecentPostWidget from "../components/widgets/recent-post-widget"
import AllTagsWidget from "../components/widgets/all-tags-widget"

class IndexTemplate extends React.Component {
	render() {
		const { data, pageContext, location } = this.props
		const { language } = pageContext
		const siteTitle = data.site.siteMetadata.title
		const limitedPosts = data.limitedPosts.edges
		const allPosts = data.allPosts.edges

		const { currentPage, numPages } = this.props.pageContext
		const linkWithLang = language === "en" ? "/" : `/${language}/`
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
				<FeaturedPosts/>
				<Container>
					<Overview lang={language} posts={limitedPosts} pagingData={pagingData}/>
					<Sidebar>
						<RecentPostWidget lang={language} posts={allPosts}/>
						<AllTagsWidget edges={allPosts} lang={language}/>
					</Sidebar>
				</Container>
			</Layout>
		)
	}
}

export default IndexTemplate

export const pageQuery = graphql`
	query IndexByLang($language: String!, $skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
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
		limitedPosts: allMarkdownRemark(
			filter: {frontmatter: {lang: {eq: $language}}},
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
	}
`

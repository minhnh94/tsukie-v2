import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Sidebar from "../components/sidebar"
import RecentPostWidget from "../components/widgets/recent-post-widget"
import FlexArticle from "../components/flex-article"
import { graphql } from "gatsby"

class ContactUsTemplate extends React.Component {
	render() {
		const { language } = this.props.pageContext
		const { edges } = this.props.data.allMarkdownRemark
		const siteTitle = this.props.data.site.siteMetadata.title

		return (
			<Layout location={this.props.location} title={siteTitle} language={language}>
				<Container>
					<FlexArticle>
						<div style={{ textAlign: "justify" }}>
							<h3>What is Tsukie?</h3>
							"Tsukie" in Japanese means "to the moon". "To the moon" is a title of the RPG that tells a beautiful story
							about
							the adventure of two doctors trying to help the soon-to-be-deceased people have their last wish fulfilled
							in
							their dream. It is literally a "game", but actually a movie, with the plot gently developed, doesn't feel
							rushed, heart-touching, and has a satisfying ending. The game was one of our best experiences we have
							tried,
							and
							we decided to use the title of our most liked game as our website name!<br/>
							<img src="https://i.imgur.com/x8iQdMT.png" alt="Tsukie - To the moon" style={{ margin: "0 auto" }}/>
							<br/>
							Our "to the moon", beside storytelling, will be where we'll share our thought, ideas, experiences, what we
							learned or what we think it would be useful... Currently, most of the articles are software programming
							oriented, self-help oriented, but in the future, we would like to expand the categories to other realms.
							This website will be inflated and become a mixed hotpot of experience ^^.
							We hope you will find our "to the moon" journey joyful and helpful!

							<h3>Who are we?</h3>
							We are software programmers couple who are learning to be a writer.<br/>
							Beside our full-time work as a programmer (we have experience with a plethora of technologies such as
							Java/PHP/Swift/MySQL/JS and its popular frameworks...), we enjoy reading and writing to try expressing our
							ideas and thought to the world.<br/>
							Our writings are
							here and there, vying for your attention, so a comment or a like button press will greatly encourage us ^^
							(The Facebook like button won't give us any info of who liked it, it only gives us a statistic of how many
							people have liked this article, so please feel free to like/share it!)<br/>
							If you have any inquiries, don't hesitate to mail me at <a
							href="mailto:tsukie.studio@gmail.com">tsukie.studio@gmail.com</a>!<br/>
						</div>
					</FlexArticle>
					<Sidebar>
						<RecentPostWidget posts={edges} lang={language}/>
					</Sidebar>
				</Container>
			</Layout>
		)
	}
}

export default ContactUsTemplate

export const pageQuery = graphql`
	query QueryForSidebarInContactUs($language: String!) {
		site {
			siteMetadata {
				title
				author
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

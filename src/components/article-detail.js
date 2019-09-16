import React from "react"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const FlexArticle = styled.article`
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px;
	//text-align: justify;
	
	@media (min-width: 768px) {
		width: 750px;
	}
	
	@media (min-width: 992px) {
		width: 970px;
	}
		
	@media (min-width: 1200px) {
		width: 1170px;
	}
`

const ArticleBody = styled.section`
	.gatsby-highlight {
	  background-color: #fdf6e3;
	  border-radius: 0.3em;
	  margin: 0.5em 0;
	  padding: 1em;
	  overflow: auto;
	}

	.gatsby-highlight pre[class*="language-"].line-numbers {
	  padding: 0;
	  padding-left: 2.8em;
	  overflow: initial;
	}
	
	.language-text {
		word-break: break-word;
		white-space: normal;
	}
	
	p {
		text-align: justify;
		
		img {
			padding-top: 20px;
			padding-bottom: 20px;
		
			@media (min-width: 992px) {
				margin: auto;
			}
		}
	}
`

export default ({ post }) => {
	return (
		<FlexArticle>
			<header>
				<h1
					style={{
						marginTop: rhythm(1),
						marginBottom: 0,
					}}
				>
					{post.frontmatter.title}
				</h1>
				<p
					style={{
						...scale(-1 / 5),
						display: `block`,
						marginBottom: rhythm(1),
					}}
				>
					{post.frontmatter.date}
				</p>
			</header>
			<ArticleBody dangerouslySetInnerHTML={{ __html: post.html }}/>
			<hr
				style={{
					marginBottom: rhythm(1),
				}}
			/>
			<footer>
			</footer>
		</FlexArticle>
	)
}

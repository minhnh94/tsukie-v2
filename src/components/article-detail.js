import React from "react"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import TagRow from "./tag-row"
import FlexArticle from "./flex-article"
import LanguageSelector from "./language-selector"
import { DiscussionEmbed, CommentCount } from "disqus-react"
import { TwitterShareButton } from "react-twitter-embed"
import AdSense from "react-adsense"
import ErrorBoundary from "./error-boundary"

const ArticleBody = styled.section`
	overflow-x: hidden;

	.gatsby-highlight {
	  background-color: #fdf6e3;
	  border-radius: 0.3em;
	  margin: 0.5em 0;
	  padding: 1em;
	  overflow: auto;
	}

	.gatsby-highlight pre[class*="language-"].line-numbers {
	  padding: 0 0 0 2.8em;
	  overflow: initial;
	}
	
	.language-text {
		word-break: break-word;
		white-space: pre-wrap;
	}
	
	h3 {
		margin-bottom: 10px;
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
	
	.md-figure {
		figcaption {
			color: #a2a2a2;
			display: block;
			font-size: 0.85rem;
			text-align: center;
		}
	}
`

export default ({ post, tags, lang, location }) => {
	const disqusConfig = {
		shortname: process.env.GATSBY_DISQUS_NAME,
		config: {
			identifier: post.fields.slug.replace(/\//g, ""),
			url: `${process.env.GATSBY_DISQUS_WEBSITE}${location.pathname}`,
		},
	}

	return (
		<FlexArticle>
			<LanguageSelector location={location}/>
			<header>
				<h2
					style={{
						marginTop: rhythm(1),
						marginBottom: 0,
					}}
				>
					{post.frontmatter.title}
				</h2>
				<ErrorBoundary>
					<AdSense.Google
						client={process.env.GATSBY_ADSENSE_CLIENT}
						slot={process.env.GATSBY_ADSENSE_SLOT}
						style={{ display: "inline-block", height: "50px", width: "100%" }}
						format='auto'
						responsive='true'
					/>
				</ErrorBoundary>
				<TagRow tags={tags} lang={lang}/>
				<p
					style={{
						...scale(-1 / 5),
						display: `block`,
						marginBottom: rhythm(1),
					}}
				>
					{post.frontmatter.date} - <CommentCount {...disqusConfig}/>
				</p>
			</header>
			<ArticleBody dangerouslySetInnerHTML={{ __html: post.html }}/>
			<hr
				style={{
					marginBottom: rhythm(1),
				}}
			/>
			<footer>
				<div>
					<iframe
						src={`https://www.facebook.com/plugins/like.php?href=${process.env.GATSBY_DISQUS_WEBSITE}${location.pathname}&width=124&layout=button_count&action=like&size=small&show_faces=true&share=true&height=46&appId=1289989531028226`}
						width="124" height="46" style={{ border: "none", overflow: "hidden", margin: "auto", display: "block" }}
						scrolling="no" frameBorder="0"
						allowTransparency="true" allow="encrypted-media"/>
					<div style={{ display: "block", width: "10%", margin: "auto" }}>
						<TwitterShareButton url={`${process.env.GATSBY_DISQUS_WEBSITE}${location.pathname}`}/>
					</div>
				</div>
				<DiscussionEmbed {...disqusConfig}/>
			</footer>
		</FlexArticle>
	)
}

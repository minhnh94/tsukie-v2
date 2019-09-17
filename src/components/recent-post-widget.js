import React from "react"
import Language from "../lang/languages"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import WidgetWrapper from "./widget-wrapper"

const ArticleList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`

const ArticleItem = styled.li`
	margin-bottom: 20px;
	
	.entry-content {
		margin-left: 75px;
	}
	
	.entry-title {
		font-size: 14px;
		margin-bottom: 2px;
	}
	
	.entry-date {
		font-family: "Ubuntu",sans-serif;
		font-size: 12px;		
	}
`

const ThumbnailImg = styled(Img)`
	display: block;
	float: left;
	width: 60px;
	height: 60px;
`

const Article = ({ node, lang }) => {
	const tag = node.frontmatter.tags[0]

	return (
		<ArticleItem>
			<ThumbnailImg fluid={node.frontmatter.thumbnail.childImageSharp.fluid}/>
			<div className="entry-content">
				<h5 className="entry-title">
					<Link
						style={{ color: "#007acc" }}
						to={`/${lang}/${tag}${node.fields.slug}`}
					>
						{node.frontmatter.title}
					</Link>
				</h5>
				<span className="entry-date">
					{node.frontmatter.date}
				</span>
			</div>
		</ArticleItem>
	)
}

export default ({ posts, lang }) => {
	const recentPostTitle = Language[lang].sidebars.recentPost

	return (
		<WidgetWrapper title={recentPostTitle}>
			<ArticleList>
				{posts.slice(0, 5).map(({ node }) => {
					return <Article node={node} lang={lang}/>
				})}
			</ArticleList>
		</WidgetWrapper>
	)
}

import React from "react"
import Language from "../lang/languages"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const WrapperDiv = styled.div`
	font-size: 14px;
	margin-bottom: 60px;
`

const WidgetTitle = styled.h4`
	border-bottom: 2px solid #e8e8e8;
	margin-bottom: 30px;
	padding-bottom: 15px;
	text-transform: uppercase;
	position: relative;
	letter-spacing: 1px;
`

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
		<WrapperDiv>
			<WidgetTitle>{recentPostTitle}</WidgetTitle>
			<ArticleList>
				{posts.slice(0, 5).map(({ node }) => {
					return <Article node={node} lang={lang}/>
				})}
			</ArticleList>
		</WrapperDiv>
	)
}

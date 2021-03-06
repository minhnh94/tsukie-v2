import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import TagRow from "./tag-row"
import { CommentCount } from "disqus-react"

const ResponsiveImg = styled(Img)`
	display: block;
	height: auto;
	max-width: 100%;
	vertical-align: middle;
	border: 0;

	@media (min-width: 768px) {
		float: left;
		width: 230px;
		margin-bottom: 0;
	}
`

const ContentDiv = styled.div`
	@media (min-width: 768px) {
		margin-left: 260px;
		overflow: hidden;
	}
`

const SpacedArticle = styled.article`
	@media (min-width: 768px) {
		margin-bottom: 10px;
	}
	
	margin-bottom: 50px;
`

const Thumbnail = ({ articleLink, node }) => (
	<Link to={articleLink}>
		<ResponsiveImg fluid={node.frontmatter.thumbnail.childImageSharp.fluid}/>
	</Link>
)

export default ({ node, lang, firstTag, title }) => {
	const disqusConfig = {
		shortname: process.env.GATSBY_DISQUS_NAME,
		config: {
			identifier: node.fields.slug.replace(/\//g, ""),
			url: `${process.env.GATSBY_DISQUS_WEBSITE}/${lang}/${firstTag}${node.fields.slug}`,
		},
	}

	return (
		<SpacedArticle key={node.fields.slug}>
			<Thumbnail
				articleLink={`/${lang}/${firstTag}${node.fields.slug}`}
				node={node}
			/>
			<ContentDiv>
				<header>
					<h3>
						<Link to={`/${lang}/${firstTag}${node.fields.slug}`}>
							{title}
						</Link>
					</h3>
					<TagRow tags={node.frontmatter.tags} lang={node.frontmatter.lang}/>
					<small>{node.frontmatter.date} - <CommentCount {...disqusConfig}/></small>
				</header>
				<section>
					<p style={{ textAlign: "justify" }}
					   dangerouslySetInnerHTML={{
						   __html: node.frontmatter.description || node.excerpt,
					   }}
					/>
				</section>
			</ContentDiv>
		</SpacedArticle>
	)
}

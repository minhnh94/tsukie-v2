import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const ResponsiveImg = styled(Img)`
	display: block;
	height: auto;
	max-width: 100%;
	vertical-align: middle;
	border: 0;

	@media (min-width: 768px) {
		float: left;
		width: 230px;
	}
`

const Thumbnail = ({ articleLink, node }) => (
	<Link to={articleLink}>
		<ResponsiveImg fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
	</Link>
)

export default ({ node, lang, firstTag, title }) => (
	<article key={node.fields.slug}>
		<Thumbnail
			articleLink={`/${lang}/${firstTag}${node.fields.slug}`}
			node={node}
		/>
		<header>
			<h3>
				<Link to={`/${lang}/${firstTag}${node.fields.slug}`}>
					{title}
				</Link>
			</h3>
			<small>{node.frontmatter.date}</small>
		</header>
		<section>
			<p
				dangerouslySetInnerHTML={{
					__html: node.frontmatter.description || node.excerpt,
				}}
			/>
		</section>
	</article>
)


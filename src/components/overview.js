import React from "react"
import styled from "styled-components"
import Article from "./article"
import { Link } from "gatsby"
import LanguageSelector from "./language-selector"

const FlexSection = styled.section`
	flex: 1;
	min-height: 1px;	
	padding-left: 15px;
	padding-right: 15px;
	
	@media (min-width: 992px) {
		margin-right: 20px;
	}
`

const Paginator = styled.div`
	position: relative;
	height: 50px;
	margin-bottom: 20px;

	.prev {
		background-color: #007acc;
		box-shadow: 3px 3px 3px #888888;
		padding: 8px;
		color: white;
		display: block;
		position: absolute;
		left: 0;
	}
	
	.next {
		background-color: #007acc;
		box-shadow: 3px 3px 3px #888888;
		padding: 8px;
		color: white;
		display: block;
		position: absolute;
		right: 0;
	}
`

export default ({ posts, lang, pagingData }) => {
	const {
		isFirst,
		isLast,
		prevPage,
		nextPage,
	} = pagingData

	return (
		<FlexSection>
			<LanguageSelector/>
			{posts.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug
				const firstTag = node.frontmatter.tags[0]

				return <Article node={node} lang={lang} firstTag={firstTag} title={title}/>
			})}
			<Paginator>
				{!isFirst && (
					<Link to={prevPage} rel="prev" className="prev">
						← Previous Page
					</Link>
				)}
				{!isLast && (
					<Link to={nextPage} rel="next" className="next">
						Next Page →
					</Link>
				)}
			</Paginator>
		</FlexSection>
	)
}

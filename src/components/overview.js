import React from "react"
import styled from "styled-components"
import Article from "./article"

const FlexSection = styled.section`
	flex: 1;
	min-height: 1px;
`

export default (props) => {
	const { posts, lang } = props

	return (
		<FlexSection>
			{posts.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug
				const firstTag = node.frontmatter.tags[0]

				return <Article node={node} lang={lang} firstTag={firstTag} title={title}/>
			})}
		</FlexSection>
	)
}

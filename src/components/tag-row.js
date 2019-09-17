import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Tag = styled.span`
	background-color: #bfbfbf;
	display: inline-block;
	text-transform: capitalize;
	font-size: 12px;
	font-weight: 700;
	padding: 2px 8px;
	margin-right: 5px;
	margin-bottom: 5px;
`

export default ({ tags, lang }) => {
	tags = tags.map(function(tag) {
		return tag.replace(/-/g, " ")
	})

	return (
		<div style={{ margin: "10px 0 10px 0" }}>
			{tags.map(function(tag) {
				return (
					<Tag>
						<Link style={{ color: "white" }} to={lang === "en" ? `/tags/${tag}` : `/${lang}/tags/${tag}`}>{tag}</Link>
					</Tag>
				)
			})}
		</div>
	)
}

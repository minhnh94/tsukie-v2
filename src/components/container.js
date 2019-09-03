import React from "react"
import Overview from "../components/overview"
import Sidebar from "../components/sidebar"
import styled from "styled-components"

const FlexDiv = styled.div`
	@media screen and (min-width: 640px) {
		display: flex;
	}
`

export default (props) => {
	const { posts, lang } = props
	return (
		<FlexDiv>
			<Overview lang={lang} posts={posts}/>
			<Sidebar/>
		</FlexDiv>
	)
}

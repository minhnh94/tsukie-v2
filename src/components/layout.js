import React from "react"
import Header from "./header"
import Footer from "./footer"
import GlobalStyle from "../styles/global-style"
import styled from "styled-components"

const PaddingTopDiv = styled.div`
	padding-top: 90px;
`

export default ({ children, location, language }) => (
	<PaddingTopDiv>
		<GlobalStyle/>
		<main>
			<Header location={location} language={language}/>
			{children}
			<Footer language={language}/>
		</main>
	</PaddingTopDiv>
)

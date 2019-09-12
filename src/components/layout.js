import React from "react"
import { Link } from "gatsby"
import Header from "./header"
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
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
				<p><Link to="/contact-us">Contact us</Link></p>
			</footer>
		</main>
	</PaddingTopDiv>
)

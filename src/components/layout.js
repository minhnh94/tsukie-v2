import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import GlobalStyle from "../styles/global-style"

export default ({ children }) => (
	<div>
		<GlobalStyle/>
		<main>
			<Header/>
			{children}
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
				<p><Link to="/contact-us">Contact us</Link></p>
			</footer>
		</main>
	</div>
)

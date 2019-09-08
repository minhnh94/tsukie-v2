import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Language from "../lang/languages"

class NotFoundPage extends React.Component {
	render() {
		const { location } = this.props
		let language = "en"
		if (location.pathname.includes("/vi/")) {
			language = "vi"
		} else if (location.pathname.includes("/ja/")) {
			language = "ja"
		}

		const homeLink = Language[language]["navLinks"]["home"]

		return (
			<Layout location={location} language={language}>
				<SEO title="404: Not Found"/>
				<h1>Not Found</h1>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
				<Link to={homeLink}>Back to home.</Link>
			</Layout>
		)
	}
}

export default NotFoundPage

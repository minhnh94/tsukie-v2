import React from "react"
import { Link } from "gatsby"

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
				<div style={{ margin: "auto", width: "50%" }}>
					<h2>Oops, 404 not found!</h2>
					<p>You tried to search for a resource that was not available at our end. Let's scroll down and see if we have other things to offer...</p>
					<Link to={homeLink}>Back to home.</Link> or check out some popular posts.
					<ul>
						<li><Link to="/en/technologies/how-to-reset-trial-time-for-jetbrains-products/">
							How to reset trial time for Jetbrains products
						</Link></li>
						<li><Link
							to="/en/lifestyle/make-money-online-with-no-experience-story-how-i-made-my-first-dollar-on-the-internet/">
							Make money online with no experience story: How I made my first dollar on the Internet
						</Link></li>
						<li><Link to="/en/technologies/uncover-jailbreak-ios-12-random-respring-cause-and-solution-suggestion/">
							iOS 12 uncover jailbreak random respring - Cause and solution suggestion
						</Link></li>
						<li><Link
							to="/en/technologies/how-to-link-your-psn-account-to-facebook-while-keeping-facebook-two-factor-authentication-on/">
							Link your PSN account with Facebook while keeping Facebook two-factor authentication on
						</Link></li>
					</ul>
				</div>
			</Layout>
		)
	}
}

export default NotFoundPage

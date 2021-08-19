import React from "react"
import WallCalLogo from "../../../assets/WallCal.png"

import SEO from "../../../components/seo"
import Layout from "../../../components/layout"

class WallCalContactUs extends React.Component {
	render() {
		const { location } = this.props
		let language = "en"
		if (location.pathname.includes("/vi/")) {
			language = "vi"
		} else if (location.pathname.includes("/ja/")) {
			language = "ja"
		}

		return (
			<Layout location={location} language={language}>
				<SEO title="WallCal macOS app - Support page"/>
				<div style={{ margin: "auto", width: "50%" }}>
					<img src={WallCalLogo} alt="WallCal app logo"
					     style={{ width: "30%", height: "30%", margin: "auto" }}/>
					<p>If you purchased our macOS app <a href="https://apps.apple.com/app/wallcal-wallpaper-calendar/id1581367286">WallCal/WallCal Lite</a> and you encountered any troubles, or need support regarding a specific
						function, please don't hesitate to email us at <a href="mailto:tsukie.studio@gmail.com">tsukie.studio@gmail.com</a>. We are more than happy to assist you!</p>
				</div>
			</Layout>
		)
	}
}

export default WallCalContactUs

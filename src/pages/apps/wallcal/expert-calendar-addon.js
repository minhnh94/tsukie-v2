import React from "react"
import SEO from "../../../components/seo"
import Layout from "../../../components/layout"

import WeeklyAgendaGif from "../../../assets/weekly-agenda.gif"
import ResizeCalendarGif from "../../../assets/resize-calendar.gif"
import ToggleCalendarSetGif from "../../../assets/toggle-calendar-set.gif"
import ToggleHiddenViewGif from "../../../assets/toggle-hidden-view.gif"
import ChangeColorGif from "../../../assets/change-color.gif"

class ExpertCalendarAddon extends React.Component {
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
				<SEO title="WallCal macOS app - Expert calendar add-on feature preview"/>
				<div style={{ margin: "auto", width: "50%" }}>
					<h1>WallCal Expert calendar add-on feature preview</h1>
					<br/>
					<h4>🗓 Option to replace the month view with the weekly agenda view</h4>
					<br/>
					<img src={WeeklyAgendaGif} alt="WeeklyAgenda WallCal"
					     style={{ width: "70%", height: "70%", margin: "auto" }}/>
					<br/>
					<h4>📐 Resize the calendar freely as you see fit</h4>
					<br/>
					<img src={ResizeCalendarGif} alt="ResizeCalendar WallCal"
					     style={{ width: "70%", height: "70%", margin: "auto" }}/>
					<br/>
					<h4>📌 Choose which calendar/reminder sets to be displayed on the calendar</h4>
					<br/>
					<img src={ToggleCalendarSetGif} alt="ToggleCalendarSetToggleCalendarSet WallCal"
					     style={{ width: "70%", height: "70%", margin: "auto" }}/>
					<br/>
					<h4>👁 Option to completely hide the to-do list view or the calendar view</h4>
					<br/>
					<img src={ToggleHiddenViewGif} alt="ToggleHiddenViewToggleHiddenView WallCal"
					     style={{ width: "70%", height: "70%", margin: "auto" }}/>
					<br/>
					<h4>🎨 Change the calendar's background color freely</h4>
					<br/>
					<img src={ChangeColorGif} alt="ChangeColor WallCal"
					     style={{ width: "70%", height: "70%", margin: "auto" }}/>
					<br/>
					<h4>⏱ Set the hour indicator between 12-hour or 24-hour format</h4>
					<br/>
					<p>We hope the title was self-explanatory enough 😬</p>
				</div>
			</Layout>
		)
	}
}

export default ExpertCalendarAddon

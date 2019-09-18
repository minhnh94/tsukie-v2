import React from "react"
import styled from "styled-components"
import Language from "../lang/languages"
import { Link } from "gatsby"

const LangSelector = styled.div`
	display: flex;
	height: 50px;
	justify-content: space-evenly;
	margin-bottom: 20px;
`

const LangButton = styled(Link)`
	flex: 0 1 auto;
	background-color: #007acc;
	box-shadow:
${props => {
	const { location, lang } = props
	if (lang !== "en" && location.includes(lang)) {
		return "none"
	} else if (lang === "en" && (!location.includes("ja") && !location.includes("vi"))) {
		return "none"
	} else {
		return "3px 3px 3px #888888"
	}
}};
	padding: 8px;
	color: white;
	display: block;
	text-align: center;
`

export default () => {
	const allLangs = ["en", "vi", "ja"]
	const location = window.location.pathname

	return (
		<LangSelector>
			{allLangs.map((lang) => {
				return (
					<LangButton
						to={lang === "en" ? "/" : `/${lang}/`}
						location={location}
						lang={lang}
					>
						{Language[lang].displayText}
					</LangButton>
				)
			})}
		</LangSelector>
	)
}

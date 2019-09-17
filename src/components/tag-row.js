import { Link } from "gatsby"
import React from "react"

export default ({ tags, lang }) => {
	const spanStyle = {
		backgroundColor: "#bfbfbf",
		display: "inline-block",
		// fontFamily: "san-serif",
		textTransform: "capitalize",
		fontSize: "12px",
		fontWeight: "700",
		padding: "2px 8px",
		marginRight: "5px",
	}

	return (
		<div style={{margin: "10px 0 10px 0"}}>
			{tags.map(function(tag) {
				return (<span style={spanStyle}>
					<Link style={{color: "white"}} to={lang === "en" ? `/tags/${tag}` : `/${lang}/tags/${tag}`}>{tag}</Link>
				</span>)
			})}
		</div>
	)
}

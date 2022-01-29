import React from "react"

export default ({ bannerImg, bannerLink, bannerAlt }) => {
	return (
		<a href={bannerLink} target="_blank" rel="noopener noreferrer">
			<img src={bannerImg} alt={bannerAlt} style={{ marginTop: "10px" }}/>
		</a>
	)
}

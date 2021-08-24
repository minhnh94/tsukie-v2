import React from "react"
import styled from "styled-components"
import AdSense from "react-adsense"
import ErrorBoundary from "./error-boundary"
import LazyLoad from "react-lazyload"
import SizebarCustomBanner from "../assets/sizebar-custom-banner.png"

const FlexAside = styled.aside`
	flex: 0 1 30%;
	height: auto !important;
	overflow: hidden;
	direction: ltr;
	
	@media (max-width: 991px) {
		margin-bottom: 20px;
		
		.vanish-on-mobile {
			display: none;
		}
	}
`

export default ({ children }) => (
	<FlexAside>
		{/*<ErrorBoundary>*/}
		{/*	<AdSense.Google*/}
		{/*		client={process.env.GATSBY_ADSENSE_CLIENT}*/}
		{/*		slot={process.env.GATSBY_ADSENSE_SLOT}*/}
		{/*		style={{ display: "block", marginBottom: "20px" }}*/}
		{/*		format='auto'*/}
		{/*		responsive='true'*/}
		{/*	/>*/}
		{/*</ErrorBoundary>*/}
		<a href="https://apps.apple.com/app/wallcal-lite-desktop-calendar/id1581813374" target="_blank" rel="noopener noreferrer">
			<img src={SizebarCustomBanner} alt="WallCal banner"/>
		</a>
		{children}
		<ErrorBoundary>
			<LazyLoad height={280} offset={100} once>
				<AdSense.Google
					className="vanish-on-mobile"
					client={process.env.GATSBY_ADSENSE_CLIENT}
					slot={process.env.GATSBY_ADSENSE_SLOT}
					style={{ display: "block", marginTop: "20px" }}
					format='auto'
					responsive='true'
				/>
			</LazyLoad>
		</ErrorBoundary>
	</FlexAside>
)

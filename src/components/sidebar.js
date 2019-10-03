import React from "react"
import styled from "styled-components"
import AdSense from "react-adsense"
import ErrorBoundary from "./error-boundary"
import LazyLoad from "react-lazyload"

const FlexAside = styled.aside`
	flex: 0 1 30%;
	height: auto !important;
	overflow: hidden;
	direction: ltr;
	
	@media (max-width: 991px) {
		margin-bottom: 20px;
	}
`

export default ({ children }) => (
	<FlexAside>
		<ErrorBoundary>
			<AdSense.Google
				client={process.env.GATSBY_ADSENSE_CLIENT}
				slot={process.env.GATSBY_ADSENSE_SLOT}
				style={{ display: "block", marginBottom: "20px" }}
				format='auto'
				responsive='true'
			/>
		</ErrorBoundary>
		{children}
		<ErrorBoundary>
			<LazyLoad height={280} offset={100} once>
				<AdSense.Google
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

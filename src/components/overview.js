import React from "react"
import styled from "styled-components"
import Article from "./article"
import { Link } from "gatsby"
import LanguageSelector from "./language-selector"
import AdSense from "react-adsense"
import ErrorBoundary from "./error-boundary"
import MainCustomBanner from "../assets/main-custom-banner.png"

const FlexSection = styled.section`
	flex: 1;
	min-height: 1px;	
	padding-left: 15px;
	padding-right: 15px;
	overflow-x: hidden;		/* without this adsense will break the responsive layout */
	
	@media (min-width: 992px) {
		margin-right: 20px;
	}
`

const Paginator = styled.div`
	position: relative;
	height: 50px;
	margin-bottom: 20px;

	.prev {
		background-color: #007acc;
		box-shadow: 3px 3px 3px #888888;
		padding: 8px;
		color: white;
		display: block;
		position: absolute;
		left: 0;
	}
	
	.next {
		background-color: #007acc;
		box-shadow: 3px 3px 3px #888888;
		padding: 8px;
		color: white;
		display: block;
		position: absolute;
		right: 0;
	}
`

export default ({ posts, lang, pagingData, location }) => {
	const {
		isFirst,
		isLast,
		prevPage,
		nextPage,
	} = pagingData

	return (
		<FlexSection>
			{/*<ErrorBoundary>*/}
			{/*	<AdSense.Google*/}
			{/*		client={process.env.GATSBY_ADSENSE_CLIENT}*/}
			{/*		slot={process.env.GATSBY_ADSENSE_SLOT}*/}
			{/*		style={{ display: "block", marginBottom: "20px", maxHeight: "50px", width: "100%" }}*/}
			{/*		format='auto'*/}
			{/*		responsive='true'*/}
			{/*	/>*/}
			{/*</ErrorBoundary>*/}
			<a href="https://apps.apple.com/app/wallcal-lite-desktop-calendar/id1581813374" target="_blank" rel="noopener noreferrer">
				<img src={MainCustomBanner} alt="WallCal banner" style={{ marginTop: "10px" }}/>
			</a>
			<LanguageSelector location={location}/>
			{posts.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug
				const firstTag = node.frontmatter.tags[0]

				return <Article node={node} lang={lang} firstTag={firstTag} title={title}/>
			})}
			<Paginator>
				{!isFirst && (
					<Link to={prevPage} rel="prev" className="prev">
						← Previous Page
					</Link>
				)}
				{!isLast && (
					<Link to={nextPage} rel="next" className="next">
						Next Page →
					</Link>
				)}
			</Paginator>
		</FlexSection>
	)
}

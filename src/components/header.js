import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Language from "../lang/languages"

const StyledUl = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	float: right;
`

const StyledLi = styled.li`
	float: left;
	padding-right: 5px;
	
	a {
		color: #333;
		display: block;
		text-align: center;
		padding: 14px 16px 18px 16px;
		text-decoration: none;
		text-transform: capitalize;
		border-bottom: 2px solid ${props => props.active ? "black" : "transparent"};
	}
	
	a:hover {
		border-bottom-color: black;
		transition: all 0.5s ease;
	}
	
	a:active {
		border-bottom: 2px solid black;
	}
`

const NavigationBar = styled.nav`
	background-color: #fff;
	border-bottom: 2px solid #e8e8e8;
	height: 62px;
	padding: 0 20px;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 90;
	backface-visibility: hidden;
	transition: all 0.2s ease;
`

const StyledLink = styled(Link)`
	transition: color 0.2s ease;
	text-decoration: none;
`

const StyledLogo = styled.img`
	float: left;
	max-height: 60px;
	position: absolute;
	top: 50%;
	transition: opacity 0.2s ease;
	transform: translateY(-50%);
`

const Logo = ({ language }) => {
	const homeLink = Language[language]["navLinks"]["home"]

	return (
		<StyledLink to={homeLink}>
			<StyledLogo src={require("../../content/assets/logo-header.png")} alt="Tsukie"/>
		</StyledLink>
	)
}

const NavigationContent = ({ location, language }) => {
	const { navLinks, navTexts } = Language[language]
	let navKeywords = ["home", "lifestyle", "technologies", "travel", "contactUs"]

	return (
		<StyledUl>
			{navKeywords.map((keyword) => {
				if (location.pathname === navLinks[keyword]) {
					return <StyledLi key={keyword} active><Link to={navLinks[keyword]}>{navTexts[keyword]}</Link></StyledLi>
				} else {
					return <StyledLi key={keyword}><Link to={navLinks[keyword]}>{navTexts[keyword]}</Link></StyledLi>
				}
			})}
		</StyledUl>
	)
}

export default ({ location, language }) => (
	<NavigationBar>
		<Logo language={language}/>
		<NavigationContent location={location} language={language}/>
	</NavigationBar>
)

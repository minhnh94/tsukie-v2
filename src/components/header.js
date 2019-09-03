import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledUl = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	float: right;
`

const StyledLi = styled.li`
	float: left;
	
	a {
		color: #333;
		display: block;
		text-align: center;
		padding: 14px 16px 18px 16px;
		text-decoration: none;
		box-shadow: none;
		border-bottom: 2px solid transparent;
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
	box-shadow: none;
`

const StyledLogo = styled.img`
	float: left;
	max-height: 60px;
	position: absolute;
	top: 50%;
	transition: opacity 0.2s ease;
	transform: translateY(-50%);
`

const Logo = () => (
	<StyledLink to={`/`}>
		<StyledLogo src={require("../../content/assets/logo-header.png")} alt="Tsukie"/>
	</StyledLink>
)

const NavigationContent = () => (
	<StyledUl>
		<StyledLi><Link to={`/`}>Home</Link></StyledLi>
		<StyledLi><Link to={`/lifestyle/`}>Lifestyle</Link></StyledLi>
		<StyledLi><Link to={`/technology/`}>Technology</Link></StyledLi>
		<StyledLi><Link to={`/travel/`}>Travel</Link></StyledLi>
		<StyledLi><Link to={`/contact-us/`}>Contact Us</Link></StyledLi>
		<StyledLi><Link to={`/`}>EN</Link></StyledLi>
		<StyledLi><Link to={`/vi/`}>VI</Link></StyledLi>
		<StyledLi><Link to={`/ja/`}>JA</Link></StyledLi>
	</StyledUl>
)

export default () => (
	<NavigationBar>
		<Logo/>
		<NavigationContent/>
	</NavigationBar>
)

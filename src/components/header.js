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
	
	@media (max-width: 991px) {
		background-color: #333;
		height: auto;
		overflow-y: scroll;
		position: absolute;
		top: 62px;
		right: 0;
		left: 0;
		display: ${props => props.isToggled ? "block" : "none"};
	}
`

const StyledLi = styled.li`
	float: left;
	padding-right: 5px;
	
	@media (max-width: 991px) {
		float: none;
		padding: 0 10px;
		margin: 0;
	}
	
	a {
		color: #333;
		display: block;
		text-align: center;
		padding: 14px 16px 18px 16px;
		text-decoration: none;
		text-transform: capitalize;
		border-bottom: 2px solid ${props => props.active ? "black" : "transparent"};
		
		@media (max-width: 991px) {
			color: white;
			padding: 10px 0;
			border: 2px solid ${props => props.active ? "white" : "transparent"};
		}
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

const ToggleNavBtnDiv = styled.div`
	float: right;
	font-size: 2rem;
	
	@media (min-width: 992px) {
		display: none;
	}
`

const Logo = ({ language }) => {
	const homeLink = Language[language]["navLinks"]["home"]

	return (
		<StyledLink to={homeLink}>
			<StyledLogo src={require("../../content/assets/logo-header.png")} alt="Tsukie"/>
		</StyledLink>
	)
}

const NavigationContent = ({ location, language, isToggled }) => {
	const { navLinks, navTexts } = Language[language]
	let navKeywords = ["home", "lifestyle", "technologies", "travel", "contactUs"]

	return (
		<StyledUl isToggled={isToggled}>
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

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isToggled: false,
		}
	}

	setToggledState = () => {
		this.setState({
			isToggled: !this.state.isToggled,
		})
	}

	render() {
		const { language, location } = this.props

		return (
			<NavigationBar>
				<Logo language={language}/>
				<ToggleNavBtnDiv onClick={this.setToggledState}>☰</ToggleNavBtnDiv>
				<NavigationContent location={location} language={language} isToggled={this.state.isToggled}/>
			</NavigationBar>
		)
	}
}

export default Header


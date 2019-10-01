import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = styled.footer`
	background-color: #2e2e2e;
	color: #bfbfbf;
	padding: 30px 45px;
	text-align: center;
	
	.credit {
		margin-bottom: 15px;
	}
	
	.dmca-badge {
		display: inline-block;
		margin: 10px auto;
	}
`

const SpacingLink = styled(Link)`
	display: inline-block;
	color: antiquewhite;
	text-decoration: underline;
	margin: 0 5px;
`

export default ({ language }) => {
	return (
		<Footer>
			<div className="credit">
				© {new Date().getFullYear()} Tsukie Studio. All rights reserved.
			</div>
			<div>
				<SpacingLink to={language === "en" ? "/privacy-policy" : `/${language}/privacy-policy`}>
					Privacy Policy
				</SpacingLink>
				<SpacingLink to={language === "en" ? "/terms-and-conditions" : `/${language}/terms-and-conditions`}>
					Terms and Conditions
				</SpacingLink>
			</div>
			<a href="//www.dmca.com/Protection/Status.aspx?ID=a11237fc-e69c-44c0-a6e0-f2215f37f4e5"
			   title="DMCA.com Protection Status" className="dmca-badge">
				<img
					src="https://images.dmca.com/Badges/dmca-badge-w100-2x1-01.png?ID=a11237fc-e69c-44c0-a6e0-f2215f37f4e5"
					alt="DMCA.com Protection Status"
				/>
			</a>
		</Footer>
	)
}

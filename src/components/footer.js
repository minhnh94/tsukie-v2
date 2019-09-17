import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
	background-color: #2e2e2e;
	color: #bfbfbf;
	padding: 30px 45px;
	text-align: center;
	
	.credit {
		margin-bottom: 15px;
	}
`

export default () => {
	return (
		<Footer>
			<div className="credit">
				© {new Date().getFullYear()} Tsukie Studio. All rights reserved.
			</div>
		</Footer>
	)
}

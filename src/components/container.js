import React from "react"
import styled from "styled-components"

const FlexDiv = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px;
	
	@media (min-width: 992px) {
		display: flex;
	}
	
	@media (min-width: 768px) {
		width: 750px;
	}
	
	@media (min-width: 992px) {
		width: 970px;
	}
		
	@media (min-width: 1200px) {
		width: 1170px;
	}
`

export default ({ children }) => {
	return (
		<FlexDiv>
			{children}
		</FlexDiv>
	)
}

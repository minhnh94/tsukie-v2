import styled from "styled-components"
import React from "react"

const Title = styled.h4`
	border-bottom: 2px solid #e8e8e8;
	margin-bottom: 30px;
	padding-bottom: 15px;
	text-transform: uppercase;
	position: relative;
	letter-spacing: 1px;
`

const WrapperDiv = styled.div`
	font-size: 14px;
	margin-bottom: 60px;
`

export default ({ title, children }) => (
	<WrapperDiv>
		<Title>{title}</Title>
		{children}
	</WrapperDiv>
)

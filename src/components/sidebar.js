import React from "react"
import styled from "styled-components"

const FlexAside = styled.aside`
	flex: 0 1 30%;
	background-color: aquamarine;
	height: auto !important;
	overflow: scroll;
`

export default () => (
	<FlexAside>
		<div style={{height:"3000px" }}>hahaha</div>
	</FlexAside>
)

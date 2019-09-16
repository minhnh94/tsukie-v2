import React from "react"
import styled from "styled-components"

const FlexAside = styled.aside`
	flex: 0 1 30%;
	height: auto !important;
	overflow: scroll;
`

export default ({ children }) => (
	<FlexAside>
		{children}
	</FlexAside>
)

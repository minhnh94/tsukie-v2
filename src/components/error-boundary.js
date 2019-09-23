import React from "react"
import styled from "styled-components"

const AlertDiv = styled.div`
	background-color: red;
	margin-bottom: 20px;
`

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	componentDidCatch(error, info) {
		// Display fallback UI
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <AlertDiv>This website is using React, which layouts and functions might be compromised if adblock programs are present. Please disable Adblock for the better user experience.</AlertDiv>
		}
		return this.props.children
	}
}

export default ErrorBoundary

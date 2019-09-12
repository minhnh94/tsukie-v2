import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	
	img {
  	display: block;
  	height: auto;
		max-width: 100%;
  	vertical-align: middle;
  	border: 0;
	}
	
	a {
		box-shadow: none;
	}
	
	h1, h2, h3, h4, h5, h6 {
		@media (min-width: 768px) {
			margin-top: 0 !important;
		}
		
		margin-top: 0.5em;
		margin-bottom: 0;
		line-height: 1.25em;
	}
`

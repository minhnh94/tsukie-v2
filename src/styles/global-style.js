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
`

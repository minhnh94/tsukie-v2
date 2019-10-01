import styled from "styled-components"

export default styled.article`
	flex: 1;
	min-height: 1px;	
	padding-left: 15px;
	padding-right: 15px;
	margin-bottom: 50px;
	overflow-x: hidden;		/* without this adsense will break the responsive layout */
	
	@media (min-width: 992px) {
		margin-right: 20px;
		width: 60%;	/* don't set this property and some article with code highlight will break layout */
	}
`

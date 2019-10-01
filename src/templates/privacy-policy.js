import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Sidebar from "../components/sidebar"
import RecentPostWidget from "../components/widgets/recent-post-widget"
import AllTagsWidget from "../components/widgets/all-tags-widget"
import FlexArticle from "../components/flex-article"
import { graphql } from "gatsby"

class PrivacyPolicyTemplate extends React.Component {
	render() {
		const { language } = this.props.pageContext
		const { edges } = this.props.data.allMarkdownRemark
		const siteTitle = this.props.data.site.siteMetadata.title

		return (
			<Layout location={this.props.location} title={siteTitle} language={language}>
				<Container>
					<FlexArticle>
						<h1>Welcome to our Privacy Policy</h1>
						<h3>Your privacy is critically important to us.</h3>
						Tsukie is located at:<br/><a href="https://tsukie.com">https://tsukie.com</a>

						<p>It is Tsukie’s policy to respect your privacy regarding any information we may collect while operating
							our website. This Privacy Policy applies to <a
								href="https://tsukie.com">https://tsukie.com</a> (hereinafter, "us", "we", or "https://tsukie.com"). We
							respect your privacy and are committed to protecting personally identifiable information you may provide
							us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information
							may be collected on our Website, how we use this information, and under what circumstances we may disclose
							the information to third parties. This Privacy Policy applies only to information we collect through the
							Website and does not apply to our collection of information from other sources.</p>
						<p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general
							rules and policies governing your use of our Website. Depending on your activities when visiting our
							Website, you may be required to agree to additional terms and conditions.</p>

						<h2>Website Visitors</h2>
						<p>Like most website operators, Tsukie collects non-personally-identifying information of the sort that web
							browsers and servers typically make available, such as the browser type, language preference, referring
							site, and the date and time of each visitor request. Tsukie’s purpose in collecting non-personally
							identifying information is to better understand how Tsukie’s visitors use its website. From time to time,
							Tsukie may release non-personally-identifying information in the aggregate, e.g., by publishing a report
							on trends in the usage of its website.</p>
						<p>Tsukie also collects potentially personally-identifying information like Internet Protocol (IP) addresses
							for logged in users and for users leaving comments on https://tsukie.com blog posts. Tsukie only discloses
							logged in user and commenter IP addresses under the same circumstances that it uses and discloses
							personally-identifying information as described below.</p>


						<h2>Advertisements</h2>
						<p>Ads appearing on our website may be delivered to users by advertising partners, who may set cookies.
							These cookies allow the ad server to recognize your computer each time they send you an online
							advertisement to compile information about you or others who use your computer. This information allows ad
							networks to, among other things, deliver targeted advertisements that they believe will be of most
							interest to you. This Privacy Policy covers the use of cookies by Tsukie and does not cover the use of
							cookies by any advertisers.</p>


						<h2>Links To External Sites</h2>
						<p>Our Service may contain links to external sites that are not operated by us. If you click on a third
							party link, you will be directed to that third party's site. We strongly advise you to review the Privacy
							Policy and terms and conditions of every site you visit.</p>
						<p>We have no control over, and assume no responsibility for the content, privacy policies or practices of
							any third party sites, products or services.</p>

						<h2>https://tsukie.com uses Google Adsense for marketing</h2>
						<p>https://tsukie.com uses the remarketing services to advertise on third party websites (including Google)
							to previous visitors to our site. It could mean that we advertise to previous visitors who haven’t
							completed a task on our site, for example using the contact form to make an enquiry. This could be in the
							form of an advertisement on the Google search results page, or a site in the Google Display Network.
							Third-party vendors, including Google, use cookies to serve ads based on someone’s past visits. Of course,
							any data collected will be used in accordance with our own privacy policy and Google’s privacy policy.</p>
						<p>You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you
							want to you can opt out of interest-based advertising entirely by cookie settings or permanently using a
							browser plugin.</p>


						<h2>Aggregated Statistics</h2>
						<p>Tsukie may collect statistics about the behavior of visitors to its website. Tsukie may display this
							information publicly or provide it to others. However, Tsukie does not disclose your
							personally-identifying information.</p>

						<h2>Affiliate Disclosure</h2>
						<p>This site uses affiliate links and does earn a commission from certain links. This does not affect your
							purchases or the price you may pay.</p>

						<h2>Analytics</h2>
						<p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
						<ul>
							<li>
								<p><strong>Google Analytics</strong></p>
								<p>Google Analytics is a web analytics service offered by Google that tracks and reports website
									traffic. Google uses the data collected to track and monitor the use of our Service. This data is
									shared with other Google services. Google may use the collected data to contextualize and personalize
									the ads of its own advertising network.</p>
								<p>You can opt-out of having made your activity on the Service available to Google Analytics by
									installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics
									JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about
									visits activity.</p>                <p>For more information on the privacy practices of Google, please
								visit the Google Privacy & Terms web page: <a
									href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
							</li>
						</ul>


						<h2>Privacy Policy Changes</h2>
						<p>Although most changes are likely to be minor, Tsukie may change its Privacy Policy from time to time, and
							in Tsukie’s sole discretion. Tsukie encourages visitors to frequently check this page for any changes to
							its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will
							constitute your acceptance of such change.</p>

					</FlexArticle>
					<Sidebar>
						<RecentPostWidget posts={edges} lang={language}/>
						<AllTagsWidget edges={edges} lang={language}/>
					</Sidebar>
				</Container>
			</Layout>
		)
	}
}

export default PrivacyPolicyTemplate

export const pageQuery = graphql`
	query QueryForSidebarInPrivacyPolicy($language: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		allMarkdownRemark(filter: {frontmatter: {lang: {eq: $language}}}, sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						lang
						title
						description
						tags
						thumbnail {
							childImageSharp {
								fluid (maxWidth:500, quality:50){
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`

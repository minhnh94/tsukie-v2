require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
	siteMetadata: {
		title: `Tsukie - Lifestyle, technologies, travel... and more`,
		author: `minhnh`,
		description: `Tsukie - Blog from Tsukie studio. Written articles about lifestyles, technologies (mostly software programming related), travel (contents mostly Japan related), entertainment (anime, game, etc).`,
		siteUrl: process.env.WEBSITE,
		social: {
			twitter: `minhnh94`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-figure-caption`,
						options: { figureClassName: "md-figure" },
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							showLineNumbers: true,
						},
					},
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GA_TRACKING_UID,
			},
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Blog`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/favicon.jpg`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-plugin-i18n`,
			options: {
				langKeyDefault: "en",
				useLangKeyLayout: false,
			},
		},
		`gatsby-plugin-sitemap`,
	],
}

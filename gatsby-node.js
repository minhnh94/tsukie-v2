const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { getAllTagsWithLanguage } = require("./src/utils/helpers")

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const result = await graphql(`
		{
			site {
				siteMetadata {
					title
				}
			}
			allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
						}
					}
				}
			}
		}
	`)

	if (result.errors) {
		throw result.errors
	}

	// Create index pages
	const languages = ["en", "vi", "ja"]
	languages.forEach((language) => {
		createPage({
			path: language === "en" ? "/" : `/${language}/`,
			component: path.resolve("./src/templates/index.js"),
			context: { language: language },
		})
	})

	// Create blog posts pages.
	const posts = result.data.allMarkdownRemark.edges
	posts.forEach((post, index) => {
		const previous = index === posts.length - 1 ? null : posts[index + 1].node
		const next = index === 0 ? null : posts[index - 1].node
		const firstTag = post.node.frontmatter.tags[0]

		createPage({
			path: `/${post.node.frontmatter.lang}/${firstTag}${post.node.fields.slug}`,
			component: path.resolve(`./src/templates/blog-post.js`),
			context: {
				slug: post.node.fields.slug,
				previous,
				next,
				language: post.node.frontmatter.lang,
			},
		})
	})

	// Create tag pages
	languages.forEach((language) => {
		const tags = getAllTagsWithLanguage(result.data.allMarkdownRemark.edges, language)
		console.log(tags)
		tags.forEach((tag) => {
			createPage({
				path: language === "en" ? `/tags/${tag}` : `/${language}/tags/${tag}`,
				component: path.resolve("./src/templates/index.js"),
				context: { language: language },
			})
		})
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}

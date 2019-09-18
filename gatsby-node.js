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

	const posts = result.data.allMarkdownRemark.edges
	const postsPerPage = 8

	// Create index pages
	const languages = ["en", "vi", "ja"]
	languages.forEach((language) => {
		const thisLangPosts = posts.filter((post) => {
			return post.node.frontmatter.lang === language
		})
		const numPages = Math.ceil(thisLangPosts.length / postsPerPage)

		Array.from({ length: numPages }).forEach((_, i) => {
			const linkWithLang = language === "en" ? "/" : `/${language}/`
			createPage({
				path: i === 0 ? linkWithLang : `${linkWithLang}${i + 1}`,
				component: path.resolve("./src/templates/index.js"),
				context: {
					language: language,
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1,
				},
			})
		})
	})

	// Create blog posts pages.
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
			const thisTagPosts = posts.filter((post) => {
				return post.node.frontmatter.lang === language && post.node.frontmatter.tags.includes(tag)
			})
			const numPages = Math.ceil(thisTagPosts.length / postsPerPage)

			Array.from({ length: numPages }).forEach((_, i) => {
				const linkWithLang = language === "en" ? `/tags/${tag}` : `/${language}/tags/${tag}`
				createPage({
					path: i === 0 ? linkWithLang : `${linkWithLang}${i + 1}`,
					component: path.resolve("./src/templates/tag-index.js"),
					context: {
						language: language,
						tag: tag,
						limit: postsPerPage,
						skip: i * postsPerPage,
						numPages,
						currentPage: i + 1,
					},
				})
			})
		})
	})

	// Create misc pages
	languages.forEach((language) => {
		createPage({
			path: language === "en" ? "/contact-us" : `/${language}/contact-us`,
			component: path.resolve("./src/templates/contact-us.js"),
			context: { language: language },
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

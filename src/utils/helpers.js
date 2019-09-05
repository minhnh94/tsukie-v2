let getAllTagsWithLanguage = function(edges, language) {
	let allTags = []
	edges.forEach(({ node }) => {
		const { lang, tags } = node.frontmatter
		if (lang === language) {
			allTags = [...allTags, ...tags]
		}
	})

	return allTags.filter((item, index) => allTags.indexOf(item) === index)
}

module.exports.getAllTagsWithLanguage = getAllTagsWithLanguage

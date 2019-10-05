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

let getRelatedPosts = function(allPosts, originalPost, originalTags, numOfPosts = 5) {
	let indexWithCounts = []
	allPosts.forEach(function({ node }, index) {
		const intersection = node.frontmatter.tags.filter(value => originalTags.includes(value))
		if (intersection.length > 0) {
			indexWithCounts.push({
				index: index,
				count: intersection.length,
			})
		}
	})

	const relatedPostIndexes = indexWithCounts.sort(function(a, b) {
		return a.count - b.count
	}).slice(0, numOfPosts - 1)
	let relatedPosts = []
	relatedPostIndexes.forEach(function(indexWithCount) {
		relatedPosts.push(allPosts[indexWithCount.index])
	})

	while (relatedPosts.length < numOfPosts) {
		const randomPool = allPosts.filter(function(post) {
			return !relatedPosts.includes(post) && post !== originalPost
		})

		if (randomPool.length === 0) {
			break
		}

		const randomPost = randomPool[Math.floor(Math.random() * randomPool.length)]

		relatedPosts.push(randomPost)
	}

	return relatedPosts
}

module.exports.getAllTagsWithLanguage = getAllTagsWithLanguage
module.exports.getRelatedPosts = getRelatedPosts

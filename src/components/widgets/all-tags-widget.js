import React from "react"
import WidgetWrapper from "./widget-wrapper"
import Language from "../../lang/languages"
import TagRow from "../tag-row"
import { getAllTagsWithLanguage } from "../../utils/helpers"

export default ({ edges, lang }) => {
	const allTagsTitle = Language[lang].sidebars.allTags
	const allTagKeys = getAllTagsWithLanguage(edges, lang)

	return (
		<WidgetWrapper title={allTagsTitle}>
			<TagRow tags={allTagKeys} lang={lang}/>
		</WidgetWrapper>
	)
}

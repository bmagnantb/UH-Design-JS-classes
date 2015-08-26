import marked from 'marked'
import highlight from 'highlight.js'

import 'highlight.js/styles/agate.css'

marked.setOptions({
	gfm: true,
	highlight: code => {
		if (code.indexOf('html-highlight') !== -1) {
			return highlight.highlight('html', code.replace(/html-highlight\n/, '')).value
		}
		return highlight.highlight('javascript', code).value
	},
	langPrefix: ''
})

export default function convertMarkdown(markdown) {
	return {__html: marked(markdown)}
}
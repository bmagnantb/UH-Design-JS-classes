import marked from 'marked'
import highlight from 'highlight.js'

import 'highlight.js/styles/agate.css'

marked.setOptions({
	gfm: true,
	highlight: code => highlight.highlight('javascript', code).value,
	langPrefix: ''
})

export default function convertMarkdown(markdown) {
	return {__html: marked(markdown)}
}
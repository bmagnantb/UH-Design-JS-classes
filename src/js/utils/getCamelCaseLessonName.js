export default function getCamelCaseRouteName(hyphenRouteName) {
	return hyphenRouteName.replace(/-([a-z])/g, (match, group) => group.toUpperCase())
}
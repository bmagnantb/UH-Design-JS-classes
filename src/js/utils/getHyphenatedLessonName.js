export default function(camelCaseName) {
	return camelCaseName.replace(/([A-Z])/g, (match, group) => `-${group.toLowerCase()}`)
}
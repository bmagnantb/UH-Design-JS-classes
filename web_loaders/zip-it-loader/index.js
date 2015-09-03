var fs = require('fs')
var path = require('path')
var Bluebird = require('bluebird')
var JSZip = require('jszip')

Bluebird.promisifyAll(fs)

module.exports = function(source) {
	this.cacheable()
	var cb = this.async()
	var loader = this

	var folderName = path.basename(this.resourcePath)
	folderName = folderName.substr(0, folderName.indexOf('.'))
	var zip = JSZip().folder(folderName)
	addFiles(this.context, zip)
		.then(Bluebird.all)
		.then(function() {
			cb(null, zip.generate({type: 'nodebuffer'}))
		})

	function addFiles(directory, zip) {
		return fs.readdirAsync(directory).then(function(result) {
			var resultArray = result.toString().split(',')
			var nameFileIndex = resultArray.indexOf(path.basename(loader.resourcePath))
			if (nameFileIndex !== -1 && directory === loader.context) resultArray.splice(nameFileIndex, 1)
			return resultArray.map(function(val) {
				if (val.indexOf('.') !== -1) return fs.readFileAsync(directory + '/' + val).then(function(buf) {
					return zip.file(val, buf)
				})
				else return addFiles(directory + '/' + val, zip.folder(val)).then(Bluebird.all)
			})
		})
	}
}



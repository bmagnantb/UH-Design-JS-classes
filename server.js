var piping = require('piping')

if (piping({hook: true})) {

    var express = require('express')
    var app = express()

    app.use(express.static(__dirname, { index: '/build/index.html'}))

    app.listen(process.env.PORT || 3000, function() {
        console.log('apping')
    })
}

const path = require('path')
const config = {
 entry:{
	app:'./src/app.js',
	//vebdors:'./src/vendors'
	},
 output:{
	filename:'[name].js',
	path:path.resolve(__dirname,'dist')
	}
}
module.exports = config

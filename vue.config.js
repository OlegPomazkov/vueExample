const config = { 
	chainWebpack: config => { 
		config.module
		.rule('eslint')
		.use('eslint-loader')
		.options({ fix: true }) 
	} 
}

module.exports = config

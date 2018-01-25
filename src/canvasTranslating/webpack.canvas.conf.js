const baseConfig = require('../../build/base.config.js');

module.exports = baseConfig({
	htmlTitle : 'translating',//html的标题
	htmlFileURL : 'html/translating.html',//html生成的地址
	appDir: 'js/translating/', //静态文件的地址
	uglify: false, //是否压缩文件
	hash:''//固定的hash值
})
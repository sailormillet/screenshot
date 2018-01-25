const baseConfig = require('../../build/base.config.js');

module.exports = baseConfig({
	htmlTitle : 'Transforms',//html的标题
	htmlFileURL : 'html/Transforms.html',//html生成的地址
	appDir: 'js/Transforms/', //静态文件的地址
	uglify: false, //是否压缩文件
	hash:''//固定的hash值
})
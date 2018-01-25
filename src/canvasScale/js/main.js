let mainTpl = require('../tpl/main.juicer')
require('../less/main.less')
//import '../../common/jquery-2.1.0.min'
//let $ =require('../../common/jquery-2.1.0.min.js')
//translating
let UI =$('body')
UI.append(mainTpl())
let canvas = document.getElementById('stockGraph');

if (canvas.getContext){

  var ctx = document.getElementById('stockGraph').getContext('2d') 
   ctx.fillStyle='yellow'
    ctx.fillRect(0,0,250,100)


    ctx.fill();

    // drawing code here
} else {
    // canvas-unsupported code here
}
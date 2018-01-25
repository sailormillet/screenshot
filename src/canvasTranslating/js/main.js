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
     ctx.fillRect(0,0,300,300)
     for(var i =0;i<3;i++){
         for(var j=0;j<3;j++){
            ctx.save()
            ctx.fillStyle='#9CFF00'
            ctx.translate(20+j*100,20+i*100)
            ctx.fillRect(0,0,50,50)
            ctx.restore();
         }

     }
    // drawing code here
} else {
    // canvas-unsupported code here
}
let mainTpl = require('../tpl/main.juicer')
require('../less/main.less')
//import '../../common/jquery-2.1.0.min'
//let $ =require('../../common/jquery-2.1.0.min.js')
//save 保存了状态
//我们调用 restore，状态栈中最后的状态会弹出
let UI =$('body')
UI.append(mainTpl())
let canvas = document.getElementById('stockGraph');

if (canvas.getContext){
     var ctx = document.getElementById('stockGraph').getContext('2d') 
     ctx.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形

     ctx.save();
     ctx.fillStyle = '#09F'
     ctx.fillRect(15,15,120,120)

     ctx.save();
     ctx.fillStyle = '#FFF'
     ctx.globalAlpha = 0.5;
     ctx.fillRect(30,30,90,90)
      
     ctx.restore();
     ctx.fillRect(45,45,60,60)

     ctx.restore();
     ctx.fillRect(60,60,30,30)
    // drawing code here
} else {
    // canvas-unsupported code here
}
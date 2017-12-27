let mainTpl = require('../tpl/main.juicer')
require('../less/main.less')
//import '../../common/jquery-2.1.0.min'
//let $ =require('../../common/jquery-2.1.0.min.js')
let UI = $('body');
let obj ={
    width1:document.body.clientWidth,
    height1:document.body.clientHeight,
    width2: $(window).width(),
    height2: $(window).height(),
}
console.log($('#topbg').height())
UI.append(mainTpl(obj))
let canvas = document.getElementById('stockGraph');

if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0, 0, obj.width2, obj.height2)
    var img = document.getElementById("topbg");
    img.onload = function() {
        ctx.drawImage(img,0,0,obj.width2,$('#topbg').height());
    }
    ctx.font="16px Arial";
    ctx.fillText("December 27,2017",10,50);
    ctx.fillText("hello everybody,",10,50);
    ctx.fillText("I'm Millet,this is my first canvas demo,This demo uses Canvas to draw a picture and use html2canvas to screenshot a picture",10,50);
    // drawing code here
} else {
    // canvas-unsupported code here
}
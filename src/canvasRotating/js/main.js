let mainTpl = require('../tpl/main.juicer')
require('../less/main.less')
//import '../../common/jquery-2.1.0.min'
//let $ =require('../../common/jquery-2.1.0.min.js')
//translating
let UI =$('body')
UI.append(mainTpl())
let canvas = document.getElementById('stockGraph');

if (canvas.getContext){
    // ctx.beginPath();
    // var x = 25+j*50; // x 坐标值
    // var y = 25+i*50; // y 坐标值
    // var radius = 20; // 圆弧半径
    // var startAngle = 0; // 开始点
    // var endAngle = Math.PI+(Math.PI*j)/2; // 结束点
    // var anticlockwise = i%2==0 ? false : true; // 顺时针或逆时针
   
    // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
   
    // ctx.fill();

     var ctx = document.getElementById('stockGraph').getContext('2d') 
     ctx.translate(75,75);
   
     for (var i=1;i<6;i++){ // Loop through rings (from inside to out)
       ctx.save();
       ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';
   
       for (var j=0;j<i*6;j++){ // draw individual dots
         ctx.rotate(Math.PI*2/(i*6));
         ctx.beginPath();
         ctx.arc(0,i*12.5,5,0,Math.PI*2,true);
         ctx.fill();
       }
   
       ctx.restore();
     }
    // drawing code here
} else {
    // canvas-unsupported code here
}
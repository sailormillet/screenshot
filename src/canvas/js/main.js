let mainTpl = require('../tpl/main.juicer')
require('../less/main.less')
//import '../../common/jquery-2.1.0.min'
//let $ =require('../../common/jquery-2.1.0.min.js')
let UI = $('body');
let obj ={
    width1:document.body.clientWidth,//body的宽度
    height1:document.body.clientHeight,
    width2: $(window).width(),
    height2: $(window).height(),
}
console.log($('#topbg').height())
console.log(obj.width1)
console.log(obj.height1)
console.log(obj.width2)
console.log(obj.height2)
UI.append(mainTpl(obj))
let canvas = document.getElementById('stockGraph');

if (canvas.getContext){
 
        // var ctx = document.getElementById('stockGraph ').getContext('2d');
      
        // ctx.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形
        // ctx.save();                  // 保存默认状态
      
        // ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
        // ctx.fillRect(15,15,120,120); // 使用新的设置绘制一个矩形
      
        // ctx.save();                  // 保存当前状态
        // ctx.fillStyle = '#FFF'       // 再次改变颜色配置
        // ctx.globalAlpha = 0.5;    
        // ctx.fillRect(30,30,90,90);   // 使用新的配置绘制一个矩形
      
        // ctx.restore();               // 重新加载之前的颜色状态
        // ctx.fillRect(45,45,60,60);   // 使用上一次的配置绘制一个矩形
      
        // ctx.restore();               // 加载默认颜色配置
        // ctx.fillRect(60,60,30,30);   // 使用加载的配置绘制一个矩形

  
      
          var ctx = document.getElementById('stockGraph').getContext('2d');
          ctx.fillRect(0,0,300,300);
          for (var i=0;i<3;i++) {
            for (var j=0;j<3;j++) {
              ctx.save();
              ctx.strokeStyle = "#9CFF00";
              ctx.translate(50+j*100,50+i*100);
              drawSpirograph(ctx,20*(j+2)/(j+1),-8*(i+3)/(i+1),10);
              ctx.restore();
            }
          }
        
        function drawSpirograph(ctx,R,r,O){
          var x1 = R-O;
          var y1 = 0;
          var i  = 1;
          ctx.beginPath();
          ctx.moveTo(x1,y1);
          do {
            if (i>20000) break;
            var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
            var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
            ctx.lineTo(x2,y2);
            x1 = x2;
            y1 = y2;
            i++;
          } while (x2 != R-O && y2 != 0 );
          ctx.stroke();
        }
          
          
      
      
    // var ctx = canvas.getContext('2d');
    // ctx.fillStyle="#ffffff";
    // ctx.fillRect(0, 0, obj.width2, obj.height2)
    // var img = document.getElementById("topbg");
    // img.onload = function() {
    //     ctx.drawImage(img,0,0,obj.width2,$('#topbg').height());
    // }
    // ctx.fillStyle="#000";
    // ctx.font="16px 'PingFang SC',tahoma,arial,'helvetica neue','hiragino sans gb','microsoft yahei',sans-serif";
    // ctx.textBaseline = "middle";
    // //ctx.measureText(text)  测量字体的宽高度
    // ctx.textAlign = "justify"
    // ctx.fillText("December 27,2017",15,220);
    // ctx.fillText("hello everybody,",32,242);
    // var str = "I'm Millet,this is my first canvas demo,This demo uses Canvas to draw a picture and use html2canvas to screenshot a picture"
    // var bodyWidth = obj.width1;
    // var lineWidth = 0;
    // var initHeight=265;//绘制字体距离canvas顶部初始的高度
    // var lastSubStrIndex= 0; //每次开始截取的字符串的索引
    // console.log(bodyWidth);
    //  for(var i = 0; i<str.length;i++){
    //     lineWidth+=ctx.measureText(str[i]).width;
    //     if(lineWidth > bodyWidth - 20){
    //         console.log(lineWidth);
    //         console.log(str.substring(lastSubStrIndex,i))
    //         ctx.fillText(str.substring(lastSubStrIndex,i),15,initHeight)
    //         lastSubStrIndex =i;
    //         initHeight +=20;
    //         lineWidth =0
    //     }
    //  }
    //  ctx.fillText(str.substring(lastSubStrIndex,i),15,initHeight)
    // ctx.fillText("I'm Millet,this is my first canvas demo,This demo uses Canvas to draw a picture and use html2canvas to screenshot a picture",32,265);
    // drawing code here
} else {
    // canvas-unsupported code here
}
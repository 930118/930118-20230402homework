let ctx
let points = [[3,3],[5,-1],[6,-2],[8,0],[1,4],[12,8],[13,12],[13,16],
  [15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],
  [17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],
  [5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],
  [-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],
  [-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],
  [-4,-6],[-1,-6],[-1,-6],[-1,-3],[-2,-1],[0,-1],[1,0],[2,0],[3,1],[3,3]]; //list資料，

  function setup() {   //只會執行一次的函數
    createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
    //把points 內的值都50
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
        points[i][j] = points[i][j]*5;//將圖片放大20倍
      }
    }
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 10;//設定線條寬度
    ctx.lineCap = 'round'//設置端點圓角
    gradientLine(ctx, 420, 70, 400, 440, 'lightblue', 'pink')//設定漸層線條顏色
  }

  function draw() {
    background(255);
    // scale(50)

    textWidth(4)//文字寬度
    textSize(50*(mouseX/1500))  //文字大小
    fill("pink");  //設定顏色
    text("程式設計好難",mouseX,mouseY)  //顯示文字
    translate(mouseX, mouseY); //原本原點在左上角，利用這指令把原點放到視窗的中心
    scale(1, -1);  //上下翻轉
    for(k=1;k<6;k++){//設定迴圈，使其譨重複5次以內的圖形
    for (let i = 0; i < points.length-1; i++) {
      line((points[i][0]*(mouseX/1000))*k, (points[i][1]*(mouseX/1000))*k, (points[i+1][0]*(mouseX/1000))*k, (points[i+1][1]*(mouseX/1000))*k);
    }
    line((points[points.length-1][0]*(mouseX/1000))*k, (points[points.length-1][1]*(mouseX/1000))*k, (points[0][0]*(mouseX/1000))*k, (points[0][1]*(mouseX/1000))*k); //把最後一點與第一點的連線

  }
}

 


  function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, c1);
    gradient.addColorStop(1, c2);
    ctx.strokeStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
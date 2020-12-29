//点击开始游戏运行游戏--》开始游戏按钮消失--》游戏开始
//动态随机出现食物，出现三节蛇开始运动
//上下左右--》改变方向运动
//判断是否吃到食物--》食物消失，蛇长度加一
//判断游戏结束，弹出游戏结束
 
//蛇活动区域
var run = document.getElementById('Run');
//开始游戏按钮
var gameBtn = document.getElementById('GameBtn');
//实时分数
var scoreBox = document.getElementById('now_score');
//游戏结束图片
var lose= document.getElementById('lose');
//游戏结束分数
var loserScore= document.getElementById('over_score');
//关闭结束界面按钮
var close= document.getElementById('close_table');
// var startAndPause = document.getElementById('start_Pause');
//左上角开始按钮
var startWalk = document.getElementById('start-walk');
//左上角暂停按钮
var pauseWalk = document.getElementById('pause-walk');
//触发蛇向前移动的计时器
var snakeMove;
//触发间隔时间200ms
var speed = 200;
//判断游戏是否继续或停止
var beginGame = true;
var pauseGame = true;

start();
function start(){
	if (beginGame === true){
		gameBtn.onclick = function (){

			init();//初始化的参数,这里直接调用init()
			startGame();
			show();

		}
	}
}

startWalk.onclick = function (){
	if(beginGame === true){
		pauseWalk.style.display='inline-block';
		startWalk.style.display='none';
		clearInterval(snakeMove);
	}
}

pauseWalk.onclick = function(){
	if(pauseGame === true){
		pauseWalk.style.display='none';
		startWalk.style.display='inline-block';
		snakeMove = setInterval(function(){
		move();
		},speed);
	}
}

function init(){
 	//地图
 	this.mapW = parseInt(getComputedStyle(run).width);
  	this.mapH = parseInt(getComputedStyle(run).height);
  	this.mapDiv = run;
  	//食物
  	this.foodW = 24;
  	this.foodH = 24;
  	//x,y初始坐标
  	this.foodX = 0;
  	this.foodY = 0;
  	//蛇(用数组来代表,数组的每一位分别存储蛇头蛇身)
  	this.snakeW = 24;
  	this.snakeH = 24;
  	this.snakeBody = [[4,2,'head'],[3,2,'body'],[2,2,'body']];
  	//3是因为蛇头应该在最前面，后面的2，1紧接蛇身,这些数字修改的话，蛇的位置也会改变
 	//游戏属性
 	this.direct = "right";
 	this.right = false;
 	this.left = false;
 	this.up = true;
 	this.down = true;
 	this.score = 0;

}

function show(){

	gameBtn.style.display = 'none';
 	// startAndPause.style.display = 'inline-block';
 	startWalk.style.display = 'inline-block';
}
//每次开始时，随机生成一个苹果和一条固定的蛇
function startGame(){

	food();
	snake();
	snakeMove = setInterval(function(){
		move();
	},speed);

	bindEvent();
}
//生成食物
function food(){
	var food = document.createElement('div');
	food.style.width = this.foodW + 'px';
	food.style.height = this.foodH + 'px';
	food.style.position = 'absolute';
	//食物随机出现
	this.foodX = Math.floor(Math.random() * (this.mapW / 24));
	this.foodY = Math.floor(Math.random() * (this.mapH / 24));
	//食物对应的坐标
	food.style.left = this.foodX * 24 + 'px';
	food.style.top = this.foodY * 24 + 'px';

	this.mapDiv.appendChild(food).setAttribute('class','food');
	
}

function snake(){
	for(var i = 0;i < this.snakeBody.length; i++){
		var snake = document.createElement('div');
		//以下都是新添div中的属性
		snake.style.width = this.snakeW + 'px';
		snake.style.height = this.snakeH + 'px';
		snake.style.position = 'absolute' ;
		//横坐标
		snake.style.left = this.snakeBody[i][0] * 24 + 'px';
		// 纵坐标
		snake.style.top = this.snakeBody[i][1] * 24 + 'px';
		// 向run的div中添加蛇头或蛇身图片属性
		//这句和.classList.add('snake')达到一样的效果，下句的.classList.add('snake')可以不添加
		snake.classList.add(this.snakeBody[i][2]);
		this.mapDiv.appendChild(snake).classList.add('snake');
		//上面两句可以合并成this.mapDiv.appendChild(snake).classList.add(this.snakeBody[i][2]);
		//根据方向旋转蛇头
		switch(this.direct){
			case "right":
				break;
			case "up":
				snake.style.transform = 'rotate(270deg)';
				break;
			case "left": 
				snake.style.transform = 'rotate(180deg)';
				break;
			case "down":
				snake.style.transform = 'rotate(90deg)';
				break;
			default:
				break;
		}
	}
}

function move(){
	//蛇身跟着蛇头移动
	for(var i=this.snakeBody.length-1;i>0;i--){
		this.snakeBody[i][0] = this.snakeBody[i-1][0];
		this.snakeBody[i][1] = this.snakeBody[i-1][1];
	}
	//蛇头移动
	switch(this.direct){
		case "right":
			this.snakeBody[0][0] += 1;
			break;
		case "up":
			this.snakeBody[0][1] -= 1;
			break;
		case "left": 
			this.snakeBody[0][0] -= 1;
			break;
		case "down":
			this.snakeBody[0][1] += 1;
			break;
		default:
			break;
	}
	//移除之前的属性
	removeClass('snake');
	//创建一条新的蛇
	snake();
	//吃到苹果增加长度
	if(this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] == this.foodY){
		var snakeEndX = this.snakeBody[this.snakeBody.length - 1][0];
		var snakeEndY = this.snakeBody[this.snakeBody.length - 1][1];
		switch(this.direct){
		case "right":
			this.snakeBody.push([snakeEndX + 1,snakeEndY,'body']);
			break;
		case "up":
			this.snakeBody.push([snakeEndX,snakeEndY - 1,'body']);
			break;
		case "left": 
			this.snakeBody.push([snakeEndX - 1,snakeEndY,'body']);
			break;
		case "down":
			this.snakeBody.push([snakeEndX,snakeEndY + 1,'body']);
			break;
		default:
			break;
		}

		this.score += 1;
		//实时分数
		scoreBox.innerHTML = this.score;
		//吃到后移除当前苹果
		removeClass('food');
		//新添一个苹果
		food();
	}

	//碰到边界
	//碰到左右
	if(this.snakeBody[0][0] < 0 || this.snakeBody[0][0] >= this.mapW/24){
		reloadGame();
	}
	//碰到上下
	if(this.snakeBody[0][1] < 0 || this.snakeBody[0][1] >= this.mapH/24){
		reloadGame();

	}
	//碰到身体
	var snakeHX = this.snakeBody[0][0];
	var snakeHY = this.snakeBody[0][1];
	for(var i = 1;i < this.snakeBody.length; i++){
		if(snakeHX == snakeBody[i][0] && snakeHY == snakeBody[i][1]){
			reloadGame();
		}
	}

}

function reloadGame(){
	removeClass('snake');
	removeClass('food');
	clearInterval(snakeMove);
	this.snakeBody = [[4,2,'head'],[3,2,'body'],[2,2,'body']];
	this.direct = "right";
 	this.right = false;
 	this.left = false;
 	this.up = true;
 	this.down = true;

 	close.style.display = 'inline-block';
 	lose.style.display = 'inline-block';
 	loserScore.style.display = 'inline-block';
 	loserScore.innerHTML ='最终得分：'+ this.score;

 	this.score = 0;

 	scoreBox.innerHTML = this.score;
 	pauseWalk.style.display='none';
	startWalk.style.display='none';

}


function removeClass(className){
	var ele = document.getElementsByClassName(className);
	while(ele.length > 0){
		ele[0].parentNode.removeChild(ele[0]);
	}
}

function setDirect(code){
	switch(code){
		case 37:
		if(this.left){
			this.direct = "left";
			this.left = false;
			this.right = false;
			this.up = true;
			this.down = true;
		}
		break;
		case 38:
		if(this.up){
			this.direct = "up";
			this.left = true;
			this.right = true;
			this.up = false;
			this.down = false;
		}
		break;
		case 39:
		if(this.right){
			this.direct = "right";
			this.left = false;
			this.right = false;
			this.up = true;
			this.down = true;
		}
		break;
		case 40:
		if(this.down){
			this.direct = "down";
			this.left = true;
			this.right = true;
			this.up = false;
			this.down = false;
		}
		break;
		default:
		break;
	}
}
//绑定事件
function bindEvent(){
	document.onkeydown = function(e){
		var code = e.keyCode;
		setDirect(code);
	}
	close.onclick = function(){
		lose.style.display = 'none';
		close.style.display = 'none';
		loserScore.style.display = 'none';

		//重置界面
		gameBtn.style.display = 'inline-block';
		pauseWalk.style.display='none';
		startWalk.style.display='none';
	}

}
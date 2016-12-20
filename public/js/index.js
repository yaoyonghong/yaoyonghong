var startX,
	startY,
	moveX,
	moveY;

var dom=document.getElementsByClassName('md')[0];
dom.addEventListener('touchstart',
function(e){
	console.log('touchstart', e)
	var th= e.touches[0];
	times=0;
	timeOut=setInterval(function(){
		times+=100;
	})
	startX=th.clientX;
	startY=th.clientY;
});

dom.addEventListener('touchmove',
	function(e){
		console.log('touchmove',e.touches[0])
		var th= e.touches[0];
		moveX=th.clientX;
		moveY=th.clientY;
	});

dom.addEventListener('touchend',
	function(e){
		console.log('touchend')
		console.log(startX,startY,moveX,moveY)
		var th= e.touches[0];
		if(moveY-startY>=100){
			dom.style.color = 'red'
		}else if(startY-moveY>=100){
			dom.style.color = 'cecece'
		}

		if(moveX-startX>=100){
			fontSize +=2;
			document.getElementsByClassName('md')[0 ].style.fontSize=fontSize+ 'px';
			//dom.style.fontSize='50px'
		}else if(startX-moveY>=100){
			if(fontSize>=14){
				fontSize -=2;
				document.getElementsByClassName('md')[0 ].style.font.fontSize= fontSize+'px'
			}
			//dom.style.fontSize = '30px'
		}
		clearInterval(timeOut);
	});

		var fontSize=parseInt(window.getComputedStyle(
			document.getElementsByClassName('md')[0]
		).fontSize)
		console.log(fontSize);

//dom.onclick=function(){
//	console.log(1)
//};
//dom.onclick=function(){
//	console.log(2)
//};
//dom.addEventListener('click',function(){
//	console.log(3)
//});
//dom.addEventListener('click',function(){
//	console.log(4)
//});

//创建一个xhr实例
var xhr =new XMLHttpRequest();
//打开一个链接  请求方式，请求路径
xhr.open('http://127.0.0.1.9998/index');
//发送请求
xhr.send()
//监听状态变更
xhr.onreadystatechange=function(){
	if(xhr.state===200||xhr.readyState){
		console.log(xhr.status===200||xhr.readyState===4)
			console.log('success',JSON.parse(xhr.response))
		}
};

$.ajax({
	url:'http://127.0.0.1.9998/index',
	type:'get',
	dataType:'json',
	success:function(result){
		console.log('result',result)
	},
	complete:function(res){
		console.log('res',res)
	}
})


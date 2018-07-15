$(function(){//文档就绪触发
	var zindex = 999;//设置层叠顺序
	var idx = 0 ;//索引
	while(idx<$(".section").length-1){
		$(".section").eq(idx).css("z-index",zindex);
		idx++;
		zindex--;
		console.log(idx);
	}
	var i = -1 ;//通过i去控制下标
	var y = -170;
	$(window).on('mousewheel',fn1);//绑定滚轮事件及函数
	function fn1(event){
		//event.deltaY==-1向下滚，event.deltaY==1向上滚
		//向下
		if(event.deltaY==-1){
			//如果是最后，则i=$("#box1").children().length-1
			//$("#box1").children().length)子元素个数
			if(i>=$(".section").length-2){
				i=$(".section").length-2;
			}else{
				i++;
				$(window).off();//删除绑定的事件
				if(i==0){
					$(".section").eq(i).css({"transform":"rotateY(-170deg) translateZ(1px)"});//修改样式
				}else{
					$(".section").eq(i).css({"transform":"rotateY(-170deg) translateZ(0px)"});//修改样式
				}
				//延迟1800ms执行
				setTimeout(function(){
					$(window).on('mousewheel',fn1);//重新添加事件
					if(i>=1){
						$(".section").eq(i-1).css("display","none");
					}
				},1800)		
				console.log(i);
			}
			
		}
		//向上
		if(event.deltaY==1){
			//如果是第一张，则i=0
			if(i==-1){
				i=-1;
			}
			else{
				$(window).off();//删除绑定的事件
				$(".section").eq(i-1).css("display","block");
				if(i==0){
					$(".section").eq(i).css({"transform":"rotateY(0deg) translateZ(1px)"});//修改样式
				}else{
					$(".section").eq(i).css({"transform":"rotateY(0deg) translateZ(0px)"});//修改样式
				}
				//延迟1s执行
				setTimeout(function(){
					$(window).on('mousewheel',fn1);//重新添加事件
				},2000)
				i--;
				console.log(i);
				}
		}
	}
	var d1 = 0;
	var d2 = 0;
	$(document).mousedown(function(){
		var d = new Date();
		d1 = d.getTime();
		console.log(d1)
	})
	$(document).mouseup(function(){
		var d = new Date();
		d2 = d.getTime();
		console.log(d2)
		if(d2-d1<500){

		}
		//长按
		if(d2-d1>=5000){	
			window.location.href="index.html";
		}
	})
})
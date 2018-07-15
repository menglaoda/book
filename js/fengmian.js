$(function(){
	var i = 0 ;
	var arr = ["pink","gold","green","blue","black","red","white","aqua"];
	setInterval(function(){
		i++;
		$(".fengmian .text h1").not($(".fengmian .text h1").eq(0)).css("color",arr[i]);
		if(i==arr.length-1){
			i=0;
		}
	},4000)
	
})

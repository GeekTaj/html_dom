var listLi = document.querySelectorAll("li");
var isGreen = false;
for(var i=0;i<listLi.length;i++)
{
	
	listLi[i].addEventListener("click",function(){
		this.classList.toggle("done");/*参数为要在元素中移除的类名，如果没有这个类，那么会为元素添加这个类，事件第二次触发的时候就会移除了*/
		console.log("click!");/*用于在控制台调试，是否触发了click函数*/
	})

}

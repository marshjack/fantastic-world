window.onload = function(){
	//创建变量
	var allLis = $('tab_header').getElementsByTagName("li") ;
	var allDom = $("tab_con").getElementsByClassName("dom");
	//监听事件
	for(var i=0;i<allLis.length;i++){
		var li = allLis[i];
		li.index = i;
		li.onmouseover = function(){
			for(var j=0; j<allLis.length; j++){
				allLis[j].className = "";
				allDom[j].style.display = "none";
			}
			this.className="selected";
			allDom[this.index].style.display = "block";
		}
		
	}
	
	
};
function $(id){
		return typeof id === "string" ? document.getElementById(id) : null;
	}
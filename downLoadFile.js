function downLoadFile(id){
	var form=$("<form>");//定义一个form表单
	form.attr("style","display:none");
	form.attr("target","_blank");
	form.attr("method","post");
	form.attr("action","/download");
	var input1=$("<input>");
	input1.attr("type","hidden");
	input1.attr("name","id");
	input1.attr("value",id);
	$("body").append(form);//将表单放置在web中
	form.append(input1);
	form.submit();//表单提交
}
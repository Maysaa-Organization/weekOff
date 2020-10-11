console.log("connected")

function calculat(){
	
	var first=document.getElementById("first").value;
	var second=document.getElementById("second").value;
	var third=document.getElementById("third").value;
	if(second=== "+"){
		var result=parseInt(first) + parseInt(third)
	}else if(second=== "-"){
		var result=parseInt(first) - parseInt(third)
	}else if(second=== "*"){
		var result=parseInt(first) * parseInt(third)
	}else if(second=== "/"){
		var result=parseInt(first) / parseInt(third)
	}

	// return result;

	document.getElementById("head").innerHTML=result;
	if(result < 100){
		document.getElementById("head").style.color="green";
	}else if(result >= 100){
		document.getElementById("head").style.color="blue";
	}

}
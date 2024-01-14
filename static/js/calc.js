const numKeys = [];
const opns = [];
const res = document.querySelector("#resultArea");
const clrBtn = document.querySelector("#clrTxt");
const delBtn = document.querySelector("#del");
const eqBtn = document.querySelector("#eq");
const decPoint = document.querySelector("#decp");
const opnSyms = ["+", "-", "*", "/"];

let i;
for(i = 0; i<=9; i++){
	(function(i){
		let qs = "#num" + i;
		numKeys.push(document.querySelector(qs));
		numKeys[i].addEventListener("click", function(){
			res.textContent += i;
		});
  	}(i));
}

for(i = 0; i<=3; i++){
	(function(i){
		let qs = "#op" + i;
		opns.push(document.querySelector(qs));
		opns[i].addEventListener("click", function(){
			res.textContent += opnSyms[i];
		});
  	}(i));
}

clrBtn.addEventListener("click", function(){
	res.textContent = "";
});

delBtn.addEventListener("click", function(){
    res.textContent = res.textContent.substring(0, res.textContent.length - 1);
});

decPoint.addEventListener("click", function(){
	res.textContent += ".";
});

eqBtn.addEventListener("click", function(){
	try{
		res.textContent = eval(res.textContent);
	}
	catch(e){
		res.textContent = "Invalid Syntax";
	}
});
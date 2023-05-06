let error="";
function validation(mas){
    let valid=true;
    
    let sp=mas.split("\n"); 
    for(let i=0;i<sp.length;i++){
        for(let p=0;p<sp.length;p++){
            if(sp[i][p]!="1" && sp[i][p]!="0"){
                error="Матрица должна состоять из цифр 1 и 0";
                valid=false;
            }
            if(sp.length!=sp[i].length){
                error="Матрица должна быть квадратной";
                valid=false;
            } 
			
			if (mas.lenght == 0) {
				error = "Матрица не должна быть пустой";
				valid = false;
			}
        }
    }
    
    
    return valid;
}
function count(){
    let arr=document.getElementById("1");
    if (validation(arr.value)){
        let a=arr.value.split("\n");
        let mnoj;
        let refl=true;
        let simm=true;
        let ksimm=true;
        let tranz=true;
        for (let i=0;i<a.length;i++){
            for(let j=0;j<a.length;j++){
                if(a[i][j]!=a[j][i]){
                    simm=false;
                }//симметричность
                if(a[i][j]==a[j][i]){
                    ksimm=false;
                }//косимметричность
            }
        }
        for (let i=0;i<a.length;i++){
            if(a[i][i]=="0"){
                refl=false;
            }//рефлексивность
        }
        for (let i=0;i<a.length;i++){
            for(let j=0;j<a.length;j++){
                mnoj=0;
                for(let f=0;f<a.length;f++){
                    mnoj+=a[i][f]*a[f][j];
                    
                }
            }
        }
        
        for (let i=0;i<a.length;i++){
            for(let j=0;j<a.length;j++){
                for(let f=0;f<a.length;f++){
                    
                    if (mnoj>a[i][j]){
                        mnoj=1;
                        if(mnoj>a[i][j]){
                        tranz=false;}
                    }//транзитивность 
                } 
            }
        }
       if (simm == true) {
		alert("симметрична")
		}
		else {
			alert("не симметрична")
		}
		if (ksimm == true) {
			alert("косимметрична")
		}
		else {
			alert("не косимметрична")
		}
		if (tranz==true){
				alert("транзитивна")
		}
		else {
			alert("не транзитивна")
		}
		if (refl == true) {
			alert("рефлексивна")
		}
		else {
			alert("не рефлексивна")
	
		}
    }
    else {
        alert(error);
    }
}

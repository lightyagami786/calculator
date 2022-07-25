var a=document.getElementById('buttons');
var b=document.getElementById('screen');
a.addEventListener('click',function(e){

    var strr=e.originalTarget.innerText;
    if(strr=='c' || strr=='ac' ){
        b.value="";
    }else if(strr=='='){
        
        var cc=eval(b.value);
        console.log(cc);
        b.value=cc;
        
        
    }
    
    else{
    
        b.value+=strr;
    console.log(strr);
    
    
    }

})
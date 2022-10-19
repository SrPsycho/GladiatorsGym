

    var contador=0;
        document.getElementById("menu").addEventListener('click',function(){
        let menu=document.getElementById("responsive__menu");
    
        if(contador==0){
          menu.style.display="block";
          contador++;
        }else{
          menu.style.display="none"
          contador--;
        }
    })

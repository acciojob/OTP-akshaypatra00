//your JS code here. If required.
 const inputs = document.querySelectorAll('.code');
        inputs.forEach((code)=>{
     
       code.addEventListener("keyup" , function(e){
        if(e.key === "Backspace" && code.previousElementSibling){
            code.previousElementSibling.focus()
        }else if(code.nextElementSibling){
            code.nextElementSibling.focus();
        }

       });
       });
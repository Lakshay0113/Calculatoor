let screen= document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText= e.target.innerText;
        
        console.log('button text is ', buttonText);
        if(buttonText=='x'){
            buttonText='*'
            screenValue+=buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='÷'){
            buttonText='/'
            screenValue+=buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='Enter'  ){
            screenValue= eval(screenValue);
            screen.value = screenValue;
            // screen.value= eval(screenValue);
        }
        else if(buttonText=='Ans'  ){
            screenValue= eval(screenValue);
            screen.value = screenValue;
            // screen.value= eval(screenValue);
        }
        else if(buttonText=='Clear'){
            screenValue='';
            screen.value = screenValue;
        }
        
        else if(buttonText=='+')
        {
            buttonValue='+'
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue;
        }


    })
}
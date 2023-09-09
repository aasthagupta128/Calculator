let input = document.getElementById('inputBox');
let ansElement = document.getElementById('ansBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            ansElement.value=string;
            // input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
            ansElement.value=string;
            // ansElement.innerHTML="";
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string
            // ansElement.innerHTML="";
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
            // ansElement.innerHTML="";
        }

    })
})
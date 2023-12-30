function receba(n){
    var numero = document.querySelector('#result').innerHTML 
    document.querySelector('#result').innerHTML = numero + n

   
}
function limpar(){
    document.querySelector('#result').innerHTML = ""
}
function apagar(){
    var resultado = document.querySelector('#result').innerHTML 
    document.querySelector('#result').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular(){
    var resultado = document.querySelector('#result').innerHTML
   
    if (resultado){
        document.querySelector('#result').innerHTML = eval(resultado)
        
          
    }else{
        document.querySelector('#result').innerHTML = '[ERRO]'
    }
}    

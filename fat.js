var task =0;
var kk = 0;
let onlyinput = document.querySelector("only-input")
task = onlyinput.value
let mytask ="<div class='bacon'><p>bacon</p><div class='edit'><a href=''><i class='fa fa-edit'></i></a></div><div class = 'trash'><a href=''><i class='fa fa-trash'></i></a></div><div class='class-link'> <a href=''>  clear item </a></div></div>";
    let jk= document.querySelector (".wrapper");
    function addup(){ 
    jk.append(mytask);
    
    }
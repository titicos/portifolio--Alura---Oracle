
 //capturar elementos vindos do HTML

 var nome = document.querySelector("#nome");
 var email = document.querySelector("#email");
 var assunto = document.querySelector("#assunto");
 var mensagem = document.querySelector("#mensagem");




var btnEnviar = document.querySelector("#enviar");

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    validaCampos();   
})


function validaCampos(){
 
   if(nome.value==""){
    nome.classList.add("vazio")
    document.querySelector("#nome").placeholder="preencha o nome";
    nome.focus();
   }
    
   else if(email.value==""){
    email.classList.add("vazio")
    document.querySelector("#email").placeholder="preencha o email";
    email.focus();
   }

  else if(assunto.value==""){
    assunto.classList.add("vazio")
    document.querySelector("#assunto").placeholder="informe o assunto";
    assunto.focus();
   }

   else if(mensagem.value==""){
    mensagem.classList.add("vazio")
    document.querySelector("#mensagem").placeholder="informe a mensagem";
    mensagem.focus();
   }

   else{
    alert("dados enviados com sucesso!");
    limparCampos();
   }

           
}

function limparCampos(){
    nome.value="";
    email.value="";
    assunto.value="";
    mensagem.value="";

    email.classList.remove("vazio")
    assunto.classList.remove("vazio")
    nome.classList.remove("vazio")
    mensagem.classList.remove("vazio")
}


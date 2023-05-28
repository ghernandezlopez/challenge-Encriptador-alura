/*Creado Por GERARDO HERNANDEZ LOPEZ*/

let messageCatch;

window.addEventListener('load', function() {
  var textarea = document.getElementById("text");
  textarea.focus();
});

// Obtiene los elementos necesarios por sus IDs
function encrypt() {
  let text = document.getElementById("text").value;
  let messageTitle = document.getElementById("message-title");
  let paragraph = document.getElementById("paragraph");
  let doll = document.getElementById("doll");
  let message = document.getElementById("message");
  let copy = document.querySelector(".copy");
  let terms = document.querySelector(".terms p");

    // Encripta el texto reemplazando ciertos caracteres
  let encryptedText = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    
    // Realiza comprobaciones y actualiza los elementos HTML según sea necesario
    if(checktext(text)==true){ 
      terms.style.color="#495057";

    if (text.length != 0) {
      document.getElementById("message").value = encryptedText;
      messageCatch = encryptedText;
      copy.style.display="block";
      message.style.display="flex";
      message.style.visibility="visible";
      messageTitle.textContent = "Texto encriptado con éxito";
      paragraph.textContent = "";
      doll.style.display="none";
    } else {
      doll.style.display="flex";
      doll.src = "./img/doll.png";
      messageTitle.textContent = "Ningún mensaje fue encontrado";
      paragraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      message.style.display="none";
      message.style.visibility="hidden";
      copy.style.display="none";
      text.length=0;
    }

    }else{
    terms.style.color="red";
  }
}


function decrypt() {
   // Obtiene los elementos necesarios por sus IDs
  let text = document.getElementById("text").value;
  let messageTitle = document.getElementById("message-title");
  let paragraph = document.getElementById("paragraph");
  let doll = document.getElementById("doll");
  let message = document.getElementById("message");
  let copy = document.querySelector(".copy");
  let terms = document.querySelector(".terms p");

  
  // Desencripta el texto reemplazando ciertas palabras
  let encryptedText = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

     // Realiza comprobaciones y actualiza los elementos HTML según sea necesario
    if(checktext(text)==true){ 
      terms.style.color="#495057";

      if (text.length != 0) {
        document.getElementById("message").value = encryptedText;
        messageCatch = encryptedText;
        copy.style.display="block";
        message.style.display="flex";
        message.style.visibility="visible";
        messageTitle.textContent = "Texto desencriptado con éxito";
        paragraph.textContent = "";
        doll.style.display="none";
      } else {
        doll.style.display="flex";
        doll.src = "./img/doll.png";
        messageTitle.textContent = "Ningún mensaje fue encontrado";
        paragraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        message.style.display="none";
        message.style.visibility="hidden";
        copy.style.display="none";
        text.length=0;
      }
  }else{
    terms.style.color="red";
  }
  

}

// Realiza comprobaciones y actualiza los elementos HTML según sea necesario, al igual que en la función `encrypt()`
function checktext(text){
  let checkterms=false;
  if (/^[a-z\s\-\_\.\,\:\;\!\?\ñ]+$/.test(text)) {
    checkterms=true;
  }
  if(text.length==0){
    checkterms=true;
  }
  return checkterms;
}

function copyMessage() {
  //navigator nos permite ingresar a las opciones de naegador, posteriormente le damos clipboar para coper, con write.text y seleccionamos que queremos copear, ademas el texto si se escribia en mayuscula se copea igual por ende utlice lowercase para que el texto salga en minuscula
  navigator.clipboard.writeText(messageCatch);
  alert("texto copiado");
}

/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`*/

/*Creado Por GERARDO HERNANDEZ LOPEZ*/

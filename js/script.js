const listaMail = ['bla, blabla. blab'];

const mailUtente = prompt('la tua email');

let msg = '';

let mailPresente = false;

for(let i = 0; i < listaMail.length, i++){
  if(listaMail[i] === mailUtente){
    mailPresente = true;
  }
}

if(mailPresente === true){
  ouput.innerHtml = 'si';
}else{
  output.innerHtml = 'no';
}
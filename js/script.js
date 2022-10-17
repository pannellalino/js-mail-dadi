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


//es 2

const numeroA = Math.ceil(Math.random() * 6);
const numeroB = Math.ceil(Math.random() * 6);

let msg ='';

if(numeroA > numeroB){
  msg = 'A vince';
}else if(numeroA < numeroB){
  msg = 'B vince'
}else{
  msg = 'pari';
};
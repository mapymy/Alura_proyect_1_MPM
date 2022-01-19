"use strict"
let textInput = '' , textOutput = '', encrypted  = '', decrypted  = '';
const textAreaInput = document.getElementById('userText');
const textAreaOutput = document.getElementById('encrypt-output');
textAreaInput.addEventListener('change', (event) => {
  textInput = event.target.value;
});

function encrypt () {
    if (textInput==='') {
      return textInput; 
    }
    let chars = {e:'enter', i:'imes', a:'ai', o:'ober', u :'ufat'};
    const encrypted = textInput.replace(/[eiaou]/g, m => chars[m]);
    if (encrypted) {
      document.getElementById('not-found-container').style.display = 'none';
      document.getElementById('encrypt-output-container').style.display = 'flex';
      textAreaOutput.value = encrypted;
    }
}

function decrypt () {
  if (textInput==='') {
    return textInput; 
  }
  let chars = {enter:'e', imes:'i', ai:'a', ober:'o', ufat:'u'};
  const decrypted = textInput.replace(/enter|imes|ai|ober|ufat/gi,  m => chars[m] );
  if (decrypted) {
    document.getElementById('not-found-container').style.display = 'none';
    document.getElementById('encrypt-output-container').style.display = 'flex';
    textAreaOutput.value = decrypted;
  }
}

function copyText() {
  console.log("try copy text")
  textAreaOutput.select();
  document.execCommand('copy');
}
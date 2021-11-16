//Business Logic

function cryptosquare(text) {
  const cryptotext = '';
  const letterArray = text.toLowerCase.split('');
  const cryptoArray = letterArray.remove('.',',',"'",'!','?',';',':','-',);
  for (let i = 0; i <= cryptoArray.length; i+=8);
    if (i === 0) {
    cryptotext.push(letterArray[i]);
    } else if (i%8===1) {
      cryptotext.push(letterArray[i]);
    } else if (i%8===2) {
      cryptotext.push(letterArray[i]);
    } else if (i%8===3) {
      cryptotext.push(letterArray[i]);
    } else if (i%8===4) {
      cryptotext.push(letterArray[i]);
    } else if (i%8===5) {
      cryptotext.push(letterArray[i]);
    } else if (i%8===6) {
      cryptotext.push(letterArray[i]);
    } else if (i%8===7) {
      cryptotext.push(letterArray[i]);
    } else {
      cryptotext.push(letterArray[i]);
    }
    console.log(cryptotext);
    console.log(letterArray);
    console.log(cryptoArray);
    return cryptotext
}

//UI Logic

$(document).ready(function(){
  $('form#crypto').submit(function(event){
    event.preventDefault();
    const passage = $('#text').val();
    const cryptoPassage = cryptosquare(passage);
    $('#result').html(cryptoPassage);


    


//code for the alphabet

// function isLetter(str) {
//   return str.length === 1 && str.match(/[a-z]/i);
// }


//code sample
// function splitArrayIntoChunksOfLen(arr, len) {
//   var chunks = [], i = 0, n = arr.length;
//   while (i < n) {
//     chunks.push(arr.slice(i, i += len));
//   }
//   return chunks;
// }
// var alphabet=['a','b','c','d','e','f'];
// var alphabetPairs=splitArrayIntoChunksOfLen(alphabet,2); //split into chunks of two

//code sample

const greeting='Hello,how are you?'
function reversString(text){
    let reverse='';
 for(const letter of text){
     console.log(letter);
     reverse=letter+reverse;
 }   return reverse;
}
const reversed=reversString(greeting);
console.log(reversed);


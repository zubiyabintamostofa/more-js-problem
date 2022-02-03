const names=['abu','habu','jui','mui','pui','koli','abu','jui','mui'];
function removeDuolicate(names){
    const unique=[]
    for(const elememt of names){
        console.log(elememt);
        if(unique.indexOf(elememt)==-1){
            unique.push(elememt);
        }
    
    }
    return unique;
}


const uniqueNames=removeDuolicate(names);
console.log(uniqueNames);
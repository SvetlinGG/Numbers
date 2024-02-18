function numbers(input){
    let modify = input.shift().split(' ').map(Number);
    
    for ( let i=0; i < input.length; i++){
        let [command, numOne, numTwo] = input[i].split(' ');
        if ( command === 'Add'){
            modify.push(Number(numOne));
            
        }else if ( command === 'Remove'){
            modify.includes(Number(numOne));
            
            
        }else if ( command === 'Replace'){
            modify.splice(Number(numOne),1,Number(numTwo));
        }
    }


}
numbers(['1 4 5 19','Add 1','Remove 4','Finish']);
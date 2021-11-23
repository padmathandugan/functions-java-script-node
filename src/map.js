const cubeRoot = function cube(input){ 
    console.log('inside cube method');   //[1,2,3]]
    return input.map(x => (Math.pow(x, 3)));
}

const identityArray = function identity(input){
    return input.map(x => x);
}

const mapAddition= function multiply(input){ //input -[{x : 10}],someObject
    const MultiplyValue = input.map(someObject => someObject.x+1);
    //console.log('MultiplyValue'+MultiplyValue);
    return MultiplyValue;

}

const map = function map(input, action){
    if(action == cubeRoot){
    if(Array.isArray(input) && input.length !=0){
    console.log('array.length:'+input.length);
       var cubeOfNum = cubeRoot(input);
       return cubeOfNum;
       console.log('value:'+cubeOfNum);
    }return input;
    /*else{
        console.log('empty array:' +input);
        }  */ 
    }else if(action == identityArray){
        var identify = identityArray(input);
        //console.log('identify:'+identify);
        return identify;
    }

}
module.exports = map, mapAddition, cubeRoot, identityArray;



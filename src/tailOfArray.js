const tailOfArray = (array) => {
    if(Array.isArray(array)){
    array.shift();
    return array;
    }return tailOfArray;
}
    module.exports = tailOfArray;


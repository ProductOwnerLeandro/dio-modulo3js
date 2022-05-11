/////// Map sem this ////////////
function mapSemThis(arr){
    return arr.map(function (item){
        return item * 1000;
    });
}

const nums = [2,4,6,8,10]

console.log(mapSemThis(nums));
console.log(nums);
export const func3 = () =>{
    function sum(number){
        if(number/10 < 1) return number; 
        return sum(Array.from(number.toString()).reduce((previousValue,currentValue) => parseInt(previousValue) + parseInt(currentValue)))
    }
    console.log(sum(77448743))
}
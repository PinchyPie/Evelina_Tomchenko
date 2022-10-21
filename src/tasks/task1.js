export const func1 = () => {
    function filter_list(array){return array.filter(item => typeof item === "number")}
    console.log(filter_list(["a",1,2,"b","c",3,"l",123]))
}

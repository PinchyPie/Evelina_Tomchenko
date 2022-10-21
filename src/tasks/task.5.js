export const func5 = () =>{
    function sorted_list_of_friends(friendList){return friendList.toUpperCase().split(";").map(item => {let new_item = item.split(":"); return `(${new_item[1]}, ${new_item[0]})`}).sort().join(" ")}
    console.log(sorted_list_of_friends("Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
}
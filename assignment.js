function feetToMile(feet) {
    var mile = feet/ 5280;
    return mile;
}
var result = feetToMile(5000);
console.log(result);


// woodcalculator
function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1728 ;
    var tableCount = table *5184  ;
    var bedCount =  bed *8640 ;
    var totalWood = chairCount + tableCount + bedCount
    return totalWood;

}
var result = woodCalculator(2,2,2,);
console.log(result,"inch");

// brickCalculate



// tinyFriend

function tinyFriend(name) {
    var tiny = name[0];
    for(var i = 0;i<name.length;i++){
        var fList = name[i]
        if(fList.length < tiny.length){
            tiny = fList;
        }
        
    }
    return tiny;
}

var friendList =tinyFriend(["saiful","ibrahim","himu","hdjfff"])
console.log(friendList);

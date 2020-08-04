// 01

function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;  
} 
var result = feetToMile(1000000);
console.log(result)

// // 02

function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood
}
var result = woodCalculator(10,10,10)
console.log(result)

// // 03

 function brickCalculator(bulding) {
    var brick = 0;
if (bulding <= 10) {
     brick = bulding * 15 * 1000
}
else if(bulding <= 20){
     var bulding10 = 10 * 15 * 1000
     var remaining = bulding - 10
    var bulding20 = remaining * 12 * 1000
     brick = bulding10 + bulding20
}
else{
    var bulding10 =  10 * 15 * 1000
    var bulding20 = 10 * 12 * 1000
    var remaining = bulding - 20
    var bulding30 = remaining * 10 * 1000
      brick = bulding10 + bulding20 + bulding30
}
return brick;

 }
 var total = brickCalculator(3)
console.log(total)

// 04

function tinyFriends(name) {
    var smallName = name[0]
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (element.length < smallName.length) {
            smallName = element
        }
       
    }  
     return smallName
}
 var friends = tinyFriends(["saiful","zihad","khaled","asif","al amin","himu"])
 console.log(friends)

 
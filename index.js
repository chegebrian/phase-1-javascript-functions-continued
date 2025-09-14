// code your solution here
function saturdayFun(action = "roller-skate") {
  return `This Saturday, I want to ${action}!`;
}

// console.log(saturdayFun());
// console.log(saturdayFun("bathe my dog!"));

// saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function(action = "go to the office"){
    return `This Monday, I will ${action}.`
}

mondayWork();
mondayWork("work from home");

function wrapAdjective(special = "*"){
return function(value = 'a hard worker') {
    return `You are ${special}${value}${special}!`
}
}
wrapAdjective();
wrapAdjective("||")("a dedicated programmer")

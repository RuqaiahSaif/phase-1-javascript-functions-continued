// code your solution here
function saturdayFun(activity = "roller-skate"){
    console.log(`This Saturday, I want to ${activity} !`)
}
saturdayFun()
saturdayFun("bathe my dog")
function mondayWork(activity ="go to the office"){
    console.log(`This Monday, I will ${activity} !`)
}
mondayWork()
mondayWork("work from home")
function wrapAdjective(special = "*") {
    const emphatic = function (adjective = "a hard worker") {
        return `You are${special} ${adjective}`;
    };
    return emphatic;
}
console.log(wrapAdjective("%")("a dedicated programmer"))
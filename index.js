// code your solution here
function saturdayFun(defaul = `roller-skate`){
    return `This Saturday, I want to ${defaul}!`
}
function mondayWork(default1 = "go to the office"){
    return `This Monday, I will ${default1}.`
}

function wrapAdjective(stars = `*`){
    return function(value = "special"){
        return `You are ${stars}${value}${stars}!`
    }

}

// code your solution here
function superbowlWin(record){
    const a = record.find(record => record.result === "W")
    return !!a? a.year : undefined
    // if (!a!==a){
    //     return a.year
    // }else{
    // return undefined
    // }
}
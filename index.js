const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
const value = record.find (r => r.result === "W")
return !!value ? value.year : undefined
}

superbowlWin(record)
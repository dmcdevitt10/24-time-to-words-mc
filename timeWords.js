// function time(timeStr){
//     let hourAndMin2Key = {
//         0: '',
//         1: 'one',
//         2: 'two',
//         3: 'three',
//         4: 'four',
//         5: 'five',
//         6: 'six',
//         7: 'seven',
//         8: 'eight',
//         9: 'nine',
//         10: 'ten',
//         11: 'eleven',
//         12: 'twelve'
//     }
//     let min1Key = {
//         0: 'oh',
//         2: 'twenty',
//         3: 'thirty',
//         4: 'fourty',
//         5: 'fifty',
//     }
//     let ifTens = {
//         10: 'ten',
//         11: 'eleven',
//         12: 'twelve',
//         13: 'thirteen',
//         14: 'fourteen',
//         15: 'fifteen',
//         16: 'sixteen',
//         17: 'seventeen',
//         18: 'eighteen',
//         19: 'nineteen',
//     }
//     let amOrPm = ''
    
//     timeStr = timeStr.replace(':', '')
//     let hour = +(timeStr[0] + timeStr[1])
//     let minute = (timeStr[2] + timeStr[3])
//     let min1 = ''
//     let min2 = ''
//     let minTen = ''
//     if(+minute > 19 || +minute < 10){
//         min1 += minute[0]
//         min2 += minute[1]
//     }else{
//         minTen = ifTens[minute]
//     }

//     if(hour > 11){
//         amOrPm = 'pm'
//     }else{
//         amOrPm = 'am'
//     }
    
//     if(+minute > 59){
//         return 'not a valid time'
//     }
//     if(hour > 12){
//         hour = hour - 12
//     }
//     hour = hourAndMin2Key[hour]
//     min1 = min1Key[min1]
//     min2 = hourAndMin2Key[min2]
//     if(minTen === ''){
//         minTen += min1 + min2
//     }

//     return (hour + ' ' + minTen + ' ' + amOrPm)
// }

// console.log(time('00:30'))

// I almost solved if, i just need to think of a few more cases.


let conversionTable = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty'
}

function convertNumber(n) {
    if (n < 21 || n % 10 === 0) {
        return conversionTable[n]
    } else {
        let onesCol = n % 10
        let tensCol = Math.floor(n / 10) * 10
        return conversionTable[tensCol] + ' ' + conversionTable[onesCol]
    }
}

function timeWord(givenTime) {
    if (givenTime === '00:00') {
        return 'midnight'
    }

    if (givenTime === '12:00') {
        return 'noon'
    }

    let givenHours = +(givenTime[0] + givenTime[1])
    let givenMinutes = +(givenTime[3] + givenTime[4])

    let hours = ''
    let minutes = ''
    let timeOfDay = ''

    //figuring out hours && time of day
    if (givenHours === 0) {
        hours = 'twelve'
        timeOfDay = 'am'
    } else if (givenHours > 0 && givenHours < 12) {
        hours = convertNumber(givenHours)
        timeOfDay = 'am'
    } else if (givenHours === 12) {
        hours = convertNumber(givenHours)
        timeOfDay = 'pm'
    } else {
        hours = convertNumber(givenHours - 12)
        timeOfDay = 'pm'
    }

    //figuring out minutes
    if (givenMinutes === 0) {
        minutes = 'o\'clock'
    } else if (givenMinutes > 0 && givenMinutes < 10) {
        minutes = 'oh ' + convertNumber(givenMinutes)
    } else {
        minutes = convertNumber(givenMinutes)
    }

    return hours + ' ' + minutes + ' ' + timeOfDay
}

console.log(timeWord('13:45'))
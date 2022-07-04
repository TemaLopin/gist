//Запускал и тестировал через index.html
//  1 задание
const arr = [1,2,3,4,5,6,6,3,5,7,8,9]
let arr1 = arr.map((item)=> item**2)
console.log(arr1)

// 2 задание

let uniqueArr = Array.from(new Set(arr))
console.log(uniqueArr)


// 3 задание 
const arr3 = [1,4,5,6,-3,-9,-2]
function OverZero(arr) {
    let newArr = []
    for (let i = 0; i<arr.length; i++) {
        if (arr[i]>0) {
            newArr.push(true)
        }else newArr.push(false)
    } console.log(newArr)
    
}
OverZero(arr3)
// 4 задание 
const arr4 = arr3
let negativeValue = []
for (let i = 0; i<arr4.length; i++){
    if (arr4[i]<0) negativeValue.push(arr4[i])
}
console.log(negativeValue)

//5 задание 
const arr5 = arr
let sum = arr5.reduce((prev, current)=> prev+current)
console.log(sum)

//6  задание
const arr6 = [1, 2, [3, 4], 5, {a: 7}]
let filterArr = arr6.filter(it => Array.isArray(it))
console.log(filterArr)


//7 задание 
let str = prompt('Введите строку')
let splittedStr = str.split(' ')
let result = splittedStr.filter(it => it.length > 4).length
console.log(result)

//8 задание 
const str1 = 'abcd123456ef5234'
const str2 = 'abcef12345678ghi654321klm'
const str3 = 'abcdef'
const str4 = 'abc1234567asd'
function lenToSix(str) {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let splitStr = str.split('')
    for (let i = 0; i < str.length; i++) {
        if (!(splitStr[i] in numbers)) [   
            splitStr[i] = ' '
        ]
    }
    let result = splitStr.join('').split(' ').find(it => it.length === 6)
    if (result) return result 
    else return false
}
console.log(lenToSix(str1))
console.log(lenToSix(str2))
console.log(lenToSix(str3))
console.log(lenToSix(str4))

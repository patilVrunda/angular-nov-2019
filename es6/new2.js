let i = 2

if (true){
    let i = 30
}
//console.log(i)

let data = 'android version is ' + i
 data = `
android version is ${i * 10}
fmsd,mffdsdfdf
fdffdffd
fddfdfdf
fddffdfd 
`
console.log(data)

function populationData(dt){
    return dt.toUpperCase() + Date.now()
}

let conData = populationData(`dfhjdfshsj fdsfdns
dsakld 
dasklsdak;l 
s,ld,;dl,d;l,
`)

console.log(conData)

let lambda = aad => aad.toUpperCase() + Date.now()
//console.log(lambda) is a function defination

console.log(lambda(`fjdfdlk fdkfdlkfdjf fdskfdklfkm`))

/* function populationData(dt){
    return dt.toUpperCase() + Date.now()
 }

 this function conver to ES6 lambda

let lambda = dt => dt.toUpperCase() + Date.now()

*/

let num = 10
num = 'ssss'
num =  40.9
num = true
num = () => console.log('fn')

let config = {
    url: 'http://codekul.com',
    port: 8080,
    connect: () => {
        console.log(`Connecting to codekul server`)
    }
}

console.log(` 
    URL - ${config.url},
    Port - ${config.port} 
`)

config.connect()

// array values

let mobiles = [
    'Android',
    'Windows',
    'Apple'
]

// array values in objects
let dataum = [
    { adldfkjadlkf: 'excel', qtadflkadjdfy: 15 },
    { adldfkjadlkf: 'db', qtadflkadjdfy: 8 }
]

//object 

let dataum = { adldfkjadlkf: 'excel', qtadflkadjdfy: 15 },
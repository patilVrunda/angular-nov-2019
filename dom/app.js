let quotations = [
    { part: 'Mouse', qty: 1, price: 50 },
    { part: 'PenDirive', qty: 4, price: 500 },
    { part: 'Cabinate', qty: 3, price: 200 },
    { part: 'Processor', qty: 1, price: 8000 },
    { part: 'Keyboard', qty: 2, price: 400 },
]

//console.log(document)

let quotationTable = document.getElementById('quotationTable')
console.log(quotationTable)

var totalvalue = 0
var row ;

 quotations.forEach((quotation, index) => {
     console.log(quotations)
    row = quotationTable.insertRow(index + 1)
    totalvalue  += quotation.qty * quotation.price
    row.insertCell(0).innerHTML = `${quotation.part}`
    row.insertCell(1).innerHTML = `${quotation.qty}`
    row.insertCell(2).innerHTML = `${quotation.price}`
    row.insertCell(3).innerHTML = `${quotation.qty * quotation.price}`
})
row.insertCell(4).innerHTML = `${totalvalue}`;

var arr=[1,2,3,5];
for(var i=0;i<arr.length-1;i++){
    var b=arr[i+1];
    if(arr[i]==b-1){
        console.log("yes")
    }else{
       var c= arr[i]
        console.log(c+1);

    }
}


function abc() {
    console.log("hi hello")
}

function abc1() {
    console.log("hi hello 1")

    var abc23

    function abc23() {
        console.log("hi hello 23")
    }
}

function abc2() {
    console.log("hi hello 2")
}

abc()
abc1()
abc2()
abc23()
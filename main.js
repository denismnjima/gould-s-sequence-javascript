function* gould() {
    let num = 0
    while(true){
        let numBinary = num.toString(2)
        let occurencies = numBinary.split('1').length-1
        yield occurencies
        num++
    }
  }

let iterator = gould()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
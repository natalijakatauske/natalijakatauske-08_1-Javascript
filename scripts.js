console.log('labas')
//1. Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n.
//Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
//t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:

// document.querySelector('form').addEventListener('submit', myFunction)
// function myFunction (event) {
//     event.preventDefault()
//     const myNumber = Number(document.querySelector('input[name=lSize]').value)
//     console.log(myNumber)
//     const div1 = document.querySelector('div')
//     let output = ''
//     for (i=0; i < myNumber - 1; i++) {
//         output += 'L<br>'
//     }
//     for (i=0; i < myNumber; i++) {
//         output += 'L'
//     }
//     div1.innerHTML = output
// }

//2. Sukurkite panašią funkciją, kuri atspausdintų C raidę.
//t.y. jei kviesite funkciją fn(5), tai turėtų atspausdinti tokį rezultatą:
//CCCCC
//C
//C
//C
//CCCCC

// document.querySelector('form').addEventListener('submit', myFunction)
// function myFunction (event) {
//     event.preventDefault()
//     const myNumber = Number(document.querySelector('input[name=lSize]').value)
//     console.log(myNumber)
//     const div1 = document.querySelector('div')
//     if (myNumber < 3) {
//         div1.innerHTML = 'Error! C letter size must be at least 3'
//         return
//     }
//     let output = ''
//     for (i=0; i < myNumber; i++) {
//         output += 'C'
//     }
//     output += '<br>'
//     for (i=0; i < myNumber - 2; i++) {
//         output += 'C<br>'
//     }
//     for (i=0; i < myNumber; i++) {
//         output += 'C'
//     }
//     div1.innerHTML = output
// }

//3. Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input
//(t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
//Pvz.: Petras, Jonas, Mantas, Antanas.

// function myFunction (event) {
//     const myName = document.querySelector('input[name=abc]').value
//     document.querySelector('p').innerHTML += myName + ', '
// }

// 4.Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis -
//turi alert'int skaičių, kuris arčiausiai 100.
//Pvz.: fn(101, 81) grąžins 101.

// function alerNumber (myNumber, myNumber1) {
//     if (Math.abs(100 - myNumber) > Math.abs(100-myNumber1)) {
//         alert(myNumber1)
//     } else {
//         alert(myNumber)
//     }
// }

// function myFunction (event) {
//     const myNumber = Number(document.querySelector('input[name=number]').value)
//     const myNumber1 = Number(document.querySelector('input[name=number1]').value)
//     console.log(myNumber, myNumber1)
//     alerNumber(myNumber, myNumber1)
// }

// document.querySelector('form').addEventListener('input', myFunction)

// 5.Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius
//tarp 1 ir 5. Vartotojas turi formą su vienu input - gali spėti skaičių.
//Atspėjus - išmeta alert(atspejai), kitaip alert(neatspejai).

let counter = 0
let randomNumber = Math.floor(Math.random()*5)+1
console.log(randomNumber)

document.querySelector('form').addEventListener('submit', myFunction)
function myFunction (event) {
    event.preventDefault ()
    counter++
    const myNumber = Number(document.querySelector('input[name=number]').value)
    if (myNumber === randomNumber) {
        alert(`You won! ${counter} time`)
    } else {
        alert('Maybe next time...')
    }
}

// 6. Pakoreguokite penktą pratimą, kad skaičiuotų iš kelinto karto atspėjai ir
//tai parašytų alert'e.
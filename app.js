function solution() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    document.getElementById('sum').innerText = +a + +b

}
function multiplication() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    document.getElementById('sum').innerText = +a * +b
}
function division() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    document.getElementById('sum').innerText = +a / +b
}
function minus() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    document.getElementById('sum').innerText = +a - +b
}
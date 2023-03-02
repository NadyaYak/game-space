let p1 = {
    health: '100',
    fp:5
}
let p2 = {
    health: '100',
    fp: 5
}

if(p1.health <=0){
    alert("PLAYER ONE LOSSES!")
}
if(p1.health <=0){
    alert("PLAYER TWO LOSSES!")
}else{}





const displayLife = 9 =>{
    let pOne= document.querySelector('hp1')
    p1.replaceWith(p1.health)
    let pTwo = document.querySelector('.hp2')
    p2.append(p2.health)
}



//attack
const playerAttack = () =>{
p1.health -=p2.fp
displayLife()
}
const playerAttack = () =>{
p2.health -=p2.fp
displayLife()
}

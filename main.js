let login =prompt(" logini kiriting!!!")
let parol =prompt("parolni kiriting!")
if (login.toUpperCase() == "KAMOL"){
    if (parol=="333"){
       alert("Xammasi tugri!")
   }else {
       alert("parol xato!")
       for(let i=2; i>=1; i--){
        alert(i)
    }
   }
}else{
    alert("login xato!")
    for(let i=2; i>=1; i--){
        alert(i)
    }
}

let greeting = prompt("Gapni kiriting");
let a =prompt("nichinchi sondan boshlansin")
let b =prompt("nichinchi songacha bo'lsin")

console.log(greeting.slice(a,b))




let borWid = "7.88km";
// console.log(parseInt(borWid))
let h = parseFloat(borWid) // 7.88
console.log(Math.round(h))

let k =prompt("Parolni kiriting") 
function d(k){
    if (k.length<=8){
        alert("parol to'g'ri")
    }else{
        alert("parolga 8 gacha son kiriting")
    }
}
d(k)












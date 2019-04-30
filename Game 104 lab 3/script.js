//lab 3
//toad attacks yoshi
//brackets are used for arrays
//curly braces for objects

//constructor (function)

function items(Itemname,Itemimage,Itemcolor,Itemdamage){
    this.Itemname=Itemname
    this.Itemimage=Itemimage;
    this.Itemcolor=Itemcolor;
    this.Itemdamage=Itemdamage;
}

const Blueshell= new items('Blue Shell','blue',50);
const Redshell= new items('Red Shell','red',60);
const banana= new items('banana','yellow',10);

console.log(banana);

const toad = {
    image:'toad.gif',
    weight:10,
    speed:100,
    item:{
        image:'D',
        damage:50
    },
    points:100,
    //die:function(){
    //    return 'Toad is dead ... GAMEOVER';
   // }
}

const yoshi = {
    image:'yoshi.gif',
    weight:10,
    speed:80,
    item:{
        image:'*',
        damage:50
    },
    points:100,
    die:function(){
        return 'Yoshi is dead ... GAMEOVER';
    }
}

//function yoshiAttack() {
 //   toad.points = toad.points-yoshiAttackPoints;
 //   console.log('Toad is attacked ... points: '+toad.points);
 //   if(toad.points<=0)
 //   {
 //       console.log(toad.die());
 //   }

let yoshiAttackPoints = yoshi.item.damage;
let toadAttackPoints = toad.item.damage;

function toadAttack() {
    yoshi.points = yoshi.points-toadAttackPoints;
    console.log('Yoshi is attacked ... points: '+yoshi.points);
    if(yoshi.points<=0)
    {
        document.getElementById('message').innerHTML=`${yoshi.die()} <img src="${yoshi.image}" alt="yoshi" width=10%>`
        console.log(yoshi.die());
    }
}

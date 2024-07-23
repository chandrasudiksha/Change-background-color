const colors=['red','blue','green','yellow','pink','grey','purple'];
let c=0;
document.getElementById("btn").addEventListener("click",function(){
    c=c+1;
    if(c==colors.length)
     c=0;
    document.body.style.backgroundColor=colors[c];
    document.getElementById("col").innerHTML=colors[c].charAt(0).toUpperCase()+colors[c].slice(1);
});
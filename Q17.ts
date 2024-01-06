let shrinkingguestlist=["Abdullah","Rehman","Talha","Kazim","Mansoor","Sufyan"]
for(let list of shrinkingguestlist){
    console.log(`${list} I can invite only two people for dinner.`);
}

const S=shrinkingguestlist.pop()
console.log(S,"sorry you can not invite them to dinner.");
const M=shrinkingguestlist.pop()
console.log(M,"sorry you can not invite them to dinner.");
const K=shrinkingguestlist.pop()
console.log(K,"sorry you can not invite them to dinner.");
const T=shrinkingguestlist.pop()
console.log(T,"sorry you can not invite them to dinner.");

for(let list of shrinkingguestlist){
    console.log(`${list} You are invited.`);
}

shrinkingguestlist.splice(0,2)
console.log(shrinkingguestlist);



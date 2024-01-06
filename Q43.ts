let magiansname=["Celtic", "Norse", "mythical creatures"]

let make_great=(magiansname:string[])=>{
    for(let magiansnames of magiansname)
    console.log(magiansnames, "the great");
}
make_great(magiansname);

const newArray=[...magiansname];
console.log(newArray);
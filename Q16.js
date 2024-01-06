"use strict";
let moreguestlist = ["Abdullah", "Rehman", "Talha", "Kazim", "Mansoor", "Sufyan"];
moreguestlist.unshift("Jahanzaib");
moreguestlist.splice(3, 0, "Shaheen");
moreguestlist.push("Afridi");
for (let list of moreguestlist) {
    console.log(`${list} aj teri dawat he meri taraf.`);
}

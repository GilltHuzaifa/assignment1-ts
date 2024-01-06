let usernames:string[]= ["admin", "Eric", "Alice", "Bob", "Jhon"];

for(let username of usernames){

    if(username.toLowerCase() ==="admin"){
        console.log('Hello admin, would you like to see a status report?');
    }

        else{
            console.log(`Hello ${username}, thnk you logging in again.`);
        
    }
}


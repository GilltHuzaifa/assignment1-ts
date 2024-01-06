let current_users=["admin", "Eric", "Alice", "Bob", "Jhon"]

console.log(current_users);

let new_users=['bobi','charlie','Eric','Jhon','janu']

console.log(new_users);

for (let new_user of new_users) {
    
    let usernameExists = current_users.some(
        (current_user) => current_user.toLowerCase() === new_user.toLowerCase()
    );

     


    
    if (usernameExists) {
        console.log(`The username '${new_user}' is not available. Please choose a different one.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}
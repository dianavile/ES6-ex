/* Arregla l'error del següent bloc de codi:
users.map(function (user) {
    user.firstName;
 });
 
 var users = 
 [{ firstName: 'Homer', lastName: 'Simpson' },
 { firstName: 'Marge', lastName: 'Simpson' },
 { firstName: 'Bart', lastName: 'Simpson' },
 { firstName: 'Lisa', lastName: 'Simpson' },
 { firstName: 'Maggie', lastName: 'Simpson' }]; */


 let users = 
 [{ firstName: 'Homer', lastName: 'Simpson' },
 { firstName: 'Marge', lastName: 'Simpson' },
 { firstName: 'Bart', lastName: 'Simpson' },
 { firstName: 'Lisa', lastName: 'Simpson' },
 { firstName: 'Maggie', lastName: 'Simpson' }];

 let usersFirstName = users.map((user) => {
    return user.firstName;
 });

console.log(usersFirstName);
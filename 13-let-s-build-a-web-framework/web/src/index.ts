import {User} from "./models/User";

const user = new User({name: 'myName', age: 20});

console.log(user.get('name'));
console.log(user.get('age'));


user.set({name: 'newName', age: 999});
console.log(user.get('name'));
console.log(user.get('age'));

user.set({name: 'newName2'});
console.log(user.get('name'));
console.log(user.get('age'));

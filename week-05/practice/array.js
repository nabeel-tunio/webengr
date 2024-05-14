const cars = ["Toyota", "Alto", "Cultus"];
console.log(cars);
let v=cars.push("Mercedes");

console.log(v);
console.log(cars);
cars.pop();
console.log(cars);
console.log(cars.shift());
cars.push('Mehran');
cars.push('Picanto');
console.log(cars);
console.log(cars.slice(0));


const person = {
    firstName : "Muhammad",
    lastName : "Rashid",
    age : 23,
    school : "Sukkur IBA University"
};

console.log(person.firstName + " is " + person.age + " years old.");

for(let x in person){
    console.log(person[x]);
}

const obj = {
};

obj['1']=1;
console.log(obj);
obj['1']=100;
console.log(obj);

obj['1']++;
console.log(obj);

if(obj['1']){
    console.log("Key found..");
}
else{
    console.log("Key not found and key is undefined..");
}

console.log(obj['0']);

const objs={};
const arr= [{id:1, name:"Muhammad Rashid"},
            {id:2, name:"Adeel Ahmed"},
            {id:1, name:"Muhammad Rashid"},
            {id:4, name:"Murad Jameel"},
            {id:1, name:"Muhammad Rashid"}
            ]

    for(index in arr){
        const element = arr[index].id;
        if(objs[element]){
                objs[element]++;
        }
            else{
                objs[element] = 1;
            }
        }
var str=0 ? "No" : "Many friends."
console.log(str);


var object={
    name:"Aadil",
    age:12,
    gender:"Male",
    code:"+92"
}

var object2={...object};
object.name="Naadil"
console.log(object)
console.log(object2)

const{name,age,...rem}=object;
console.log(name,age,rem)


setTimeout(() => {
    console.log('This message will be displayed after 2 seconds.');
},2000);



function getData() {
    const con=Math.random()
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    if(xon>5)
    resolve(data);
    // Simulating failure
    else
    reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    const mydata=getData()
    .then(data => {
    console.log('Data received:', data);
    return data
    })
    .catch(error => {
    console.error('Error:', error.message);
    });



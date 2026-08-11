/*--- 1*/
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/*----2*/
// setTimeout(()=> {
//     console.log("first");
//      setTimeout(()=>{
//         console.log("second");
//         setTimeout(()=>{
//             console.log("third");
//         },3000);
//      },1000);
// },3000);

// const promises = new Promise((resolve,reject) => {
//  reject("manzi");
// });
// promises.catch((result)=>{
//     console.log(result);
// });

// const promises = new Promise((resolve,reject) => {
 
//  setTimeout(()=>{
// reject("manzi");
//  },3000); 
// });
// promises.catch((result)=>{
//  console.log(result);
// });

// function wait(ms){
//     return new Promise((resolve, reject) =>{
//         setTimeout(resolve, ms);
//     })
// };
// wait(500

// ).then(()=>{
//     console.log("first");
// }
// )
//  let number;
// const promise = new Promise((resolve)=>{
//  resolve(10);
// });
// promise .then((number)=>{
//     return  number * 4;
// })
//      .then((number)=>{
//             return number + 5;
//          })
//          .then((result)=>{
//             console.log(result)
//          })

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// function counter(callback){
//     for (let i = 0; i < 5; i++) {
//         setTimeout(()=>{
//             callback(i);
//         },(i+1) * 1000);
// }
// } 
// counter((callback) => {
//     console.log(callback);
// });

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}
function verse(firstName, lastName){
    return `${lastName}, ${firstName}`;
}
function v(firstName, lastName){
    return `${firstName[0].toUpperCase()}. ${lastName}`;
}
function formatName(firstName, lastName, callback) {
    console.log(callback(firstName, lastName));
};
formatName("manzi", "haridi", fullName);
formatName("manzi", "haridi", verse);
formatName("manzi", "haridi", v);
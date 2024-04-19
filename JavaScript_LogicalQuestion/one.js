// const a={"nidhi":[70,25,30],"abhishek":[45,100,80],"shanti":[40,60,90],"avinash":[30,50,70]} 
// // output : 185 , 235 , 270
// let b=[0,0,0]
// for (let i in a){
//     for (let j in a[i])
//     b[j]+=a[i][j]
// }
// console.log(b);

//------------------------------

// var a=[{ "data": { "rows": [{ "doctype": "customer", "members": 50 }, { "doctype": "user", "members": 20 }, { "doctype": "client", "members": 45 }, { "doctype": "user", "members": 21 }, { "doctype": "company", "members": 11 }, { "doctype": "customer", "members": 05 }, { "doctype": "member", "members": 57 }], Id: "62727hshs" }, status: 200 }]

//------------------------------

// var a=[
//     {
//         data: {
//             rows: [
//                 { doctype: "customer", members: "50" },
//                 { doctype: "user", members: 20 },
//                 { doctype: "client", members: 45 },
//                 { doctype: "user", members: 21 },
//                 { doctype: "company", members: 11 },
//                 { doctype: "customer", members: 05 },
//                 { doctype: "member", members: "57" },
//             ],
//             Id: "62727hshs",
//         },
//         status: 200,
//     },
// ]
//----------------------------------

// const dataArray = [1, 2, 3, 4, 5];

// const jsonData = JSON.stringify(dataArray);

// // Node.js example
// const fs = require('fs');

// fs.writeFile('data.json', jsonData, function (err) {
//   if (err) throw err;
//   console.log('Data written to file');
// });
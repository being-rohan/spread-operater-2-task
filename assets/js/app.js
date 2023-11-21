let cl = console.log;

const spread2 = document.getElementById('spread')/// get
cl(spread2)
let text = spread2.innerText;//// text ghetlo
cl(text)
let arr = [...text]//// spraed alphabets la
cl(arr)

let spread3 = arr.map(ele => {//////// ita saglyan bind span kelo
    return `<span> ${ele}</span>`
})
cl(spread3)


spread2.innerHTML = spread3.join('')























// let arr = [453, 56, 78, 89,];


// //  let arr2=arr;// it copy refrernce

// let arr2 = [...arr];// value
// arr2.pop()

// cl(arr2)



// let people = [...document.querySelectorAll('#people p')];
// cl(people)
// //by map
// // const names=people.map(p=>{
// //    return  p.innerText
// // })

// const names = people.map(p => p.innerText)


// // by for each
// // let names=[];
// // people.forEach(p=>{
// //    names.push( p.innerText)
// // })
// cl(names)


// /// spread operater  in function

// function gt(fname, lname) {
//     return cl(`hello ${fname} iam ${lname}`)

// }
// let p = ["rohan", "panchal"]
// gt(...p)
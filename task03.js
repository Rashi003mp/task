let arr=['red','green','blue']
let [a,b,c]=arr

console.log(a);

let obj={name:'rashi',
    email:'muhammedrashidr222@gmail.com',
    location:'malappuram',
}

let {name,email,location}=obj
console.log(email);



function NamesList({name,email,location}) {
  console.log(name)
  console.log(email)
  console.log(location)
  
}
NamesList(obj)




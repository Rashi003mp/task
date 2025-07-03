let students = [
    { name: 'aflah', score: 90 },
    { name: 'fasil', score: 75 },
    { name: 'anshif', score: 65 },
    { name: 'rashi', score: 55 },
    
]
console.log(students);
let newarr = students.map((obj) => obj.name)
console.log(newarr);
let filter=students.filter((value)=>value.score>=75)
console.log(filter);
let total=students.reduce((accu,curr)=>accu+curr.score,0)
let avrg=total/students.length
console.log(avrg);

function grade(num){
    if(num>=90){
        return 'grade A'
    }else if(num>=75){
        return 'grade B'
    }else{
        return 'grade C'
    }
}
console.log(grade(80));








  let FData = [
  {
    id: 1,
    name: "Rahul Sharma",
    dob: "2001-05-14",
    city: "Bhopal",
    number: "9876543210",
    profession: "Web Developer",
  },
  {
    id: 2,
    name: "Priya Verma",
    dob: "1999-11-22",
    city: "Indore",
    number: "9123456780",
    profession: "Graphic Designer",
  },
  {
    id: 3,
    name: "Aman Khan",
    dob: "2000-03-09",
    city: "Delhi",
    number: "9988776655",
    profession: "Software Engineer",
  },
  {
    id: 4,
    name: "Sneha Patel",
    dob: "2002-07-18",
    city: "Mumbai",
    number: "9090909090",
    profession: "Teacher",
  },
  {
    id: 5,
    name: "Vikas Yadav",
    dob: "1998-01-30",
    city: "Pune",
    number: "9012345678",
    profession: "Photographer",
  },
];

FData.forEach((item) => {
  console.log(item["city"]);
});



let vishal = {
  name: "Vishal",
  dob: "2000-01-01",
  city: "Bhopal",
  number: "9876543210",
  profession: "Web Developer",
};
console.log(Object.keys(vishal));
console.log(Object.values(vishal));

let ar =[22,44,6,6,6,54,14,75,14,65,9,8,45];
ar.sort((a,b)=>a-b);
console.log(ar);

console.log(ar.find((val)=> val ===6 ));
console.log(ar.findIndex((val)=> val ===6 ));




let ar2 =[22,44,6,6,6,54,14,75,14,65,9,8,45];
console.log(ar2.filter((val)=> val > 20));
console.log(ar2.find((val)=> val > 20));



console.log(ar2.slice(5));

let ab="This is Web Development Course"
console.log(ab);

console.log(ab.split(" "));


let str="This is string"
console.log(str.charAt(5));
console.log(str.toUpperCase());
console.log(str.toLowerCase());




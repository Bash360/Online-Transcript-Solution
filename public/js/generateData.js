function generateResult(department){
if(department=="CSC"){
  const courses =[];
  counter=0;
  for (let i = 1; i <=48; i++) {
    courses.push({ courseCode: `CSC${i}${counter}`, score: Math.floor((Math.random() * 70) +30),courseUnit:3 });
	counter++;
  }
  return courses;
}
if(department=="ICT"){
  const courses =[];
  counter=0;
  // auto generate ICT courses and grades
  for (let i = 1; i <=48; i++) {
    courses.push({ courseCode: `ICT${i}${counter}`, score: Math.floor((Math.random() * 70) + 30),courseUnit:3 });
	counter++;
  }
  return courses;
}
if(department=="ENG"){
  const courses =[];
  counter=0;
  // auto generate computer engineering courses and grade
  for (let i = 1; i <=60;i++) {
	  
    courses.push({ courseCode: `Eng${i}${counter}`, score: Math.floor((Math.random() * 70) + 30),courseUnit:3 });
	counter++;
  }
  return courses;

}

}

console.log(generateResult("ENG"));
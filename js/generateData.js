function doComputerScience(){//module.exports = () => {
  const courses = { course: [] }
  counter=0;
  for (let i = 1; i <=48; i++) {
    courses.course.push({ courseCode: `CSC${i}${counter}`, score: Math.floor((Math.random() * 90) +1),courseUnit:3 });
	counter++;
  }
  return courses;
}
function doIct(){//module.exports = () => {
  const courses = { course: [] }
  counter=0;
  // auto generate ICT courses and grades
  for (let i = 1; i <=48; i++) {
    courses.course.push({ courseCode: `ICT${i}${counter}`, score: Math.floor((Math.random() * 90) + 1),courseUnit:3 });
	counter++;
  }
  return courses;
}
function doComputerEngineering(){//module.exports = () => {
  const courses = { course: [] }
  counter=0;
  // auto generate computer engineering courses and grade
  for (let i = 1; i <=60;i++) {
	  
    courses.course.push({ courseCode: `Eng${i}${counter}`, score: Math.floor((Math.random() * 90) + 1),courseUnit:3 });
	counter++;
  }
  //return courses;
 console.log(courses.course[50].score);
}
doComputerEngineering();
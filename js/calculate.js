function calculate(grades){
    let CGPA=[];
    let courseUnit=3;
    let sumPerSession=0;
    let count=0
    for(counter=0;counter<grades.length;counter++){
 sumPerSession+=grades[counter].point*courseUnit;
 count++;
 if(count%12==0){
    CGPA.push(sumPerSession/36*3);
 }
 
    }
}
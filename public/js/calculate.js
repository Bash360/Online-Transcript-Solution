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
function determineClass(CGPA){
    let finalResult={};
    if(CGPA>=4.5 && CGPA<=5.0){
        finalResult["gradePoint"]=CGPA;
        finalResult["class"]="First Class";

    }else if(CGPA>=3.5 && CGPA<=4.49){
        finalResult["gradePoint"]=CGPA;
        finalResult["class"]="Second Class Upper";

    }else if(CGPA>=2.5 && CGPA<=3.49){
        finalResult["gradePoint"]=CGPA;
        finalResult["class"]="Second Class Lower";

    }
    else if(CGPA>=1.5 && CGPA<=2.49){
        finalResult["gradePoint"]=CGPA;
        finalResult["class"]="Third Class";

    }else{
            finalResult["gradePoint"]=CGPA;
            finalResult["class"]="Pass"; 
    }
}
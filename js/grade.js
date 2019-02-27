function grade(score){
	let result={};
	if( score>=70 && score<=100){
	result["grade"]="A";
	result["point"]=5;
	return result;
	}else if(score>=60 && score<=69){
	result["grade"]="B";
	result["point"]=4;
	return result;	
	}else if(score>=50 && score<=59){
	result["grade"]="c";
	result["point"]=3;
	return result;	
	}else if(score>=45 && score<=49){
	result["grade"]="D";
	result["point"]=2;
	return result;	
	}
	else if(score>=40 && score<=44){
	result["grade"]="E";
	result["point"]=1;
	return result;	
	}else{
	result["grade"]="F";
	result["point"]=0;
	return result;	
	}
		
	
}
function gradeAll(courses){
	let graded=[];
	for(let counter=0;counter<courses.course.length;counter++){
		graded.push(grade(courses.course[counter].score));
	}
	return graded;
}
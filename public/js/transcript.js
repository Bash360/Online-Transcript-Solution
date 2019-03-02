$(document).ready(function () {

  $("#generate_transcript").submit(function (event) {

    event.preventDefault();

    student_id = $("#student_id").val();
    department = $("#dept").val();
    email = $("#email").val();

    $.ajax({
      method: "GET",
      url: `http://localhost:3000/users`,
      dataType: "json",
      data: { student_id: student_id, department: department, email: email },
      success: function (res) {
        if (!res.length) {
          alert("Details do not match")
        } else {
          localStorage.setItem("department", $("#dept").val());

          return window.location.assign(`transcripts_table.html`);
        }

      }
    });

  })


  let scores = [];
  let unitTotal = [];
  let dept = localStorage.getItem("department");
  let courses = generateResult(dept);
  let totalScores = calculateTotalPoints(scores);
  let totalUnits = calculateTotalUnits(unitTotal);



  function generateResult(department) {
    alert(department);
    if (department == "CSC") {
      const courses = [];
      counter = 0;
      for (let i = 1; i <= 48; i++) {
        courses.push({ courseCode: `CSC${i}${counter}`, score: Math.floor((Math.random() * 70) + 30), courseUnit: 3 });
        counter++;
      }
      return courses;
    }
    if (department == "ICT") {
      const courses = [];
      counter = 0;
      // auto generate ICT courses and grades
      for (let i = 1; i <= 48; i++) {
        courses.push({ courseCode: `ICT${i}${counter}`, score: Math.floor((Math.random() * 70) + 30), courseUnit: 3 });
        counter++;
      }
      return courses;
    }
    if (department == "ENG") {
      const courses = [];
      counter = 0;
      // auto generate computer engineering courses and grade
      for (let i = 1; i <= 60; i++) {

        courses.push({ courseCode: `Eng${i}${counter}`, score: Math.floor((Math.random() * 70) + 30), courseUnit: 3 });
        counter++;
      }

      courses.forEach(obj => {
        scores.push(Object.values(obj)[1]);
        unitTotal.push(Object.values(obj)[2]);
      })
      return courses;
    }
  }


  function calculateTotalUnits(grades) {
    let total = 0;

    grades.forEach(grade => {

      total += grade
    })

    return total
  }


  function calculateTotalPoints(grades) {
    let total = 0;

    let points;

    grades.forEach(grade => {
      if (grade >= 70) points = 5;
      if (grade <= 69) points = 4;
      if (grade <= 59) points = 3;
      if (grade <= 49) points = 2;
      if (grade <= 39) points = 1;
      if (grade <= 29) points = 0;

      total += points
    })

    return total
  }


  var table = $("<table>");

  table.addClass("table");

  table.appendTo("#display");

  var thead = $("<thead>");

  thead.appendTo(table);

  var tr = $("<tr>");

  tr.appendTo(thead);

  var th_key = $("<th>");

  var th_info = $("<th>");

  var th_data = $("<th>");

  th_key.text("Course code");

  th_info.text("Score");

  th_data.text("Course unit");

  th_key.appendTo(tr);

  th_info.appendTo(tr);

  th_data.appendTo(tr);



  var tbody = $("<tbody>");

  tbody.appendTo(table);

  for (obj of courses) {

    let tr = $("<tr>");

    tr.appendTo(tbody);

    let td_key = $("<td>");

    td_key.text(Object.values(obj)[0]);

    td_key.appendTo(tr);

    let td_info = $("<td>");

    td_info.text(Object.values(obj)[1])

    td_info.appendTo(tr);

    let td_data = $("<td>");

    td_data.text(Object.values(obj)[2])

    td_data.appendTo(tr);

  }

  var tfoot = $("<tfoot>");

  tfoot.appendTo(table);

  var tr = $("<tr>");

  var th = $("<thead>")

  tr.appendTo(tfoot);

  var th_key = $("<th>");

  var th_info = $("<th>");

  var th_data = $("<th>");

  th_key.text("TOTAL POINTS / UNITS");

  th_info.text(totalScores);

  th_data.text(totalUnits);

  th_key.appendTo(tr);

  th_info.appendTo(tr);

  th_data.appendTo(tr);

  let CGPA = totalScores * 3 / totalUnits
  let response = `Cummulative Grade Point Average (CGPA) is ${CGPA}`

  $("#cgpa").html(response);

});

$(document).ready(function () {

  let url = new URLSearchParams(window.location.search)
    url.has("student_id")
    let params = url.get("student_id") 
    if (params == null) {
      window.location.assign("index.html")
    }

  })
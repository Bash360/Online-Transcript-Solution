
$(document).ready(function () {

  let url = new URLSearchParams(window.location.search)
    url.has("username")
    let params = url.get("username") 
    if (params == null) {
      window.location.assign("index.html")
    }

  })
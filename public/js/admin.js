
$(document).ready(function () {

  let url = new URLSearchParams(window.location.search)
    url.has("admin_id")
    let params = url.get("admin_id") 
    if (params == null) {
      window.location.assign("index.html")
    }

  })
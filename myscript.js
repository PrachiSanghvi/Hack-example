window.fetch = (url, body) => {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      const { headers, method } = body;
      let bodyData = JSON.parse(body.body);
      console.table({ bodyData, headers, method })
    }
  }
  xhttp.send(body.body);
}
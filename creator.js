function getNav() {
  var htmlString = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">'
    + '<div class="container-fluid">'
    + '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">'
    + '<span class="navbar-toggler-icon"></span></button>'

    + '<div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">'
    + '<ul class="navbar-nav">'
    + '<li class="nav-item">'
    + '<a class="nav-link" aria-current="page" href="index.html">Home</a></li>'
    + '<li class="nav-item">'
    + '<a class="nav-link" href="prodotti.html">Prodotto</a></li>'
    + '<li class="nav-item">'
    + '<a class="nav-link disabled" href="pricing.html">Info</a></li>'
    + '<li class="nav-item dropdown">'
    + '<a class="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Store</a>'
    + '<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdown08">'
    + '<li><a class="dropdown-item" href="software.html">whYnet</a></li>'
    + '<li><a class="dropdown-item disabled" href="#">whYidr</a></li>'
    + '<li><a class="dropdown-item disabled" href="#">frYdge</a></li>'
    + '</ul></li></ul></div></div></nav>';
  return htmlString;
}

function getFooter() {
  var htmlString = '<div class="container">'
    + '<footer class="py-5">'
    + '<div class="row">'
    + '<div class="col-2">'
    + '<h5>Pagine</h5>'
    + '<ul class="nav flex-column">'
    + '<li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-muted">Home</a></li>'
    + '<li class="nav-item mb-2"><a href="prodotti.html" class="nav-link p-0 text-muted">Prodotto</a></li>'
    + '<li class="nav-item mb-2"><a href="pricing.html" class="nav-link p-0 text-muted">Info</a></li>'
    + '<li class="nav-item mb-2"><a href="software.html" class="nav-link p-0 text-muted">Store</a></li></ul></div>'

    + '<div class="col-2">'
    + '<h5>Applicazioni</h5>'
    + '<ul class="nav flex-column">'
    + '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">whYnet</a></li>'
    + '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">whYidr</a></li>'
    + '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">frYdge</a></li>'
    + '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">YAPIPY</a></li></ul></div>'

    + '<div class="col-2">'
    + '<h5>Social</h5>'
    + '<ul class="nav flex-column">'
    + '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Instagram</a></li>'
    + '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Facebook</a></li></ul></div>'

    + '<div class="col-4 offset-1"><form>'
    + '<h5>Cervelli in più non guastano mai!</h5>'
    + '<p>Se vuoi collaborare in qualsiasi ambito lasciaci la tua mail.</p>'
    + '<div class="d-flex w-100 gap-2">'
    + '<label for="newsletter1" class="visually-hidden">Indirizzo eMail</label>'
    + '<input id="iscrivitiMail" type="text" class="form-control" placeholder="Email address">'
    + '<button class="btn btn-outline-dark" type="button" id="iscrivitiBtn">Iscriviti</button></div></form></div></div>'
    + '<div class="d-flex py-4 my-4 border-top justify-content-center">'
    + '<p>&copy; 2022 Why, All rights reserved.</p></div></footer></div>';
  return htmlString;
}

function getApp(text, download, img) {
  var htmlString = '<div class="col">'
    + '<div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style = "background-image: url(\'' + img + '\');" >'
    + '<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">'
    + '<h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">' + text + '</h2>'
    + '<ul class="d-flex list-unstyled mt-auto">'
    + '<li class="d-flex align-items-center me-3">'
    + '<svg class="bi me-2" width="1em" height="1em"><use xlink:href="#people-circle" /></svg>'
    + '<small>' + download + '</small></li></ul></div></div ></div >';
  return htmlString;
}

$(document).ready(function () {
  $("#iscrivitiBtn").click(function () {
              var postCalendar = 'https://yapipy.herokuapp.com/insert/Why/Iscritti';
              var dataToSend = ' { "mail": "' + document.getElementById("iscrivitiMail").value + '" }';
              console.log(dataToSend);
              document.getElementById("iscrivitiMail").value = "";
              var xhr = new XMLHttpRequest();
              xhr.open('POST', postCalendar);
              xhr.setRequestHeader('Content-type', 'application/json');
              xhr.send(dataToSend);
              xhr.onreadystatechange = function () {
                  if (this.readyState == 4 && this.status == 200) {
                      console.log(this.responseText);
                  }
              };
          });
      });
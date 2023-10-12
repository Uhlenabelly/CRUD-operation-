var app = new (function () {
  this.el = document.getElementById("countries");
  this.countries = [
    "France",
    "Germany",
    "England",
    "spain",
    "Belgium",
    "Italy",
    "Portugal",
    "Ireland",
    "Luxemburg",
  ];

  this.Count = function (data) {
    var el = document.getElementById("counter");
    var name = "country";

    if (data) {
      if (data > 1) {
        name = "countries";
      }
      el.innerHTML = data + " " + name;
    } else {
      el.innerHTML = "No " + name;
    }
  };

  this.FetchAll = function () {
    var data = "";

    if (this.countries.length > 0) {
      for (i = 0; i < this.countries.length; i++) {
        data += "<tr>";
        data += "<td>" + this.countries[i] + "</td>";
        data += '<td><button onclick="app.Edit(' + i + ')"</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"</button></td>';
        data += "</tr>";
      }
    }
  };
})();

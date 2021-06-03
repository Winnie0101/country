 

const jsonUrl = 'https://restcountries.eu/rest/v2/all';
var table = $('#countryData');
let jsonData = {};
// const max_size = jsonData.length;
var sta = 0;
var elements_per_page = 25;
var limit = elements_per_page;
$(document).ready(function () {
  fetch(jsonUrl, { method: 'get' })
    .then((response) => {
      return response.json();
    }).then((data) => {
      jsonData = data;
      const max_size = jsonData.length;
      console.log(max_size);
      goFun(sta, limit);
      $('#nextValue').click(function () {
        var next = limit;
        if (max_size >= next) {
          limit = limit + elements_per_page;
          table.empty();
          console.log(next + ' -next- ' + limit);
          goFun(next, limit);
        }
      });
      $('#PreValue').click(function () {
        var pre = limit - (2 * elements_per_page);
        if (pre >= 0) {
          limit = limit - elements_per_page;
          console.log(pre + ' -pre- ' + limit);
          table.empty();
          goFun(pre, limit);
        }
      });

    })
    


});
function goFun(sta, limit) {
  for (var i = sta; i < limit; i++) {
    // $('#name').append(jsonData[i].name);
    // $('#alpha2Code').append(jsonData[i].alpha2Code);
    // $('#alpha3Code').append(jsonData[i].alpha3Code);
    // $('#nativeName').append(jsonData[i].nativeName);
    // $('#altSpellings').append(jsonData[i].altSpellings);
    // $('#callingCodes').append(jsonData[i].callingCodes);
    table.append(
      "<tr>" +
      // "<td>" + "<svg xml=flagSvg.src ></svg>" + "</td>" +
      "<td>" + jsonData[i].name + "</td>" +
      "<td>" + jsonData[i].alpha2Code + "</td>" +
      "<td>" + jsonData[i].alpha3Code + "</td>" +
      "<td>" + jsonData[i].nativeName + "</td>" +
      "<td>" + jsonData[i].altSpellings + "</td>" +
      "<td>" + jsonData[i].callingCodes + "</td>" +
      "</tr>");
  }
}


var dataUrl = 'https://restcountries.eu/rest/v2/all';
// $(document).ready(function () {
//   $.ajax({
//     url: 'https://restcountries.eu/rest/v2/all',
//     type: 'GET',
//     dataType: 'json',
//     success: function (info) {
//       $('#countryData').html();
//       console.log(info.length);
//       total_len = info.length;
//       for (i = 0; i < total_len; i++) {
//         var flagSvg = document.querySelector(".countryFlag");
//         flagSvg.src = info[i].flag;
//         // flagSvg.style.backgroundImage =flagSvg.src;
//         // console.log(info[i].flag);
//         $("#countryData").append(
//           "<tr>" +
//           "<td>" + "<svg xml=flagSvg.src ></svg>" + "</td>" +
//           "<td>" + info[i].name + "</td>" +
//           "<td>" + info[i].alpha2Code + "</td>" +
//           "<td>" + info[i].alpha3Code + "</td>" +
//           "<td>" + info[i].nativeName + "</td>" +
//           "<td>" + info[i].altSpellings + "</td>" +
//           "<td>" + info[i].callingCodes + "</td>" +
//           "</tr>"
//         )
//       }
//     },
//     error: err => {
//       console.log(err)
//     },
//   });

// });


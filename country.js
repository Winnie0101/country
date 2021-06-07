

const jsonUrl = 'https://restcountries.eu/rest/v2/all';
var table = $('#countryData');
var modalTitle = $('#myModalLabel');
let jsonData = {};
var sta = 0;
var elements_per_page = 25;
var limit = elements_per_page;
var first = 0; //first row in page
var last = 25; //last row in page
var sort = 'insort';

$(document).ready(function () {
  fetch(jsonUrl, { method: 'get' })
    .then((response) => {
      return response.json();
    }).then((data) => {
      jsonData = data;
      const max_size = jsonData.length;
      console.log(max_size);
      console.log(jsonData);
      goInsortFun(sta, elements_per_page, max_size);
      $('#countryName').click(function () {
        table.empty();
        if (sort == 'insort') {
          sort = 'desort';
          first = 249;
          last = 225;
          goDesortFun(first, last, max_size);
          console.log(sort);
        }
        else if (sort == 'desort') {
          sort = 'insort';
          first = 0;
          last = 25;
          goInsortFun(sta, elements_per_page, max_size);
          console.log(sort);
        }
      });
      $('#nextValue').click(function () {        
        if (sort == 'insort'&& first<225) {
          table.empty();
          first += 25;
          last += 25;
          goInsortFun(first, last, max_size);
          console.log(first + ' -next- ' + last);
        }
        else if (sort == 'desort' && last>0) {
          table.empty();
          first -= 25;
          last -= 25;
          goDesortFun(first, last, max_size);
          console.log(first + ' -next- ' + last);
        }

      });
      $('#PreValue').click(function () {
        
        if(sort=='insort' && first>=25 ){
          table.empty();
          first -= 25;
          last -= 25;
          goInsortFun(first, last, max_size);
          console.log(first + ' -pre- ' + last);
        }
        else if(sort=='desort' && first<=225){
          table.empty();
          first += 25;
          last += 25;
          goDesortFun(first, last, max_size);
          console.log(first + ' -pre- ' + last);
        }
      });
      // console.log('tablelength '+jsonData.length);
      // for(var i=0;i<jsonData.length;i++){
      //   let cName=jsonData[i].name;
      //   cName.click(function(){
      //     callModal(i)
      //   })
      // }
    //   $(".cName").click(function(){
    //     console.log(111111);
    //     var tdSeq = $(this).parent().find("td").index($(this)[0]);
    //     // var trSeq = $(this).parent().parent().find("tr").index($(this).parent()[0]);
    //     var trSeq = $(this).index();
    //     // alert("第"   (trSeq   1)   "行，第"   (tdSeq   1)   "列");
    //     console.log(tdSeq+' '+trSeq);
    //     });
    });
});


function fuzzyQuery() {
  var arr = [];
  const nameElement = document.getElementById("name");
  const keyWord = nameElement.value;
  console.log(keyWord);
  for (var i = 0; i < jsonData.length; i++) {
    if (jsonData[i].name.indexOf(keyWord) >= 0) {
      arr.push(jsonData[i]);
    }
  }
  table.empty();
  for(var i=0;i<arr.length;i++){
    print(arr,i);
  }
  console.log(arr);
}

function goInsortFun(sta, limit, max_size) {
  for (var i = sta; i < limit; i++) {
    print(jsonData,i);
  }
 
}
function goDesortFun(sta, limit, max_size) {
  for (var i = sta ; i >= limit; i--) {
    print(jsonData,i);
  }
}
function print(jsonData,i) {
  table.append(
    "<tr onclick=callModal(this)>" +
    "<td>" + i + "</td>" +
    "<td >" + jsonData[i].name + "</div></td>" +
    "<td>" + jsonData[i].alpha2Code + "</td>" +
    "<td>" + jsonData[i].alpha3Code + "</td>" +
    "<td>" + jsonData[i].nativeName + "</td>" +
    "<td>" + jsonData[i].altSpellings + "</td>" +
    "<td>" + jsonData[i].callingCodes + "</td>" +
    "</tr>");
    
}
function callModal(cName) {
  i=cName.rowIndex-1;
  // console.log(cName);
  currenciesData = arrToString(jsonData[i].currencies);
  languagesData = arrToString(jsonData[i].languages);
  regionalBlocsData = arrToString(jsonData[i].regionalBlocs);
  translationsData = objToString(jsonData[i].translations);
  console.log(i);
  document.getElementById("myModalLabel").innerHTML = jsonData[i].name;
  document.getElementById("area").innerHTML = "area : " + jsonData[i].area;
  document.getElementById("borders").innerHTML = "borders : " + jsonData[i].borders;
  document.getElementById("capital").innerHTML = "capital : " + jsonData[i].capital;
  document.getElementById("cioc").innerHTML = "cioc : " + jsonData[i].cioc;
  document.getElementById("currencies").innerHTML = "currencies : " + currenciesData;
  document.getElementById("demonym").innerHTML = "demonym : " + jsonData[i].demonym;
  document.getElementById("gini").innerHTML = "gini : " + jsonData[i].gini;
  document.getElementById("languages").innerHTML = "languages : " + languagesData;
  document.getElementById("latlng").innerHTML = "latlng : " + jsonData[i].latlng;
  document.getElementById("numericCode").innerHTML = "numericCode : " + jsonData[i].numericCode;
  document.getElementById("population").innerHTML = "population : " + jsonData[i].population;
  document.getElementById("region").innerHTML = "region : " + jsonData[i].region;
  document.getElementById("regionalBlocs").innerHTML = "regionalBlocs : " + regionalBlocsData;
  document.getElementById("subregion").innerHTML = "subregion : " + jsonData[i].subregion;
  document.getElementById("timezones").innerHTML = "timezones : " + jsonData[i].timezones;
  document.getElementById("topLevelDomain").innerHTML = "topLevelDomain : " + jsonData[i].topLevelDomain;
  document.getElementById("translations").innerHTML = "translations : " + translationsData;

  $('#myModal').modal('show');


}
function hideModal() {
  $('#myModal').modal('hide');
}
function objToString(obj) {
  var description = "";
  for (var i in obj) {
    description += i + "=" + obj[i] + "  ";
  }
  console.log(description);
  return description;
}
function arrToString(arr) {
  var obj = arr[0];
  return objToString(obj);
}







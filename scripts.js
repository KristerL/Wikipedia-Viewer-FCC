$("#searchButton").click(function() {
  $("#displayData").empty();
  var searchTermin = $("#searchWiki").val();
  searchTermin = searchTermin.split(/[ ]+/).join('_')
  var searchUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=10&gsrsearch=" + searchTermin;
  console.log(searchUrl);

  $.ajax({
    dataType: "JSONP",
    type: "get",
    url: searchUrl,
    success: function(data) {
      console.log(data);
      console.log(Object.keys(data.query.pages));
      var keyArray = Object.keys(data.query.pages);

      for (var i = 0; i < keyArray.length; i++) {
        if (searchTermin = "Undefined"  ||	data.query.pages[keyArray[i]].title !== 'Undefined') {
          console.log(data.query.pages[keyArray[i]]);
          $("#displayData").append("<div id='articles'><h3>" + data.query.pages[keyArray[i]].title + "</h3><p>" + data.query.pages[keyArray[i]].extract + "</p></div>");
        }
      }

    }
  });


});

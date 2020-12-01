function Buscar(){

    var settings = {
        "url": "http://www.omdbapi.com/?apikey=80aea124&s=REC&y=2007",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Cookie": "__cfduid=d58c149ad8f39bf81768d02813979dadd1606843852"
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        $("#contenido").text(response);
      });


}
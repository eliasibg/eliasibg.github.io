function Buscar(){

    var settings = {
        "url": "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "x-rapidapi-key": "2075d24590msh3bd1515205ed040p1b4228jsn4fa5c1e186f9",
          "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        $("#contenido").text(response);
      });


}
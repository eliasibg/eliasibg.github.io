function Buscar(){

    var settings = {
  "url": "https://grupobimbo--test.my.salesforce.com/services/oauth2/token",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "BrowserId=6AzT9jP5EeuUqxkX4XlE_A"
  },
  "data": {
    "username": "integra@pilotobimbo.com.ricolino",
    "password": "Nu3v0P4nB1mb0.Rf0u4DTB3a5LdVKL9M5Jv9uY",
    "grant_type": "password",
    "client_id": "3MVG9FG3dvS828gL.pckzEFAegT7jjHRlbDeOzj.AqkoSXBxU_7HrPGr2Ne7zeQgWGI.haAT4jR0FvOZbTk.G",
    "client_secret": "B4F6F1751E52DF588F365714085E589B35045ECA95E016C39BC193BD9DECFE48"
  }
};
      
      $.ajax(settings).done(function (response) {
        console.log(response);
          
          var bear = response.access_token;
          
          
        $("#contenido").text(bear);
      });


}

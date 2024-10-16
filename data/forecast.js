const request = require("request"); //call package request
let forecast = (latitude, longtitude, callback) => {
  let url =
    "https://api.weatherapi.com/v1/current.json?key=df1d3bce11a84076a9b152959232111&q=" +
    latitude +
    "," +
    longtitude; //API url

  request({ url, json: true }, (error, response) => {
    if (error) {
      //LOw level error
      callback("ERROR website not found currently!!", undefined);
    } else if (response.body.error) {
      //high level error
      callback(response.body.error, undefined);
    } else {
      let body = response.body;
      // console.log(body);
      var location = body.location.name;
      var temp_c = body.current.temp_c;
      var description = body.current.condition.text;
      callback(
        undefined,
          `Temperature: ${temp_c}℃ , `+
          `Weather Description: ${description}`
      );
    }
  });
};

module.exports = forecast;

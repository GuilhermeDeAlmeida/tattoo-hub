var connection = require('./database-connector');

class CultivosService{    
    cultivos(){
        return connection.query("SELECT * FROM cultivos", function (err, result, fields) {
            if (err) throw err;
            console.log("Result: " + result);
          });
    }
}

module.exports = CultivosService

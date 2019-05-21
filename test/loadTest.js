var http = require('http'); 
var options = {
    host: '127.0.0.1',
    port: 9090,
    path: '/locatertool/loadTest',
    method: 'GET'
  };
  
  var count = 0;
  var MaxIteration = 100;
  var Interval = setInterval(LoadTest, 10);

  // Test Database 
  function LoadTest(){
    http.request(options, function(res) {
        count++;
        const { statusCode } = res;
        console.log('Iteration: ' + count);
        console.log('STATUS: ' + statusCode);
        res.setEncoding('utf8');
        //console.log(res);
        if(statusCode !== 200 || MaxIteration == count){
            console.log("Failed or Max Ieration Reached.");
            clearInterval(Interval);
        }

        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        });
      }).end();
  }




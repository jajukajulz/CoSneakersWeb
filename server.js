const express = require('express')
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser')


const router = express.Router();
const app = express()
const port = 3000


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json()) //otherwise XMLHTTPRequests wont work

//add the router
app.use('/', router);


//serve images, CSS files, and JavaScript files in static directory
app.use(express.static('src'))



//serve JSON file in db directory
//app.use(express.static('db'))

//home page
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/index.html')); //__dirname : It will resolve to your project folder.
});


//write JSON file using XmlHTTP request
router.post('/addSneaker',function(req,res, next){
    console.log("/addSneaker req.body.newSneakerDetails  " + req.body.newSneakerDetails);
    console.log("/addSneaker req.body.filePath  " + req.body.filePath);
    console.log("/addSneaker req.body.fileName  " + req.body.fileName);
  try {
      saveToJSON(req.body.newSneakerDetails, req.body.filePath, req.body.fileName)
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e)
  }
});


function saveToJSON(newSneakerDetails, filePath, fileName) {
    var jsonFileName = path.join(filePath + fileName);
    console.log("saveToJSON " + jsonFileName);
    fs.readFile(jsonFileName, function (err, data) {
        if (err) {
            console.log("current JSON before parse err " + err);
        }
        else {
            console.log("current JSON before parse  " + data);

            var json = JSON.parse(data);
            console.log("currentJSON  " + JSON.stringify(json));

            json.push(newSneakerDetails);
            fs.writeFile(jsonFileName, JSON.stringify(json));
            console.log("writeJSON  " + JSON.stringify(json));
        }
    });
};


router.get('/hello', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`CoSneakers Web app listening on port ${port}!`));
const express = require('express')
const path = require('path');

const router = express.Router();
const app = express()
const port = 3000

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

router.get('/hello', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`CoSneakers Web app listening on port ${port}!`))
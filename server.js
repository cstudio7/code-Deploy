var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();


const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());


app.get('/', function (req, res) {
    res.send('Its a beautiful Thing Learning CI/CD...');
});

const server = app.listen(port, () => {
    console.info(`Server is up and listening on port ${port}`);
});

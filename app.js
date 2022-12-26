const express = require('express');
const bodyParser = require('body-parser');




app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('list', {
//         listTitle: day,
//         newListItems: items
//     });
// }
// );

app.get('/about', (req, res) => {
    res.render('about')
}
);

app.listen(procces.env.PORT || 3000, () => {
    console.log('Example app listening on port 3000!');
}
);
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
import express from 'express';
import {join,dirname} from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import web from './routes/web.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);
console.log(__filename);

const app = express()

// Set template engine
// app.set('views', 'views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
// console.log(join(process.cwd(), 'public'))
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/', web)

// 404 error handling
app.use((req, res, next) => {
  res.status(404).redirect('/404');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong! Contact Iqbal');
});

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server started at ${port}`)
})

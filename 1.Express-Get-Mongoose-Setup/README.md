# ExpressNode

app.get('/', (req, res) => {
res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
console.log(`Running on port ${port}`);
});

nodemonConfig

express Router
bookRouter.route('/books')
.get((req,res)=>{})

# app.use('/api',)

to select the particular list of items based on a filter
bookRouter.route('/books')
.get((req, res) => {
const { query } = req;
Book.find(query, (err, books) => {
if (err) {
return res.send(err);
}
return res.json(books);
});
});
app.use('/api', bookRouter);
===============================================================
to find the :slug
const query = {};
if (req.query.genre) {
query.genre = req.query.genre;
}
=============================================================
to find the single item

bookRouter.route('/books/:bookId')
.get((req, res) => {
Book.findById(req.params.bookId, (err, book) => {
if (err) {
return res.send(err);
}
return res.json(book);
});
});
=================================================================
Parsing Post data with Body Parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
bookRouter.route('/books')
.post((req, res) => {
const book = new Book(req.body);
console.log(book);
return res.json(book);
})
================================================================
Testing with Postman

select the type of the call as get
type the url

for post, go to new tab.
select the type as post
type the url
body -> raw -> json (instead of text)
paste the json that you wanted to include

==============================================================
saving data
inside the post method
book.save();
return res.status(201).json(book);
=============================================================
code cleanup

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let currentUser = {
  name: 'Sarah Waters',
  age: 55,
  country: 'United Kingdom',
  books: ['Fingersmith', 'The Night Watch'],
};

let users = [
  {
    name: 'Sarah Waters',
    age: 55,
    country: 'United Kingdom',
    books: ['Fingersmith', 'The Night Watch'],
  },
  {
    name: 'Haruki Murakami',
    age: 71,
    country: 'Japan',
    books: ['Norwegian Wood', 'Kafka on the Shore'],
  },
  {
    name: 'Chimamanda Ngozi Adichie',
    age: 43,
    country: 'Nigeria',
    books: ['Half of a Yellow Sun', 'Americanah'],
  },
];

let books = [
  {
    name: 'To Kill a Mockingbird',
    pages: 281,
    title: 'Harper Lee',
    price: 12.99,
  },
  {
    name: 'The Catcher in the Rye',
    pages: 224,
    title: 'J.D. Salinger',
    price: 9.99,
  },
  {
    name: 'The Little Prince',
    pages: 85,
    title: 'Antoine de Saint-Exupéry',
    price: 7.99,
  },
];

app.get('/current-user', (req, res) => {
  console.log('ge');
  res.json(currentUser);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  //res.json(users.find((user) => user.id === id));
  console.log('number', users[Number(id)]);
  res.json(users[Number(id)]);
});

app.get('/users', (req, res) => res.json(users));

app.post('/users/:id', (req, res) => {
  const { id } = req.params;
  const { user: editedUser } = req.body;
  console.log('revive', editedUser);

  users = users.map((user, index) => {
    return index === Number(id) ? editedUser : user;
  });
  console.log('users', users);
  //users.find((user) => user.id === id)

  res.json(users[id]);
});

app.post('/books/:id', (req, res) => {
  const { id } = req.params;
  const { book: editedBook } = req.body;
  // console.log('revive', editedUser);

  books = books.map((book, index) => {
    console.log(typeof index, typeof id);
    return index === Number(id) ? editedBook : book;
  });
  // console.log('users', users);
  //users.find((user) => user.id === id)

  res.json(books[id]);
});

app.get('/books', (req, res) => res.json(books));

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  res.json(books[Number(id)]);
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port: ${SERVER_PORT}`)
);

## Fibonacci

A simple fullstack project. User enters a number n, and get n-th number of fibonacci sequence. All requests are store in database (ip, date, requested number, response).

App consists of two pages: a page where user gets a fibonacci number, and a page of history of user's requests by ip.
Frontend made with React (Material-UI, hooks, axios for server requests)
Backend with Node.JS (express)
Database with MySQL

### To start project run next commands in terminal:

- git clone git@github.com:mefistodevelop/fibonacci.git
- cd fibonacci
- npm install && npm run start

### Scripts

- start - creates production build and starts the server
- client - runs devServer for work with client code
- server - runs server for work with backend
- dev - runs both servers

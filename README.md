# Overview

Speed Reader PWA Backend (Mongo + Express + Node) using ES6

# Stack

- babel v7
- Express
- bcrypt
- jsonwebtoken
- mongoose

# Installation

- `git clone git@github.com:mfalfath25/sr-backend.git`
- `cd sr-backend`
- `npm install`
- `npm run dev` Rus as Development

# Routes

`http://localhost:8080/api/v1/auth/`

- post `register`
- post `login`
- get `users`
- get `users/:userId`
- put `users/:userId`
- delete `users/:userId`

`http://localhost:8080/api/v1/setting/`

- get `setting/:userId`
- put `setting/:userId`

`http://localhost:8080/api/v1/training/`

- get `all`
- get `user/:userId`
- post `add/:userId`
- delete `delete/:trainingId`

# Instagram CRUD App

This is a simple Instagram-inspired app I built while learning Node.js and Express.js. I wanted to understand how CRUD operations work and how different routes connect to the frontend.

Users can create posts, view them, edit captions, and delete posts.

### What I used
- Node.js
- Express.js
- EJS
- HTML & CSS
- UUID
- Method-override

### Features
- Create a new post with a username, caption, and image URL
- View all posts
- Open a single post
- Edit a post
- Delete a post

### Run it locally

Clone the repository:

```bash
git clone https://github.com/ketan3/instagram-crud.git
```

Go into the project folder and install the dependencies:

```bash
cd instagram-crud
npm install
```

Start the server:

```bash
node index.js
```

Now open http://localhost:8080/posts in your browser.

Make sure your database is configured if your local version uses MySQL.

### What I learned

While building this project, I got hands-on practice with Express routes, EJS templates, handling form submissions, and implementing CRUD operations. I also learned how `method-override` helps handle PATCH and DELETE requests through HTML forms.

This is one of my projects as I continue learning backend development.

---

Built by [Ketan Sapkal](https://github.com/ketan3)

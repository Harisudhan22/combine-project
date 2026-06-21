import express from "express";

const app = express();
const port = 3000;

import movieroutes from "./routes/movies.route.js"

app.get('/', (req, res) => {
  res.send
  (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Modern UI</title>

      <style>
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Segoe UI, sans-serif;
        }

        body{
          background: linear-gradient(135deg,#0f172a,#1e293b);
          color:white;
          min-height:100vh;
        }

        nav{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:20px 8%;
        }

        .logo{
          font-size:28px;
          font-weight:bold;
        }

        .nav-links{
          display:flex;
          gap:30px;
        }

        .nav-links a{
          text-decoration:none;
          color:white;
          transition:0.3s;
        }

        .nav-links a:hover{
          color:#38bdf8;
        }

        .hero{
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          text-align:center;
          height:80vh;
          padding:20px;
        }

        .hero h1{
          font-size:4rem;
          margin-bottom:20px;
        }

        .hero p{
          max-width:700px;
          line-height:1.8;
          color:#cbd5e1;
          margin-bottom:30px;
        }

        .btn{
          padding:15px 35px;
          border:none;
          border-radius:50px;
          background:#38bdf8;
          color:white;
          font-size:18px;
          cursor:pointer;
          transition:0.3s;
        }

        .btn:hover{
          transform:translateY(-3px);
        }

        .cards{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:25px;
          padding:50px 8%;
        }

        .card{
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(10px);
          border-radius:20px;
          padding:30px;
          transition:0.3s;
        }

        .card:hover{
          transform:translateY(-10px);
        }

        .card h3{
          margin-bottom:15px;
        }

        .card p{
          color:#cbd5e1;
        }

        footer{
          text-align:center;
          padding:25px;
          color:#94a3b8;
        }
      </style>
    </head>
    <body>

    <nav>
      <div class="logo">NovaUI</div>

      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>

    <section class="hero">
      <h1>Build Amazing Websites</h1>

      <p>
      Create modern, responsive, and beautiful web applications
      using HTML, CSS, JavaScript, Node.js, and Express.
      </p>

      <button class="btn">Get Started</button>
      </section>

      <section class="cards">

      <div class="card">
      <h3>⚡ Fast</h3>
      <p>Optimized performance with modern web technologies.</p>
      </div>

      <div class="card">
      <h3>🎨 Beautiful</h3>
      <p>Clean design inspired by modern SaaS products.</p>
      </div>

      <div class="card">
      <h3>📱 Responsive</h3>
      <p>Works perfectly on desktop, tablet, and mobile devices.</p>
      </div>

    </section>

    <footer>
      © 2026 NovaUI. All Rights Reserved.
    </footer>

    </body>
    </html>
  `)
})
//CRUD functionality
app.use("/movies", movieroutes)


app.listen(port, () => {
  console.log(`SERVER LISTENINGV AT http://localhost:${port}`)
});

//dry Principle don't reuse anything
//kiss PRINCIPLE keep it so simple
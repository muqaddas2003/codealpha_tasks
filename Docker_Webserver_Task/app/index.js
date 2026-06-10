const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CodeAlpha DevOps</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; background: #1a1a2e; display: flex; justify-content: center; align-items: center; height: 100vh; }
          .card { background: #16213e; border-radius: 15px; padding: 40px; text-align: center; border: 1px solid #00d4ff; }
          h1 { color: #00d4ff; font-size: 2rem; margin-bottom: 10px; }
          h2 { color: #fff; font-size: 1.2rem; margin-bottom: 20px; }
          .badge { background: #00d4ff; color: #000; padding: 8px 20px; border-radius: 20px; font-weight: bold; }
          p { color: #aaa; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 CodeAlpha DevOps</h1>
          <h2>Node.js Web Server in Docker</h2>
          <span class="badge">CA/DF1/136816</span>
          <p>Deployed via Nginx Reverse Proxy</p>
          <p>Student: Nouman Shabeer</p>
        </div>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    student: "Nouman Shabeer",
    internship: "CodeAlpha DevOps",
    timestamp: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

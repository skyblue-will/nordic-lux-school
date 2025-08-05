const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Nordic Lux Design Principles (totally made up)
const principles = [
  "Embrace the Void Between Spaces",
  "Let Natural Light Argue with Artificial Shadows", 
  "Furniture Should Whisper, Not Shout",
  "Every Room Needs Exactly 3.7 Plants",
  "Minimalism is Maximum-ism in Disguise",
  "The Golden Ratio is Actually Silver in Scandinavia"
];

// Generate random Nordic-sounding designer name
function generateDesigner() {
  const firstNames = ["Lars", "Astrid", "Magnus", "Björn", "Ingrid", "Sven", "Freya", "Erik"];
  const lastNames = ["Nordström", "Lindqvist", "Bergman", "Andersson", "Holmberg", "Källström"];
  return firstNames[Math.floor(Math.random() * firstNames.length)] + " " + 
         lastNames[Math.floor(Math.random() * lastNames.length)];
}

// Home page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>The School of Nordic Lux™</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Poppins', sans-serif;
          background: #fafafa;
          color: #2c2c2c;
          line-height: 1.6;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        header {
          background: white;
          padding: 2rem 0;
          box-shadow: 0 2px 20px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 200;
          letter-spacing: 0.15em;
        }
        
        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }
        
        .nav-links a {
          text-decoration: none;
          color: #2c2c2c;
          font-weight: 400;
          transition: opacity 0.3s;
        }
        
        .nav-links a:hover {
          opacity: 0.6;
        }
        
        .hero {
          padding: 8rem 0;
          text-align: center;
          background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
        }
        
        h1 {
          font-size: 4rem;
          font-weight: 200;
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }
        
        .tagline {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 3rem;
          font-style: italic;
        }
        
        .cta {
          display: inline-block;
          padding: 1rem 3rem;
          background: #2c2c2c;
          color: white;
          text-decoration: none;
          letter-spacing: 0.1em;
          transition: transform 0.3s;
        }
        
        .cta:hover {
          transform: translateY(-2px);
        }
        
        .principles {
          padding: 6rem 0;
          background: white;
        }
        
        .principles h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 200;
          margin-bottom: 4rem;
          letter-spacing: 0.1em;
        }
        
        .principle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }
        
        .principle {
          text-align: center;
          padding: 2rem;
        }
        
        .principle-number {
          display: inline-block;
          width: 50px;
          height: 50px;
          border: 1px solid #2c2c2c;
          border-radius: 50%;
          line-height: 50px;
          margin-bottom: 1rem;
          font-weight: 200;
        }
        
        .principle p {
          font-size: 1.1rem;
          color: #666;
        }
        
        .philosophy {
          padding: 6rem 0;
          background: #f9f9f9;
        }
        
        .philosophy-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .philosophy h2 {
          font-size: 2.5rem;
          font-weight: 200;
          margin-bottom: 2rem;
          letter-spacing: 0.1em;
        }
        
        .philosophy p {
          font-size: 1.2rem;
          line-height: 2;
          color: #666;
          margin-bottom: 2rem;
        }
        
        .quote {
          font-size: 1.5rem;
          font-style: italic;
          color: #2c2c2c;
          margin: 3rem 0;
          padding: 2rem;
          border-left: 3px solid #2c2c2c;
        }
        
        .quote-author {
          display: block;
          font-size: 1rem;
          font-style: normal;
          margin-top: 1rem;
          color: #666;
        }
        
        footer {
          background: #2c2c2c;
          color: white;
          padding: 3rem 0;
          text-align: center;
        }
        
        .footer-content {
          font-weight: 200;
          letter-spacing: 0.05em;
        }
        
        .disclaimer {
          font-size: 0.8rem;
          color: #aaa;
          margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          
          .nav-links {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <header>
        <nav class="container">
          <div class="logo">NORDIC LUX™</div>
          <ul class="nav-links">
            <li><a href="#principles">Principles</a></li>
            <li><a href="#philosophy">Philosophy</a></li>
            <li><a href="#certification">Certification</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section class="hero">
        <div class="container">
          <h1>The School of Nordic Lux</h1>
          <p class="tagline">"Where Minimalism Meets Mysticism"</p>
          <a href="#certification" class="cta">BECOME CERTIFIED</a>
        </div>
      </section>
      
      <section class="principles" id="principles">
        <div class="container">
          <h2>The Six Sacred Principles</h2>
          <div class="principle-grid">
            ${principles.map((principle, index) => `
              <div class="principle">
                <div class="principle-number">${index + 1}</div>
                <p>${principle}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
      
      <section class="philosophy" id="philosophy">
        <div class="container philosophy-content">
          <h2>Our Philosophy</h2>
          <p>
            Nordic Lux is not just a design aesthetic—it's a way of life. Founded in 2025 by a 
            collective of anonymous Scandinavian designers who communicate only through furniture 
            placement, our school teaches the ancient art of making spaces feel simultaneously 
            empty and full.
          </p>
          <div class="quote">
            "A room without Nordic Lux is like a Swedish summer without mosquitoes—technically 
            possible, but spiritually incomplete."
            <span class="quote-author">— ${generateDesigner()}, Chief Philosophy Officer</span>
          </div>
          <p>
            Our graduates have gone on to design some of the world's most confusingly beautiful 
            spaces, including the famous "Invisible Kitchen" in Oslo and the "Bedroom That Exists 
            Only on Tuesdays" in Copenhagen.
          </p>
        </div>
      </section>
      
      <section class="certification" id="certification" style="padding: 6rem 0; background: white;">
        <div class="container" style="text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: 200; margin-bottom: 2rem;">Certification Program</h2>
          <p style="font-size: 1.2rem; color: #666; max-width: 800px; margin: 0 auto 3rem;">
            Our 73-week certification program will transform you from a mere mortal who arranges 
            furniture into a Nordic Lux Master who understands why every bookshelf must face 
            magnetic north.
          </p>
          <div style="background: #f9f9f9; padding: 3rem; max-width: 600px; margin: 0 auto;">
            <h3 style="font-weight: 400; margin-bottom: 2rem;">Course Modules Include:</h3>
            <ul style="list-style: none; text-align: left; line-height: 2;">
              <li>✓ The Psychology of Empty Corners</li>
              <li>✓ Advanced White Paint Theory</li>
              <li>✓ Communicating Through Cushion Placement</li>
              <li>✓ The Mathematics of Lagom</li>
              <li>✓ Defensive Hygge Techniques</li>
            </ul>
            <p style="margin-top: 2rem; font-style: italic; color: #666;">
              Tuition: 50,000 Swedish Fish (or equivalent in IKEA meatballs)
            </p>
          </div>
        </div>
      </section>
      
      <footer id="contact">
        <div class="container footer-content">
          <p>© 2025 The School of Nordic Lux™</p>
          <p>Located somewhere between Stockholm and your imagination</p>
          <p class="disclaimer">
            This is a parody website. Nordic Lux is not a real design movement, 
            though it probably should be.
          </p>
        </div>
      </footer>
      
      <script>
        // Add smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
        
        // Random philosophy generator
        console.log("Today's Nordic Lux wisdom: " + 
          principles[Math.floor(Math.random() * principles.length)]);
      </script>
    </body>
    </html>
  `);
});

// API endpoint for Nordic Lux wisdom
app.get('/api/wisdom', (req, res) => {
  res.json({
    wisdom: principles[Math.floor(Math.random() * principles.length)],
    designer: generateDesigner(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Nordic Lux School running on port ${PORT}`);
});
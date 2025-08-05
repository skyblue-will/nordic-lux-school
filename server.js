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
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap');
        
        :root {
          --primary: #0a0a0a;
          --accent: #ff3e00;
          --bg: #fefefe;
          --glass: rgba(255, 255, 255, 0.1);
          --shadow: rgba(0, 0, 0, 0.08);
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Space Grotesk', sans-serif;
          background: var(--bg);
          color: var(--primary);
          line-height: 1.6;
          overflow-x: hidden;
        }
        
        /* Glassmorphism background */
        body::before {
          content: '';
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255, 62, 0, 0.05), transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.03), transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.5), transparent 50%);
          animation: drift 20s ease-in-out infinite;
          z-index: -1;
        }
        
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-100px, -100px) rotate(120deg); }
          66% { transform: translate(100px, -50px) rotate(240deg); }
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        header {
          background: rgba(254, 254, 254, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 1.5rem 0;
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        header.scrolled {
          padding: 1rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          position: relative;
        }
        
        .logo::after {
          content: '™';
          position: absolute;
          top: -0.2em;
          font-size: 0.5em;
          font-weight: 300;
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
        
        .nav-links a {
          position: relative;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          background: var(--bg);
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              rgba(0, 0, 0, 0.02) 100px,
              rgba(0, 0, 0, 0.02) 101px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 100px,
              rgba(0, 0, 0, 0.02) 100px,
              rgba(0, 0, 0, 0.02) 101px
            );
          z-index: 1;
        }
        
        .hero .container {
          position: relative;
          z-index: 2;
        }
        
        h1 {
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.04em;
          line-height: 0.9;
          position: relative;
        }
        
        h1 span {
          display: block;
          font-size: 0.3em;
          font-weight: 300;
          letter-spacing: 0.2em;
          margin-bottom: 0.5em;
          opacity: 0.5;
        }
        
        .tagline {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 3rem;
          font-style: italic;
        }
        
        .cta {
          display: inline-block;
          padding: 1.2rem 3rem;
          background: var(--primary);
          color: white;
          text-decoration: none;
          letter-spacing: 0.05em;
          font-weight: 400;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }
        
        .cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--accent);
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }
        
        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border-color: var(--accent);
        }
        
        .cta:hover::before {
          left: 0;
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
          width: 60px;
          height: 60px;
          background: rgba(255, 62, 0, 0.05);
          border: 1px solid rgba(255, 62, 0, 0.2);
          line-height: 60px;
          margin-bottom: 1.5rem;
          font-weight: 700;
          font-size: 1.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        
        .principle:hover .principle-number {
          background: var(--accent);
          color: white;
          transform: rotate(45deg);
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
          color: var(--primary);
          margin: 4rem 0;
          padding: 2rem 3rem;
          position: relative;
          background: rgba(255, 62, 0, 0.02);
          border-left: 3px solid var(--accent);
        }
        
        .quote::before {
          content: '"';
          position: absolute;
          top: -20px;
          left: 20px;
          font-size: 5rem;
          color: var(--accent);
          opacity: 0.2;
          font-family: Georgia, serif;
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
        
        /* Parallax sections */
        .parallax-wrapper {
          height: 100vh;
          overflow-x: hidden;
          overflow-y: auto;
          perspective: 1px;
        }
        
        .parallax-layer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        /* Floating elements */
        .float {
          position: fixed;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255, 62, 0, 0.1), transparent);
          border-radius: 50%;
          filter: blur(40px);
          animation: float 20s infinite ease-in-out;
          pointer-events: none;
          z-index: 0;
        }
        
        .float:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .float:nth-child(2) {
          top: 60%;
          right: 10%;
          animation-delay: 5s;
        }
        
        .float:nth-child(3) {
          bottom: 20%;
          left: 50%;
          animation-delay: 10s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          33% {
            transform: translateY(-50px) translateX(50px) scale(1.1);
          }
          66% {
            transform: translateY(50px) translateX(-50px) scale(0.9);
          }
        }
        
        /* Mobile */
        @media (max-width: 768px) {
          h1 {
            font-size: 3rem;
          }
          
          .nav-links {
            display: none;
          }
          
          .principle-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <!-- Loading screen -->
      <div id="loader">
        <div class="loader-content">
          <div class="loader-text">NORDIC LUX</div>
          <div class="loader-bar"></div>
        </div>
      </div>
      
      <style>
        #loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--bg);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s, visibility 0.5s;
        }
        
        #loader.loaded {
          opacity: 0;
          visibility: hidden;
        }
        
        .loader-text {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          margin-bottom: 2rem;
        }
        
        .loader-bar {
          width: 200px;
          height: 2px;
          background: rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .loader-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--accent);
          animation: loading 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        @keyframes loading {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      </style>
      
      <!-- Floating elements -->
      <div class="float"></div>
      <div class="float"></div>
      <div class="float"></div>
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
          <h1><span>THE SCHOOL OF</span>Nordic Lux</h1>
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
        
        // Header scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
          const header = document.querySelector('header');
          const currentScroll = window.pageYOffset;
          
          if (currentScroll > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          
          lastScroll = currentScroll;
        });
        
        // Parallax on mouse move
        document.addEventListener('mousemove', (e) => {
          const floats = document.querySelectorAll('.float');
          const x = e.clientX / window.innerWidth;
          const y = e.clientY / window.innerHeight;
          
          floats.forEach((float, index) => {
            const speed = (index + 1) * 20;
            float.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
          });
        });
        
        // Random philosophy generator
        console.log("Today's Nordic Lux wisdom: " + 
          principles[Math.floor(Math.random() * principles.length)]);
        
        // Hide loader when page loads
        window.addEventListener('load', () => {
          setTimeout(() => {
            document.getElementById('loader').classList.add('loaded');
          }, 1000);
        });
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
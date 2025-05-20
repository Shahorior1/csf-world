// Animation script for CSF World hero section

document.addEventListener('DOMContentLoaded', function() {
  // Create full-site background animation
  createSiteWideBackground();
  
  // Hero section animation remains
  createHeroAnimation();
  
  // Apply animations to service cards and icons
  animateServiceCards();
  
  // Apply other animations
  applyOtherAnimations();
});

// Create site-wide background animation
function createSiteWideBackground() {
  // Create canvas element for site background
  const canvas = document.createElement('canvas');
  canvas.id = 'site-background';
  canvas.classList.add('site-bg-canvas');
  
  // Style the canvas to cover the entire site
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.zIndex = '-1';
  canvas.style.opacity = '0.3';
  canvas.style.pointerEvents = 'none'; // Make sure it doesn't interfere with clicks
  
  // Insert canvas as the first child of body
  document.body.insertBefore(canvas, document.body.firstChild);
  
  // Get canvas context
  const ctx = canvas.getContext('2d');
  
  // Set canvas dimensions
  function setCanvasDimensions() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  setCanvasDimensions();
  window.addEventListener('resize', setCanvasDimensions);
  
  // Create subtle background effect
  const gradientDots = [];
  const dotCount = 30; // Keep count low for performance
  
  // Define colors (more subtle than hero section)
  const colors = [
    'rgba(99, 102, 241, 0.1)', // Indigo
    'rgba(139, 92, 246, 0.1)',  // Purple
    'rgba(236, 72, 153, 0.1)',  // Pink
    'rgba(56, 189, 248, 0.1)'   // Light blue
  ];
  
  // Create gradient dots
  for (let i = 0; i < dotCount; i++) {
    gradientDots.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 100 + 50, // Larger, softer dots
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: Math.random() * 0.2 - 0.1, // Very slow movement
      vy: Math.random() * 0.2 - 0.1
    });
  }
  
  // Animation loop for background
  function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw gradient dots
    gradientDots.forEach(dot => {
      // Create radial gradient
      const gradient = ctx.createRadialGradient(
        dot.x, dot.y, 0, 
        dot.x, dot.y, dot.radius
      );
      
      gradient.addColorStop(0, dot.color);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      // Draw dot
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Update position (very slow movement)
      dot.x += dot.vx;
      dot.y += dot.vy;
      
      // Wrap around edges
      if (dot.x < -dot.radius) dot.x = canvas.width + dot.radius;
      if (dot.x > canvas.width + dot.radius) dot.x = -dot.radius;
      if (dot.y < -dot.radius) dot.y = canvas.height + dot.radius;
      if (dot.y > canvas.height + dot.radius) dot.y = -dot.radius;
    });
    
    requestAnimationFrame(animateBackground);
  }
  
  // Start background animation
  animateBackground();
}

// Create hero section animation (enhanced)
function createHeroAnimation() {
  const heroSection = document.querySelector('.hero-gradient');
  
  if (heroSection) {
    // Create canvas element for background animation
    const canvas = document.createElement('canvas');
    canvas.classList.add('animated-bg-canvas');
    
    // Style the canvas to cover the entire hero section
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '1';
    
    // Insert canvas as the first child of hero section
    heroSection.style.position = 'relative';
    heroSection.style.overflow = 'hidden';
    heroSection.insertBefore(canvas, heroSection.firstChild);
    
    // Get canvas context
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    function setCanvasDimensions() {
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    }
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Define particle properties with improved variety
    const particles = [];
    const particleCount = 100; // Increased particle count
    
    // Add shapes
    const shapes = [];
    const shapeCount = 8; // Increased shape count
    
    // Define enhanced colors from brand palette
    const colors = [
      'rgba(99, 102, 241, 0.6)',   // Indigo (brighter)
      'rgba(139, 92, 246, 0.6)',   // Purple (brighter)
      'rgba(168, 85, 247, 0.6)',   // Purple-500 (brighter)
      'rgba(56, 189, 248, 0.6)',   // Light Blue (brighter)
      'rgba(236, 72, 153, 0.4)',   // Pink
    ];
    
    // Create particles with more variety
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1, // Larger particles
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.random() * 1.5 - 0.75, // Faster movement
        vy: Math.random() * 1.5 - 0.75,
        opacity: Math.random() * 0.7 + 0.5,
        pulsate: Math.random() > 0.7, // Some particles will pulsate
        pulsateSpeed: Math.random() * 0.05 + 0.01,
        pulsateAmount: Math.random() * 0.5 + 0.5,
        pulsatePhase: Math.random() * Math.PI * 2,
        originalRadius: 0, // Will be set after creation
      });
      
      // Store original radius for pulsating effect
      particles[i].originalRadius = particles[i].radius;
    }
    
    // Create geometric shapes with more variety
    const shapeTypes = ['square', 'circle', 'triangle', 'diamond', 'pentagon'];
    
    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 15, // Larger shapes
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() * 0.6 - 0.3) * 0.5, // More varied movement
        vy: (Math.random() * 0.6 - 0.3) * 0.5,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        rotation: 0,
        rotationSpeed: (Math.random() * 0.02 - 0.01),
        pulsate: Math.random() > 0.5, // Some shapes will pulsate
        pulsateSpeed: Math.random() * 0.03 + 0.01,
        pulsateAmount: Math.random() * 0.3 + 0.1,
        pulsatePhase: Math.random() * Math.PI * 2,
        originalSize: 0, // Will be set after creation
      });
      
      // Store original size for pulsating effect
      shapes[i].originalSize = shapes[i].size;
    }
    
    // Add connecting lines with improved appearance
    function drawLines() {
      const maxDistance = 180; // Increased max distance
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Calculate line opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            
            // Use gradient lines for more visual interest
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            
            gradient.addColorStop(0, particles[i].color.replace(/[^,]+(?=\))/, opacity * 0.3));
            gradient.addColorStop(1, particles[j].color.replace(/[^,]+(?=\))/, opacity * 0.3));
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Draw a shape with enhanced rendering
    function drawShape(shape) {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      
      // Apply pulsate effect if enabled
      let currentSize = shape.size;
      if (shape.pulsate) {
        currentSize = shape.originalSize + Math.sin(Date.now() * shape.pulsateSpeed + shape.pulsatePhase) * shape.pulsateAmount * shape.originalSize;
      }
      
      // Draw shape with slight transparency
      ctx.fillStyle = shape.color;
      ctx.globalAlpha = 0.7;
      
      if (shape.type === 'square') {
        ctx.fillRect(-currentSize / 2, -currentSize / 2, currentSize, currentSize);
      } else if (shape.type === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, currentSize / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (shape.type === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(0, -currentSize / 2);
        ctx.lineTo(currentSize / 2, currentSize / 2);
        ctx.lineTo(-currentSize / 2, currentSize / 2);
        ctx.closePath();
        ctx.fill();
      } else if (shape.type === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(0, -currentSize / 2);
        ctx.lineTo(currentSize / 2, 0);
        ctx.lineTo(0, currentSize / 2);
        ctx.lineTo(-currentSize / 2, 0);
        ctx.closePath();
        ctx.fill();
      } else if (shape.type === 'pentagon') {
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * 2 * Math.PI / 5) - Math.PI / 2;
          const x = Math.cos(angle) * (currentSize / 2);
          const y = Math.sin(angle) * (currentSize / 2);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      }
      
      // Add subtle stroke
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.restore();
    }
    
    // Add enhanced glowing effect
    function drawGlow(x, y, radius, color) {
      // Create multiple layers of glow for a more dynamic effect
      for (let i = 3; i > 0; i--) {
        const scaleFactor = i * 1.5;
        const opacity = 0.15 / i;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * scaleFactor);
        gradient.addColorStop(0, color.replace(/[^,]+(?=\))/, opacity * 2));
        gradient.addColorStop(0.5, color.replace(/[^,]+(?=\))/, opacity));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * scaleFactor, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Animation loop with improved effects
    function animate() {
      // Clear with a semi-transparent layer for trail effect
      ctx.fillStyle = 'rgba(12, 30, 64, 0.15)'; // Slightly more opaque for better trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw shapes
      shapes.forEach(shape => {
        // Draw shape
        drawShape(shape);
        
        // Update position and rotation
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;
        
        // Bounce off edges
        if (shape.x < 0 || shape.x > canvas.width) {
          shape.vx = -shape.vx;
        }
        
        if (shape.y < 0 || shape.y > canvas.height) {
          shape.vy = -shape.vy;
        }
      });
      
      // Draw and update particles
      particles.forEach(particle => {
        // Apply pulsate effect if enabled
        if (particle.pulsate) {
          particle.radius = particle.originalRadius + 
            Math.sin(Date.now() * particle.pulsateSpeed + particle.pulsatePhase) * 
            particle.pulsateAmount * particle.originalRadius;
        }
        
        // Draw glow effect first (behind particles)
        drawGlow(particle.x, particle.y, particle.radius, particle.color);
        
        // Draw particles
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Add subtle stroke to particles
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = -particle.vx;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy = -particle.vy;
        }
      });
      
      // Draw connecting lines
      drawLines();
      
      // Continue animation loop
      requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Add enhanced mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let mouseRadius = 150; // Interaction radius
    let isMouseMoving = false;
    
    heroSection.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseMoving = true;
      
      // Add mouse interaction ripple effect
      if (Math.random() > 0.6) {
        // Create ripple particles at mouse position
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 10;
        const posX = mouseX + Math.cos(angle) * distance;
        const posY = mouseY + Math.sin(angle) * distance;
        
        particles.push({
          x: posX,
          y: posY,
          radius: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: Math.cos(angle) * (Math.random() * 2 + 1),
          vy: Math.sin(angle) * (Math.random() * 2 + 1),
          opacity: 0.8,
          life: 100, // Lifecycle for mouse-generated particles
          pulsate: true,
          pulsateSpeed: Math.random() * 0.05 + 0.02,
          pulsateAmount: Math.random() * 0.5 + 0.5,
          pulsatePhase: Math.random() * Math.PI * 2,
          originalRadius: Math.random() * 4 + 2,
        });
        
        // Remove a particle if we have too many
        if (particles.length > particleCount + 30) {
          particles.shift();
        }
      }
      
      // Repel nearby particles from mouse for interactive effect
      particles.forEach(particle => {
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          // Calculate repulsion force (stronger as distance decreases)
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          
          // Apply force to particle velocity
          particle.vx += Math.cos(angle) * force * 0.2;
          particle.vy += Math.sin(angle) * force * 0.2;
          
          // Limit max velocity
          const maxVel = 2;
          const vel = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
          if (vel > maxVel) {
            particle.vx = (particle.vx / vel) * maxVel;
            particle.vy = (particle.vy / vel) * maxVel;
          }
        }
      });
      
      // Also affect shapes slightly
      shapes.forEach(shape => {
        const dx = shape.x - mouseX;
        const dy = shape.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius * 1.5) {
          // Calculate repulsion force (stronger as distance decreases)
          const force = (mouseRadius * 1.5 - distance) / (mouseRadius * 1.5);
          const angle = Math.atan2(dy, dx);
          
          // Apply force to shape velocity
          shape.vx += Math.cos(angle) * force * 0.05;
          shape.vy += Math.sin(angle) * force * 0.05;
          
          // Slightly increase rotation speed on interaction
          shape.rotationSpeed *= 1 + (force * 0.1);
        }
      });
      
      // Reset after 2 seconds of no movement
      clearTimeout(window.mouseTimeout);
      window.mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 2000);
    });
    
    // Add parallax effect to hero content elements
    const parallaxElements = heroSection.querySelectorAll('.hero-content > div');
    
    if (parallaxElements.length) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) - 0.5;
        const mouseY = ((e.clientY - rect.top) / rect.height) - 0.5;
        
        parallaxElements.forEach((element, index) => {
          // Apply subtle parallax effect
          const depth = 0.03 * (index + 1);
          const moveX = mouseX * depth * 100;
          const moveY = mouseY * depth * 50;
          
          element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });
      });
      
      // Reset positions when mouse leaves the area
      heroSection.addEventListener('mouseleave', () => {
        parallaxElements.forEach(element => {
          element.style.transform = 'translate3d(0, 0, 0)';
          element.style.transition = 'transform 0.5s ease-out';
        });
      });
      
      // Remove transition when mouse enters for smoother movement
      heroSection.addEventListener('mouseenter', () => {
        parallaxElements.forEach(element => {
          element.style.transition = 'transform 0.1s ease-out';
        });
      });
    }
    
    // Make connector lines pulse
    const connectorLines = heroSection.querySelectorAll('.connector-line');
    
    connectorLines.forEach((line, index) => {
      // Add pulsating gradient animation
      line.style.animation = `connectorPulse 8s infinite ${index * 0.7}s`;
      line.style.background = `linear-gradient(to bottom, 
        rgba(99, 102, 241, 0.05), 
        rgba(139, 92, 246, 0.3), 
        rgba(99, 102, 241, 0.05))`;
    });
    
    // Add animated text effect to hero heading
    const heroHeading = heroSection.querySelector('.hero-title');
    
    if (heroHeading) {
      // Add a subtle animation to the heading text
      heroHeading.classList.add('text-animation');
      
      // Create a floating highlight effect
      const highlightEffect = document.createElement('div');
      highlightEffect.classList.add('hero-highlight-effect');
      highlightEffect.style.position = 'absolute';
      highlightEffect.style.top = '0';
      highlightEffect.style.left = '0';
      highlightEffect.style.width = '100%';
      highlightEffect.style.height = '100%';
      highlightEffect.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)';
      highlightEffect.style.pointerEvents = 'none';
      highlightEffect.style.zIndex = '1';
      
      // Position it behind the text
      if (heroHeading.parentElement) {
        heroHeading.parentElement.style.position = 'relative';
        heroHeading.parentElement.appendChild(highlightEffect);
        
        // Move the highlight with mouse
        heroSection.addEventListener('mousemove', (e) => {
          const rect = heroHeading.parentElement.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          highlightEffect.style.left = `${x - 150}px`;
          highlightEffect.style.top = `${y - 150}px`;
        });
      }
      
      // Add typing animation
      const originalText = heroHeading.innerHTML;
      const textParts = originalText.split('<br>');
      const firstLine = textParts[0];
      const secondLine = textParts[1] || '';
      
      // Clear the heading temporarily
      heroHeading.innerHTML = '';
      
      // Type out the first line
      let charIndex = 0;
      
      function typeText() {
        if (charIndex < firstLine.length) {
          heroHeading.innerHTML += firstLine.charAt(charIndex);
          charIndex++;
          setTimeout(typeText, 100); // Typing speed
        } else {
          // Add break after first line is typed
          heroHeading.innerHTML += '<br>';
          
          // Start typing second line
          typeSecondLine();
        }
      }
      
      function typeSecondLine() {
        let secondLineIndex = 0;
        const typeInterval = setInterval(() => {
          if (secondLineIndex < secondLine.length) {
            heroHeading.innerHTML += secondLine.charAt(secondLineIndex);
            secondLineIndex++;
          } else {
            clearInterval(typeInterval);
            
            // Once everything is typed, add the cursor animation class
            heroHeading.classList.add('typed-complete');
            
            // Remove typing cursor style and add normal cursor style
            const style = document.createElement('style');
            style.textContent = `
              .hero-title.typed-complete::after {
                animation: blink 1s step-start infinite;
              }
            `;
            document.head.appendChild(style);
          }
        }, 100); // Type the second line at the same speed
      }
      
      // Start the typing animation with a slight delay
      setTimeout(typeText, 500);
    }
  }
  
  // Add CSS keyframes for connector line animation if they don't exist
  if (!document.querySelector('#connector-animation-style')) {
    const style = document.createElement('style');
    style.id = 'connector-animation-style';
    style.innerHTML = `
      @keyframes connectorPulse {
        0%, 100% { 
          opacity: 0.2;
          height: 70%; 
        }
        50% { 
          opacity: 0.6;
          height: 75%; 
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Animate service cards
function animateServiceCards() {
  // Apply animations to service cards and icons (fixed selector)
  const serviceCards = document.querySelectorAll('.service-card');
  
  // Add tilt effect to service cards
  const addTiltEffect = (element) => {
    element.addEventListener('mousemove', (e) => {
      const card = element;
      const cardRect = card.getBoundingClientRect();
      const cardWidth = cardRect.width;
      const cardHeight = cardRect.height;
      
      // Calculate mouse position relative to card
      const mouseX = e.clientX - cardRect.left;
      const mouseY = e.clientY - cardRect.top;
      
      // Calculate rotation angles (subtle effect)
      const rotateY = ((mouseX / cardWidth) - 0.5) * 8; // Max 4 degrees
      const rotateX = ((mouseY / cardHeight) - 0.5) * -8; // Max 4 degrees
      
      // Apply the transform
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Add subtle shadow based on tilt
      const shadowX = rotateY * 0.5;
      const shadowY = rotateX * -0.5;
      card.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.2)`;
    });
    
    // Reset on mouse leave
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      element.style.boxShadow = '';
    });
  };
  
  serviceCards.forEach((card, index) => {
    // Apply staggered animation to each card
    card.style.animationDelay = `${index * 0.15}s`;
    
    // Add tilt effect to each card
    addTiltEffect(card);
    
    // Get the icon div inside the card
    const iconDiv = card.querySelector('.text-4xl');
    if (iconDiv) {
      // Remove existing class first to avoid duplication
      iconDiv.classList.remove('rotate-icon');
      
      // Create a wrapper for the icon to isolate the rotation animation
      const iconContent = iconDiv.innerHTML;
      iconDiv.innerHTML = `<span class="icon-wrapper">${iconContent}</span>`;
      
      // Apply rotation animation to the wrapper
      const iconWrapper = iconDiv.querySelector('.icon-wrapper');
      iconWrapper.style.display = 'inline-block';
      
      // Add hover effect to trigger rotation
      card.addEventListener('mouseenter', () => {
        iconWrapper.style.animation = 'rotate 2s ease-in-out';
        
        // Also highlight the title
        const title = card.querySelector('.card-title');
        if (title) {
          title.classList.add('text-glow');
        }
        
        // Add subtle pulse to the learn more button
        const button = card.querySelector('.btn');
        if (button) {
          button.classList.add('pulse-animation');
        }
      });
      
      card.addEventListener('mouseleave', () => {
        iconWrapper.style.animation = 'none';
        
        // Remove title highlight
        const title = card.querySelector('.card-title');
        if (title) {
          title.classList.remove('text-glow');
        }
        
        // Remove button animation
        const button = card.querySelector('.btn');
        if (button) {
          button.classList.remove('pulse-animation');
        }
        
        // Small delay before removing animation to avoid abrupt stop
        setTimeout(() => {
          iconWrapper.style.animation = '';
        }, 50);
      });
    }
  });
  
  // Add special animation to Services heading
  const servicesHeading = document.querySelector('.section-padding.bg-base-100 .heading-lg');
  if (servicesHeading) {
    // Create animated underline effect
    const container = servicesHeading.parentElement;
    const underline = document.createElement('div');
    underline.className = 'animated-underline';
    
    // Position it below the heading
    servicesHeading.style.position = 'relative';
    servicesHeading.style.display = 'inline-block';
    container.appendChild(underline);
    
    // Animate it when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          underline.classList.add('animate-underline');
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(servicesHeading);
  }
}

// Apply other animations
function applyOtherAnimations() {
  // Apply slide-in animations to sections
  const leftElements = document.querySelectorAll('.animate-left');
  leftElements.forEach(element => {
    element.classList.add('slide-in-left');
  });
  
  const rightElements = document.querySelectorAll('.animate-right');
  rightElements.forEach(element => {
    element.classList.add('slide-in-right');
  });
  
  // Add staggered animations to the brand showcase
  const brandShowcase = document.querySelector('.grid-cols-2.md\\:grid-cols-3.lg\\:grid-cols-4');
  if (brandShowcase) {
    brandShowcase.classList.add('stagger-animation');
  }
  
  // ===== Improved Scroll Animations =====
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const staggerElements = document.querySelectorAll('.stagger-animation');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate-fade-in');
        
        // Add rotate animation to elements with 'data-rotate' attribute
        if (element.getAttribute('data-rotate')) {
          element.classList.add('fade-rotate');
        }
      }
    });
    
    staggerElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.1;
      
      if (elementPosition < screenPosition) {
        element.classList.add('stagger-visible');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  // Run once on page load with a slight delay to ensure DOM is fully rendered
  setTimeout(animateOnScroll, 300);
  
  // Add bounce animation to call-to-action buttons
  const ctaButtons = document.querySelectorAll('.btn-primary.btn-lg');
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('bounce-animation');
    });
    
    button.addEventListener('mouseleave', () => {
      button.classList.remove('bounce-animation');
    });
  });
} 
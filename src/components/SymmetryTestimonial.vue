<template>
  <div class="testimonial-card">
    <div class="testimonial-header">
      <img src="@/assets/img/symmetry_logo.png" alt="Symmetry Logo" class="testimonial-logo">
      <h3 class="testimonial-title">Confirmación de Trabajo</h3>
    </div>
    
    <div class="testimonial-divider"></div>
    
    <div class="testimonial-quote">
      <i class="uil uil-quote-left quote-icon"></i>
      <p class="quote-text">
        Tu prueba técnica es justo lo que queríamos. 
        Nos encantaría que formaras parte de Symmetry Club.
      </p>
      <i class="uil uil-quote-right quote-icon"></i>
    </div>
    
    <div class="testimonial-author">
      <p class="author-name">— Mauro Botanes</p>
      <p class="author-title">COO, Symmetry Club LLC</p>
      <p class="author-date">Noviembre 2025</p>
    </div>
    
    <div class="testimonial-divider"></div>
    
    <div class="testimonial-footer">
      <div class="contact-item">
        <i class="uil uil-envelope"></i>
        <span>info@symmetry.club</span>
      </div>
      <div class="contact-item">
        <i class="uil uil-link"></i>
        <a href="https://symmetry.club" target="_blank" rel="noopener noreferrer">
          https://symmetry.club
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No requiere lógica
</script>

<style scoped>
.testimonial-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  padding: 2rem 1.75rem; /* Reducido de 3rem 2.5rem */
  max-width: 500px; /* Reducido de 600px */
  margin: 0 auto;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1); /* Reducido de 0 10px 40px */
  font-family: var(--body-font);
}

.testimonial-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem; /* Reducido de 1rem */
  margin-bottom: 1.5rem; /* Reducido de 2rem */
}

.testimonial-logo {
  width: 150px; /* Reducido de 80px */
  height: 100px; /* Reducido de 80px */
  object-fit: contain;
}

.testimonial-title {
  font-size: 1.25rem; /* Reducido de 1.5rem */
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  text-align: center;
  margin: 0;
}

.testimonial-divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--first-color), transparent);
  margin: 1.25rem 0; /* Reducido de 1.5rem */
}

.testimonial-quote {
  position: relative;
  padding: 1rem 0; /* Reducido de 1.5rem */
  text-align: center;
}

.quote-icon {
  font-size: 1.5rem; /* Reducido de 2rem */
  color: var(--first-color);
  opacity: 0.3;
}

.quote-text {
  font-size: 1.05rem; /* Reducido de 1.25rem */
  line-height: 1.6; /* Reducido de 1.8 */
  color: var(--text-color);
  font-style: italic;
  margin: 0.75rem 0; /* Reducido de 1rem */
  padding: 0 0.75rem; /* Reducido de 0 1rem */
}

.testimonial-author {
  text-align: center;
  margin: 1.5rem 0; /* Reducido de 2rem */
}

.author-name {
  font-size: 1rem; /* Reducido de 1.1rem */
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  margin-bottom: 0.4rem; /* Reducido de 0.5rem */
}

.author-title {
  font-size: 0.875rem; /* Reducido de 0.95rem */
  color: var(--text-color);
  margin-bottom: 0.2rem; /* Reducido de 0.25rem */
}

.author-date {
  font-size: 0.8rem; /* Reducido de 0.875rem */
  color: var(--text-color-light);
}

.testimonial-footer {
  display: flex;
  flex-direction: column;
  gap: 0.6rem; /* Reducido de 0.75rem */
  margin-top: 1.25rem; /* Reducido de 1.5rem */
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem; /* Reducido de 0.5rem */
  font-size: 0.85rem; /* Reducido de 0.9rem */
  color: var(--text-color);
}

.contact-item i {
  color: var(--first-color);
  font-size: 1rem; /* Reducido de 1.1rem */
}

.contact-item a {
  color: var(--first-color);
  text-decoration: none;
  transition: opacity 0.3s;
}

.contact-item a:hover {
  opacity: 0.7;
}

/* Responsive */
@media screen and (max-width: 567px) {
  .testimonial-card {
    padding: 1.5rem 1.25rem; /* Reducido de 2rem 1.5rem */
  }
  
  .testimonial-logo {
    width: 100px;
    height: 70px;
  }
  
  .testimonial-title {
    font-size: 1.1rem; /* Reducido de 1.2rem */
  }
  
  .quote-text {
    font-size: 0.95rem; /* Reducido de 1rem */
    padding: 0 0.5rem;
  }
  
  .quote-icon {
    font-size: 1.25rem; /* Reducido de 1.5rem */
  }
  
  .author-name {
    font-size: 0.95rem; /* Reducido de 1rem */
  }
  
  .author-title,
  .author-date,
  .contact-item {
    font-size: 0.8rem; /* Reducido de 0.85rem */
  }
}

@media screen and (max-width: 350px) {
  .testimonial-card {
    padding: 1.25rem 1rem; /* Reducido de 1.5rem 1rem */
  }
  
  .quote-text {
    font-size: 0.85rem; /* Reducido de 0.9rem */
  }
}
</style>
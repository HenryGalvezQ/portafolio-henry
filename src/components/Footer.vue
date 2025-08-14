<template>
  <footer class="footer">
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">Alexa</h1>
          <span class="footer__subtitle">Frontend developer</span>
        </div>
        <ul class="footer__links">
          <li>
            <a href="#services" class="footer__link">Services</a>
          </li>
          <li>
            <a href="#portfolio" class="footer__link">Portfolio</a>
          </li>
          <li>
            <a href="#contact" class="footer__link">Contactme</a>
          </li>
        </ul>
        <div class="footer__socials">
          <a href="https://www.facebook.com/" aria-label="footer__social" target="_blank" class="footer__social">
            <i class="uil uil-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/" aria-label="footer__social" target="_blank" class="footer__social">
            <i class="uil uil-instagram"></i>
          </a>
          <a href="https://twitter.com/" aria-label="footer__social" target="_blank" class="footer__social">
            <i class="uil uil-twitter-alt"></i>
          </a>
        </div>
      </div>
      <p class="footer__copy">&#169; CodeWithPankaj. All right reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
.footer {
  padding-top: 2rem;
}
.footer__container {
  row-gap: 3.5rem;
}
.footer__bg {
  background-color: var(--first-color-second);
  padding: 2rem 0 3rem;
}
.footer__title {
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-0-25);
}
.footer__subtitle {
  font-size: var(--small-font-size);
}
.footer__links {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}
.footer__link:hover {
  color: var(--first-color-lighter);
}
.footer__social {
  font-size: 1.25rem;
  margin-right: var(--mb-1-5);
}
.footer__social:hover {
  color: var(--first-color-lighter);
}
.footer__copy {
  font-size: var(--smaller-font-size);
  text-align: center;
  color: var(--text-color-light);
  margin-top: var(--mb-3);
}
.footer__title,
.footer__subtitle,
.footer__link,
.footer__social {
  color: #fff;
}

/* Media Queries */
@media screen and (min-width: 568px) {
  .footer__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 768px) {
  .footer__container {
    padding: 0 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .footer__bg {
    padding: 3rem 0 3.5rem;
  }
  .footer__links {
    flex-direction: row;
    column-gap: 2rem;
  }
  .footer__socials {
    justify-self: flex-end;
  }
  .footer__copy {
    margin-top: 4.5rem;
  }
}
@media screen and (min-width: 1024px) {
  .footer__container {
    padding: 0;
  }
}
</style>
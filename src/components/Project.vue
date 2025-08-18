<template>
  <section class="project section">
    <div class="project__bg">
      <div class="project__container container grid">
        <div class="project__data">
          <h2 class="project__title">You have a new project</h2>
          <p class="project__description">Contact me now and get a 30% discount on your new project.</p>
          <a href="#contact" class="button button--flex button--white">
            Contact Me
            <i class="uil uil-message project__icon button__icon"></i>
          </a>
        </div>
        <img src="@/assets/img/project.png" alt="project image" class="project__img">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Project'
}
</script>

<style scoped>
/* ==================== PROJECT ==================== */
.project {
  text-align: center;
}

.project__bg {
  background-color: var(--first-color-second);
  padding-top: 3rem;
}

.project__title {
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-0-75);
  color: #fff;
}

.project__description {
  margin-bottom: var(--mb-1-5);
  color: #fff;
}

.project__img {
  width: 232px;
  justify-self: center;
}

/* El icono del botón hereda el color, pero podemos ser explícitos si es necesario */
.project__icon {
  color: var(--first-color);
}

/* ==================== MEDIA QUERIES ==================== */
@media screen and (max-width: 350px) {
  .project__img {
    width: 200px;
  }
}

@media screen and (min-width: 568px) {
  .project__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center; /* Añadido para mejor alineación vertical */
  }
}

@media screen and (min-width: 768px) {
  .project {
    text-align: initial;
  }
  .project__bg {
    background: none;
  }
  .project__container {
    background-color: var(--first-color-second);
    border-radius: 1rem;
    padding: 3rem 2.5rem 0;
    grid-template-columns: 1fr max-content;
    column-gap: 3rem;
  }
  .project__data {
    padding-top: .8rem;
  }
}
</style>
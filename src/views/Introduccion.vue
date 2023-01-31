<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/introduccion.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 Apreciado aprendiz, bienvenido a este componente formativo, en el que conocerá acerca del proceso de servicio al cliente de manera detallada, con la finalidad de conocer los instrumentos, medios, periodicidad, consolidación de información, análisis de resultados, diseño de planes de contingencia, para hacer frente a los retos que, desde el cliente y para su satisfacción, se deben enfrentar.

    p.mt-5.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video       
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Seguimiento y evaluación del proceso de servicio al cliente  
    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-7.mb-3
            p.mt-5 El seguimiento y evaluación del proceso de servicio al cliente, requiere tanto esfuerzo como el diseño de la estrategia y del mismo proceso que le atañe. Esta evaluación implica enfrentarse a la realidad desde la percepción del cliente, la cual es fundamental para encontrar aspectos por mejorar, previniendo posibles riesgos potenciales.
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas//tema2/img1.png", alt="alt")   

    p.mt-5.mb-5  Para poder realizar un correcto seguimiento del proceso de servicio al cliente, se debe tener en cuenta:
    .row.justify-content-center.mt-5
      .col-md-5.mt-5
        figure
          img(src="@/assets/curso/temas/tema2/img2.png", alt="alt")     
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
          .row(titulo="Trazabilidad").px-5.py-2.bg2
            .row
              p.text-justify Consiste en la trayectoria o recorrido que ha tenido el producto o servicio hasta llegar al cliente; este trayecto es de suma importancia al momento de evaluar el proceso de servicio, porque al estar documentado mediante actas o informes cortos, brinda las herramientas necesarias para encontrar hallazgos que permitan mejorar el mismo, o resolver imprevistos ocurridos en la prestación del servicio.

          div(titulo="NTC GTC 185").px-5.py-3
            .row
              p.text-justify Documentar el proceso tiene una solidez importante, especialmente si la empresa ha implementado el sistema de gestión de la calidad, donde cobra importancia la NTC GTC 185 Norma Técnica Colombiana de Documentación Organizacional, donde se establece con claridad, la necesidad de los documentos pertinentes en cada gestión y cómo deben llevarse de manera ordenada y técnica, a fin de dar cuenta de las actividades y determinaciones tomadas en la actividad empresarial.
          div(titulo="Documentación").px-5.py-3
            .row
              p.text-justify Es toda aquella documentación que se ha vinculado como evidencia de la prestación de servicio y todo lo que implica la atención al cliente; está enmarcada en el sistema de gestión de calidad, en lo referente al proceso de servicio al cliente; en caso de no contar con este, la empresa debe contar con un manual de gestión, donde, apoyado por un proceso, procedimiento, etiqueta y protocolo, da vida a este proceso e implícitamente deberá definir aspectos como la documentación que se deberá utilizar en las diferentes etapas de este proceso.


    .row.align-items-end.bg3.h4.p-3.mt-5 Indicadores de gestión
    p.mt-5.mb-5 La valoración y seguimiento de la trayectoria del cliente tiene un fin específico: hallar nuevas oportunidades para mejorar el relacionamiento con el cliente a través del conocimiento de su comportamiento, el cual puede mejorarse y llegar a un incremento en la tasa de conversión de contactos a ventas efectivas.
    p.mb-5 Para realizar esa valoración y seguimiento, se tienen los siguientes indicadores aplicables:

    TabsC.color-acento-botones.mb-5.bg2
      .py-3.py-md-4(titulo="Rendimiento percibido")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img3.png', alt='').img400.m-auto
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            p En el rendimiento percibido, se evalúa el entendimiento del cliente acerca de la empresa y el producto, injerencia de opiniones de terceros en el cliente, si el estado de ánimo del cliente lo que demuestra es la necesidad de estructura, una encuesta que permita recoger información acerca de todos estos aspectos. 

      .py-3.py-md-4(titulo="Expectativas")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img4.png', alt='').img400.m-auto
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            p Las expectativas se refieren a todo aquello que se quiere conseguir y depende de las siguientes situaciones:
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Promesas de las empresas sobre los beneficios que brinda el producto o servicio.
              li
                i.lista-ul__vineta
                | Experiencias de compras anteriores.
              li
                i.lista-ul__vineta
                | Opiniones de amistades, familiares, conocidos y líderes de opinión.
              li
                i.lista-ul__vineta
                | Promesas que ofrecen los competidores.
            p Estas aparecen, gracias a la promesa de valor de la empresa, así como de las promesas al comercializar el producto, la publicidad, entre otros.

      .py-3.py-md-4(titulo="Niveles de satisfacción")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img5.png', alt='').img400.m-auto
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            p Los niveles de satisfacción se refieren al nivel de conformidad acerca de una compra o un servicio, los cuales se evalúan en estos niveles:
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Insatisfacción: el desempeño percibido del producto no alcanza las expectativas del cliente.
              li
                i.lista-ul__vineta
                | Satisfacción: el desempeño percibido del producto coincide con las expectativas del cliente.
              li
                i.lista-ul__vineta
                | Complacencia: el desempeño percibido excede a las expectativas del cliente.

      .py-3.py-md-4(titulo="Comportamiento del cliente")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img6.png', alt='').img400.m-auto
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            p El comportamiento de compra está orientado a conocer las necesidades, gustos, expectativas y las acciones del cliente, y se concentran en tres ítems: 
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Comportamiento de compra: se realiza la compra y el medio de pago.
              li
                i.lista-ul__vineta
                | Uso del producto: frecuencia con que el cliente usa el producto y si está satisfecho con la compra.
              li
                i.lista-ul__vineta
                | Desecho del producto: tiempo en que el cliente usa el producto, si lo revende o no y deja de usarlo.

    .row.justify-content-center.mt-5  
      .col-md-11
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                
            p Teniendo en cuenta la valoración y el seguimiento que se realiza a los clientes, se desprende un factor importante para la empresa u organización y es la #[span.text-bold fidelización de clientes], la cual hace referencia al conjunto de estrategias, técnicas y acciones de #[i marketing], ventas y de servicio al cliente, que una empresa emplea para retener clientes y hacer que estos opten por comprar sus productos o servicios de forma habitual.


    .row.align-items-end.bg3.h4.p-3.mt-5 Aplicaciones e instrumentos en el servicio al cliente
    .row.justify-content-center.mt-5
      .col-md-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img7.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p Existen diferentes aplicaciones que aportan dinamismo y digitalización en la organización las cuales presentan un horizonte de oportunidades, según el interés de la empresa y el valor que le dé a esta estrategia de servicio al cliente, conocida como estrategia competitiva, porque definitivamente hace de cada ente económico una experiencia diferente, orientada a una experiencia del cliente (CX). A continuación, lo invitamos a ver el siguiente video para conocer cuáles son este tipo de aplicaciones.

    p.mt-5.mb-5 Aplicaciones para realizar el seguimiento en el servicio al cliente:
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BVnZQGT4osA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video             

    .row.align-items-end.bg3.h4.p-3.mt-5 Instrumentos para medir la satisfacción del cliente
    p.mt-5.mb-5 Después de conocer las aplicaciones con las cuales se puede realizar un seguimiento al cliente, es necesario tener un soporte tecnológico que permita obtener información, ordenarla, clasificarla y generar conclusiones para conocer más acerca del perfil del cliente. Sin embargo, para las empresas se vuelve dispendioso, demorado y engorroso, llevar estos procesos manualmente, por lo que se hace necesaria la automatización de estos.

    p.mb-5 Se presentan entonces, algunos instrumentos que facilitan medir la satisfacción del cliente:

    .row.justify-content-center
      .col-md-11
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
                img(src='@/assets/curso/temas/tema2/img8.png', alt='')
          .tarjeta.color-acento-botones.p-3(x="9%" y="10%" numero="+")
            p Analiza la lealtad de los clientes y se utiliza regularmente en las encuestas de satisfacción.
          .tarjeta.color-acento-botones.p-3(x="20%" y="10%" numero="+")
            p Herramienta ideal para comprometerse con los clientes y recolectar comentarios de calidad.
          .tarjeta.color-acento-botones.p-3(x="31%" y="10%" numero="+")
            p Las publicaciones en #[i Facebook, Instagram, LinkedIn o Twitter], son ágiles porque la participación del cliente puede realizarse solo con una reacción emotiva.
          .tarjeta.color-acento-botones.p-3(x="42%" y="10%" numero="+")
            p Son una rica fuente de información. Se puede conocer lo que los visitantes o clientes están buscando, lo que esperan, etc.
          .tarjeta.color-acento-botones.p-3(x="54%" y="10%" numero="+")
            p Para recoger la opinión inmediata de los clientes sobre su interacción con el equipo de soporte, las consultas de facturación con el área de contabilidad, etc.
          .tarjeta.color-acento-botones.p-3(x="65%" y="10%" numero="+")
            p Los mensajes de texto son resueltos con mayor agilidad por los usuarios y clientes.
          .tarjeta.color-acento-botones.p-3(x="76%" y="10%" numero="+")
            p Es el porcentaje de consumidores que se pierde con el tiempo.
          .tarjeta.color-acento-botones.p-3(x="88%" y="10%" numero="+")
            p Funcionan como redireccionamiento a páginas emergentes que faciliten la navegación en el sitio al cliente.

    p.mt-5.mb-5  Finalmente, en la evaluación y seguimiento de servicio al cliente, se hace necesario consolidar este procedimiento, en un #[span.text-bold informe de evaluación del proceso], el cual debe atender los requerimientos que, al respecto, se hayan definido en el proceso que lleva este nombre, e incluido en el manual de calidad o documento correspondiente al sistema de gestión de la calidad, así como también la NTC GTC 185 de documentación organizacional.           
    
    
    .row.justify-content-center.mt-5
      .col-md-9
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img9.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-4
            p Esta evaluación resulta del consolidado de información obtenida en la omnicanalidad y en la atención personalizada al cliente, quien no tendrá reparos en manifestar su conformidad o inconformidad, por los medios que sean necesarios y que considere más efectivos.

    .row.justify-content-center.mt-5  
      .col-md-11
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                
            p Al evaluar el proceso de servicio al cliente, siempre habrá oportunidades de mejora y si la organización cuenta con un sistema de gestión de la calidad, estas mediciones deberán ser tratadas con ese nivel de importancia; este sistema está orientado a la satisfacción del cliente partiendo de sus requisitos, hasta la mejora continua que da vida al proceso sistémico y conlleva a un nuevo comienzo en el diseño y planeación.

    .row.justify-content-center.bg4.mg-img.mt-5.mb-5.mg-img-final
      .row.justify-content-center.mt-5
        .col-md-9
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img10.png')})`}"
            )                             
            .bloque-texto-g__texto.p-4
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, el material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

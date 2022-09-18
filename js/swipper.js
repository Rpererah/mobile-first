const swiper = new Swiper('.swiper', {
    //tamanho por slide
    spaceBetween: 10,
    //numeros de slides
    slidesPerView: 3,
    //para inserir os bullets de navegacao apos mudar a div pagination para antes dos itens
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  });
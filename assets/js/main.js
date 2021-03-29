
$(document).ready(function(){
	$("#content .palavras:nth-child(1)").show();
	$(".aba").click(function(){
		$(".aba").removeClass("ativa");
		$(this).addClass("ativa");
		var indice = $(this).parent().index();
		indice++;
		$("#content .palavras").hide();
		$("#content .palavras:nth-child("+indice+")").show();
        console.log(indice)
                return false;
	});
});

$(document).ready(function(){
	$("#conteudo .conteudo-filho:nth-child(1)").show();
	$(".cards").click(function(){
		$(".cards").removeClass("ativo");
		$(this).addClass("ativo");
		var indice = $(this).parent().index();
		indice++;
		$("#conteudo .conteudo-filho").hide();
		$("#conteudo .conteudo-filho:nth-child("+indice+")").show();
        console.log(indice)
                return false;
	});
});



  if ( matchMedia('screen and (max-width: 768px)').matches ) {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false
      });
  }


  if (window.matchMedia("(max-width: 700px)").matches) {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        freeScroll: true
      });
  } else {
    $(ul).removeClass("main-carousel");
    $(li).removeClass("carousel-cell");

  }
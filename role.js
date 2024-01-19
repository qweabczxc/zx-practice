$(document).ready(function() {
    var mediaq = window.matchMedia('(max-width: 800px)');
    if(!mediaq.matches){
        $('.main_dives').on('click', function() {
            $('.main_dives').removeClass('active');
            $(this).addClass('active');
            $('.img_roles').hide();
            $(this).find('.img_roles').show();
        });
    }

    var current = 0;
    $('#main_div1').on('click', function(){
      current = 1;
      $('.red_imgs').hide();
      $('.default_imgs').show();
      $('#main_img1').hide();
      $('#main_img1_red').show();
      $('#main_block_txt').text('Выступает на турнирах, участвует в матчах и вступает в команды. У игроков есть уровень навыка и рейтинг, рассчитанный на основе статистики. Также они могут заключать контракты с командами и клубами.');
    })
    $('#main_div2').on('click', function(){
      current = 2;
      $('.red_imgs').hide();
      $('.default_imgs').show();
      $('#main_img2').hide();
      $('#main_img2_red').show();
      $('#main_block_txt').text('Занимается развитием игроков, клубов и команд. Его рейтинг растет вместе с показателями команды, к примеру, с получением подопечными трофеев и наград.');
    })
    $('#main_div3').on('click', function(){
      current = 3;
      $('.red_imgs').hide();
      $('.default_imgs').show();
      $('#main_img3').hide();
      $('#main_img3_red').show();
      $('#main_block_txt').text('Занимается проведением турниров и лиг. Может быть нанят аренами или пользователями, которые хотят провести интересный товарищеский матч.');
    })
    $('#main_div4').on('click', function(){
      current = 4;
      $('.red_imgs').hide();
      $('.default_imgs').show();
      $('#main_img4').hide();
      $('#main_img4_red').show();
      $('#main_block_txt').text('Судит и принимает важные решения в матчах и турнирах. Рейтинг судьи зависит от оценки его деятельности дргуими игроками и организаторами.');
    })
    $('#main_div5').on('click', function(){
      current = 5;
      $('.red_imgs').hide();
      $('.default_imgs').show();
      $('#main_img5').hide();
      $('#main_img5_red').show();
      $('#main_block_txt').text('Оценивает пользователей и сообщества сайта. Этих участников могут нанять организаторы турниров для проведения предматчевой и послематчевой аналитики.');
    })
    $('#main_div6').on('click', function(){
      current = 6;
      $('.red_imgs').hide();
      $('.default_imgs').show();
      $('#main_img6').hide();
      $('#main_img6_red').show();
      $('#main_block_txt').text('Комментирует матчи и трансляции. Может быть приглашен на турниры. Статус комментатора растет за счет среднего количества просмотров трансляций с его комментированием и оценок пользователей.');
    })
    $('#main_div7').on('click', function(){
      current = 7;
      $('.red_imgs').hide();
      $('.default_imgs').show();
      $('#main_img7').hide();
      $('#main_img7_red').show();
      $('#main_block_txt').text('Занимается поиском пользователей для сообществ и наоборот. После нахождения, в зависимости от результатов статистических показателей найденных пользователей или сообществ будет меняться его рейтинг.');
    })
    $('#left_img').on('click', function(){
    current--;
    if(current <= 0){
      current = 7;
    }
    let zx = "#main_div" + current;
    $(zx).trigger('click');
    });

    $('#right_img').on('click', function(){                                  
      current++;
      if(current > 7) current = 1;
      let zx = "#main_div" + current;
      $(zx).trigger('click');
    })
  });
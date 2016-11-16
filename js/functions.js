$(window).on("load", function() {

  if ($(window).width() <= 1200) {
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
  }


  $(".se-pre-con").slideUp("slow"); //fadeOut("slow");
  $('.ui.embed').embed();

  setTimeout(function() {
    $('#primaryText').show().addClass('animated fadeInUp');
    //$('#date').show().addClass('animated fadeInUp');
  }, 1500);

  setTimeout(function() {
    $('#date').show().addClass('animated fadeInRight');
  }, 2500);

  $(window).scroll(function() {
    $('#date').addClass('animated fadeOut');
    $('#secondaryText').addClass('animated fadeOut');
  })


  $('#interstitial').waypoint({
    handler: function(direction) {
      //$('#interstitial').find('h1').show().addClass('animated fadeInRight');
      $('#interstitial').find('h1').show().addClass('animated fadeInDown');
      // Only trigger it once
      this.destroy();
    },
    offset: '85%'
  });

  $('#theTheory').waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        //$('#navBar').removeClass('no-show').addClass('animated fadeInDown');
        $('#navBar').removeClass('no-show');
      } else {
        //$('#navBar').removeClass('animated fadeInDown').addClass('no-show');
        $('#navBar').addClass('no-show');
      }
      console.log("Passed masthead: " + direction);
    },
    offset: 75
  });

});

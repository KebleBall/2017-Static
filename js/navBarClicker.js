$(window).on("load", function() {

  var makeActive = function(str) {
    $('.menu').find('.active').removeClass('active');
    $('.menu').find('a[href="' + str + '"]').addClass('active');
  }

  var navSections = ["'#'", "#food", "#entertainment", "#employment", "#sponsorship", "#committee"];

  $('#primaryText').waypoint({
    handler: function(direction) {
      if (direction == 'up') {
        makeActive('#');
      }
    },
    offset: 66
  });

  $('#theTheory').waypoint({
    handler: function(direction) {
      makeActive('#theTheory');
    },
    offset: '25%'
  });

  $('#food').waypoint({
    handler: function(direction) {
      makeActive('#food');
    },
    offset: '25%'
  });

  $('#entertainment').waypoint({
    handler: function(direction) {
      makeActive('#entertainment');
    },
    offset: '25%'
  });

  $('#employment').waypoint({
    handler: function(direction) {
      makeActive('#employment');
    },
    offset: '25%'
  });

  $('#sponsorship').waypoint({
    handler: function(direction) {
      makeActive('#sponsorship');
    },
    offset: '25%'
  });

  $('#committee').waypoint({
    handler: function(direction) {
      makeActive('#committee');
    },
    offset: '25%'
  });

$('#trailer').waypoint({
  handler: function(direction) {
    makeActive('#trailer');
  },
  offset: '25%'
});

$('#keble2016').waypoint({
  handler: function(direction) {
    makeActive('#keble2016');
  },
  offset: '25%'
});

});

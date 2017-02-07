$('a[href^=#]').on("click",function(){
    var t= $(this.hash);
    var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
    if(t.length){
        var tOffset=t.offset().top;
        $('html,body').animate({scrollTop:tOffset-20},'slow');
        return false;
    }
});


// http://www.concepteurmultimedia.ch/~kzucconi/PARL/ // 
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 80) {
      $('.navbar').stop().animate({'height': '100px'}, 400, 'swing');
      $('.navbar li').stop().animate({'margin-top': '25px'}, 400, 'swing');
    }
    else {
      $('.navbar').stop().animate({'height': '180px'}, 400, 'swing');
      $('.navbar li').stop().animate({'margin-top': '105px'}, 400, 'swing');
    }
  });
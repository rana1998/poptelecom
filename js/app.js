$(document).ready(function(){

	// tab content
  var triggerTabList = [].slice.call(document.querySelectorAll('#tab_block a'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  });

  // tv page product carousel
  $("#productSlider").owlCarousel({
    items: 3,
    margin: 14,
    trl: true,
    lazyLoad: true,
    autoHeight: true,
    autoWidth:true,
    dots: false,
    nav: true,
    responsive : {
      768: {
        items: 1,
      }
    }
  });

});
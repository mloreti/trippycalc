const switcher = () => {
  $('.switcher button').on('click', e => {
    $(e.target).siblings().removeClass("active");
    $(e.target).addClass("active");
    if ($(e.target).text() == 'List') {
      $('#map').attr('style', 'display: none');
      $('#directions').attr('style', 'display: -webkit-flex; display: flex');
    } else {
      $('#directions').attr('style', 'display: none');
      $('#map').attr('style', 'display: -webkit-flex; display: flex; overflow: hidden; position: relative');
    };
  })
}

export default switcher;

const sections = () => {
  let parent = $('.fields');
  $('#calc').on('click', function(){
    if ($('.pitstop').last()[0].value.length != 0){
      let child = $("<input class='pitstop' placeholder='pitstop'>")
      $("#new-stop").remove();
      parent.append(child)
    }
  })
}

export default sections;

const sections = () => {
  $('#calc').on('click', function(){
    let parent = $('.pitstops');
    if (parent.children().length == 0 || $('.pitstop').last()[0].value.length != 0){
      let child = $("<div class='stop'><input class='pitstop' placeholder='pitstop'><span class='delete-stop'>X</span></div>")
      parent.append(child)
    }
    $('.delete-stop').on('click', e => {
      $(e.target).parent().remove();
    })
  })

}

export default sections;

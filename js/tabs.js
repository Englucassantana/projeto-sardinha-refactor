$('.tab-list').each(function(){
  let $this = $(this);
  let $tab = $this.find('li.active');
  let $link = $tab.find('a');
  let $panel = $($link.attr('href'));

  $this.on('click', 'li', function(e){
    e.preventDefault();
    let $link = $(this).find('.tab-control');
    let id = $link.attr('href');

    if(id && !$link.is('.active')){
      $tab.removeClass('active');
      $panel.removeClass('active');

      $tab = $link.parent().addClass('active');
      $panel = $(id).addClass('active');
    }
  });
})
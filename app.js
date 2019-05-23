jQuery(document).ready(function() {
  var item = $('.items-wrap .item');
  item.draggable({
    containment: '.items-wrap .items',
    cursor: 'move',
    snap: '.items-wrap .items'
  } );
});

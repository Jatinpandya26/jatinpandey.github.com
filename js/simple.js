simply.title('Pebble Massager');
simply.subtitle('Keep track of your directions yo');
simply.on('accelTap', function(e) {
  subt = 'Your thing moved ' + (e.direction > 0 ? '+' : '-') + e.axis
  simply.subtitle('Your thing moved ' + (e.direction > 0 ? '+' : '-') + e.axis + '!\n'
  + 'x = left/right, y = front/back, z = up/down');
});
setInterval(function() {
    simply.vibe('long');
}, 500);


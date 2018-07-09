 var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
      bindClick(btnNum);
    }
        // for each of our buttons, when the user clicks it...
function bindClick(btnNum) {        
document.getElementById('btn-' + [btnNum]).onclick = function() {
            // tell her what she's won!
            alert(prizes[btnNum]);
          console.log(btnNum);
}
        
    }





function yes()
{
    alert("😊Great! Let me know when😊");
   
}


$(function() {
    $(".no").on({
      mouseover: function() {
        $(this).css({
          left: (Math.random() * 800) + "px",
          top: (Math.random() * 600) + "px",
        });
      }
    });
  });

const btn = document.getElementById('no');
btn.addEventListener('click', function handleClick(){
  btn.textContent = 'YOU MADE ALL THE RABBIT COMUNITY SAD!😫';
  setTimeout(1000);
});


$(function() {
    $(".no").on({
      onclick: function() {
        $(this).css({
          left: (Math.random() * 800) + "px",
          top: (Math.random() * 600) + "px",
        });
      }
    });
  });

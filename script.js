function yes()
{
    alert("Great! See you soon!><")
}


$(function() {
    $(".nos").on({
      mouseover: function() {
        $(this).css({
          left: (Math.random() * 200) + "px",
          top: (Math.random() * 200) + "px",
        });
      }
    });
  });
$(document).ready(function(){
  $("#get_color").on("click", function(){
    $.ajax("/color", {
      type: "POST",
      // dataType: "JSON",
      success: function(result) {
        // alert(result)
        // console.log(typeof(result)); // string
        var hash = JSON.parse(result)
        $("#color_me > li:nth-child("+hash.cell+")").css({'background-color': hash.color});
      }
    });
    $("#get_color").click();
  });
});

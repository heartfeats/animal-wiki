$(function() {
  $('#formOne input').on('change', function() {
    $("p").hide();
   var selAnimal= $('input[name="animal"]:checked', '#formOne').val();
  $('#' + selAnimal).show();
  // branching example that works the same. //  if (selAnimal === "lions") {
  //   $("#lions").show();
  //   }
  //   else if (selAnimal === "tigers") {
  //    $('#tigers').show();
  //   }
  //   else {
  //     $("#wolves").show();
  //   }
  });
});

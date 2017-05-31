$(document).ready(function() {
  $("#storyForm").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var cityInput= $("input#city").val();
    var animal1Input = $("input#animal1").val();
    var weaponInput = $("input#weapon").val();
    var animal2Input = $("input#animal2").val();
    var exclamationInput= $("input#exclamation").val();
    var nounInput= $("input#noun").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".city").text(cityInput);
    $(".animal1").text(animal1Input);
    $(".weapon").text(weaponInput);
    $(".animal2").text(animal2Input);
    $(".exclamation").text(exclamationInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});

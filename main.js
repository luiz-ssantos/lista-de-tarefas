$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    var novaTarefa = $("#addTarefa").val();
    $("#listaTarefas ul").append(
      "<li class='nao-concluida'>" + novaTarefa + "</li>"
    );
    $("#addTarefa").val("");
  });

  $("#listaTarefas").on("click", "li", function () {
    $(this).toggleClass("concluida");
    $(this).toggleClass("nao-concluida");
  });
});

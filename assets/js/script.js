$(document).ready(function () {
  /* ALERTA BOOTSTRAP */
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  /* FORMULARIO */
  $("#formulario").on("submit", function () {
    let validar = /^(?:[1-9]|[1-9][0-9]|[1-6][0-9]{2}|7[0-2][0-9]|731)$/;
    let numero = Number($("#searchInput").val());
    console.log(numero);
    if (validar.test(numero)) {
      console.log("el número se encuentra entre 1 y 731");
      $(".heroe").buscarHero(numero);
      this.reset();
    } else {
      console.log("el número NO se encuentra entre 1-731");
      appendAlert("Solo puedes ingresar un número entre 1 y 731!", "danger");
      this.reset();
    }
  });
});

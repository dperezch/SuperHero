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

  /* FUNCIÓN PARA FORMULARIO */
  $("#formulario").on("submit", function (e) {
    e.preventDefault();
    //antes de hacer la búsqueda y rellenar la sección de héroe, debemos limpiar para que no junte la info de un héroe sobre otro
    $(".heroe").empty();
    //expresión regular para validar número que esté entre 1 y 731
    let validar = /^(?:[1-9]|[1-9][0-9]|[1-6][0-9]{2}|7[0-2][0-9]|731)$/;
    // se guarda el valor del input en la variable numero como un número
    let numero = Number($("#searchInput").val());
    console.log(numero);
    //si numero pasa la validación, procedemos a ejecutar los plugin
    if (validar.test(numero)) {
      console.log("el número se encuentra entre 1 y 731");
      //se utiliza plugin getHeroe, le envíamos el número de referencia y devuelve como callback la función con la data como parámetro.
      $(".heroe").getHeroe(numero, function (heroe) {
        console.log(heroe);
        //se utiliza plugin setCard para crear la card, enviando como parámetro la data del héroe
        $(".heroe").setCard(heroe);
        //se utiliza plugin setGraphic para crear el gráfico, enviando como parámetros las estadísticas del héroe y su nombre
        $(".heroe").setGraphic(heroe.powerstats, heroe.name);
      });
      //se resetea el formulario
      this.reset();
    } else {
      //si el número ingresado no pasa la validación, se llama a la función de alerta de bootstrap para generar el componente alerta en el html
      console.log("el número NO se encuentra entre 1-731");
      appendAlert("Solo puedes ingresar un número entre 1 y 731!", "danger");
      this.reset();
    }
  });
});

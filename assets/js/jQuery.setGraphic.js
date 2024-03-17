jQuery.fn.setGraphic = function (stats, name) {
  element = this;
  //rellenamos los datos necesarios para el gráfico con la data del héroe que viene en los parámetros
  var options = {
    title: {
      text: `Estadísticas de poder para ${name}`,
    },
    subtitles: [],
    theme: "light2",
    animationEnabled: true,
    data: [
      {
        type: "pie",
        startAngle: 40,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: stats.combat, label: "combate" },
          { y: stats.durability, label: "durabilidad" },
          { y: stats.intelligence, label: "inteligencia" },
          { y: stats.power, label: "poder" },
          { y: stats.speed, label: "velocidad" },
          { y: stats.strength, label: "fuerza" },
        ],
      },
    ],
  };
  //se hace una validación para segurarse que el héroe tiene estadísticas, de lo contrario se muestra un mensaje sin estadísticas ej: id 199 / id 715
  if (
    stats.combat === "null" &&
    stats.durability === "null" &&
    stats.intelligence === "null" &&
    stats.power === "null" &&
    stats.speed === "null" &&
    stats.strength === "null"
  ) {
    element.append(`<div> <h1>NO HAY ESTADÍSTICAS</h1></div>`);
  } else {
    //agregamos el contenedor del gráfico al html
    element.append(
      `<div id="chartContainer" style="height: 370px; width: 100%;"></div>`
    );
    //una vez que tenemos listos los datos del gráfico y el contenedor donde este irá, ejecutamos la función para crear el gráfico
    $("#chartContainer").CanvasJSChart(options);
  }

  return this;
};

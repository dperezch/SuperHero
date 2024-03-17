jQuery.fn.setCard = function (heroe) {
  var element = this;
  //se crea una variable para guardar una cadena de texto de los alias del héroe
  let alias = "";
  for (let i = 0; i < heroe.biography.aliases.length; i++) {
    alias += heroe.biography.aliases[i] + " - ";
  }
  //se crea el componente card con la data del héroe que viene en el parámetro
  element.append(
    `<div class="card mb-3" style="max-width: 840px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src=${heroe.image.url} class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${heroe.name}</h5>
                    <p>Conexiones: ${heroe.connections["group-affiliation"]}</p>
                    <p class="card-text"><small class="text-body-secondary"> Publicado por: ${heroe.biography.publisher} </small></p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <span class="fst-italic">Ocupación: </span> ${heroe.work.occupation} </li>
                        <li class="list-group-item"> <span class="fst-italic">Altura: </span> ${heroe.appearance.height[1]}</li>
                        <li class="list-group-item"> <span class="fst-italic">Peso: ${heroe.appearance.weight[1]}</span> </li>
                        <li class="list-group-item"> <span class="fst-italic">Alias: </span> ${alias}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
  );

  return this;
};

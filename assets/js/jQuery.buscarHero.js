jQuery.fn.buscarHero = function (id) {
  var element = this;
  $.ajax({
    type: "GET",
    url: `https://superheroapi.com/api.php/10160264503491925/${id}`,
    dataType: "json",
    success: function (res) {
      console.log(res);
      let alias = "";
      for (let i = 0; i < res.biography.aliases.length; i++) {
        alias += res.biography.aliases[i] + " - ";
      }

      element.append(
        `
        <div class="card mb-3" style="max-width: 840px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${res.image.url} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${res.name}</h5>
                        <p>Conexiones: ${res.connections["group-affiliation"]}</p>
                        <p class="card-text"><small class="text-body-secondary"> Publicado por: ${res.biography.publisher} </small></p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> <span class="fst-italic">Ocupación: </span> ${res.work.occupation} </li>
                            <li class="list-group-item"> <span class="fst-italic">Altura: </span> ${res.appearance.height[1]}</li>
                            <li class="list-group-item"> <span class="fst-italic">Peso: ${res.appearance.weight[1]}</span> </li>
                            <li class="list-group-item"> <span class="fst-italic">Alias: </span> ${alias}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `
      );
    },
    error: function (error) {
      console.error(error);
    },
  });
  return this;
};

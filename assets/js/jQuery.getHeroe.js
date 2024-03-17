jQuery.fn.getHeroe = function (id, callback) {
  //se recibe el número del héroe a buscar con el parámetro id
  $.ajax({
    type: "GET",
    url: `https://superheroapi.com/api.php/10160264503491925/${id}`,
    dataType: "json",
    success: function (res) {
      //en caso de éxito se devuelve una función como callback con la data del héroe como parámetro para que pueda ser usado por los demás plugins
      callback(res);
    },
    error: function (error) {
      console.log(error);
    },
  });
};

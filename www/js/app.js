$(document).ready( function(){
    $.ajax({
        type: 'GET',
        url: 'http://swapi.co/api/planets/',
        dataType:'json',
        data: { get_param: 'value'},
        error: function(erro){
            alert(erro.responseText);
        },
        success: function(data){
            var divPlanet = document.querySelector("#contPlanet");
            divPlanet.innerHTML = "";
        $.each(data.results, function(i, obj) {
            divPlanet.innerHTML += "<a href=javascript:mostrarDetalhe('" + obj.url + "');>" + obj.name + " <a/><br/>" ;
        }); 
    }
});
});


function mostrarDetalhe(planet) {
    
    var planet = document.querySelector("#planet");

    $.ajax({
        type: 'GET',
        url: planet.value,
        dataType:'json',
        data: { get_param: 'value' },
        error: function(erro) {
        alert(erro.responseText);
    },
    success: function(data) {
    var divPlanet2 = document.querySelector("#contPlanet2");
    divPlanet2.innerHTML = "";
    divPlanet2.innerHTML += "Nome: " + data.name + "<br/> Rotação:   " + data.rotation_period + "<br/>Orbita.: " + data.orbital_period +     "<br/>População: " + data.population + "<br/>";
    }});
});

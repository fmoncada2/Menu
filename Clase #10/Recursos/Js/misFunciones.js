$(document).ready(function(){

    /* Programar Slider */
    let listaImg = $('#slider img').length;
    let posicionImg = 1;

    $('#slider img').hide();
    $('#slider img:first-child').show(); //Visualizando le 1era Imagen

    // Funcion de Delay, para depues de 4s

    setInterval(function(){
        //Evaluamos si ya no hay imagenes
        if(posicionImg < listaImg){
            posicionImg++;
        } else {
            posicionImg =1;

        }

        $('#slider img').hide();
        $('#slider img:nth-child('+ posicionImg +')').show();

    }, 4000)

    /* Toggle*/
    $('#boton').click(function(){
        $('#Menu').toggle(1500);
    })
});
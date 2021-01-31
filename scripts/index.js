/*
setTimeout(function(){
    $("#playerA").html(8000);
    $("#playerB").html(8000); 
  }, 100000);
  $("#starter").click(function() {
    $("#playerA").html(8000);
    $("#playerB").html(8000);
 
  });

*/
//=======Audio===========
let audio = new Audio("sound/lifePoints.mp3");
let endDuel = new Audio("sound/Theme.mp3");
/*
let maiba = new Audio("MaibaTheme.mp3");
let aster = new Audio("AsterPhoenezTheme.mp3");
let jaden = new Audio("JadenYukiTheme.mp3");
let atem = new Audio("yugiohTheme.mp3");
*/
//====================

function win(dir,color,imagen,sound) {
  // pausa el video para que no corra en simultaneo con sonido
  //var elemVideo=document.getElementById('video');
  //elemVideo.pause();

  setBackground(dir,color,imagen);
  cleanScreen(sound,color,imagen);
  }
//================	
//=================	
function setBackground(dir,color,imagen){
  setTimeout(function(){
    $(dir).css("background-color",color);
    $("body").css("background-image",imagen);
  },3000);
}

function cleanScreen(songEnd,color,imagen){
setTimeout(function(){ 
    
    // corre la musica y coloca el fondo del ganador
    songEnd.play(); $("div").hide("slow");}, 3000);
}



function clearPlayer(id){
  setTimeout(function(){
      $(id).remove();
     $("#starter").hide();
    $("#reiniciar").show();
   //$("#reiniciar").css("display","flex");
    songEnd.play();
  } ,3000);
  
 
}

  window.odometerOptions = {
    format: '(ddd).dd'
  };
 
    var lifeA=0;
    var lifeB=0;


//eventos al cargar la pagina
  $(document).ready(function(){

    $("#starter").click(function(){
        $("#playerA").html(8000);
        $("#playerB").html(8000);
          audio.play();
          lifeA=8000;
          lifeB=8000;
    });


    // evento reiniciar pagina
    $("#reiniciar").click(function(){location.reload();});

    //Jugador Rojo
    $("#entradaA").keypress(function(e){
        if(e.which==13){
          //Codigo que se ejecuta si se apreta ENTER
            var val=$("#entradaA").val();
            var num=parseInt(val,10);
            var sum=lifeA + num;
            if(sum<=0){
                $("#playerA").html(0);
                lifeA=0;
                audio.play();
                //win("#bluePlayer","red","url('pics/blue_eyes.png')",endDuel);	
                clearPlayer("#box-A");
            }
            else{
                $("#playerA").html(sum);
                audio.play();
                lifeA=sum;
            }
        }
    });

    //Jugador Azul
    $("#entradaB").keypress(function(e){
        if(e.which==13){
          //Codigo que se ejecuta si se apreta ENTER 
            var val=$("#entradaB").val();
            var num=parseInt(val,10);
            var sum=lifeB + num;
            if(sum<=0){
                $("#playerB").html(0);
                lifeB=0;
                audio.play();
                //win("#redPlayer","blue","url('pics/destiny_hero.jpg')",endDuel);
                clearPlayer("#box-B");
            }
            else{
                $("#playerB").html(sum);
                audio.play();
                lifeB=sum;
            }
        }
    });
    $('.items').hide();
    $('.items_v').hide();
      // display items
     $("#btn_toggle").on( "click", function() {	 
         $('.items').toggle(500);
     });
     //===============
     $("#btn_toggle_v").on( "click", function() {	 
      $('.items_v').toggle(500);
  });
  });



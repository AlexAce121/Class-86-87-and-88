var canvas=new fabric.Canvas("theCanvaSSS");
var block_width=30;
var block_height=30;
var player_x=10;
var player_y=20;
var player_object="";
var block_object="";

function add_player(){
    fabric.Image.fromURL("groot.jpg",function(Img){
    player_object=Img;
    player_object.scaleToWidth(50);
    player_object.scaleToHeight(50);
    player_object.set({
        top:player_y,
        left:player_x }
         );
        canvas.add(player_object);
    }
    );
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top:player_y,
        left:player_x }
         );
        canvas.add(block_object);
    }
    );
}

window.addEventListener("keydown",My_Keydown);

function My_Keydown(e){
    var k=e.keyCode;
    console.log(k);

    if (k=='38') {
      UP();  
    }

    if (k=='40') {
        DOWN();  
      }

      if (k=='37') {
        LEFT();  
      }

      if (k=='39') {
        RIGHT();  
      }

      if (k=='70') {
        new_image("imh.jfif");
        console.log("f")  
      }

      if (k=='66') {
        new_image("smb.jfif");
        console.log("b")  
      }

      if (k=='76') {
        new_image("hl.jpg");
        console.log("l")  
      }

      if (k=='82') {
        new_image("trh.jfif");
        console.log("r")  
      }

      if (k=='72') {
        new_image("calh.jfif");
        console.log("h")  
      }

      if (k=='80' && e.shiftKey==true) {
        block_width=block_width+10; 
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        console.log("Shift and p Pressed together");
      }

      if (k=='77' && e.shiftKey==true) {
        block_width=block_width-10; 
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        console.log("Shift and m Pressed together");
      }


}

function UP(){
    if (player_y>0) {
      player_y=player_y-block_height;
      console.log("Player_y = " + player_y);
      console.log("UP Arrow Is Pressed");
      canvas.remove(player_object);
      add_player();
    }
  }
  
    function DOWN(){
      if (player_y<450) {
        player_y=player_y+block_height;
        console.log("Player_y = " + player_y);
        console.log("DOWN Arrow Is Pressed");
        canvas.remove(player_object);
        add_player();
      }
    }
  
    function LEFT(){
      if (player_x>0) {
        player_x=player_x-block_height;
        console.log("Player_x = " + player_x);
        console.log("Left Arrow Is Pressed");
        canvas.remove(player_object);
        add_player();
      }
    }
  
    function RIGHT(){
      if (player_x<850) {
        player_x=player_x+block_height;
        console.log("Player_x = " + player_x);
        console.log("Right Arrow Is Pressed");
        canvas.remove(player_object);
        add_player();
      }
    }

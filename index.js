 let Up = () => {
    $('html').animate({scrollTop:0}, '300');

 }
let Add = () => {

}
$(window).scroll(function(){
     let x = $("html").scrollTop()

     if(x>0){

        document.getElementById('button2').style.visibility=  'visible'
        document.getElementById('button1').style.visibility =  'hidden'
     }
     else{
        document.getElementById('button1').style.visibility=  'visible'
        document.getElementById('button2').style.visibility =  'hidden'
     }
        });

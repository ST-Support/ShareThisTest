
window.__sharethis__.load('inline-share-buttons'),{

  onLoad: function () {
      //override the default email sharing functionality since it's broken in outlook
      document.getElementById("").style.padding= "0 12px";
       console.log("hola world");
}
}
    


 function myFunction(){
 
  var URL=  window.location.href;
  navigator.clipboard.writeText(URL);

  
} 

function hideSticky(){
  document.getElementsByClassName('sharethis-sticky-share-buttons').style.display=
  'none';
}

    /*botonCorreo.onclick= function overrideShareSendMail() {
    $('div[data-network="email"]').replaceWith($('div[data-network="email"]').clone());
    $('div[data-network="email"]').on("click", function () {
        var emailSubject = "Pyramide";
        var emailBody = window.location.href;
        window.location.href = "mailto:?subject=" + emailSubject + "&body=" + emailBody;
    });
    }
  */
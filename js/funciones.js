
window.__sharethis__.initialize( 
      //override the default email sharing functionality since it's broken in outlook
      document.querySelector('.st-btn[data-network=email]').addEventListener('click', function (e) {
        var subject = "I'd like to share a link with you";
        var body = document.querySelector('#share-buttons').data('url');
        document.location = "mailto:?subject=" + subject + "&body=" + body;
  
        //Prevent default share this functionality
        e.stopPropagation();
      })
    
)

    /*botonCorreo.onclick= function overrideShareSendMail() {
    $('div[data-network="email"]').replaceWith($('div[data-network="email"]').clone());
    $('div[data-network="email"]').on("click", function () {
        var emailSubject = "Pyramide";
        var emailBody = window.location.href;
        window.location.href = "mailto:?subject=" + emailSubject + "&body=" + emailBody;
    });
    }
  */
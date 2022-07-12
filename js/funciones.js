
/*window.__sharethis__.load('inline-share-buttons'),{

  onLoad: function () {
      //override the default email sharing functionality since it's broken in outlook
      document.getElementById("").style.padding= "0 12px";
       console.log("hola world");
}
}*/
    
//document.getElementById("stscript").onload = script.onreadystatechange = function(){ alert("Script loaded!"); }


 function myFunction(){
 
  var URL=  window.location.href;
  navigator.clipboard.writeText(URL);

  
/* } 
window.onload = (event) => {
  //document.getElementsByClassName('sharethis-sticky-share-buttons').style.display='none';
  var emailButtons = document.querySelectorAll('[data-network="email"]');
for (let i= 0; i < emailButtons.length; i++){

emailButtons[i].addEventListener("click", (e) => {
  var subject = "I'd like to share a link with you";
  var body = window.location.href;
window.location = "mailto:?subject=" + subject + "&body=" + body;
}
)
}
}; 
 */




/* function activarBotonesModal(){
  window.dispatchEvent(new Event('resize'));
  console.log("activar botones modal");
} */


async function activateButtonsModal() {
  console.log('start timer');
  await new Promise(resolve => setTimeout(resolve, 300));
  window.__sharethis__.initialize();
  console.log('after 0.3 second');
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

//alert("Hello! I am an alert box!!");

/* window.__sharethis__.load('inline-share-buttons',  config ); */

/*var config={
  alignment: 'justified', // left, right, center, justified.
  enabled: true,
  font_size: 16, // small = 11, medium = 12, large = 16.
  id: 'my-inline-buttons', // load the javascript into a specific dom element by id attribute
  labels: 'counts', // "cta", "counts", or "none"
  min_count: 0, // minimum amount of shares before showing the count
  padding: 8, // small = 8, medium = 10, large = 12.
  radius: 5, // in pixels
  networks: ['blogger',
  'twitter',
  'meneame',
  'reddit',
  'print'],
  show_total: true,
  show_mobile_buttons: true, // forces sms to show on desktop
  use_native_counts: false, // uses native facebook counts from the open graph api
  size: 48, // small = 32, medium = 40, large = 48.
  spacing: 0 // spacing = 8, no spacing = 0.
} */


/* window.__sharethis__.initialize(
   
    document.querySelector('div[data-network="email"]').addEventListener("click", (e) => {
      var subject = "I'd like to share a link with you";
      var body = window.location.href;
      window.location.href = "mailto:?subject=" + subject + "&body=" + body;

      e.stopPropagation();
    })
    
);
 */

/* window.onload = (event) => {
  document.querySelector('div[data-network="email"]').addEventListener("click", (e) => {
    var subject = "I'd like to share a link with you";
    var body = window.location.href;
    window.location.href = "mailto:?subject=" + subject + "&body=" + body;

    // e.stopPropagation();
  })
};
 */
window.onload = (event) => {
	document.querySelector('div[data-network="email"]').addEventListener("click", (e) => {
		var subject = "I'd like to share a link with you";
		var body = window.location.href;
		window.location.href = "mailto:?subject=" + subject + "&body=" + body;
    e.stopPropagation();
	})
};

window.__sharethis__.load('inline-share-buttons', {
  alignment: 'justified', // left, right, center, justified.
  enabled: true,
  font_size: 16, // small = 11, medium = 12, large = 16.
  id: 'my-inline-buttons', // load the javascript into a specific dom element by id attribute
  labels: 'counts', // "cta", "counts", or "none"
  min_count: 0, // minimum amount of shares before showing the count
  padding: 8, // small = 8, medium = 10, large = 12.
  radius: 5, // in pixels
  networks: ['blogger',
  'twitter',
  'meneame',
  'reddit',
  'print',
'email'],
  show_total: true,
  show_mobile_buttons: true, // forces sms to show on desktop
  use_native_counts: false, // uses native facebook counts from the open graph api
  size: 48, // small = 32, medium = 40, large = 48.
  spacing: 0, // spacing = 8, no spacing = 0.
  onLoad: function () {
    //override the default email sharing functionality since it's broken in outlook
   
    document.querySelector('div[data-network="email"]').addEventListener("click", (e) => {
      var subject = "I'd like to share a link with you";
      var body = window.location.href;
      window.location.href = "mailto:?subject=" + subject + "&body=" + body;

      e.stopPropagation();
    })
    }
    }
);

window.__sharethis__.load('inline-share-buttons', {
  alignment: 'justified', // left, right, center, justified.
  enabled: true,
  font_size: 16, // small = 11, medium = 12, large = 16.
  id: 'my-inline-buttons2', // load the javascript into a specific dom element by id attribute
  labels: 'counts', // "cta", "counts", or "none"
  min_count: 0, // minimum amount of shares before showing the count
  padding: 8, // small = 8, medium = 10, large = 12.
  radius: 5, // in pixels
  networks: ['blogger',
  'twitter',
  'meneame',
  'reddit',
  ],
  show_total: true,
  show_mobile_buttons: true, // forces sms to show on desktop
  use_native_counts: false, // uses native facebook counts from the open graph api
  size: 48, // small = 32, medium = 40, large = 48.
  spacing: 0, // spacing = 8, no spacing = 0.
  onLoad: function () {
    //override the default email sharing functionality since it's broken in outlook
   
    document.querySelector('div[data-network="email"]').addEventListener("click", (e) => {
      var subject = "I'd like to share a link with you";
      var body = window.location.href;
      window.location.href = "mailto:?subject=" + subject + "&body=" + body;

      e.stopPropagation();
    })
    }
    }
);

/*window.__sharethis__.load('sticky-share-buttons',  {
  alignment: 'right', // left, right, center, justified.
  enabled: true,
  id: 'my-sticky-buttons', // load the javascript into a specific dom element by id attribute
  labels: 'counts', // "cta", "counts", or "none"
  min_count: 0, // minimum amount of shares before showing the count
  padding: 8, // small = 8, medium = 10, large = 12.
  radius: 5, // in pixels
  networks: ['blogger',
  'twitter',
  'meneame',
  'reddit',
  'print'],
  show_total: true,
  show_mobile_buttons: true, // forces sms to show on desktop
  use_native_counts: false, // uses native facebook counts from the open graph api
  size: 48, // small = 32, medium = 40, large = 48.
  spacing: 0 // spacing = 8, no spacing = 0.
} ); */
/* 
"enabled":true,
"alignment":"center",
"font_size":12,
"has_spacing":true,
"labels":"none",
"langauge":"en",
"min_count":10,
"networks":["facebook","twitter","linkedin","email"],
"num_networks":4,
"padding":10,"radius":20,
"show_total":false,
"size":40,
"size_label":"medium",
"spacing":8,
"use_native_counts":false,
"ts":1565118870121,
"updated_at":1565118870121,
"color":"social"}});

$(window).on("load", function(){;

  $('div[data-network="email"]').replaceWith($('div[data-network="email"]').clone());
  $('div[data-network="email"]').on("click", function () {
      var emailSubject = "I'd like to share a link with you";
      var emailBody = window.location.href;
      window.location.href = "mailto:?subject=" + emailSubject + "&body=" + emailBody;
  }); 
  })
 */
/*   window.onload = (event) => {
    document.querySelector('div[data-network="email"]').addEventListener("click", (e) => {
      var subject = "I'd like to share a link with you";
      var body = window.location.href;
      window.location.href = "mailto:?subject=" + subject + "&body=" + body;
    })
  };
 */


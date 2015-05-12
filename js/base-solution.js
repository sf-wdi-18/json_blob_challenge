var response;

// When the document is ready...
$(document).ready(function(){
  
  // make the api request!
  getLaughs();

});

function getLaughs(q) {
  // queryParam = q || "";
  var endpoint = "http://www.reddit.com/r/funny.json"// + queryParam
  
  $.getJSON(endpoint, renderGallery);

}

function renderGallery(response) {
    // When the response gets back...
    window.response = response;
    var $gallery = $('#gallery');

    var length = response.data.children.length
    // ..loop through the data...
    for(var i=0; i<length; i++) {
        // each loop.... index increments
        // grab item_data for that index
        var item_data = response.data.children[i].data;
      
        //...build the html for the item...
        var item_html = (
                          "<div class='item'>" +
                            "<img src='" + item_data.thumbnail + "'>" +
                            "<h3>" + item_data.title + "</h3>" +
                          "</div>"
                        );
        
        // ...and then add the item to the DOM!
        $gallery.append(item_html);
    }
  
}




// ////////////////////////////////////////////////////////////
// /// SAME CODE BUT WITHOUT NAMED FUNCTIONS //
// ///////////////////////////////////////////////////////////

// // When the document is ready...
// $(document).ready(function(){
//   var endpoint = "http://www.reddit.com/r/funny.json";
//   // make the api request!
//   $.getJSON(endpoint, function(response) {
//      // When the response gets back...
//       var $gallery = $('#gallery');
//       var length = response.data.children.length;
//       // ..loop through the data...
//       for(var i=0; i<length; i++) {
//           var item_data = response.data.children[i].data;
//           //...build the html for the item...
//           var item_html = (
//                             "<div class='item'>" +
//                               "<img src='" + item_data.thumbnail + "'>" +
//                               "<h3>" + item_data.title + "</h3>" +
//                             "</div>"
//                           );
//           // ...and then add the item to the DOM!
//           $gallery.prepend(item_html);
//       }
//   });
// });
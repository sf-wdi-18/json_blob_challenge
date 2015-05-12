var endpoint = "http://www.reddit.com/r/funny.json";

$(document).ready(function(){

  $.getJSON(endpoint, render);

});

function render(response){
  console.log(response)
  var $gallery = $('#gallery');
  var items = response.data.children;
  items.forEach(function(item,i){
    item = item.data;
    // horrible awful html string! There must be a better way! ;)
    var item_html = (
                      "<div class='col-sm-4 item'>" +
                        "<div class='thumbnail clearfix'>" +
                          "<p class='caption'>" + item.title + "</p>" +
                          "<img class='img-thumbnail' src='" + item.thumbnail + "'>" +
                          '<div class="block">' +
                          '<button type="button" class="btn btn-default btn-sm">' +
                            '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Like' +
                          '</button>' +
                          '<button type="button" class="btn btn-default btn-sm">' +
                            '<span class="glyphicon glyphicon-link" aria-hidden="true"></span> Share' +
                          '</button>' +
                          "<span class='badge pull-right'>" + item.score + "</span>" +
                          '</div>' +
                        "</div>" +
                      "</div>"
                    );

    $gallery.append(item_html);
  })
}



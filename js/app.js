$(function() {
  $('#map-container').storeLocator({'dataType': 'jsonp', 'dataLocation': 'http://book.hd/locator/api/service/v1/store','jsonpCallback':'stores'});
});
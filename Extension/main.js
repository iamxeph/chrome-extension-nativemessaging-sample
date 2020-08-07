document.addEventListener('DOMContentLoaded', function () {
  var nativeHostAppName = "com.google.chrome.example.echo";
  chrome.runtime.onMessageExternal.addListener(
    function (request, sender, sendResponse) {
      if (request.command == "getHostname"){
        chrome.runtime.sendNativeMessage(nativeHostAppName, request, function(responseFromNativeHostApp){
          sendResponse(responseFromNativeHostApp.hostName);
        });
      } else {
        sendResponse("UNKNOWN COMMAND");
      }
    }
  );
});

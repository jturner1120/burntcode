$ ( document ).ready(function(){
  $ ( "#ready" ).html("DOM Ready");
});

$ ( window ).on("load", function(){
  $ ( "#loaded").html("Page Loaded");
});

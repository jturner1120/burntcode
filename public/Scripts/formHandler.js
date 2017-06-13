
onready = $( document ).ready(function(){
  console.log("doc ready");

  var handleNameError = {
    feedback: "The name field name cannot be empty.",
    label: "#nameinputerror",
    inputarea: "#contactname"
  };

  var handleEmailError = {
    feedback: "Please enter a valid Email",
    label: "#emailinputerror",
    inputarea: "#contactemail"
  };

  var handleTextError = {
    feedback: "The message text cannot be empty.",
    label: "#textinputerror",
    inputarea: "#messagetext"
  };

  var errorLabel = function(etype) {
    $( etype.inputarea ).attr("class", "form-control fielderror");
    $( etype.label )
      .html(etype.feedback)
      .attr("class", "showerror")
      .hide()
      .fadeIn(1000, function(){
        $( this ).fadeOut(5000);
    });
  };

  $( "#contactname" ).blur(
    function(){
      var name = $( this );
      var isNameField = name.val();
      if (isNameField === "") {
          errorLabel(handleNameError);
      }else{
        $( this ).attr("class", "form-control");
      }
    }
    );

  $( "#contactemail" ).blur(
    function(){
      var email = $( "#contactemail" ).val();
      var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regEx.test(email)){
        $( "#contactemail" ).attr("class", "form-control");
      }else{
        errorLabel(handleEmailError);
      }
    }
  );

  $( "#messagetext" ).blur(
    function(){
      var text = $( this );
      var isTextField = text.val();
      if (isTextField === "") {
          errorLabel(handleTextError);
      }else{
        $( this ).attr("class", "form-control");
      }
    }
  );

  $( "#contactform" ).on("submit", function(event){
    event.preventDefault();
    var parameters = {
      name: $("#contactname").val(),
      email: $("#contactemail").val(),
      msgtext: $("#messagetext").val()
    };
    $.post("/resume/contact", parameters, function(data){
      $( "#messagearea" ).attr("class", data.class).html(data.message);
    });
  });

});

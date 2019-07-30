/*
$("#devour-btn").on("click",function(event){
  event.preventDefault();
    var id = $(this).data("id")
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {devoured: 1}
      }).then(
        function() {
          
          // Reload the page to get the updated list
          location.reload();
        }
      );

});


$("#submit-btn").on("click",function(event){
   event.preventDefault();

    if($("#burger_input").val() !== ""){

        var newBurger = {burger_name: $("#burger_input").val()}

        $.post("/api/burgers",{data: newBurger}).then(function(){
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        });

    }
});
*/

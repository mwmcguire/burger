var $burgerName = $("#name-txt");

$burgerName.focus();

$(".js_updateBurger").on("click",function(e){

    e.preventDefault();
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

})

/*
$(".js_deleteBurger").on("click",function(e){

    e.preventDefault();
    var id = $(this).data("id")
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          
          // Reload the page to get the updated list
          location.reload();
        }
      );

})
*/

$("#submit-btn").on("click",function(e){
   
    e.preventDefault();

    if($burgerName.val() !== ""){

        var newBurger = {burger_name: $burgerName.val()}

        $.post("/api/burgers",{data: newBurger}).then(function(){
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        })

    }
})

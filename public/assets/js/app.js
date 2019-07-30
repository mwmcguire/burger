var $burgerName = $("#burger_name");


//Change devoured state
$("#devour-btn").on("click", function(event) {
  event.preventDefault();

  var id = $(this).data("id");

  // Send a PUT request
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


// Delete burger
$("#delete-btn").on("click", function(event) {
  event.preventDefault();

  var id = $(this).data("id");

  // Send a DELETE request.
  $.ajax("/api/burgers/" + id, {
    type: "DELETE",
  }).then(
    function() {
    // Reload the page to get the updated list
    location.reload(); 
    }
  );
});


// Add burger
$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  if($burgerName.val() !== ""){
    var newBurger = {burger_name: $burgerName.val()}

    // Send a POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload(); 
      }
    );
  }
});
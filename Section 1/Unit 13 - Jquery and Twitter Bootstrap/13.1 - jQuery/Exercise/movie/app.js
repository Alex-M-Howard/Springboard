
$(document).ready(function() { 

    $("#add-movie").on("click", () => {
        let movie = $("#movie-title").val();
        let rating = $("#rating").val();
        let button = $("<button>").text("Remove").on("click", () => {
            $(this).closest('li').remove();
        })

        $("<li>")
            .text(`${movie} - ${rating}`)
            .append(button)
            .appendTo($('#movie-database'))
        $('#movie-title').val('')
        $('#rating').val(' ')
       
    })
});
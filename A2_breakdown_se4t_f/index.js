current_page_id = null;


function process_response(data) {

    for (i = 0; i < data.results.length; i++) {

        $("#results").append(data.results[i].original_title + "<br>");

        $("#results").append(data.results[i].overview + "<br>");
        x = data.results[i].poster_path 
        image_html =`<img src='https://image.tmdb.org/t/p/w500/${x}'>`
        $("#results").append(image_html + "<br>");

        z = `<button id="${data.results[i].backdrop_path}" class="backdrop_button"> backdrop image!</button>`
        $("#results").append(z + "<br>");
    }

}
function call_ajax(){
    w = $("#movie_name").val();
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${w}`,
        "type": "GET",
        "success": process_response
    })
}

function display_back_drop() {
    w = $(this).attr("id");
    console.log(`<img src="https://image.tmdb.org/t/p/original${w}" width="100"%>`);
    $("#right_div").html(`<img src="https://image.tmdb.org/t/p/original${w}" width="100%">`)

    
}
function header_button(){
    w = $(this).attr("id");
    $("#results").html(`<h1> display (${w}, page size)</h1>`)
    current_page_id = Number(w);

    
   $("#next").show();
   
   $("#prev").show();
}

function first(){
    $("#results").html(`<h1> display (1, page size)</h1>`)
    current_page_id = 1;

    $("#next").show();
   
    $("#prev").show();
}


function last(){
    $("#results").html(`<h1> display (7, page size)</h1>`)
    current_page_id = 7;
    $("#next").show();
   
    $("#prev").show();
}

function next(){
    if(current_page_id < 7)
        current_page_id++;
    $("#results").html(`<h1> display (${current_page_id}, page size)</h1>`)
}

function prev(){
    if(current_page_id > 1)
        current_page_id--;
    
    $("#results").html(`<h1> display (${current_page_id}, page size)</h1>`)
}
function setup() {
   $("#find_movie_info").click(call_ajax)
    // $("body").click(()=>{alert()});
   $("body").on("click",".backdrop_button" ,display_back_drop)

   $(".numbered_buttons").click(header_button);

   $("#first").click(first);
   
   $("#last").click(last);

   $("#next").click(next);
   
   $("#prev").click(prev);

   
   $("#next").hide();
   
   $("#prev").hide();

}

jQuery(document).ready(setup)
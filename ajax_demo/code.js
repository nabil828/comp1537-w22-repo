function f_1(data){
    // console.log(data)
    $("#temp").html(data.main.temp);
    $('#p2').html(data.weather[0].description);
    x = data.weather[0].icon;
    console.log(x);
    $("#img1").attr("src",  `http://openweathermap.org/img/wn/${x}@2x.png`  );
   
}

function get_w_f(){

    y = $("#city_name").val();
    //ajax
    $.ajax(
        {
            "url":`https://api.openweathermap.org/data/2.5/weather?q=${y}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`,
            "type": "GET",
            "success": f_1  
        }
    )
}


function setup(){
    console.log('s');
    $('#get_w').click(get_w_f);
}

$(document).ready(setup)
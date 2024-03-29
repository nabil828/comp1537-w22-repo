function procces_(data){
    jQuery('#city_temperature').html(data.main.temp)
    jQuery('#p1').html(data.weather[0].description)
    console.log(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    jQuery('#img1').attr("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    $("#img1").show(); 
    $("#p1").show();
    $("#city_temperature").show();   
    $('#k').show()
  }

function ajax_get() {
    city_name_input = jQuery('#city_name_input').val();

    $.ajax(
        {
            url:`https://api.openweathermap.org/data/2.5/weather?q=${city_name_input}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`,
            type:'GET',
            success: procces_
        }
    );
}

function setup() {
    $('#get_temperature_button').click(ajax_get);
    $("#img1").hide();
    $("#p1").hide();
    $("#city_temperature").hide(); 
    $('#k').hide()
}
$(document).ready(setup);
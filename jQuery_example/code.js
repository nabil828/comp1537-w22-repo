add = function() { // Notice the usage of .val() with input HTML elements
  console.log("add function was called")
  result = parseInt(jQuery('#operand_1').val()) + parseInt(jQuery('#operand_2').val());

  text = jQuery('#operand_1').val() + " +   " + jQuery('#operand_2').val() + " = "
  result = text + result;
  jQuery('#result').text(result);


  styled_result = "<span id='addStyle'>" + result + "</span>"; // using '' inside "" is called Escaping
  // Otherwise, you won't be able
  // to use quotaions inside quotaions!
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + styled_result + '<br>';
  jQuery('#history').html(new_div_content); // or use
  //  jQuery('#history').append(styled_result + '<br>');
  // append will add the new content without overwriting
  // the old one
  // No need for lines 10 and 11 in this case!
}



sub = function() {
  result = parseInt(jQuery('#operand_1').val()) - parseInt(jQuery('#operand_2').val());

  text = jQuery('#operand_1').val() + " - " + jQuery('#operand_2').val() + " = "
  result = text + result;
  jQuery('#result').html(result);


  result = "<span id='subStyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';
  jQuery('#history').html(new_div_content);
}


mul = function() {
  result = parseInt(jQuery('#operand_1').val()) * parseInt(jQuery('#operand_2').val());

  text = jQuery('#operand_1').val() + " * " + jQuery('#operand_2').val() + " = "
  result = text + result;
  jQuery('#result').html(result);



  result = "<span id='mulStyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';
  jQuery('#history').html(new_div_content);
}

div = function() {
  result = parseInt(jQuery('#operand_1').val()) / parseInt(jQuery('#operand_2').val());

  text = jQuery('#operand_1').val() + " / " + jQuery('#operand_2').val() + " = "
  result = text + result;
  jQuery('#result').html(result);


  result = "<span id='divStyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';
  jQuery('#history').html(new_div_content);
}

show = function() {
  jQuery('#history').show()
}

hide = function() {
  jQuery('#history').hide() // or use
  // jQuery('#history').attr('style', 'Display: none');
}

function inc_(){
  // alert();
  x =$("#history").css("font-size");
  
  console.log(parseInt(x));
  x = parseInt(x);
  $("#history").css("font-size", (x +  10 )+ "px" );
}

function s_(){
  jQuery('img').attr("src", "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_42/1495563/sadness-inside-out-today-main-tease-191018.jpg");
}

function h_(){
  jQuery('img').attr("src", "https://0.gravatar.com/avatar/e115429cac082338e5a78b84564f7406?s=260");
}
setup = function() {
  console.log("setup function was called")
  jQuery('#add_button').click(add);
  jQuery('#sub_button').click(sub);
  jQuery('#mul_button').click(mul);
  jQuery('#div_button').click(div);

  jQuery('#inc_button').click(inc_);
  // jQuery('#dec_button').click(dec);

  jQuery('#show_button').click(show);
  jQuery('#hide_button').click(hide);
  console.log($("body").css("font-size"));

  jQuery('#sad').click(s_);
  jQuery('#happy').click(h_);



  $("#p2").remove();
}

jQuery(document).ready(setup);

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

setup = function() {
  console.log("setup function was called")
  jQuery('#add_button').click(add);
  jQuery('#sub_button').click(sub);
  jQuery('#mul_button').click(mul);
  jQuery('#div_button').click(div);
  jQuery('#show_button').click(show);
  jQuery('#hide_button').click(hide);
}

jQuery(document).ready(setup);
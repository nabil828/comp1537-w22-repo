function calc(operation) {
  // operation = this.id;
  first_op = jQuery('#operand_1').val();
  second_op = jQuery('#operand_2').val()
  first_op_int = parseInt(first_op);
  second_op_int = parseInt(second_op);
  button_code = "<button class='remove_class'> Remove me! </button>";

  switch (operation) {
    case "add_":
      result = first_op_int + second_op_int;
      text = first_op + " +  " + second_op + " = ";
      
      styled_result = "<span id='addStyle'>" + text + result + button_code +"</span>";
      break;
    case "sub_":
      result = first_op_int - second_op_int;
      text = first_op + " - " + second_op + " = ";
      styled_result = "<span id='subStyle'>" + text + result + button_code + "</span>";
      break;
    case "mul_":
      result = first_op_int * second_op_int;
      text = first_op + " * " + second_op + " = ";
      styled_result = "<span id='mulStyle'>" + text + result + button_code + "</span>";
      break;
    case "div_":
      result = first_op_int / second_op_int;
      text = first_op + " / " + second_op + " = ";
      styled_result = "<span id='divStyle'>" + text + result + button_code + "</span>";
      break;
    default:
      console.log("Something bad happened!");

  }
  // console.log("add function was called")

  result = text + result;
  jQuery('#result').html(result);



  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + styled_result + '<br>';
  jQuery('#history').html(new_div_content); // or use
  //  jQuery('#history').append(styled_result + '<br>');
  // append will add the new content without overwriting
  // the old one

}

function hide_(){
  $(this).parent().remove();
}

setup = function () {
  jQuery('.button_').click(
    function () {
      calc(this.id);
    });

  $('body').on("click", '.remove_class', hide_);
}

jQuery(document).ready(setup);
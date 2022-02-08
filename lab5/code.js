function calculate_area() {
    // alert(jQuery("body").html());
    
    // alert(jQuery("#x").val());
    r = parseInt(jQuery("#x").val()) ;
    // console.log( r * r * 22/7)
    jQuery("#p1").html(r * r * 22/7)

}

function setup() {
    jQuery("#calc").click(calculate_area);
}
jQuery(document).ready(setup);
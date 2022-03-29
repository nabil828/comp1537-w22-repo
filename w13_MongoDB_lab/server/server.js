const unicorns = require('./unicrons.js');


function filter_f(ob_) {
    return ob_.gender == "f"; 
}
function map_f(i_) {
    return i_["name"] 
    // return [i_["name"], i_["gender"]] ;
}
console.log(
    // unicorns["list"].filter(filter_f).map(map_f)
    // unicorns["list"][0].name
    unicorns["list"].filter(filter_f).map(map_f)
);







received_data = null;

function process_res(data) {
    received_data = data
    console.log(data)

    result = ""


    for (i = 0; i < data.length; i++) {
        // for each unicorn
        result += "<table>"
        result += "<tr>"

        for(field in data[i]){
            result += "<th>"
            result += field
            result += "</th>"
        }
        result += "</tr>"
        result += "<tr>"
        for(field in data[i]){
            result += "<td>"
            if(field == "loves"){
                result += "<ul>"
                for(j = 0; j < data[i]["loves"].length; j++){
                    result += "<li>"
                    result += data[i][field][j]
                    result += "</li>"
                }
                result += "</ul>"
            }else{
                result += data[i][field]
            }
            result += "</td>"
        }

        result += "<tr>"
        result += "</table>"
    }

    $("#result").html(result);
}

function findUnicornByName() {
    console.log("findUnicornByName()" + "got called!");
    console.log($("#unicornName").val())

    $.ajax(
        {
            // url: "https://evening-plateau-06617.herokuapp.com/findUnicornByName",
            url: "http://localhost:5000/findUnicornByName",

            type: "POST",
            data: {
                "unicornName": $("#unicornName").val()
            },
            success: process_res
        }
    )
}

function findUnicornByFood() {
    carrotIsChecked = "unchecked"
    appleIsChecked = "unchecked"
    if ($("#carrot").is(":checked"))
        carrotIsChecked = "checked"

    if ($("#apple").is(":checked"))
        appleIsChecked = "checked"

    $.ajax(
        {
            //url: "https://evening-plateau-06617.herokuapp.com/findUnicornByFood",
            url: "http://localhost:5000/findUnicornByFood",

            type: "POST",
            data: {
                "appleIsChecked": appleIsChecked,
                "carrotIsChecked": carrotIsChecked
            },
            success: process_res
        }
    )
}

function setup() {
    $("#findUnicornByName").click(findUnicornByName)
    $("#findUnicornByFood").click(findUnicornByFood)
}

// function filter(){
//     received_data.map(function (obj_){
//         aList = [] 
//         if( // if the name check box is checked)
//             aList.push("name")
//         return aList
//     })
// }
$(document).ready(setup)
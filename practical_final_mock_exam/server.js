const express = require('express')
const app = express()

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})


const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
    extended: true
}));


const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nabil828:comp1537@cluster0.lbm8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });


const unicornSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    loves: [String]
});
const unicornModel = mongoose.model("unicorns", unicornSchema);



app.post("/findUnicornByName", function (req, res) {
    console.log("req. has been recieved")
    console.log(req.body.unicornName)

    unicornModel.find({ name: req.body.unicornName }, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.json(unicorns);
    });
})

app.use(express.static("./public"))


app.post("/findUnicornByFood", function (req, res) {
    console.log("req. has been recieved")
    console.log(req.body.appleIsChecked)
    console.log(req.body.carrotIsChecked)
    aList = []
    if (req.body.appleIsChecked == "checked")
        aList.push("apple")


    if (req.body.carrotIsChecked == "checked")
        aList.push("carrot")

    unicornModel.find({
        loves: {
            $in: aList
        }
    }, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.send(unicorns);
    });


})

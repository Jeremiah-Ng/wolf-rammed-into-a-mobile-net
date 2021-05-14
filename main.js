function webcam() {
    document.getElementById("complicated").innerHTML = "Webcam View - "
    document.getElementById("camera").style.height = "350px";
    document.getElementById("camera").style.visibility = "visible";
    document.getElementById("camera1").style.visibility = "hidden";
    document.getElementById("camera1").style.height = "0px";
}

function files() {
    document.getElementById("complicated").innerHTML = "File Upload - "
    document.getElementById("camera1").style.visibility = "visible";
    document.getElementById("camera1").style.height = "350px";
    document.getElementById("camera").style.height = "0px";
    document.getElementById("camera").style.visibility = "hidden";
}

function disapear() {
    document.getElementById("disappear").innerHTML = ""
}
classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded() {
    console.log("modelLoaded")
}

function identify() {
    if (i == 2) {
        img = document.getElementById("output");
        classifier.classify(img, gotResults);
    }
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("mobilenet").innerHTML = results[0].label;
        document.getElementById("wolfram").innerHTML = "Unable to load API";
    }
}
i = 0
var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('output');
        output.src = reader.result;
        i = 2
        document.getElementById("identify").innerHTML = " <button onclick='identify()' class='btn btn-info' id='identify'>Identify</button>"
    };
    reader.readAsDataURL(event.target.files[0]);
};

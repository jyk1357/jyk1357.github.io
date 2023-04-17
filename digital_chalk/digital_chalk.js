function lastItem(input) {
    var temp = [];
    document.write("Original list: " + input + "<br><br><br>");
    if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                if (input[i] < input[j]) {
                    temp = input[j];
                    input[j] = input[i];
                    input[i] = temp;
                }
            }
        }
        document.write("Last Item Alphabetically: " + input[input.length - 1]);
    }
}

function alphaList() {
    var fruit = prompt("Please input a fruit");
    var animal = prompt("Please input an animal");
    var state = prompt("Please input a state");
    var country = prompt("Please input a country");
    var input = [fruit, animal, state, country];
    document.write("Original list: " + input + "<br><br><br>");
    var temp = [];
    if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                if (input[i] < input[j]) {
                    temp = input[j];
                    input[j] = input[i];
                    input[i] = temp;
                }
            }
        }
        document.write("Sorted alphabetically: " + input +"<br><br><br>");
        document.write("Last Item Alphabetically: " + input[input.length - 1]);
    }
}
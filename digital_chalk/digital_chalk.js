function alphaList(input) {
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
        return input;
    }
}

function lastItem() {
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
        document.write("Sorted alphabetically: " + input +"<br><br>");
        document.write("Last Item Alphabetically: " + input[input.length - 1]);
    }
}
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

function lastItem(input) {
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
        document.getElementById("last-item").style.display = "block";
    }
}
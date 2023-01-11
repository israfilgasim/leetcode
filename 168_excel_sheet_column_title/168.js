var letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var convertToTitle = function(columnNumber) {
    var resultArray = [];
    var n = 0;
    while (columnNumber > 26){
        var b = columnNumber % 26;
        var columnNumber = Math.floor(columnNumber / 26);
        if (b == 0){
            b = 26;
            columnNumber = columnNumber - 1;
        }
        resultArray[n]=letterArray[b-1];
        n++;
    }
    resultArray[n]=letterArray[columnNumber-1];
    resultArray.reverse();
    return resultArray.join('');

};

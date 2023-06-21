var run = require("./excelToCSV");

if (process.argv[2] === undefined) {
    console.log("Harap masukan File");
} else {
    var file = process.argv[2];
    var excelFile = file.substring(1);

    const ext = excelFile.split(".");
    if (ext[1] == "xlsx" || ext[1] == "xls") {
        run.generateCSV(excelFile);
    } else {
        console.log("Harap masukan file Excel");
    }
}

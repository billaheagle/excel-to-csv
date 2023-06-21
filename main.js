var run = require("./excelToCSV");

if (process.argv[2] === undefined) {
    console.log("Harap masukan File");
} else {
    var file = process.argv[2];

    if (file.charAt(0) == ".") file = file.substring(1);
    if (file.charAt(0) != "\\") file = "\\" + file;

    const ext = file.split(".");
    if (ext[1] == "xlsx" || ext[1] == "xls") {
        run.generateCSV(file);
    } else {
        console.log("Harap masukan file Excel");
    }
}

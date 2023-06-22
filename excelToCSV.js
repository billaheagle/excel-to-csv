var XLSX = require("xlsx");

generateCSV = (filename) => {
    const workBook = XLSX.readFile(filename);
    XLSX.writeFile(workBook, "result.csv", { bookType: "csv" });
    console.log("result.csv was saved in the current directory!");
};

module.exports = {
    generateCSV,
};

const XLSX = require('xlsx');

var LISTA_CAO = require('../helpers/constants');
/*
    Producs API controller
*/
// Get products by given category
module.exports.fetchProducts = async (req, res) => { 
    try {
        const { fileName, sheetNumber } = req.body; 
        const workbook = XLSX.readFile(fileName);
        const sheet = workbook.SheetNames[sheetNumber];
        //console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));]
        var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]); 
        var products = [];
        console.log(fileName, LISTA_CAO);
        switch (fileName) {
            case LISTA_CAO:
                products = loadProductsCAO(data);
                break;        
            default:
                break;
        }
        res.send(products);
    } catch (error) {
        console.log(Error, error.message);
        res.status(404).send({message: "Error: " + error.message});
    }
}; 

function loadProductsCAO(data) {    
    var products = []
    for (i in data) { 
        if (data[i].__EMPTY_1 && data[i].__EMPTY_2 && data[i].__EMPTY_3) {
            products.push({
                code: data[i].__EMPTY_1,
                description: data[i].__EMPTY_2,
                price: data[i].__EMPTY_3
            });
        } 
    }
    return products;
}
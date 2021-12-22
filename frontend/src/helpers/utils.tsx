
function validatePrice(input: string) {
    //return /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/.test(input);
    return /^(?!.*(,,|,\.|\.,|\.\.))[\d.,]+$/.test(input);
}

export {validatePrice};
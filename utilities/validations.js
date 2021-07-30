const ArrayFuncions = requir('./arrays');
const validations = {
    required(value) {
        return value != '' && value != undefined
    },
    
    /*validate({
        productName: 'required:true|max:10|type:string',
        price: 'required:true|type:float|decimals:2',
        brand: 'required:true|type:string|max:20',
        stock: 'required:true|type:int'
    })*/
    
     validate(fields) {
        for ((value, key) in fields) {
            const constraints =  value.split('|');
            for (let i = 0; i < constraints.length; i++) {
                const keyValue = constraints.split(':');
                switch(keyValue[0]) {
                    case 'required':

                    break;
                }
            }
        }
    },
};

module.exports = validations;

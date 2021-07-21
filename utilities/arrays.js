const arrayFunctions = {
     objectKeyInArray (array, key) {
        const filteredArray = array.filter(object => Object.keys(object).includes(key));
        return filteredArray.length > 0;
    },
    
     getObjectPropertyFromArray (array, property) {
        const filteredArray = array.filter(object => Object.keys(object).includes(property));
        return filteredArray[0][property]; 
    },
};

module.exports = arrayFunctions;

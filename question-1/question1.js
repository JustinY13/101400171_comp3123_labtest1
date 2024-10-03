
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (mixedArray.length === 0) {
        reject('Empty Array Passed In')
      }
      else{
        const filterLowerCaseArray = mixedArray.filter(eachElement => typeof eachElement === 'string');
        const lowerCaseArray = filterLowerCaseArray.map(eachElement => {
            if (typeof eachElement === 'string') {
              return eachElement.toLowerCase();
            }
          });  
        resolve(lowerCaseArray)}
      })
};

console.log(lowerCaseWords(mixedArray));

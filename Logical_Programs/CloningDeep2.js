const _ = require("lodash");

const userDetails = {
    name: "John Doe",
    age: 14,
    status: {
      verified: false,
      method: Symbol(),
      title: undefined
    }
  };


  /*
Everything seems to work fine, but for the new object,
 JSON.stringify() will return no key-value pair for the undefined and symbol values.


  */
var result = _.cloneDeep(userDetails);
 console.log(result);
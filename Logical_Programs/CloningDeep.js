const userDetails = {
    name: "John Doe",
    age: 14,
    status: {  //nested object
      verified: false
    }
  };

 // let clonedUserDetails = {...userDetails};
 let clonedUserDetails = Object.assign({}, userDetails);

 clonedUserDetails.status.verified =true;

 console.log(clonedUserDetails)//{ name: 'John Doe', age: 14, status: { verified: true } }
 //original object affetced
 // so spread operator & object.assign doesnt support deep cloning
 console.log(userDetails)//{ name: 'John Doe', age: 14, status: { verified: true } }

 //lets try with other way

 let clonedUserDetails2 = JSON.parse(JSON.stringify(userDetails));
 clonedUserDetails2.status.verified =true;

 console.log(userDetails)//{ name: 'John Doe', age: 14, status: { verified: false } }


async function asyncFunction() {
  try {
    const result = await new Promise((resolve, reject) => {
      reject('This is an error!');
    });
    console.log(result);
  } catch (error) {
    console.error('Caught error:', error); // Output: Caught error: This is an error!
  }
}

asyncFunction();

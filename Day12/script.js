//error handling 

//basic error handling with try and catch
//
try {
    // code that might throw an error
    let x = 3;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Type error:", error.message);
    } else if (error instanceof RangeError) {
      console.error("Range error:", error.message);
    } else {
      console.error("Unknown error:", error.message);
    }
  } finally {
    console.log("Finally block executed");
  }

  //graceful error handling in fetch
  //

  fetch('https://invalid-url.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    console.error('Error:', error);
    console.log('Failed to fetch data from invalid URL');
  });
function getData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 3) {
        reject("Query Not Found");
      } else {
        console.log("Data Sent", value);
        resolve("Query Solved");
      }
    }, 2000);
  });
}

getData(1)
  .then(() => {
    return getData(2);
  })
  .then(() => {
    return getData(3);
  })
  .catch((err) => {
    console.log(err);
  });

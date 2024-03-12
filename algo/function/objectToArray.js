function objectToArray(arr, key) {
  let allContent = [];

  arr.map((el) => {
    allContent.push(eval(`el.${key}`));
  });

  return allContent;
}

module.exports = objectToArray;

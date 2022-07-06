exports.getArgumentInput = (inputName) =>
  JSON.parse(JSON.stringify(inputName, null, 2));

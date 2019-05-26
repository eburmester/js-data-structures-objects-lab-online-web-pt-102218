const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  newDriver = Object.assign({}, obj);
  newDriver[key] = value

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
}



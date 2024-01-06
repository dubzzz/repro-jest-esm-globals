let value = false;
module.exports.setValue = (newValue) => (value = newValue);
module.exports.getValue = () => value;

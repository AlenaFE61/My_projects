const isFunction = (func) => func instanceof Function;

const pipe = (value, ...funcs) => {
  try {
      if (funcs.some(item => item === '' || typeof item !== 'function')) {
          throw new Error('Provided argument at position 2 is not a function!')           
      } else {
          let res = funcs.reduce((item, func) => func(item), value)
      return res
      }
  }catch(e) {
      return e.message
  }
};

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
    value
        .split(' ')
        .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
        .join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;
const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');
alert(error); //Provided argument at position 2 is not a function!
const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);
alert(result); // Hello, John Doe!





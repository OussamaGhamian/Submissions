const stringSize = text => {
  return text.length;
};
const replaceCharacterE = text => {
  return text.replace("e", " ");
};
const concatString = (text1, text2) => {
  return text1 + text2;
};
const showChar5 = text => {
  return text.charAt(4);
};
const showChar9 = text => {
  return text.substr(0, 9);
};
const toCapitals = text => {
  return text.toUpperCase();
};
const toLowerCase = text => {
  return text.toLowerCase();
};
const removeSpaces = text => {
  return text.trim();
};
const IsString = text => {
  return typeof text === "string";
};

const getExtension = text => {
  var element = text.split(".");
  return element[element.length - 1];
};
const countSpaces = text => {
  let arr = text.split(" ");
  return arr.length - 1;
};
const InverseString = text => {
  return text
    .split("")
    .reverse()
    .join("");
};

const power = (x, y) => {
  return Math.pow(x, y);
};
const absoluteValue = num => {
  return Math.abs(num);
};
const absoluteValueArray = array => {
  let arr = [];
  array.forEach(element => {
    arr.push(Math.abs(element));
  });
  return arr;
};
const circleSurface = radius => {
  return Math.round(Math.PI * Math.pow(radius, 2));
};
const hypothenuse = (ab, ac) => {
  return power(power(ab, 2) + power(ac, 2), 0.5);
};
const BMI = (weight, height) => {
  return +(weight / power(height, 2)).toFixed(2);
};

const createLanguagesArray = () => {
  return ["Html", "CSS", "Java", "PHP"];
};

const createNumbersArray = () => {};

const replaceElement = languages => {};

const addElement = languages => {};

const addNumberElement = numbers => {};

const removeFirst = languages => {};

const removeLast = languages => {};

const convertStrToArr = social_arr => {};

const convertArrToStr = languages => {};

const sortArr = social_arr => {};

const invertArr = social_arr => {};

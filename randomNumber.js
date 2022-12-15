
const getRandomNumber = (number1, number2) => Math.floor(Math.random() * (number2 - number1) + number1);

const getRandomHexChar = () => getRandomNumber(0, 15).toString(16);

const getUUIDStrings = (stringLength, stringValue) => stringValue = stringLength >= 0
    ? stringValue + getUUIDStrings(stringLength - 1, getRandomHexChar()) : ""

const getRandomHexString = (stringLength) => getUUIDStrings(stringLength, '')

const getUUID = () => [8, 4, 4, 4, 12].map(getRandomHexString)

const displayUUID = () => getUUID().join('-')

const main = () => console.log(displayUUID());

main();



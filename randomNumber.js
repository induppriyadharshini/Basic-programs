
const getRandomNumber = (number1, number2) => Math.floor(Math.random() * (number2 - number1) + number1);

const getRandomHexChar = () => getRandomNumber(0, 15).toString(16);

const generateRandomHexString = (stringLength, stringValue) => stringValue = stringLength >= 0
    ? stringValue + generateRandomHexString(stringLength - 1, getRandomHexChar()) : ''

const getUUIDString = (stringLength) => generateRandomHexString(stringLength, '')

const getUUID = () => [8, 4, 4, 4, 12].map(getUUIDString).join('-')

const displayUUID = (UUID) => console.log(UUID)

const main = () => {
    const UUID = getUUID();
    displayUUID(UUID);
}

main();



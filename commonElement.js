const array = [
    [
        {
            name: 'karpagam',
            country: 'india',
        },
        {
            name: 'abi',
            country: 'india',
        },
        {
            name: 'anitha',
            country: 'india',
        },
        {
            name: 'kavya',
            country: 'india',
        }
    ],
    [
        {
            name: 'indu',
            country: 'india',
        },
        {
            name: 'abinaya',
            country: 'india',
        },
        {
            name: 'kavya',
            country: 'india',
        },
        {
            name: 'anitha',
            country: 'india',
        }
    ],
    [
        {
            name: 'anitha',
            country: 'india',
        },
        {
            name: 'aishu',
            country: 'india',
        }
    ]
];

const getRepeatedDetails = (array) => array.reduce((acc, c) => acc
    .filter((element) => c.find(person => person.name === element.name && person.country === person.country)));

const displayRepeatedDetails = (repeatedDetails) => console.log(repeatedDetails);

const main = () => {
    const repeatedDetails = getRepeatedDetails(array);
    displayRepeatedDetails(repeatedDetails);
}

main();
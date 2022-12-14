const markSheets = [
    {
        student: 'Sriram',
        rollNo: 11,
        marks: {
            tamil: 80,
            english: 90,
            science: 86,
            maths: 97,
            social: 76,
        }
    },
    {
        student: 'Ram',
        rollNo: 16,
        marks: {
            tamil: 90,
            english: 97,
            science: 100,
            maths: 34,
            social: 96,
        }
    },
    {
        student: 'sri',
        rollNo: 18,
        marks: {
            tamil: 60,
            english: 90,
            science: 63,
            maths: 93,
            social: 46,
        }
    },
    {
        student: 'mani',
        rollNo: 20,
        marks: {
            tamil: 79,
            english: 80,
            science: 91,
            maths: 93,
            social: 86,
        }
    },
    {
        student: 'praveen',
        rollNo: 80,
        marks: {
            tamil: 90,
            english: 80,
            science: 86,
            maths: 96,
            social: 77,
        }
    },
    {
        student: 'thiru',
        rollNo: 81,
        marks: {
            tamil: 90,
            english: 40,
            science: 80,
            maths: 68,
            social: 77,
        }
    }
    ,
    {
        student: 'manikandan',
        rollNo: 82,
        marks: {
            tamil: 100,
            english: 100,
            science: 34,
            maths: 100,
            social: 100,
        }
    }
];

const minimumMarks = {
    tamil: 35,
    english: 36,
    science: 37,
    maths: 38,
    social: 39
}

const getCount = (markSheetsWithRank) => {
    const passCount = markSheetsWithRank.filter((markSheetWithRank) => markSheetWithRank.passOrFail === 'P').length;

    return ({
        pass: passCount,
        fail: markSheetsWithRank.length - passCount
    });
};

const getResultCount = (markSheetsWithRank) => ({
    ...markSheetsWithRank, count: getCount(markSheetsWithRank)
});

const getTotal = (marks) => Object.values(marks).reduce((total, mark) => total + mark, 0);

const getResult = (marks) => Object.keys(marks).every((subjectName) => marks[subjectName] >= minimumMarks[subjectName]) ? 'P' : 'F';

const getStudentRank = (markSheetWithTotal, markSheetsWithTotal) =>
    markSheetWithTotal.passOrFail === 'F'
        ? '-'
        : markSheetsWithTotal
            .filter((markSheet) => markSheet.passOrFail === 'P' && markSheet.total > markSheetWithTotal.total).length + 1;

const getRanks = (markSheetsWithTotal) =>
    markSheetsWithTotal.map((markSheetWithTotal) => ({
        ...markSheetWithTotal,
        rank: getStudentRank(markSheetWithTotal, markSheetsWithTotal)
    }));

const addTotalAndResult = (markSheet) => ({
    ...markSheet,
    total: getTotal(markSheet.marks),
    passOrFail: getResult(markSheet.marks),
});

const processMarkSheets = (markSheets) => {
    const markSheetsWithTotal = markSheets.map(addTotalAndResult);
    const markSheetsWithRank = getRanks(markSheetsWithTotal);

    return getResultCount(markSheetsWithRank);
}

const displayMarkSheets = (markSheets) => console.table(markSheets);

const main = () => {
    const processedMarkSheets = processMarkSheets(markSheets);
    displayMarkSheets(processedMarkSheets);
}
main();









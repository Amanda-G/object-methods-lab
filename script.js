// Q1
let scores = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    },
    {
        name: "Jill",
        score: 83,
        date: "2020-04-12",
        passed: true
    }
]


//Q2
function addScore(array, newName, newScore, newDate) {
    let newObj = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    }
    array.push(newObj);
}
// addScore(scores, "Sue", 57, "2020-02-13");
// console.log(scores);


//Q3
function deleteScoreByIndex(array, index) {
    array.splice(index, 1)
}
// deleteScoreByIndex(scores, 0);
// console.log(scores)


//Q4
function deleteScoreByName(array, name) {
    const indexToRemove = array.findIndex((objct) => {
        return objct.name === name;
    });
    array.splice(indexToRemove, 1);
    return array;
}
// scores = deleteScoreByName(scores, "Jack");
// console.log(scores)


//Q5
const editScore = (array, index, score) => {
    let passed = null;
    if (score >= 60) {
        passed = true
    } else {
        passed = false
    }
    array[index].score = score;
    array[index].passed = passed;
}
// editScore(scores, 3, 98);
// console.log(scores)



//Q6
function findScoreByName(array, name) {
    return array.find((element) => element.name === name)
}
// console.log(findScoreByName(scores, "Jill"));



//Q7
const findLowestScore = (array) => {
    let currentLowestScore = array[0];
    array.forEach((element) => {
        if (element.score < currentLowestScore.score) {
            currentLowestScore = element;
        }
    });
    return currentLowestScore;
}
// console.log(findLowestScore(scores))


//Q8
const findAverageQuizScore = (array) => {
    let currentScores = 0;
    for (let objct of array) {
        currentScores += objct.score;
    }
    return currentScores / array.length;
}
// console.log(findAverageQuizScore(scores));


//Q9
const filterScores = (array, property, value) => {
    return array.filter((objct) => {
        return objct[property] === value;
    });
};
// console.log(filterScores(scores, "name", "Jill"))


//Q10
const sortScoreAsc = (array) => {
    return array.sort((objct1, objct2) => {
        if (objct1.score > objct2.score) {
            return 1
        } else if (objct1.score < objct2.score) {
            return -1
        } else {
            return 0
        }
    });
}
// console.log(sortScoreAsc(scores))


//Q11

const sortScoreDsc = (array) => {
    return array.reverse(array.sort((objct1, objct2) => {
        if (objct1.score < objct2.score) {
            return -1
        } else if (objct1.score > objct2.score) {
            return 1
        } else {
            return 0
        }
    }));
}
console.log(sortScoreDsc(scores))
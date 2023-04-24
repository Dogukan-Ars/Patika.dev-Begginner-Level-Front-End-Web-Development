const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
    },
    {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
];

const olderThanThirty = person.filter(ages => ages.age > 30)
console.log(olderThanThirty)

const isKnow = person.filter(know => know.languages.includes('JavaScript'))
console.log(isKnow)
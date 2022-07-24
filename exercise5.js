// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const newArray1 = [];
array.forEach((person) => newArray1.push(person.username + "!"));

//Create an array using map that has all the usernames with a "? to each of the usernames

const arrayMap = array.map((person) => { return person.username + "?" });

//Filter the array to only include users who are on team: red

const arrayFilter = array.filter((person) => {return person.team==="red"})

//Find out the total score of all users using reduce

const arrayReduce = array.reduce((arg, person) => { return arg+person.score},0)


// (1), what is the value of i?

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})




//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const arrayBonus = array.map((person) => {
  person.items = person.items.map((items) => { return items + "!" });
  return person
});
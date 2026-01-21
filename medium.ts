// Medium

const student = [
{ id: 1, name: "Sara" },
{ id: 2, name: "Lars" }, // missing komma
{ id: 3, name: "Emma" }
];
console.log(student[0].name);



const items = {
name: "Laptop",
price1: 1200,
price2: 1000
};
console.log(items.price1);



const teams = {
members: [
{ name: "Ana", skills: ["JS", "React"] },
{ name: "Bo", skills: ["Node, SQL"] }
]
};
console.log(teams.members[1].skills[0]);



const setting = { darkMode: false };
if (setting.darkMode === true) { // === missing
console.log("Dark mode ON");
} else {
console.log("Dark mode OFF");
}
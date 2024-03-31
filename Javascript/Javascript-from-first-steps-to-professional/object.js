const mike = {
    name: "Mike",
    home: "Toronto",
    languages: ["English", "Vietnamese"],
    pets: [],
    vehicles: [],
    hobbies: ['gaming', 'travel', 'programming']
}

const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];
const spiceGirls = {
    albums: ["Spice", "Spiceworld", "Forever"],
    motto: "Girl Power",
    members: spices
};

// retrieve 'girl power'
spiceGirls.motto;

// object representing ginger spice
spiceGirls.members[1];

// "Spiceworld"
spiceGirls.albums[1];
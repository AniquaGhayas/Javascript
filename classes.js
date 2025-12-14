const person1={
    name: "john",
    age: 17
};

const person2={
    name: "Sam",
    age: 30
};

const person3={
    name: "David",
    age: 54
};

const people=[person1, person2, person3]
for (let i=0;i<people.length;i++)
{
    if(people[i].age<20)
    {
        console.log("Hi wassup")
    }
    else
    console.log("Hello sir")
};

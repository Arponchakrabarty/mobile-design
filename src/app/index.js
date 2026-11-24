// const array = [{name:[{arpon:"name1"}]},{name:[{arpon:"id2"}]},{name:[{arpon:"number3"}]}]



// const array2= [array[0].name[0].arpon, array[1].name[0].arpon, array[2].name[0].arpon]
// console.log(array2);









const data = [
  {
    id: 1,
    title: "Department A",
    items: [
      {
        id: 101,
        name: "Suhad",
        details: {
          age: 24,
          skills: ["Next.js", "React", "Node.js"],
          projects: [
            {
              name: "Mexnon",
              status: "Active"
            },
            {
              name: "Proyojhon",
              status: "Development"
            }
          ]
        }
      },
      {
        id: 102,
        name: "Ahmed",
        details: {
          age: 25,
          skills: ["TypeScript", "MongoDB"],
          projects: [
            { name: "Project Alpha", status: "Completed" }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: "Department B",
    items: [
      {
        id: 201,
        name: "Rahim",
        details: {
          age: 26,
          skills: ["Python", "Django"],
          projects: [
            { name: "Project Beta", status: "Active" }
          ]
        }
      }
    ]
  },
  {
    id: 3,
    title: "Department C",
    items: [
      {
        id: 301,
        name: "Karim",
        details: {
          age: 23,
          skills: ["JavaScript", "Express"],
          projects: [
            { name: "Project Gamma", status: "Pending" }
          ]
        }
      }
    ]
  }
];

const array2 =data[0].items[1].details.projects[0].status

console.log(array2);
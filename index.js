const fs = require('fs/promises');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { createReadStream } = require('fs');
const team = [];
const createTeam = require("./src/team-template.js");


const promptManager = () => {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the team manager's employee ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOfficeNumber"
    },
])
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber );
            console.log(manager);
            team.push(manager);
            console.log(team);
            promptTeam();
        });
};

// const createTeam = () => {
//     console.log("new team created", team);
//     fs.writeFile("./dist/team.html", createTeam(team), 'utf-8');
// }

const promptTeam = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Select Team Member",
            choices: ["Engineer", "Intern", "Exit"],
            name: "teamMember"
        },
    ]).then((res) => {

        switch(res.teamMember){
            case "Engineer":
                promptEngineer();
                break;

            case "Intern":
                promptIntern();
                break;

            default:
                createTeam(team);

        }
    })
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What's the Engineer's name?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What's the Engineer's ID?",
            name: "engineerID"
        },
        {
            type: "input",
            message: "What's the Engineer's email?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What's the Engineer's GitHub username?",
            name: "engineerGitHub"
        }
    ])

    .then((data) => {
        const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub );
        console.log(engineer);
        team.push(engineer);
        console.log(team);
        promptTeam();
    });
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What's the intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What's the intern's ID?",
            name: "internID"
        },
        {
            type: "input",
            message: "What's the intern's email?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What's the intern's school?",
            name: "internSchool"
        }
    ])

    .then((data) => {
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool );
        console.log(intern);
        team.push(intern);
        console.log(team);
        promptTeam();
    });
};


promptManager();
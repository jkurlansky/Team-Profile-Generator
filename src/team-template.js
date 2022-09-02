const fs = require('fs');
let html = [];

const createTeam = team => {
    const generateManager = manager => {
        return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.getName()}</h5>
                <h5 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h5>
                <p class="card-text">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="card-text">ID: ${manager.getId()}</p>
                <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
            </div>
        `
    };

    const generateEngineer = engineer => {
        return `

        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h5 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h5>
            <p class="card-text">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class="card-text">ID: ${engineer.getId()}</p>
            <p class="card-text">GitHub: <a href="https://github.com/${engineer.getGithub()}">https://github.com/${engineer.getGithub()}</a></p>
        </div>
        </div>
        `
    };

    const generateIntern = intern => {
        return `

        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.getName()}</h5>
            <h5 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h5>
            <p class="card-text">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p class="card-text">ID: ${intern.getId()}</p>
            <p class="card-text">School: ${intern.getSchool()}</p>
        </div>
        </div>
        `
    };

    html.push(team.filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
    );

    html.push(team.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    );

    html.push(team.filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    );

    console.log(html);
    // html.join(" ")
    fs.writeFileSync("./dist/index.html", finalStage());
};

const finalStage = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
    <h1 class="display-1">My Team</h1>
    ${html.join(" ")}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
    `
}

module.exports = createTeam
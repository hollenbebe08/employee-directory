const generatePage = (manager, employees) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Employee Directory Manager</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="./src/style.css">
</head>
<body>
    <header class="header-styling">
        <div>
            <p> My Team </p>
        </div>
    </header>
    <section class="container col-6 flex-column align-content-center ">
        <article class = "row justify-content-around">
            <div class = "card" style="width: 15rem;">
                <header class= "card-header card-styling text-light">
                    <h2 class = "card-title"> ${manager.name}</h2>
                    <h4 class = "card-subtitle">${manager.role}</h4>
                </header>
                <div class = "card-body">
                    <div class = "card-text"> 
                        <p> ID: ${manager.id}</p> </br>
                        <p> Office Number: ${manager.officeNumber}</p>
                        <a href="mailto:email:${manager.email}">${manager.email}</a> </br>
                    </div>
                </div>
            </div>
            ${employees.map(employee => {
                return `
                <div class = "card" style="width: 15rem;">
                    <header class= "card-header card-styling text-light">
                        <h2 class = "card-title">
                            ${employee.name}
                        </h2>
                        <h4 class = "card-subtitle"> ${employee.role}</h4>
                    </header>
                    <div class = "card-body">
                        <div class = "card-text"> 
                            <p> ID: ${employee.id}</p> </br>
                            <p> School: ${employee.school}</p> </br>
                            <p><a href="https://github.com/${employee.github}">GitHub</a></p> </br>
                            <a href="mailto:email:${employee.email}">${employee.email}</a> </br>
                        </div>
                    </div>
                </div>
                `
            }).join('')}
        </article>
    </section>
</body>
</html>
`;
};



module.exports = generatePage;

const generatePage = (manager, employees) => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Directory Manager</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
    <section class='column is-one-fifth'>
        <div class = 'card'>
            <header class= 'card-header'>
                <p class = 'card-header-title is-centered'> ${manager.name}</p>
            </header>
            <div class = 'card-content'>
                <div class = 'content'> 
                    <p> Email: ${manager.email}</p> \n
                    <p> ID: ${manager.id}</p> \n
                    <p> Role: ${manager.role}</p> \n
                    <p> Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
    </section>
    <section class='column is-one-fifth'>
        <div class = 'card'>
            <header class= 'card-header'>
                <p class = 'card-header-title is-centered'>
                ${employees.map(employee =>{
                return `
                 ${employee.name} 
                </p> 
                `
                })
                }
            </header>
            <div class = 'card-content'>
                <div class = 'content'> 
                ${employees.map(employee =>{
                    return `
                    <p> Email: ${employee.email}</p> \n
                    <p> ID: ${employee.id}</p> \n
                    <p> Role: ${employee.role}</p> \n
                    <p> GitHub Username: ${employee.github}</p>
                    `
                    })
                }
                </div>
            </div>
        </div>
    </section>
    </body>
    </html>
    `;
}

module.exports = generatePage;

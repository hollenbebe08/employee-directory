const generateManager = require('../lib/Manager-questions');

const generatePage = (staffManager) => {
    const managerHTML = generateManager(staffManager);
    console.log(staffManager);

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Directory Manager</title>
</head>
<body>
    <header>
        <h1>Title/h1>
    </header>
    <main>
    ${managerHTML}
    </main>
</body>
</html>
`;
};

module.exports = generatePage();
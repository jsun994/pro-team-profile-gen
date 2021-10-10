var genCards = '';

const managerGen = (manager) => {
    return `
    <div class="col-4 mt-4">
        <div class="card border-info text-white bg-dark" style="max-width: 20rem;">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4><i class="fas fa-mug-hot"></i> Manager</h4>
            </div>
            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

const engineerGen = (engineer) => {
    return `
    <div class="col-4 mt-4">
        <div class="card border-info text-white bg-dark" style="max-width: 20rem;">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4><i class="fas fa-glasses"></i> Engineer</h4>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

const internGen = (intern) => {
    return `
    <div class="col-4 mt-4">
        <div class="card border-info text-white bg-dark" style="max-width: 20rem;">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4><i class="fas fa-user-graduate"></i> Intern</h4>
            </div>
            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

const htmlGenerate = (objs) => {
    const cards = [];
    for (let i = 0; i < objs.length; i++) {
        const emp = objs[i];
        const empRole = emp.getRole();
    
        if (empRole === 'Manager') {
            const cardManager = managerGen(emp);
            cards.push(cardManager);
        }
        if (empRole === 'Engineer') {
            const cardEngineer = engineerGen(emp);
            cards.push(cardEngineer);
        }
        if (empRole === 'Intern') {
            const cardIntern = internGen(emp);
            cards.push(cardIntern);
        }
    }
    genCards = cards.join('');

    return`
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
        />
        <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
        />
    <title>My Team</title>
    </head>

    <body>

    <header>
        <div class="container-fluid bg-danger p-3 mb-3">
            <h1 class="text-light text-center">My Team</h1>
        </div>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center">
                ${genCards}
            </div>
        </div>
    </main>

    </body>
    </html>
    `;
}

module.exports = htmlGenerate;
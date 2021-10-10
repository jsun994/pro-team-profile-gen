const managerGen;
const engineerGen;
const internGen;

const htmlGenerate = (objs) => {
    cards = [];
    for (let i = 0; i < objs.length; i++) {
        const emp = objs[i];
        const empRole = emp.getRole();
        console.log(emp);
    
        if (empRole === 'Manager') {
            const cardManager = managerGen(emp);
        }
        if (empRole === 'Engineer') {
            const cardEngineer = engineerGen(emp);
        }
        if (empRole === 'Intern') {
            const cardIntern = internGen(emp);
        }
    }
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

                <div class="col-4 mt-4">
                    <div class="card border-info text-white bg-dark" style="max-width: 20rem;">
                        <div class="card-header">
                            <h3>emp</h3>
                            <h4><i class="fas fa-mug-hot"></i> Manager</h4>
                        </div>
                        <div class="card-body">
                            <p class="card-text">id: test</p>
                            <p class="card-text">id: test</p>
                            <p class="card-text">id: test</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    </body>
    </html>
    `;
}
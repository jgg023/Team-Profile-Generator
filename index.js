const inquirer = require ("inquirer")
Engineer  = require ("Engineer") 
const intern = require ("./lib/Intern")
const Engineer = require ("./lib/Engineer")
let team = [

];
function start (){
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'Managername',
                message: 'whats the managers name?',
            },
            {
                type: 'input',
                name: 'Manageremail',
                message: 'whats the managers email?',
            },
            {
                type: 'input',
                name: 'Managerid',
                message: 'whats the managers ID?'
            },
            {
                type: 'input',
                name: 'Managersofficenumber',
                message: 'whats the managers office number?'
            }
        ]
    )
    .then (function(data){
        console.log (data)
        let mgr Engineer(
         data.Managername,data.Managerid,data.Manageremail,data.Managerofficenumber
        );
        team.push(
            mgr
        );
        menu ()
    })
} 
function menu (){
    inquirer.prompt({
        type: 'list',
        name: 'Options',
        message: 'Which team member you want to add?',
        choices : ["Engineer","Intern","Exit"]  
        
    }) .then (function(data){
        console.log (data)
        if (data==="Engineer"){
            //function = "Engineer"
            addEngineer(

            )
        } else if ( data === "Intern" 

        ){
            //function = "Intern"
            addIntern(

            )
        }
        else if (data === "Exit"){
            process.exit()
        }


    })

    

}
function addEngineer(){
    inquirer.prompt([
        {
                type: 'input',
                name: 'Engineername',
                message: 'whats the Engineers name ?'
        },
        {
            type: 'input',
            name: 'EngineerID',
            message: 'whats the Engineers ID ?' , 
        },
        {
                type: 'input',
                name: 'Engineeremail',
                message: 'whats the Engineers email ?',
        }

        ,{
                type: 'input',
                name: 'Engineergithub',
                message: 'whats the Engineers Github?',
        }
    ]) .then (
        function (data){
            console.log (data)
            let engr = new Engineer(
                data.Engineername,data.Engineerid,data.Engineeremail,data.Engineergithub
               );
               team.push(
                   engr
               );
        }
    )

    

    
}    
function addIntern (){
    inquirer.prompt (
        [
            {
                type: 'input',
                name: 'Internname',
                message: 'whats the Intern name?' 
            },

            {
                type: 'input',
                name: 'InternID',
                message: 'whats the Interns ID?',
            }

            ,{
                type: 'input',
                name: 'Internemail',
                message: 'whats the Interns email?'
            },
            {
                type: 'input',
                name: 'Internschool',
                message: 'whats the Interns school?'
            },


        ]
    ) .then (function(data){
        console.log (data)
    })
}
start ()

module.exports = [

    {



        context : ["/employees/all" , "/employee/add" , "/employee/update" , "/employee/delete/"],

        target : "http://localhost:8000",

        secure : false,

    }

    ]
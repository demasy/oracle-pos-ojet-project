const stores = require('../db_apis/stores.js');

async function get(req, res, next) {
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);
        const rows = await stores.find(context);
        if (req.params.id) {
            if (rows.length === 1) {
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}

module.exports.get = get;

// function getEmployeeFromRec(req) {
//     const employee = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         phone_number: req.body.phone_number,
//         hire_date: req.body.hire_date,
//         job_id: req.body.job_id,
//         salary: req.body.salary,
//         commission_pct: req.body.commission_pct,
//         manager_id: req.body.manager_id,
//         department_id: req.body.department_id
//     };

//     return employee;
// }

// async function post(req, res, next) {
//     try {
//         let employee = getEmployeeFromRec(req);

//         employee = await employees.create(employee);

//         res.status(201).json(employee);
//     } catch (err) {
//         next(err);
//     }
// }

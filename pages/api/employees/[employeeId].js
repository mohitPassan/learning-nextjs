import data from '../../../data.json';

const handler = (req, res) => {
    if(req.method === "GET") {
        const { employeeId } = req.query;
        const employees = data.employees;
    
        const employee = employees.find(e => e.id === employeeId);
    
        return res.status(200).json({
            status: "Success",
            data: employee
        });
    }

    if(req.method === "POST") {
        console.log(req.body);
        return res.status(201).send({
            status: "Success"
        })
    }
}

export default handler;
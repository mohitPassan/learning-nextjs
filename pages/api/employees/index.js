import data from '../../../data.json';

const handler = (req, res) => {
    const employees = data.employees;

    res.status(200).json({
        status: "Success",
        data: employees
    });
}

export default handler;
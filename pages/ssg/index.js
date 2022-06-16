import axios from "axios";

const SSG = ({ employees }) => {
    return (
        <div>
            <h1>Employees</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        <strong>{employee.name}</strong> ({employee.position})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await axios.get("http://localhost:3001/employees");
    const employees = res.data;

    return {
        props: {
            employees,
        },
    };
};

export default SSG;

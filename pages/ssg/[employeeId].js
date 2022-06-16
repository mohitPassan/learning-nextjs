import axios from "axios";

const EmployeeData = ({ employee }) => {
    return (
        <div>
            <h1>
                {employee.name} : {employee.age}
            </h1>
            <p>{employee.position}</p>
        </div>
    );
};

export const getStaticPaths = async () => {
    const res = await axios.get("http://localhost:3001/employees");
    const employees = res.data;
    const paths = employees.map(employee => ({
        params: {
            employeeId: employee.id
        }
    }));

    return {
        paths: paths,
        fallback: "blocking",
    };
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const employeeId = params.employeeId;

    const res = await axios.get(
        `http://localhost:3001/employees/${employeeId}`
    );
    const employee = res.data;

    return {
        props: {
            employee,
        },
    };
};

export default EmployeeData;

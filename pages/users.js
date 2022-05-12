const UsersPage = ({ users }) => {
    return (
        <>
            <h1>This is the users' list:</h1>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>{user.name} : {user.email}</li>
                    ))
                }
            </ul>
        </>

    )
}

export default UsersPage;

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {
            users: data
        }
    }
}
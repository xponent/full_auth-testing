import { getSession, signOut } from "next-auth/react";

function User({user}) {
    return (
        <div>
            <h3>User:</h3>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                redirect: '/signin',
                permanent: false,
            }
        }
    }
    return {
        props: {
            user: session.user,
        },
    };
}
export default User;
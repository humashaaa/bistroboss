import useAuth from "../useAuth/useAuth";

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>hi. welcome</h1>
            {
                user.displayName ? user.displayName : 'back' 
            }
        </div>
    );
};

export default UserHome;
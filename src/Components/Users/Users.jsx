import users from "../../data/users.json";
import UserItem from "../UserItem/UserItem"

export default function Users() {
    return (
        <div>
            {users.map((item) => (
                <UserItem key={item.name} {...item} />
            ))}
        </div>
    );
}
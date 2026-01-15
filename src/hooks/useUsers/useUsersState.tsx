import { useState, useRef } from "react";
import { User } from "../../interfaces";

export const useUsersState = () => {

    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);

    return {
        users,
        setUsers,
        currentPageRef
    }
}
import axios from "axios";
import { useEffect } from "react";
import { User, ReqResUserListResponse } from "../../interfaces";
import { useUsersState } from "./useUsersState";

interface UseUsersEffectProps {
    state: ReturnType<typeof useUsersState>
}
export const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        });
        return data.data;

    } catch (error) {
        console.log(error);
        return [];
    }

};

export const useUsersEffect = ({ state }: UseUsersEffectProps) => {
    useEffect(() => {

        loadUsers(state.currentPageRef.current)
            .then(state.setUsers);

    }, []);
}
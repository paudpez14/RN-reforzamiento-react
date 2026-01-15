import { loadUsers } from "./useUsersEffect";
import { useUsersState } from "./useUsersState";

interface UseUsersHandlerProps {
    state: ReturnType<typeof useUsersState>
}
export const useUsersHandler = ({ state }: UseUsersHandlerProps) => {
    const nextPage = async () => {
        state.currentPageRef.current++;
        const users = await loadUsers(state.currentPageRef.current);
        if (users.length > 0) {
            state.setUsers(users);
        } else {
            state.currentPageRef.current--;
        }
    }

    const prevPage = async () => {
        if (state.currentPageRef.current < 1) return;

        state.currentPageRef.current--;
        const users = await loadUsers(state.currentPageRef.current);
        state.setUsers(users);
    }

    return { nextPage, prevPage }
}
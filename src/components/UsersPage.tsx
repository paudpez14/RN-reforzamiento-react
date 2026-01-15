import { useUsers } from '../hooks/useUsers/useUsers';
import { UserRow } from './UserRow';




export const UsersPage = () => {

  const { state, handlers } = useUsers();


  return (
    <>
      <h3>Usuarios:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            state.users.map(user => (
              <UserRow key={user.id} user={user} />
            ))
          }
        </tbody>
      </table>


      <div>
        <button onClick={handlers.prevPage}>Prev</button>
        <button onClick={handlers.nextPage}>Next</button>

      </div>

    </>
  );
};



import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);
    console.log(users)

    const handleDelete = id => {
        console.log(id)
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your deleted Successfully',
                    confirmButtonText: 'back'
                });
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
            } else {
                Swal.fire({
                    title: 'Delete!',
                    text: 'Are You Sure delete',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Delete!',
                text: 'Are You Sure delete',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>createdAt</th>
                            <th>Last Logged At</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                            
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className='btn'>X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;

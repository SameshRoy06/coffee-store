
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Coffees = ({ coffes }) => {
    const { _id, coffee, quantity, supliar, test, category, details, photoUrl } = coffes;


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (

        <div className="container mx-auto ">
            <div className="card card-side bg-base-100 shadow-xl p-4 ">
                <figure><img src={photoUrl} alt="Movie" /></figure>
                <div className="flex justify-between w-full p-4 ">
                    <div>
                        <h2 className="card-title text-4xl">{coffee}</h2>
                        <p className="text-2xl">{quantity}</p>
                        <p className="text-2xl">{supliar}</p>
                        <p className="text-2xl">Test: {test}</p>
                    </div>
                    <div className="cards-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4 rounded-sm">
                            <button className="btn btn-active">View</button>
                            <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-secondary">Edit</button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn btn-neutral">Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Coffees;

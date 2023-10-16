import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const updateCoffee = useLoaderData();
    const { _id, coffee, quantity, supliar, test, category, details, photoUrl } = updateCoffee;


    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const coffee = form.coffee.value;
        const quantity = form.quantity.value;
        const supliar = form.supliar.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const UpdateCoffee = { coffee, quantity, supliar, test, category, details, photoUrl };
        console.log(UpdateCoffee);

        // send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCoffee)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Home'
                })
            }
        })
    }



    return (
        <div className="bg-pink-200 p-24">
            <h2 className="text-center text-5xl p-4">Update Coffee</h2>
            <form onSubmit={handleUpdateCoffee} >
                {/* 1 form name and Quantity */}
                <div className="md:flex justify-center text-center mt-4 gap-2 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="coffee" defaultValue={coffee} placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl">Coffee Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Coffee Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 2 form suppliar and text */}
                <div className="md:flex justify-center text-center mt-4 gap-2 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl">Supliar Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supliar" defaultValue={supliar} placeholder="supliar" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl">Test</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="test" defaultValue={test} placeholder="test" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 2 form Category and Details */}
                <div className="md:flex justify-center text-center mt-4 gap-2 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 4 photo url */}
                <div className="justify-center text-center mt-4 gap-2 ">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-2xl">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="Photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block only:text-xl text-blue-700 my-4" type="submit" value="Update Coffee" />
              <div className="text-center">
              <Link to={'/'}>
                 <button className="btn btn-secondary text-center">Go Home</button></Link>
              </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;
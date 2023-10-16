
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const coffee = form.coffee.value;
        const quantity = form.quantity.value;
        const supliar = form.supliar.value; // Changed 'supliar' to 'supplier'
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const newCoffee = { coffee, quantity, supliar, test, category, details, photoUrl }; // Changed 'supliar' to 'supplier'
        console.log(newCoffee);

        // send data to the server

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Home'
                  })
            }
        })
    }



    return (
        <div className="bg-pink-200 p-24">
            <h2>This is add Coffee</h2>
            <form onSubmit={handleAddCoffee} >
                {/* 1 form name and Quantity */}
                <div className="md:flex justify-center text-center mt-4 gap-2 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="coffee" placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl">Coffee Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Coffee Quantity" className="input input-bordered w-full" />
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
                            <input type="text" name="supliar" placeholder="supliar" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl">Test</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="test" placeholder="test" className="input input-bordered w-full" />
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
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="details" className="input input-bordered w-full" />
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
                            <input type="text" name="photoUrl" placeholder="Photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block only:text-xl" type="submit" value="Add Coffee" />
              
            </form>
        </div>
    );
};

export default AddCoffee;
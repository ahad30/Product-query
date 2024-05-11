import { Button } from "@material-tailwind/react";
import  { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import  { AuthContext } from "../../Providers/AuthProvider";

const AddQuery = () => {
   const {user} = useContext(AuthContext);
  //  console.log(user)

  const handleAddItem = event => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const userEmail = user.email;
    const userName = user.displayName;
    const photo = user?.photoURL;
    const newQueryItem = { 
      image,
      itemName, 
      subcategoryName, 
      shortDescription, 
      posterInfo: {
        userEmail,
        userName,
        photo
      },
      recommendation_count: 0,
    };
  //  console.log(newQueryItem);

    // send data to the server
    fetch(`${import.meta.env.VITE_API_URL}/addSingleQuery`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newQueryItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId.length > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Craft Item Added Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          form.reset();
        }
      });
  };

  return (
    <section className="">
      <Helmet>
        <title>Akeneo | Add Item</title>
      </Helmet>
      <h2 className="text-2xl font-extrabold text-center mb-5">Add a Craft Item</h2>
      <div className="bg-[#F4F3F0] p-10 rounded-lg shadow-lg mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

          <form onSubmit={handleAddItem} className="">
           <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-2">
            {/* Form fields */}
            {/* Image URL */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Image URL</span>
              </label>
              <input type="text" required name="image" placeholder="Image URL" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>

            {/* Item Name */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Item Name</span>
              </label>
              <input type="text" required name="itemName" placeholder="Item Name" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>
            {/* Subcategory Name */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Subcategory Name</span>
              </label>          
              <select name="subcategoryName" required className="select rounded-lg border-gray-200 p-3 text-sm w-full">
                <option value="">Select</option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">Watercolour Painting</option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing"> Cartoon Drawing</option>
              </select>
            </div>
          
            {/* Price */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Price</span>
              </label>
              <input type="number" required name="price" placeholder="Price" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>
            {/* Rating */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Rating</span>
              </label>
              <input type="text" required name="rating" placeholder="Rating" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>
            {/* Customization */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Customization</span>
              </label>
              <select name="customization" required className="select rounded-lg border-gray-200 p-3 text-sm w-full">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {/* Processing Time */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Processing Time</span>
              </label>
              <input type="text" required name="processingTime" placeholder="Processing Time" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>
            {/* Stock Status */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Stock Status</span>
              </label>
              <select name="stockStatus" required className="select rounded-lg border-gray-200 p-3 text-sm w-full">
                <option value="">Select</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
              {/* Short Description */}
              <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Short Description</span>
              </label>
              <textarea name="shortDescription" required placeholder="Short Description" className="textarea  rounded-lg border-gray-200 p-3 text-sm w-full"></textarea>
            </div>

            </div>
            {/* Submit Button */}
<div className="flex justify-end">
<Button type="submit" value="Add Craft Item" className="" >Add Query</Button>
</div>
          </form>
  
      </div>
    </section>
  );
};

export default AddQuery;

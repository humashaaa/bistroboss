import { useForm } from "react-hook-form";
import useAxiosSequreCommon from "../../AxiosSequreCommon/useAxiosSequreCommon";
import useAxiosSequre from "../../useAxiosSequre/useAxiosSequre";
import toast from "react-hot-toast";

const img_bb_key = import.meta.env.VITE_IMG_BB_KEY
const img_bb_api = `https://api.imgbb.com/1/upload?key=${img_bb_key}`
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSequreCommon = useAxiosSequreCommon()
  const axiosSequre = useAxiosSequre()
  const onSubmit = async(data) => {
    console.log(data);
    // img bb te data upload kore url niye db te save korbo
    const imgFile = {image : data.image[0]}
    const res = await axiosSequreCommon.post(img_bb_api, imgFile, {
      headers: {
        'content-Type' : 'multipart/form-data'
      }
    })
    console.log(res.data);

if(res.data.success){
  // now save data on db
  const menuItem = {
    name: data.name,
    price : parseFloat(data.price),
    recipe : data.recipe,
    category : data.category,
    image : res.data.data.display_url
  }
  const menuRes = await axiosSequre.post('/menu', menuItem)
  console.log(menuRes.data);
  if(menuRes.data.insertedId){
    reset()
    toast.success('item added successfully')
  }
}
  
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Add Item</h1>
      <div>
    


<section className="p-6 dark:bg-gray-100 dark:text-gray-900">
	<form onSubmit={handleSubmit(onSubmit)}
     noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="name" className="text-sm">Recipe name</label>
					<input
                    {...register("name")}
                    
                     type="text" placeholder="recipe name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				
				<div className="col-span-full sm:col-span-3">
                <label>category </label>
          <select defaultValue='default' {...register("category")}
          className="select select-info w-full max-w-xs">
            <option disabled value='default'>
              Select item
            </option>
            <option value='salad'>salad</option>
            <option value='pizza'>pizza</option>
            <option value='dessert'>dessert</option>
            <option value='soup'>soup</option>
            <option value='drinks'>drinks</option>
          </select>
				</div>
				
				<div className="col-span-full">
					<label htmlFor="price" className="text-sm">Price</label>
					<input {...register("price")}  type="number" placeholder="price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="recipe" className="text-sm">Recipe Details</label>
					<input {...register("recipe")} type="text" placeholder="reciepe details" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  />
				</div>
               
			</div>
            <input {...register("image")} type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
		</fieldset>
        <input className="btn btn-secondary w-28" type="submit" value="Add Item" />
	</form>
</section>





      </div>
    </div>
  );
};

export default AddItems;

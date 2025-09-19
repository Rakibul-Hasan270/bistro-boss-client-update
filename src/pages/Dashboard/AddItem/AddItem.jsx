import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AddItem = () => {
    return (
        <div>
            <SectionTitle heading="ADD AN ITEM" subHeading="---What's new?---"></SectionTitle>
            <div>
                <div className="gap-4 p-4">
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="racipeName">Racipe Name</label>
                    <input
                        id="racipeName"
                        type="text"
                        placeholder="racipe name"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
             dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
             focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
             dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-4 p-4">

                    {/* dropdiown  */}
                    <div className="w-full md:w-1/2">
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="category">
                            Category
                        </label>

                        <select
                            id="category"
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
               dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
               dark:focus:border-blue-300 focus:outline-none focus:ring"
                        >
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soups</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>


                    <div className="w-full md:w-1/2">
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="parice">
                            Price
                        </label>
                        <input
                            id="parice"
                            type="text"
                            placeholder="price"
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
                 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
                 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
                 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                </div>

                <div className="w-full p-4">
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="recipeDetail">
                        Recipe Details
                    </label>

                    <input
                        id="recipeDetails"
                        type="text"
                        placeholder="recipe details"
                        className="w-full h-20 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md 
               dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
               focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 
               dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

            </div>
        </div>
    );
};

export default AddItem;
import { useState } from "react";
import productData from "./products.json";

export default function ProductList() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const allTags = [...new Set(productData.flatMap((product) => product.tags))];
    const _searchTerm = dataForm.searchTerm.toLowerCase();

    const filteredProducts = productData.filter((product) => {
        const matchesSearch =
            product.title.toLowerCase().includes(_searchTerm) ||
            product.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag ? product.tags.includes(dataForm.selectedTag) : true;

        return matchesSearch && matchesTag;
    });

    return (
        <div className="p-8">
            <input
                type="text"
                name="searchTerm"
                value={dataForm.searchTerm}
                placeholder="Search product..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={handleChange}
            />

            <select
                name="selectedTag"
                value={dataForm.selectedTag}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>{tag}</option>
                ))}
            </select>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredProducts.map((item) => (
                    <div key={item.id} className="relative border p-4 mb-4 rounded-lg shadow-md bg-white">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                            <span className="text-yellow-500 font-bold text-sm">⭐ {item.rating}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-gray-500">Stock: {item.stock} left</p>
                        <p className="text-blue-400 hover:text-blue-700">{item.brand}</p>
                        <div className="mt-2">
                            {item.tags.map((tag, index) => (
                                 <span key={index} className="bg-blue-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
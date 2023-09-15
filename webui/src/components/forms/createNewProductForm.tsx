import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Button } from '@components/ui';

const MAX_IMAGES = 3;
const MAX_FILE_SIZE_MB = 1;

const CreateNewProductForm: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState<{
    brand: string;
    name: string;
    price: string;
    description: string;
  }>({
    brand: '',
    name: '',
    price: '',
    description: '',
  });
  // const fileUploadElement = useRef();

  const inputStyle = 'border-2 py-1 px-4 rounded-md focus:border-2-blue-500'

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    // Filter to allow up to MAX_IMAGES files
    const selected = files.slice(0, MAX_IMAGES);

    // Check each file's size
    const validFiles = selected.filter((file) => file.size <= MAX_FILE_SIZE_MB * 1024 * 1024);

    setSelectedFiles(validFiles);
  };

  // const handleFileUpload = 

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedFiles.length === 0) {
      alert('Please select at least one image to upload.');
      return;
    }

    const data = new FormData();
    selectedFiles.forEach((file, index) => {
      data.append(`image${index}`, file);
    });
    data.append('brand', formData.brand);
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('description', formData.description);

    try {
      const response = await axios.post('/api/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className='m-8 bg-white p-8 rounded-md'>
      <h2 className='text-2xl mb-8'>Image Upload with Product Details</h2>
      <form className='grid gap-8' onSubmit={handleFormSubmit}>
        <div>
          <input
            
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            required
          />
          {/* <button onClick={handleFileUpload} >Upload Image</button> */}
        </div>
        <div className="flex flex-col">
          <label htmlFor='InputBrand'>Brand</label>
          <input
            id="InputBrand"
            className={inputStyle}
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='InputBrand'>Name</label>
          <input
            id="InputName"
            className={inputStyle}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='InputPrice'>Price:</label>
          <input
            id="InputPrice"
            className={inputStyle}
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='InputDesc'>Description:</label>
          <textarea
            id="InputDesc"
            className={inputStyle + ' h-[5rem]'}
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button
          type="submit"
          label="Upload"
          // onClick={handleFormSubmit}
        />
      </form>
    </div>
  );
};

export default CreateNewProductForm;

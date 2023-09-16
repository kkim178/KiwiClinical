import React, { useState } from 'react';
import Header from './components/header';

function Create() {
    const [formData, setFormData] = useState({
        clinicianEmail: '',
        name: '',
        description: '',
        compensation: '',
        weight_range_min: '',
        weight_range_max: '',
        height_range_min: '',
        height_range_max: '',
        weight_range: '',
        height_range: '',
        race: 'Caucasian'
    });

    const [sendData, setSendData] = useState({
        clinicianEmail: '',
        name: '',
        description: '',
        compensation: '',
        weight_range: '',
        height_range: '',
        race: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Format non strings as strings
            // Convert number fields to strings
        const stringifiedData = {
            ...formData,
            compensation: String(formData.compensation),
            weight_range_min: String(formData.weight_range_min),
            weight_range_max: String(formData.weight_range_max),
            height_range_min: String(formData.height_range_min),
            height_range_max: String(formData.height_range_max)
        };

        console.log("STRINGIFIED", stringifiedData);

        // Combine weight and height ranges
        const weightRange = `${formData.weight_range_min}-${formData.weight_range_max}`;
        const heightRange = `${formData.height_range_min}-${formData.height_range_max}`;

        // Now all fields are strings and data processed for send
        sendData.clinicianEmail = stringifiedData.clinicianEmail;
        sendData.name = stringifiedData.name;
        sendData.description = stringifiedData.description;
        sendData.compensation = stringifiedData.compensation;
        sendData.weight_range = weightRange;
        sendData.height_range = heightRange;

        console.log("Send", sendData);


        // Call your API to send the formData
        // For example:

        
    };

    return (
        <>
        <Header></Header>
        <div className="flex flex-col items-center justify-center w-full px-20 py-10 bg-white shadow-md rounded-md">
            <div>
                <h1 className="text-5xl font-extrabold">Promote your Trial!</h1>
            </div>
            <form onSubmit={handleSubmit} class="py-10">
                <div className="mb-4">
                    <label className="block text-black mb-2">Clinician Email</label>
                    <input type="email" name="clinicianEmail" placeholder="Clinician Email" value={formData.clinicianEmail} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2">Name of Trial</label>
                    <input type="text" name="name" placeholder="Trial Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2">Describe Trial</label>
                    <textarea name="description" placeholder="Describe the trial" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2">Monetary Compensation</label>
                    <input type="number" step="0.01" name="compensation" placeholder="Compensation Amount" value={formData.compensation} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2">Weight Range (Min)</label>
                    <input type="number" name="weight_range_min" placeholder="Minimum Weight" value={formData.weight_range_min} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2">Weight Range (Max)</label>
                    <input type="number" name="weight_range_max" placeholder="Maximum Weight" value={formData.weight_range_max} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2">Height Range (Min)</label>
                    <input type="number" name="height_range_min" placeholder="Minimum Height" value={formData.height_range_min} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2">Height Range (Max)</label>
                    <input type="number" name="height_range_max" placeholder="Maximum Height" value={formData.height_range_max} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2">Race</label>
                    <select name="race" value={formData.race} onChange={handleChange} className="w-full p-2 border rounded">
                        <option value="Caucasian">Caucasian</option>
                        <option value="African American">African American</option>
                        {/* ... other races ... */}
                    </select>
                </div>
                <button type="submit" className="bg-[#02C344] text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300">Submit</button>
            </form>
        </div>
        </>
    );
}

export default Create;
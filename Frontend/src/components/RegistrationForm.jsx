import { useState, useEffect } from 'react';

const RegistrationForm = () => {
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    department: '',
    yearOfLearning: '',
    dateOfBirth: '',
    aadharNumber: '',
    prnNumber: '',
    photo: null,
    aadharCard: null,
    idCard: null,
  });

  const [preview, setPreview] = useState({
    photo: null,
    aadharCard: null,
    idCard: null,
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Interactive validation on the fly
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required.';
        else if (value.trim().length < 3) error = 'Name must be at least 3 characters.';
        break;
      case 'age':
        if (!value) error = 'Age is required.';
        else if (value < 5 || value > 100) error = 'Age must be between 5 and 100.';
        break;
      case 'aadharNumber':
        if (!/^\d{4}\s?\d{4}\s?\d{4}$/.test(value)) error = 'Invalid Aadhar Number format.';
        break;
      case 'prnNumber':
        if (!value.trim()) error = 'PRN Number is required.';
        break;
      case 'department':
        if (!value.trim()) error = 'Department is required.';
        break;
      case 'yearOfLearning':
        if (!value) error = 'Please select your year of learning.';
        break;
      case 'dateOfBirth':
        if (!value) error = 'Date of Birth is required.';
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      setPreview((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(files[0]),
      }));
      setErrors((prev) => ({ ...prev, [name]: '' })); // Clear file errors on upload
    }
  };

  // Effect to check form validity whenever form data or errors change
  useEffect(() => {
    const requiredFields = ['name', 'age', 'department', 'yearOfLearning', 'dateOfBirth', 'aadharNumber', 'prnNumber', 'photo', 'aadharCard', 'idCard'];
    let valid = true;

    // Check if all required fields are filled and have no errors
    requiredFields.forEach((field) => {
      if (!formData[field] || errors[field]) {
        valid = false;
      }
    });

    setFormValid(valid);
  }, [formData, errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) return;

    // Proceed with form submission
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto shadow-lg rounded-3xl bg-white p-10">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-10 tracking-wide">
          Sport Club Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Personal Information Section */}
          <section className="bg-blue-50 rounded-2xl p-8 space-y-8">
            <h3 className="text-3xl font-semibold text-blue-800 border-b border-blue-300 pb-3">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-md font-semibold text-blue-800 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  placeholder="John Doe"
                  className={`w-full rounded-xl border px-4 py-3 font-medium transition 
                    ${errors.name ? 'border-red-500 text-red-600 placeholder-red-400' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300'} 
                    focus:outline-none`}
                />
                {errors.name && <p className="mt-1 text-red-600 text-sm">{errors.name}</p>}
              </div>
              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-md font-semibold text-blue-800 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min={5}
                  max={100}
                  value={formData.age}
                  onChange={handleInputChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  placeholder="18"
                  className={`w-full rounded-xl border px-4 py-3 font-medium transition 
                    ${errors.age ? 'border-red-500 text-red-600 placeholder-red-400' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300'} 
                    focus:outline-none`}
                />
                {errors.age && <p className="mt-1 text-red-600 text-sm">{errors.age}</p>}
              </div>
              {/* Department */}
              <div>
                <label htmlFor="department" className="block text-md font-semibold text-blue-800 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  placeholder="Computer Science"
                  className={`w-full rounded-xl border px-4 py-3 font-medium transition 
                    ${errors.department ? 'border-red-500 text-red-600 placeholder-red-400' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300'} 
                    focus:outline-none`}
                />
                {errors.department && <p className="mt-1 text-red-600 text-sm">{errors.department}</p>}
              </div>
              {/* Year of Learning */}
              <div>
                <label htmlFor="yearOfLearning" className="block text-md font-semibold text-blue-800 mb-2">
                  Year of Learning
                </label>
                <select
                  id="yearOfLearning"
                  name="yearOfLearning"
                  value={formData.yearOfLearning}
                  onChange={handleInputChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 font-medium transition 
                    ${errors.yearOfLearning ? 'border-red-500 text-red-600' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300'} 
                    focus:outline-none`}
                >
                  <option value="">Select Year</option>
                  <option value="FY">First Year</option>
                  <option value="SY">Second Year</option>
                  <option value="TY">Third Year</option>
                  <option value="LY">Last Year</option>
                </select>
                {errors.yearOfLearning && <p className="mt-1 text-red-600 text-sm">{errors.yearOfLearning}</p>}
              </div>
              {/* Date of Birth */}
              <div>
                <label htmlFor="dateOfBirth" className="block text-md font-semibold text-blue-800 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 font-medium transition 
                    ${errors.dateOfBirth ? 'border-red-500 text-red-600' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300'} 
                    focus:outline-none`}
                />
                {errors.dateOfBirth && <p className="mt-1 text-red-600 text-sm">{errors.dateOfBirth}</p>}
              </div>
              {/* PRN Number */}
              <div>
                <label htmlFor="prnNumber" className="block text-md font-semibold text-blue-800 mb-2">
                  PRN Number
                </label>
                <input
                  type="text"
                  id="prnNumber"
                  name="prnNumber"
                  value={formData.prnNumber}
                  onChange={handleInputChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  placeholder="PRN123456"
                  className={`w-full rounded-xl border px-4 py-3 font-medium transition 
                    ${errors.prnNumber ? 'border-red-500 text-red-600 placeholder-red-400' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300'} 
                    focus:outline-none`}
                />
                {errors.prnNumber && <p className="mt-1 text-red-600 text-sm">{errors.prnNumber}</p>}
              </div>
              {/* Aadhar Number */}
              <div className="md:col-span-2">
                <label htmlFor="aadharNumber" className="block text-md font-semibold text-blue-800 mb-2">
                  Aadhar Card Number
                </label>
                <input
                  type="text"
                  id="aadharNumber"
                  name="aadharNumber"
                  maxLength={14}
                  value={formData.aadharNumber}
                  onChange={handleInputChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  placeholder="XXXX XXXX XXXX"
                  className={`w-full rounded-xl border px-4 py-3 font-medium tracking-widest transition 
                    ${errors.aadharNumber ? 'border-red-500 text-red-600 placeholder-red-400' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300'} 
                    focus:outline-none`}
                />
                {errors.aadharNumber && <p className="mt-1 text-red-600 text-sm">{errors.aadharNumber}</p>}
              </div>
            </div>

            {/* Document Upload Section */}
            <section className="bg-blue-50 rounded-2xl p-8 space-y-8">
              <h3 className="text-3xl font-semibold text-blue-800 border-b border-blue-300 pb-3">
                Document Upload
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Photo Upload */}
                <div>
                  <label className="block text-md font-semibold text-blue-800 mb-3">
                    Your Photo
                  </label>
                  <div className={`w-full h-48 border-4 rounded-2xl p-3 flex items-center justify-center relative cursor-pointer border-dashed
                    ${errors.photo ? 'border-red-500 bg-red-50' : 'border-blue-400 bg-white hover:border-blue-500'}`}
                    onClick={() => document.getElementById('photo').click()}
                  >
                    {preview.photo ? (
                      <img
                        src={preview.photo}
                        alt="Photo preview"
                        className="h-full object-contain rounded-xl"
                      />
                    ) : (
                      <span className="text-blue-300 font-semibold">Click or Drop to Upload Photo</span>
                    )}
                  </div>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {errors.photo && <p className="mt-2 text-red-600 text-sm">{errors.photo}</p>}
                </div>

                {/* Aadhar Card Upload */}
                <div>
                  <label className="block text-md font-semibold text-blue-800 mb-3">
                    Aadhar Card
                  </label>
                  <div className={`w-full h-48 border-4 rounded-2xl p-3 flex items-center justify-center relative cursor-pointer border-dashed
                    ${errors.aadharCard ? 'border-red-500 bg-red-50' : 'border-blue-400 bg-white hover:border-blue-500'}`}
                    onClick={() => document.getElementById('aadharCard').click()}
                  >
                    {preview.aadharCard ? (
                      <img
                        src={preview.aadharCard}
                        alt="Aadhar preview"
                        className="h-full object-contain rounded-xl"
                      />
                    ) : (
                      <span className="text-blue-300 font-semibold">Click or Drop to Upload Aadhar</span>
                    )}
                  </div>
                  <input
                    type="file"
                    id="aadharCard"
                    name="aadharCard"
                    accept="image/*,.pdf"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {errors.aadharCard && <p className="mt-2 text-red-600 text-sm">{errors.aadharCard}</p>}
                </div>

                {/* ID Card Upload */}
                <div>
                  <label className="block text-md font-semibold text-blue-800 mb-3">
                    College ID Card
                  </label>
                  <div className={`w-full h-48 border-4 rounded-2xl p-3 flex items-center justify-center relative cursor-pointer border-dashed
                    ${errors.idCard ? 'border-red-500 bg-red-50' : 'border-blue-400 bg-white hover:border-blue-500'}`}
                    onClick={() => document.getElementById('idCard').click()}
                  >
                    {preview.idCard ? (
                      <img
                        src={preview.idCard}
                        alt="ID Card preview"
                        className="h-full object-contain rounded-xl"
                      />
                    ) : (
                      <span className="text-blue-300 font-semibold">Click or Drop to Upload ID Card</span>
                    )}
                  </div>
                  <input
                    type="file"
                    id="idCard"
                    name="idCard"
                    accept="image/*,.pdf"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {errors.idCard && <p className="mt-2 text-red-600 text-sm">{errors.idCard}</p>}
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-10 py-4 text-2xl font-bold text-white shadow-lg transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                aria-disabled={!formValid}
                disabled={!formValid}
                title={formValid ? 'Submit Registration' : 'Please fill all required fields correctly'}
              >
                Submit Registration
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

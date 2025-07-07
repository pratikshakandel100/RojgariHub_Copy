import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  const profileForm = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      bio: '',
      skills: '',
      hobbies: '',
      instagram: '',
      github: '',
      facebook: ''
    }
  });

  const onProfileSubmit = (data) => {
    console.log('Form data:', data);
    console.log('Profile Image:', profileImage);
    console.log('Resume File:', resumeFile);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setProfileImage(file);
    } else {
      alert('Please upload a valid image file (jpg, jpeg, png)');
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
    } else {
      alert('Only PDF files are allowed for resume upload');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
        <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
          <div className="flex justify-center relative">
            <label
              htmlFor="imageUpload"
              className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 shadow-sm relative cursor-pointer group"
              title="Click to upload image"
            >
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm bg-gray-50">
                  No Image
                </div>
              )}
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                {...profileForm.register('firstName', {
                  required: 'First name is required',
                  minLength: { value: 2, message: 'First name must be at least 2 characters' }
                })}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {profileForm.formState.errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {profileForm.formState.errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                {...profileForm.register('lastName', {
                  required: 'Last name is required',
                  minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                })}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {profileForm.formState.errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {profileForm.formState.errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              {...profileForm.register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {profileForm.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {profileForm.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              {...profileForm.register('bio', {
                maxLength: { value: 500, message: 'Bio must be less than 500 characters' }
              })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about yourself..."
            />
            {profileForm.formState.errors.bio && (
              <p className="text-red-500 text-sm mt-1">
                {profileForm.formState.errors.bio.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Skills (comma separated)</label>
            <input
              {...profileForm.register('skills')}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., JavaScript, React, Node.js"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hobbies (comma separated)</label>
            <input
              {...profileForm.register('hobbies')}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Reading, Hiking, Gaming"
            />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Social Media Links</h4>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                <input
                  {...profileForm.register('instagram')}
                  type="url"
                  placeholder="https://instagram.com/yourprofile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
                <input
                  {...profileForm.register('github')}
                  type="url"
                  placeholder="https://github.com/yourusername"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
                <input
                  {...profileForm.register('facebook')}
                  type="url"
                  placeholder="https://facebook.com/yourprofile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume (PDF only)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleResumeUpload}
              className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
            {resumeFile && <p className="text-sm text-green-600 mt-1">{resumeFile.name}</p>}
          </div>

          <div className="flex space-x-4 pt-2">
            <button
              type="submit"
              disabled={profileForm.formState.isSubmitting}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
            >
              {profileForm.formState.isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              type="button"
              onClick={() => profileForm.reset()}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

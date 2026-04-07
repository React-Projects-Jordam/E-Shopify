import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, 'Full name must be at least 3 characters')
      .required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match') 
      .required('Please confirm your password'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Registration Data:', values);
      alert('Account created successfully! Welcome to the family.');
      navigate('/login');
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Create Account</h2>
            <p className="text-gray-500 mt-2">Join us today! It only takes a minute.</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${
                  formik.touched.fullName && formik.errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                }`}
                {...formik.getFieldProps('fullName')}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-xs mt-1 font-medium">{formik.errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${
                  formik.touched.email && formik.errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                }`}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1 font-medium">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${
                  formik.touched.password && formik.errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                }`}
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1 font-medium">{formik.errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                }`}
                {...formik.getFieldProps('confirmPassword')}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1 font-medium">{formik.errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg mt-4 active:scale-95"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account? <span onClick={() => navigate('/login')} className="text-blue-600 font-bold cursor-pointer hover:underline">Log in</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
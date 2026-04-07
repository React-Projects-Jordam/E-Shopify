import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const USERS_DATABASE = [
  { email: 'admin@example.com', password: 'password123', name: 'Admin User' },
  { email: 'user@test.com', password: 'user789', name: 'John Doe' },
  { email: 'hajj@shop.com', password: 'hajjpassword', name: 'The Boss' },
  {email: 'aldarehomar@gmail.com', password:'0782343886', name: 'Omar Aldareya'},
];

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const foundUser = USERS_DATABASE.find(
        (u) => u.email === values.email && u.password === values.password
      );

      if (foundUser) {
        alert(`Welcome back, ${foundUser.name}! Login Successful.`);
        navigate('/'); 
      } else {
        alert('Invalid Email or Password. Please try again.');
      }
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 m-15">
        <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-slate-900">Sign In</h2>
            <p className="text-gray-500 mt-2">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="e.g. admin@example.com"
                className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${
                  formik.touched.email && formik.errors.email 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                }`}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1 font-medium">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${
                  formik.touched.password && formik.errors.password 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                }`}
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1 font-medium">{formik.errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-900 transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-blue-200"
            >
              Login
            </button>
          </form>

          <Link to={'/register'}>
          <div className="mt-8 text-center text-sm text-gray-500">
            Don't have an account? <span className="text-blue-600 font-bold cursor-pointer hover:underline">Register now</span>
          </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
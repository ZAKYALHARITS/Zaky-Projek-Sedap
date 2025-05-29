import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./assets/tailwind.css";
import React from "react";
import Loading from "./components/Loading";

// Lazy-loaded components
const Dashboard2 = React.lazy(() => import("./pages/Dashboard2"));
const Guest = React.lazy(() => import("./pages/Guest"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const ErrorPages = React.lazy(() => import("./pages/ErrorPages"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const User = React.lazy(() => import("./pages/User"));

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const ProductLayout = React.lazy(() => import("./layouts/ProductLayout"));
const AboutUsLayout = React.lazy(() => import("./layouts/AboutUsLayout"));
const KontakLayout = React.lazy(() => import("./layouts/KontakLayout"));
const CekKetersediaanLayout = React.lazy(() => import("./layouts/CekKetersediaanLayout"));
const BlogLayout = React.lazy(() => import("./layouts/BlogLayout")); // Tambahan baru!

const Products = React.lazy(() => import("./components/Products"));
const AboutSection = React.lazy(() => import("./components/AboutSection"));
const ContactSection = React.lazy(() => import("./components/ContactSection"));
const CekKetersediaanProduk = React.lazy(() => import("./components/CekKetersediaanProduk"));
const BlogPosts = React.lazy(() => import("./components/BlogPosts")); // Tambahan baru!

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Redirect root ("/") to /guest */}
        <Route path="/" element={<Navigate to="/guest" />} />

        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard2 />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/errorpages/400" element={<ErrorPages errorCode="400" />} />
          <Route path="/errorpages/401" element={<ErrorPages errorCode="401" />} />
          <Route path="/errorpages/403" element={<ErrorPages errorCode="403" />} />
          <Route path="/user" element={<User />} />
        </Route>

        {/* Auth Layout Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Guest Layout Routes */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
        </Route>

        {/* Product Layout Routes */}
        <Route element={<ProductLayout />}>
          <Route path="/products" element={<Products />} />
        </Route>

        {/* About Us Layout Routes */}
        <Route element={<AboutUsLayout />}>
          <Route path="/about" element={<AboutSection />} />
        </Route>

        {/* Kontak Layout Routes */}
        <Route element={<KontakLayout />}>
          <Route path="/contact" element={<ContactSection />} />
        </Route>

        {/* Cek Ketersediaan Layout Routes */}
        <Route element={<CekKetersediaanLayout />}>
          <Route path="/availability" element={<CekKetersediaanProduk />} />
        </Route>

        {/* Blog Layout Routes */}
        <Route element={<BlogLayout />}>
          <Route path="/blog" element={<BlogPosts />} />
        </Route>

        {/* Catch-all route for NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;

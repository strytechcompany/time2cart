import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { LoadingProvider } from './context/LoadingContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalLoader from './components/GlobalLoader';

import './index.css';

// 🔹 Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Categories = lazy(() => import('./pages/Categories'));
const CandleSubcategories = lazy(() => import('./pages/CandleSubcategories'));
const Cart = lazy(() => import('./pages/Cart'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Contact = lazy(() => import('./pages/Contact'));
const UserLogin = lazy(() => import('./pages/UserLogin'));
const UserRegister = lazy(() => import('./pages/UserRegister'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const NewArrivals = lazy(() => import('./pages/NewArrivals'));
const SaleProducts = lazy(() => import('./pages/SaleProducts'));
const TrendingProducts = lazy(() => import('./pages/TrendingProducts'));
const GiftProducts = lazy(() => import('./pages/GiftProducts'));
const FeaturedProducts = lazy(() => import('./pages/FeaturedProducts'));
const BestSellers = lazy(() => import('./pages/BestSellers'));
const Kids = lazy(() => import('./pages/Kids'));
const ReligiousProducts = lazy(() => import('./pages/Religious'));

// 🔹 NEW Candle & Collection Pages
const ScentedCandles = lazy(() => import('./pages/ScentedCandles'));
const SoyWaxCandles = lazy(() => import('./pages/SoyWaxCandles'));
const DecorCandles = lazy(() => import('./pages/DecorCandles'));
const AromatherapyCandles = lazy(() => import('./pages/AromatherapyCandles'));
const LuxuryCollection = lazy(() => import('./pages/LuxuryCollection'));
const GiftSetsCollection = lazy(() => import('./pages/GiftSetsCollection'));

// 🔹 Lazy load admin pages
const AdminLogin = lazy(() => import('./admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));
const AdminProducts = lazy(() => import('./admin/AdminProducts'));
const AdminOrders = lazy(() => import('./admin/AdminOrders'));
const AdminSettings = lazy(() => import('./admin/AdminSettings'));
const AdminContacts = lazy(() => import('./admin/AdminContacts'));
const AdminUsers = lazy(() => import('./admin/AdminUser'));
const ProtectedRoute = lazy(() => import('./admin/ProtectedRoute'));

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <div className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />

                <main className="flex-1">
                  <Suspense fallback={<GlobalLoader />}>
                    <Routes>
                      {/* User Routes */}
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:id" element={<ProductDetail />} />
                      <Route path="/categories" element={<Categories />} />
                      <Route path="/candles-subcategories" element={<CandleSubcategories />} />

                      {/* 🔹 NEW Candle Routes */}
                      <Route path="/candles-subcategories/scented" element={<ScentedCandles />} />
                      <Route path="/candles-subcategories/soy-wax" element={<SoyWaxCandles />} />
                      <Route path="/candles-subcategories/decor" element={<DecorCandles />} />
                      <Route path="/candles-subcategories/aromatherapy" element={<AromatherapyCandles />} />

                      {/* 🔹 NEW Collection Routes */}
                      <Route path="/candles-subcategories/luxury" element={<LuxuryCollection />} />
                      <Route path="/candles-subcategories/gift-sets" element={<GiftSetsCollection />} />

                      <Route path="/new-arrivals" element={<NewArrivals />} />
                      <Route path="/sale" element={<SaleProducts />} />
                      <Route path="/trending" element={<TrendingProducts />} />
                      <Route path="/gifts" element={<GiftProducts />} />
                      <Route path="/featured" element={<FeaturedProducts />} />
                      <Route path="/bestsellers" element={<BestSellers />} />
                      <Route path="/kids" element={<Kids />} />
                      <Route path="/religious-products" element={<ReligiousProducts />} />

                      <Route path="/cart" element={<Cart />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/user/login" element={<UserLogin />} />
                      <Route path="/user/register" element={<UserRegister />} />
                      <Route path="/user/dashboard" element={<UserDashboard />} />

                      {/* Admin Routes */}
                      <Route path="/admin/login" element={<AdminLogin />} />
                      <Route
                        path="/admin/*"
                        element={
                          <ProtectedRoute>
                            <Routes>
                              <Route path="/" element={<AdminDashboard />} />
                              <Route path="products" element={<AdminProducts />} />
                              <Route path="orders" element={<AdminOrders />} />
                              <Route path="settings" element={<AdminSettings />} />
                              <Route path="contacts" element={<AdminContacts />} />
                              <Route path="users" element={<AdminUsers />} />
                              <Route path="*" element={<AdminDashboard />} />
                            </Routes>
                          </ProtectedRoute>
                        }
                      />
                    </Routes>
                  </Suspense>
                </main>

                <Footer />

                <Toaster
                  position="top-right"
                  toastOptions={{
                    duration: 3000,
                    style: {
                      background: '#363636',
                      color: '#fff',
                    },
                  }}
                />
              </div>
            </Router>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </LoadingProvider>
  );
};

export default App;


// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// // Context Providers
// import { AuthProvider } from "./context/AuthContext";
// import { CartProvider } from "./context/CartContext";
// import { WishlistProvider } from "./context/WishlistContext";
// import { LoadingProvider } from "./context/LoadingContext";

// // Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import GlobalLoader from "./components/GlobalLoader";

// import "./index.css";

// // 🔹 Lazy load pages
// const Home = lazy(() => import("./pages/Home"));
// const Products = lazy(() => import("./pages/Products"));
// const ProductDetail = lazy(() => import("./pages/ProductDetail"));
// const Categories = lazy(() => import("./pages/Categories"));
// const CandleSubcategories = lazy(() => import("./pages/CandleSubcategories"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Wishlist = lazy(() => import("./pages/Wishlist"));
// const Checkout = lazy(() => import("./pages/Checkout"));
// const Contact = lazy(() => import("./pages/Contact"));
// const UserLogin = lazy(() => import("./pages/UserLogin"));
// const UserRegister = lazy(() => import("./pages/UserRegister"));
// const UserDashboard = lazy(() => import("./pages/UserDashboard"));
// const NewArrivals = lazy(() => import("./pages/NewArrivals"));
// const SaleProducts = lazy(() => import("./pages/SaleProducts"));
// const TrendingProducts = lazy(() => import("./pages/TrendingProducts"));
// const GiftProducts = lazy(() => import("./pages/GiftProducts"));
// const FeaturedProducts = lazy(() => import("./pages/FeaturedProducts"));
// const BestSellers = lazy(() => import("./pages/BestSellers"));
// const Kids = lazy(() => import("./pages/Kids"));
// const ReligiousProducts = lazy(() => import("./pages/Religious"));

// // 🔹 Candle & Collection Pages
// const ScentedCandles = lazy(() => import("./pages/ScentedCandles"));
// const SoyWaxCandles = lazy(() => import("./pages/SoyWaxCandles"));
// const DecorCandles = lazy(() => import("./pages/DecorCandles"));
// const AromatherapyCandles = lazy(() => import("./pages/AromatherapyCandles"));
// const LuxuryCollection = lazy(() => import("./pages/LuxuryCollection"));
// const GiftSetsCollection = lazy(() => import("./pages/GiftSetsCollection"));

// // 🔹 Admin Pages
// const AdminLogin = lazy(() => import("./admin/AdminLogin"));
// const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));
// const AdminProducts = lazy(() => import("./admin/AdminProducts"));
// const AdminOrders = lazy(() => import("./admin/AdminOrders"));
// const AdminSettings = lazy(() => import("./admin/AdminSettings"));
// const AdminContacts = lazy(() => import("./admin/AdminContacts"));
// const AdminUsers = lazy(() => import("./admin/AdminUser"));
// const ProtectedRoute = lazy(() => import("./admin/ProtectedRoute"));

// const App: React.FC = () => {
//   return (
//     <LoadingProvider>
//       <AuthProvider>
//         <CartProvider>
//           <WishlistProvider>
//             <Router>
//               <div className="min-h-screen bg-gray-50 flex flex-col">
//                 <Navbar />

//                 <main className="flex-1">
//                   <Suspense fallback={<GlobalLoader />}>
//                     <Routes>
//                       {/* ---------------- USER ROUTES ---------------- */}
//                       <Route path="/" element={<Home />} />
//                       <Route path="/products" element={<Products />} />
//                       <Route path="/products/:id" element={<ProductDetail />} />
//                       <Route path="/categories" element={<Categories />} />
//                       <Route path="/candles-subcategories" element={<CandleSubcategories />} />

//                       <Route path="/candles-subcategories/scented" element={<ScentedCandles />} />
//                       <Route path="/candles-subcategories/soy-wax" element={<SoyWaxCandles />} />
//                       <Route path="/candles-subcategories/decor" element={<DecorCandles />} />
//                       <Route path="/candles-subcategories/aromatherapy" element={<AromatherapyCandles />} />

//                       <Route path="/candles-subcategories/luxury" element={<LuxuryCollection />} />
//                       <Route path="/candles-subcategories/gift-sets" element={<GiftSetsCollection />} />

//                       <Route path="/new-arrivals" element={<NewArrivals />} />
//                       <Route path="/sale" element={<SaleProducts />} />
//                       <Route path="/trending" element={<TrendingProducts />} />
//                       <Route path="/gifts" element={<GiftProducts />} />
//                       <Route path="/featured" element={<FeaturedProducts />} />
//                       <Route path="/bestsellers" element={<BestSellers />} />
//                       <Route path="/kids" element={<Kids />} />
//                       <Route path="/religious-products" element={<ReligiousProducts />} />

//                       <Route path="/cart" element={<Cart />} />
//                       <Route path="/wishlist" element={<Wishlist />} />
//                       <Route path="/checkout" element={<Checkout />} />
//                       <Route path="/contact" element={<Contact />} />
//                       <Route path="/user/login" element={<UserLogin />} />
//                       <Route path="/user/register" element={<UserRegister />} />
//                       <Route path="/user/dashboard" element={<UserDashboard />} />

//                       {/* ---------------- ADMIN ROUTES (FIXED) ---------------- */}
//                       <Route path="/admin/login" element={<AdminLogin />} />

//                       <Route
//                         path="/admin/dashboard"
//                         element={
//                           <ProtectedRoute>
//                             <AdminDashboard />
//                           </ProtectedRoute>
//                         }
//                       />

//                       <Route
//                         path="/admin/products"
//                         element={
//                           <ProtectedRoute>
//                             <AdminProducts />
//                           </ProtectedRoute>
//                         }
//                       />

//                       <Route
//                         path="/admin/orders"
//                         element={
//                           <ProtectedRoute>
//                             <AdminOrders />
//                           </ProtectedRoute>
//                         }
//                       />

//                       <Route
//                         path="/admin/settings"
//                         element={
//                           <ProtectedRoute>
//                             <AdminSettings />
//                           </ProtectedRoute>
//                         }
//                       />

//                       <Route
//                         path="/admin/contacts"
//                         element={
//                           <ProtectedRoute>
//                             <AdminContacts />
//                           </ProtectedRoute>
//                         }
//                       />

//                       <Route
//                         path="/admin/users"
//                         element={
//                           <ProtectedRoute>
//                             <AdminUsers />
//                           </ProtectedRoute>
//                         }
//                       />
//                     </Routes>
//                   </Suspense>
//                 </main>

//                 <Footer />

//                 <Toaster
//                   position="top-right"
//                   toastOptions={{
//                     duration: 3000,
//                     style: {
//                       background: "#363636",
//                       color: "#fff",
//                     },
//                   }}
//                 />
//               </div>
//             </Router>
//           </WishlistProvider>
//         </CartProvider>
//       </AuthProvider>
//     </LoadingProvider>
//   );
// };

// export default App;






// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

// // Context Providers
// import { AuthProvider } from './context/AuthContext';
// import { CartProvider } from './context/CartContext';
// import { WishlistProvider } from './context/WishlistContext';
// import { LoadingProvider } from './context/LoadingContext';

// // Components (not lazy since they appear on every page)
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import GlobalLoader from './components/GlobalLoader';

// import './index.css';

// // 🔹 Lazy load pages
// const Home = lazy(() => import('./pages/Home'));
// const Products = lazy(() => import('./pages/Products'));
// const ProductDetail = lazy(() => import('./pages/ProductDetail'));
// const Categories = lazy(() => import('./pages/Categories'));
// const CandleSubcategories = lazy(() => import('./pages/CandleSubcategories'));
// const Cart = lazy(() => import('./pages/Cart'));
// const Wishlist = lazy(() => import('./pages/Wishlist'));
// const Checkout = lazy(() => import('./pages/Checkout'));
// const Contact = lazy(() => import('./pages/Contact'));
// const UserLogin = lazy(() => import('./pages/UserLogin'));
// const UserRegister = lazy(() => import('./pages/UserRegister'));
// const UserDashboard = lazy(() => import('./pages/UserDashboard'));
// const NewArrivals = lazy(() => import('./pages/NewArrivals'));
// const SaleProducts = lazy(() => import('./pages/SaleProducts'));
// const TrendingProducts = lazy(() => import('./pages/TrendingProducts'));
// const GiftProducts = lazy(() => import('./pages/GiftProducts'));
// const FeaturedProducts = lazy(() => import('./pages/FeaturedProducts'));
// const BestSellers = lazy(() => import('./pages/BestSellers'));
// const Kids = lazy(() => import('./pages/Kids'));
// const ReligiousProducts = lazy(() => import('./pages/Religious'));

// // 🔹 Lazy load admin pages
// const AdminLogin = lazy(() => import('./admin/AdminLogin'));
// const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));
// const AdminProducts = lazy(() => import('./admin/AdminProducts'));
// const AdminOrders = lazy(() => import('./admin/AdminOrders'));
// const AdminSettings = lazy(() => import('./admin/AdminSettings'));
// const AdminContacts = lazy(() => import('./admin/AdminContacts'));
// const AdminUsers = lazy(() => import('./admin/AdminUser'));
// const ProtectedRoute = lazy(() => import('./admin/ProtectedRoute'));

// const App: React.FC = () => {
//   return (
//     <LoadingProvider>
//       <AuthProvider>
//         <CartProvider>
//           <WishlistProvider>
//             <Router>
//               <div className="min-h-screen bg-gray-50 flex flex-col">
//                 <Navbar />
//                 <main className="flex-1">
//                   {/* 🔹 Wrap Routes in Suspense to show a loader while lazy components load */}
//                   <Suspense fallback={<GlobalLoader />}>
//                     <Routes>
//                       {/* User Routes */}
//                       <Route path="/" element={<Home />} />
//                       <Route path="/products" element={<Products />} />
//                       <Route path="/products/:id" element={<ProductDetail />} />
//                       <Route path="/categories" element={<Categories />} />
//                       <Route path="/candles-subcategories" element={<CandleSubcategories />} />
//                       <Route path="/new-arrivals" element={<NewArrivals />} />
//                       <Route path="/sale" element={<SaleProducts />} />
//                       <Route path="/trending" element={<TrendingProducts />} />
//                       <Route path="/gifts" element={<GiftProducts />} />
//                       <Route path="/featured" element={<FeaturedProducts />} />
//                       <Route path="/bestsellers" element={<BestSellers />} />
//                       <Route path="/cart" element={<Cart />} />
//                       <Route path="/wishlist" element={<Wishlist />} />
//                       <Route path="/checkout" element={<Checkout />} />
//                       <Route path="/contact" element={<Contact />} />
//                       <Route path="/user/login" element={<UserLogin />} />
//                       <Route path="/user/register" element={<UserRegister />} />
//                       <Route path="/user/dashboard" element={<UserDashboard />} />
//                       <Route path="/kids" element={<Kids />} />
//                       <Route path="/religious-products" element={<ReligiousProducts />} />

//                       {/* Admin Routes */}
//                       <Route path="/admin/login" element={<AdminLogin />} />
//                       <Route
//                         path="/admin/*"
//                         element={
//                           <ProtectedRoute>
//                             <Routes>
//                               <Route path="/" element={<AdminDashboard />} />
//                               <Route path="products" element={<AdminProducts />} />
//                               <Route path="orders" element={<AdminOrders />} />
//                               <Route path="settings" element={<AdminSettings />} />
//                               <Route path="contacts" element={<AdminContacts />} />
//                               <Route path="users" element={<AdminUsers />} />
//                               <Route path="*" element={<AdminDashboard />} />
//                             </Routes>
//                           </ProtectedRoute>
//                         }
//                       />
//                     </Routes>
//                   </Suspense>
//                 </main>
//                 <Footer />
//                 <Toaster
//                   position="top-right"
//                   toastOptions={{
//                     duration: 3000,
//                     style: {
//                       background: '#363636',
//                       color: '#fff',
//                     },
//                   }}
//                 />
//               </div>
//             </Router>
//           </WishlistProvider>
//         </CartProvider>
//       </AuthProvider>
//     </LoadingProvider>
//   );
// };

// export default App;

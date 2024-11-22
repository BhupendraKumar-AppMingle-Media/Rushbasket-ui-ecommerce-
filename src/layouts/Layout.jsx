import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login.jsx";
import VerificationLogin from "../components/Login/VerificationLogin.jsx";

// order
import ActiveOrder from "../components/Orders/ActiveOrder.jsx";
import CancelledOrder from "../components/Orders/CancelledOrder.jsx";
import FulfilledOrder from "../components/Orders/FulfilledOrder.jsx";
import PendingOrder from "../components/Orders/PendingOrder.jsx";
import PreviewOrder from "../components/Orders/PreviewOrder.jsx";
// product
import Products from "../pages/Products";

import AddProduct from "../components/Product/AddProduct.jsx";
import AllProduct from "../components/Product/AllProduct.jsx";
import InventoryProduct from "../components/Product/Inventory/InventoryProduct.jsx";
// allproduct==>edit,preview
import Editallproducts from "../components/Product/ActionAllProducts/EditAllProducts.jsx";
import Previewallproducts from "../components/Product/ActionAllProducts/PreviewAllProducts.jsx";

import CategoryProduct from "../components/Product/ProductCategory/CategoriesProduct.jsx";
import AddProductCategories from "../components/Product/ProductCategory/AddProductCategories.jsx";
import AddProductSubCategories from "../components/Product/ProductCategory/AddProductSubCategories.jsx";

// sidebar-pages
// customers
import Customers from "../components/customers/Customers.jsx";
import CustomersList from "../components/customers/CustomersList.jsx";
import BuyerListCustomers from "../components/customers/BuyerListCustomers.jsx";
//customers  action
import PreviewCustomers from "../components/customers/PreviewCustomers.jsx";
import EditCustomers from "../components/customers/EditCustomers.jsx";

import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
// import Inventory from "../pages/Inventory";
import HotOffer from "../pages/HotOffer";
// product
// import Products from "../pages/Products";

import Reviews from "../pages/Review Management/Reviews.jsx";
import FlagReview from "../pages/Review Management/FlagReview.jsx";
import Transactions from "../pages/Transactions.jsx";

// push-notification-management
import PushNotifications from "../pages/PushNotification/PushNotifications.jsx";
import AddNotifications from "../pages/PushNotification/AddNotifications.jsx";
import ViewNotification from "../pages/PushNotification/ViewNotification.jsx";
import EditNotification from "../pages/PushNotification/EditNotification.jsx";

// popups
import PopupsManage from "../pages/PopupsManagement/PopupsManage.jsx";
import AddPopupsForm from "../pages/PopupsManagement/AddPopupsForm.jsx";
import EditPopups from "../pages/PopupsManagement/EditPopups.jsx";
// coupon
import CouponManage from "../pages/CouponManagement/Coupon.jsx";
import CouponManageForm from "../pages/CouponManagement/CouponForm.jsx";

// earning report
import EarningReport from "../pages/EarningReport.jsx";
// support manage
import SupportManage from "../pages/SupportManagement/SupportManagement.jsx";
// delivery management
import DeliveryManagement from "../pages/DeliveryManagement/DeliveryManagement.jsx";
import DeliveryList from "../pages/DeliveryManagement/DeliveryList.jsx";
import DeliveryStatusTracking from "../pages/DeliveryManagement/DeliveryStatusTracking.jsx";

import AssignDeliveries from '../pages/DeliveryManagement/AssignDeliveries';
import SearchPersonnel from '../pages/DeliveryManagement/SearchPersonnel';
import PerformanceDashboard from '../pages/DeliveryManagement/PerformanceDashboard';

// profile
import Profile from "../pages/ProfileSection/Profile.jsx";
import ProfileDetails from "../pages/ProfileSection/ProfileDetails.jsx";
import ProfileEdit from "../pages/ProfileSection/ProfileEdit.jsx";

import ReplyReview from "../pages/Review Management/ReplyReview.jsx";
import ViewReview from "../pages/Review Management/ViewReview.jsx";
import EditReview from "../pages/Review Management/EditReview.jsx";
//
import Settings from "../pages/Settings.jsx";

// categories management

// import CategoryManagement from '../components/Product/ProductCategory/CategoryManagement.jsx';
// import SubcategoryManagement from '../components/Product/ProductCategory/SubcategoryManagement.jsx';
import EditCategory from '../components/Product/ProductCategory/EditCategory.jsx';
import EditSubcategory from '../components/Product/ProductCategory/EditSubcategory.jsx';


const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        {/* products-all-action-routes */}
        <Route path="/allproducts-edit/:id" element={<Editallproducts />} />
        <Route path="/allproducts-preview/:id" element={<Previewallproducts />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/categories" element={<CategoryProduct />} />
        <Route path="/inventoryproduct" element={<InventoryProduct />} />
        {/*  */}
        <Route path="/add-categories" element={<AddProductCategories />} />
        <Route
          path="/add-subcategories"
          element={<AddProductSubCategories />}
        />

        {/* categories management */}



{/* 
                <Route  path="/categoriess" element={<CategoryManagement/>} />
                <Route  path="/subcategories/:categoryId" element={<SubcategoryManagement/>} />*/}
                <Route  path="/edit-category/:id" element={<EditCategory/>} />
                <Route  path="/edit-subcategory/:id" element={<EditSubcategory/>} /> 





        {/* Orders  */}
        <Route path="/order-active" element={<ActiveOrder />} />
        <Route path="/order-cancel" element={<CancelledOrder />} />
        <Route path="/order-pending" element={<PendingOrder />} />
        <Route path="/order-history" element={<FulfilledOrder />} />
        <Route path="/order-preview" element={<PreviewOrder />} />

        {/* <Route path="/order-active" element={<ActiveUser />} />
        <Route path="/orders/preview" element={<OrderPreviewCard />} /> */}

        <Route path="/customers" element={<Customers />} />
        <Route path="/customerlist" element={<CustomersList />} />
        <Route path="/buyerlist" element={<BuyerListCustomers />} />
        
        <Route path="/previewcustomers" element={<PreviewCustomers />} />
        <Route path="/editcustomers" element={<EditCustomers />} />
        {/* review */}

        <Route path="/reviews" element={<Reviews />} />
        <Route path="/flag-review" element={<FlagReview />} />
        <Route path="/reply-review" element={<ReplyReview />} />
        <Route path="/preview-review" element={<ViewReview />} />
        <Route path="/edit-review" element={<EditReview />} />

        {/* <Route path="/transections" element={<Transections />} /> */}
        <Route path="/offers" element={<HotOffer />} />

        <Route path="/list" element={<AllProduct />} />
        <Route path="/analytics" element={<Analytics />} />
        {/* <Route path="/inventory" element={<Inventory />} /> */}

        <Route path="/settings" element={<Settings/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/verificationadmin" element={<VerificationLogin />} />


        {/* push-notification */}
        <Route path="/push-notifications" element={<PushNotifications />} />
        <Route path="/add-push-notifications" element={<AddNotifications />} />
        <Route path="/view-push-notifications" element={<ViewNotification />} />
        <Route path="/edit-push-notifications" element={<EditNotification />} />



        {/* popups */}
        <Route path="/popups-management" element={<PopupsManage />} />
        <Route path="/addpopupsform" element={<AddPopupsForm />} />
        <Route path="/earning-report" element={<EarningReport />} />
        <Route path="/edit-popups" element={<EditPopups />} />


        {/* coupon management */}
        <Route path="/coupon-management" element={<CouponManage />} />
        <Route path="/coupon-form" element={<CouponManageForm />} />
        {/* support management */}
        <Route path="/support" element={<SupportManage />} />
        {/* delivery management */}
        <Route path="/delivery-management" element={<DeliveryManagement />} />
        <Route path="/delivery-list" element={< DeliveryList />} />
        <Route
          path="/DeliveryStatusTracking"
          element={<DeliveryStatusTracking />}
        />

          <Route path="/assign-deliveries" element={<AssignDeliveries />} />
          <Route path="/search-personnel" element={<SearchPersonnel />} />
          <Route path="/performance-dashboard" element={<PerformanceDashboard />} />

        {/* profile */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-details" element={<ProfileDetails />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />

      
        <Route path="/transactions" element={<Transactions />} />

        <Route path="*" element={<h2>404, Page Not Found</h2>} />
      </Routes>
    </>
  );
};

export default Layout;

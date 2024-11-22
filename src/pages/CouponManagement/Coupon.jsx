import { useState } from 'react';
import CouponForm from './CouponForm';
import CouponList from './CouponList';

function Coupon() {
    const [coupons, setCoupons] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleCreateCoupon = (newCoupon) => {
        if (coupons.length < 2) {
            setCoupons([...coupons, newCoupon]);
            setIsFormVisible(false); // Close form after creating a coupon
        }
    };

    const handleDeleteCoupon = (couponToDelete) => {
        setCoupons(coupons.filter((coupon) => coupon.code !== couponToDelete.code));
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div className="container mx-auto p-6">
            {isFormVisible ? (
                <CouponForm
                    onCreateCoupon={handleCreateCoupon}
                    onCancel={toggleFormVisibility}
                    coupons={coupons}
                />
            ) : (
                <CouponList
                    coupons={coupons}
                    onDeleteCoupon={handleDeleteCoupon}
                    onShowForm={toggleFormVisibility}
                />
            )}
        </div>
    );
}

export default Coupon;

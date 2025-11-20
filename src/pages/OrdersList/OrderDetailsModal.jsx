import React, { useContext, useState } from "react";
import axios from "axios";
import { localHost, renderAPI } from "../../constants";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import { AdminContext } from "../../context/AdminContext";

const OrderDetailsModal = ({ order, onClose, onUpdate }) => {
  const [status, setStatus] = useState(order.status);
  const [paymentStatus, setPaymentStatus] = useState(order.paymentStatus);
  const [loading, setLoading] = useState(false);

  const { token } = useContext(AdminContext);

  const handleUpdate = async () => {
    try {
      setLoading(true);

      await axios.put(
        `${
          location.origin.includes("localhost") ? localHost : renderAPI
        }/api/order/${order._id}`,
        { status, paymentStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Order updated successfully!");
      onUpdate(); // Refresh orders list
      onClose();
    } catch (err) {
      toast.error("Failed to update order");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Order Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Order Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm">Tracking ID</p>
              <p className="text-white font-semibold">{order.trackingId}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Date</p>
              <p className="text-white">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Customer</p>
              <p className="text-white">
                {order.owner
                  ? `${order.owner.firstName} ${order.owner.lastName}`
                  : order.guestInfo?.name || "Guest"}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total</p>
              <p className="text-white font-bold">
                {formatAmount(order.total)}
              </p>
            </div>
          </div>

          {/* Items */}
          <div>
            <h3 className="text-white font-semibold mb-3">Items</h3>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-3 rounded flex justify-between"
                >
                  <div>
                    <p className="text-white">{item.name}</p>
                    <p className="text-gray-400 text-sm">
                      Qty: {item.qty} {item.size && `• Size: ${item.size}`}
                    </p>
                  </div>
                  <p className="text-white">
                    {formatAmount(item.price * item.qty)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          {order.shippingAddress && (
            <div>
              <h3 className="text-white font-semibold mb-2">
                Shipping Address
              </h3>
              <div className="bg-gray-800 p-3 rounded text-gray-300 text-sm">
                <p>
                  {order.shippingAddress.firstName}{" "}
                  {order.shippingAddress.lastName}
                </p>
                <p>{order.shippingAddress.line1}</p>
                {order.shippingAddress.line2 && (
                  <p>{order.shippingAddress.line2}</p>
                )}
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                  {order.shippingAddress.postalCode}
                </p>
                <p>{order.shippingAddress.phone}</p>
              </div>
            </div>
          )}

          {/* Status Updates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Order Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded p-2"
              >
                <option value="processing">Processing</option>
                <option value="confirmed">Confirmed</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Payment Status
              </label>
              <select
                value={paymentStatus}
                onChange={(e) => setPaymentStatus(e.target.value)}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded p-2"
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="failed">Failed</option>
                <option value="refunded">Refunded</option>
              </select>
            </div>
          </div>

          {/* Warning when setting to delivered */}
          {status === "delivered" && order.status !== "delivered" && (
            <div className="bg-blue-900/20 border border-blue-800 rounded p-3">
              <p className="text-blue-300 text-sm">
                ⚡ Setting status to "Delivered" will automatically award
                purchase XP to the customer.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleUpdate}
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Order"}
            </button>
            <button
              onClick={onClose}
              className="px-6 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;

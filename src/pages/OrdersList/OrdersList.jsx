import React, { useContext, useEffect, useState } from "react";
import { OrderModal, OrdersListContainer } from "./OrdersListStyles";
import { PageHeader, PageSearch } from "../../AppStyles";
import { UIContext } from "../../context/UIContext";
import { HomeOrder, HomeOrders, HomeOrderTitles } from "../Home/HomeStyles";
import axios from "axios";
import { localHost, renderAPI } from "../../constants";
import { toast } from "react-toastify";
import { AdminContext } from "../../context/AdminContext";
import OrderDetailsModal from "./OrderDetailsModal";

const OrdersList = () => {
  const { darkMode, selectPage, toggleOrderModal } = useContext(UIContext);
  const { token } = useContext(AdminContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    selectPage("orders");
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        `${
          location.origin.includes("localhost") ? localHost : renderAPI
        }/api/order`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setOrders(res.data);
    } catch (err) {
      toast.error("Failed to fetch orders");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  const getStatusColor = (status) => {
    const colors = {
      processing: "#FFA500",
      confirmed: "#2196F3",
      shipped: "#9C27B0",
      delivered: "#4CAF50",
      cancelled: "#F44336",
    };
    return colors[status] || "#999";
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    toggleOrderModal();
  };

  // Filter orders based on search
  const filteredOrders = orders.filter((order) => {
    const searchLower = searchTerm.toLowerCase();
    const customerName = order.owner
      ? `${order.owner.firstName} ${order.owner.lastName}`.toLowerCase()
      : order.guestInfo?.name?.toLowerCase() || "";

    return (
      order.trackingId.toLowerCase().includes(searchLower) ||
      customerName.includes(searchLower)
    );
  });

  if (loading) {
    return (
      <OrdersListContainer>
        <PageHeader>
          <p>Orders</p>
        </PageHeader>
        <p className="text-center mt-8">Loading orders...</p>
      </OrdersListContainer>
    );
  }

  return (
    <OrdersListContainer>
      <PageHeader>
        <p>Orders ({orders.length})</p>
      </PageHeader>

      <PageSearch darkMode={darkMode}>
        <input
          type="text"
          placeholder="Search by tracking ID or customer name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </PageSearch>

      <HomeOrders>
        <HomeOrderTitles>
          <p className="products">Product</p>
          <p className="id">Order ID</p>
          <p className="date">Date</p>
          <p className="name">Customer Name</p>
          <p className="status">Status</p>
          <p className="amount">Amount</p>
          <p className="action">View</p>
        </HomeOrderTitles>

        {filteredOrders.length === 0 ? (
          <p className="text-center mt-8 text-gray-400">
            {searchTerm ? "No orders found" : "No orders yet"}
          </p>
        ) : (
          filteredOrders.map((order) => (
            <HomeOrder key={order._id}>
              <hr />
              <div>
                <p className="products">
                  {order.items.length === 1
                    ? order.items[0].name
                    : `${order.items.length} items`}
                </p>
                <p className="id">{order.trackingId}</p>
                <p className="date">{formatDate(order.createdAt)}</p>
                <p className="name">
                  {order.owner
                    ? `${order.owner.firstName} ${order.owner.lastName}`
                    : order.guestInfo?.name || "Guest"}
                </p>
                <p className="status">
                  <div
                    style={{ backgroundColor: getStatusColor(order.status) }}
                  ></div>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </p>
                <p className="amount">{formatAmount(order.total)}</p>
                <p className="action">
                  <div onClick={() => handleViewDetails(order)}>Details</div>
                </p>
              </div>
            </HomeOrder>
          ))
        )}
      </HomeOrders>

      {/* Order Details Modal will go here */}
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => {
            setSelectedOrder(null);
            toggleOrderModal();
          }}
          onUpdate={fetchOrders}
        />
      )}
    </OrdersListContainer>
  );
};

export default OrdersList;

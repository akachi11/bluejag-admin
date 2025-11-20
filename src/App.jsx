import { useContext, useEffect, useRef, useState } from "react";
import {
  AppContainer,
  AppContent,
  FixedSideBar,
  LoadingScreen,
  PageHeader,
} from "./AppStyles";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import { UIContext } from "./context/UIContext";
import { Home } from "./pages/Home/Home";
import ProductsList from "./pages/ProductsList/ProductsList";
import { GlobalStyles } from "./GlobalStyles";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import OrdersList from "./pages/OrdersList/OrdersList";
import {
  OrderInfo,
  OrderInfoContainer,
  OrderLink,
  OrderModal,
  OrderModalContainer,
  OrderReciept,
  Overlay,
} from "./pages/OrdersList/OrdersListStyles";
import { CiCircleRemove } from "react-icons/ci";
import { VscLinkExternal } from "react-icons/vsc";
import UsersList from "./pages/UsersList/UsersList";
import UserDetails from "./pages/UserDetails/UserDetails";
import logo from "./assets/head1.png";
import { AdminContext } from "./context/AdminContext";
import AdminSignIn from "./pages/SignIn";
import CreateEvent from "./pages/CreateEvent";

function App() {
  const containerRef = useRef(null);
  const orderModalRef = useRef(null);
  const navigate = useNavigate();

  const [scrolling, setScrolling] = useState(false);

  const { darkMode, toggleOrderModal, orderModal, loading } =
    useContext(UIContext);
  const { user } = useContext(AdminContext);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <AppContainer className="bg-red-500 w-screen h-screen" darkMode={darkMode}>
      <GlobalStyles darkMode={darkMode} />

      {orderModal && (
        <OrderModalContainer darkMode={darkMode}>
          <Overlay darkMode={darkMode}></Overlay>

          <OrderModal ref={orderModalRef} darkMode={darkMode}>
            <PageHeader>
              <p className="modal">Order Details</p>
              <div
                onClick={() => {
                  toggleOrderModal();
                }}
              >
                <CiCircleRemove />
              </div>
            </PageHeader>
            <hr />

            <OrderInfoContainer>
              <OrderInfo>
                <p className="key">Supplier:</p>
                <p className="value">BlueJag</p>
              </OrderInfo>

              <OrderInfo>
                <p className="key">Supplier:</p>
                <p className="value">BlueJag</p>
              </OrderInfo>

              <OrderInfo>
                <p className="key">Supplier:</p>
                <p className="value">BlueJag</p>
              </OrderInfo>

              <OrderInfo>
                <p className="key">Items Purchased:</p>
                <OrderLink darkMode={darkMode}>
                  <>
                    <VscLinkExternal />
                    Sleeveless Tank
                  </>
                </OrderLink>
              </OrderInfo>

              <OrderInfo>
                <p className="key">Total payment:</p>
                <p className="price">$350</p>
              </OrderInfo>
            </OrderInfoContainer>
            <hr />

            <OrderReciept darkMode={darkMode}>Download reciept</OrderReciept>
          </OrderModal>
        </OrderModalContainer>
      )}

      {loading && (
        <LoadingScreen darkMode={darkMode}>
          <Overlay darkMode={darkMode}></Overlay>

          <img src={logo} alt="" />
        </LoadingScreen>
      )}

      {user && (
        <FixedSideBar darkMode={darkMode}>
          <SideBar />
        </FixedSideBar>
      )}

      {user && <Navbar />}

      <Routes>
        <Route path="/login" element={<AdminSignIn />} />
      </Routes>

      {user && (
        <AppContent ref={containerRef} darkMode={darkMode}>
          <Routes>
            <Route path="/" element={<Home orderRef={orderModalRef} />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route
              path="/orders"
              element={<OrdersList orderRef={orderModalRef} />}
            />
            <Route path="/users" element={<UsersList />} />
            <Route
              path="/user-details"
              element={<UserDetails orderRef={orderModalRef} />}
            />
          </Routes>
        </AppContent>
      )}
    </AppContainer>
  );
}

export default App;

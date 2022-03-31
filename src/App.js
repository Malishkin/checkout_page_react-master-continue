import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import TopContainer from './components/top_container/TopContainer';
import WhatContainer from './components/what-container/WhatContainer';
import SubTotalContainer from './components/subtotal-container/SubTotalContainer';
import PreferContainer from './components/prefer-container/PreferContainer';
import ProcessOrderYes from './components/process-order-yes-container/ProcessOrderYes';
import FooterComp from './components/footer/FooterComp';
import ReasonsContainer from './components/reasons-container/ReasonsContainer';
import PaymentInfoContainer from './components/payment-info-container/PaymentInfoContainer';
import ShippingContainer from './components/shipping-container/ShippingContainer';
import BillingContainer from './components/billing-container/BillingContainer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Header />
      <TopContainer />
      <WhatContainer />
      <SubTotalContainer/>
      <PreferContainer/>
      {/* <BillingContainer/> */}
      {/* <ShippingContainer/> */}
      {/* <PaymentInfoContainer/> */}
      <ProcessOrderYes/>
      <ReasonsContainer/>
      <FooterComp/>
    </div>
  );
}

export default App;

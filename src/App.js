import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Portfolio from "./pages/Portfolio";

export default function App() {

    return (
    <>
      <Portfolio />
      <ToastContainer autoClose={1400} />
    </>
  );
}


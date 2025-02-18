"use client";

import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

const ToastifyProvider = () => {
    
  const { theme } = useTheme();

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      toastClassName="toast-container"
      className="toast-container"
      style={{
        fontFamily: "IranSans",
        fontSize: 12,
        fontWeight: "bold"
      }}
    />
  );
};

export default ToastifyProvider;

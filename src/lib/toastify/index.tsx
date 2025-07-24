import { toast, ToastContentProps, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastMsg } from './types';

const NotificationComponent = ({ title, message }: ToastMsg & ToastContentProps) => {
  return (
    <div className="direction-rtl">
      <p className="font-bold mb-1 Toastify__toast-title">{title}</p>
      <p className="Toastify__toast-message">{message}</p>
    </div>
  );
};

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

const success = (message: string, options?: ToastOptions) => {
  toast(props => <NotificationComponent title="موفق" message={message} {...props} />, {
    ...defaultOptions,
    ...options,
    type: 'success'
  });
};
const error = (message: string, options?: ToastOptions) => {
  toast(props => <NotificationComponent title="ناموفق" message={message} {...props} />, {
    ...defaultOptions,
    ...options,
    type: 'error'
  });
};
const warning = (message: string, options?: ToastOptions) => {
  toast(props => <NotificationComponent title="هشدار" message={message} {...props} />, {
    ...defaultOptions,
    ...options,
    type: 'warning'
  });
};
const info = (message: string, options?: ToastOptions) => {
  toast(props => <NotificationComponent title="توجه" message={message} {...props} />, {
    ...defaultOptions,
    ...options,
    type: 'info'
  });
};

export const notify = {
  success,
  error,
  info,
  warning
};

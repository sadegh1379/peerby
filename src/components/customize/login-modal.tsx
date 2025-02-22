import { useRef, useState, type FC } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { toast } from "react-toastify";
import { useSendOtpMutation, useValidateOtpMutation } from "@/services/auth";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../ui/otp-input";
import { useCounter } from "@/hooks";

interface LoginModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const LoginModal: FC<LoginModalProps> = ({ onClose, isOpen }) => {
  const [username, setUsername] = useState("");
  const [sendOtpMutation, { isLoading }] = useSendOtpMutation();
  const [validateOtpMutation, { isLoading: isValidateOtp }] = useValidateOtpMutation()
  const [isSendOtp, setIsSendOtp] = useState(false);
  const { minutes, seconds, reset } = useCounter(2 * 60);

  const sendOtpHandler = () => {

    if (!username) {
      toast.error("لطفاً شماره موبایل را وارد کنید");
      return;
    }

    setIsSendOtp(true);
    reset();
    sendOtpMutation({ username })
      .unwrap()
      .then(() => {
        toast.success("کد با موفقیت ارسال شد");
        setIsSendOtp(true);
      });
  };

  const loginHandler = (otp: string) => {
    validateOtpMutation({ username, otp })
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ورود</DialogTitle>
        </DialogHeader>
        <DialogDescription>{isSendOtp ? "کد ارسال شده را وارد کنید" : ""}</DialogDescription>
        {isSendOtp && (
          <Button onClick={() => setIsSendOtp(false)} variant="link" size="sm">
            تغییر تلفن
          </Button>
        )}

        {isSendOtp ? (
          // Otp input
          <div className="mb-3">
            <InputOTP maxLength={6} onComplete={loginHandler}>
              <InputOTPGroup>
                <InputOTPSlot autoFocus index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {minutes === 0 && seconds === 0 ? (
              <Button onClick={sendOtpHandler} variant="link" size="sm" className="mx-auto text-center w-full">
                ارسال مجدد
              </Button>
            ) : (
              <p className="text-center text-sm mt-3">
                {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 9 ? `0${seconds}` : seconds}
              </p>
            )}
          </div>
        ) : (
          <div className="grid w-full  items-center gap-1.5 my-3 clear-start">
            <Input
              value={username}
              onChange={e => setUsername(e.target.value)}
              inputMode="decimal"
              className="w-full"
              type="text"
              id="username"
              placeholder="شماره موبایل خود را وارد کنید"
            />
          </div>
        )}
        <DialogFooter>
          <Button isLoading={isLoading} onClick={sendOtpHandler} type="submit" className="w-full">
            {isSendOtp ? "ورود" : "ارسال کد"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { LoginModal };

import { useRef, useState, type FC } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { toast } from "react-toastify";
import { useSendOtpMutation } from "@/services/auth";
import { useAppStore } from "@/hooks";

interface LoginModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const LoginModal: FC<LoginModalProps> = ({ onClose, isOpen }) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const [sendOtp, { error, isLoading }] = useSendOtpMutation();

  const sendOtpHandler = () => {
    const username = usernameRef.current?.value;

    if (!username) {
      toast.error("لطفاً شماره موبایل را وارد کنید");
      return;
    }

    sendOtp({ username }).unwrap().then(() => toast.success("کد با موفقیت ارسال شد"))
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ورود</DialogTitle>
        </DialogHeader>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
          <Input ref={usernameRef} inputMode="decimal" type="text" id="username" placeholder="شماره موبایل خود را وارد کنید" />
        </div>
        <DialogFooter>
          <Button onClick={sendOtpHandler} type="submit" className="w-full">
            ارسال کد
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { LoginModal };

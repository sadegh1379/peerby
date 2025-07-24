import type { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../ui/dialog';
import { Button } from '../ui/button';

interface LoginModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const LoginModal: FC<LoginModalProps> = ({ onClose, isOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ورود</DialogTitle>
        </DialogHeader>
        <div className="text-center">
          <h1>body</h1>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full" color="">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { LoginModal };

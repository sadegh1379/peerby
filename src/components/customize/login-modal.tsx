import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';

interface LoginModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const formSchema = z.object({
  phone: z
    .string()
    .min(11, { message: 'شماره تلفن صحیح نیست' })
    .max(11, { message: 'شماره تلفن باید ۱۱ رقم باشد' })
    .regex(/^09\d{9}$/, { message: 'شماره تلفن باید با 09 شروع شود و ۱۱ رقم باشد' })
});

const LoginModal: FC<LoginModalProps> = ({ onClose, isOpen }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit'
  });

  const onSubmit = () => {};

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ورود</DialogTitle>
        </DialogHeader>
        <div className="text-center mt-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شماره تلفن همراه</FormLabel>
                    <FormControl>
                      <Input
                        autoFocus={false}
                        type="string"
                        inputMode="numeric"
                        placeholder="شماره تلفن خود را وارد کنید"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button size="lg" type="submit" className="w-full" color="">
                  ارسال کد تایید
                </Button>
              </DialogFooter>
            </form>
          </Form>

          <hr className="my-4" />
          <div className="text-xs">
            هنوز حساب کاربری ندارید؟{' '}
            <span className="text-appPink cursor-pointer">ثبت نام کنید</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { LoginModal };

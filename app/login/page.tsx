'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUserContext } from '@/context/user.context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { back } = useRouter();
  const { setUserName } = useUserContext();
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const inputUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const loginAsUsername = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (input) {
      setOpen(false);
      setUserName(input);
      back();
    }
  }
  return (
    <div
      className="relative flex place-items-center flex-col">
      <Avatar>
        <AvatarImage src="user-profile.svg"/>
        <AvatarFallback>user avatar</AvatarFallback>
      </Avatar>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
            <Button variant="outline">Sign In</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Username</AlertDialogTitle>
            <AlertDialogDescription>
              Please pick a user name to log in as
              <Input value={input} onChange={inputUserName} />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={loginAsUsername}>Login</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

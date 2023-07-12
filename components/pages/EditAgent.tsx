import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from '@/components/ui/input';
import { ChangeEvent, Dispatch, MouseEvent, useState } from 'react';
import { IAgent } from '@/lib/types';

interface LoginProps {
  open: boolean;
  setOpen: Dispatch<boolean>;
  editAgent: () => void;
  agent: IAgent;
  setAgent: Dispatch<IAgent>;
}
export default function EditAgent({open, setOpen, editAgent, agent, setAgent}: LoginProps) {
  const [input, setInput] = useState('');
  const close = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    editAgent();
    setOpen(false);
  }
  return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Name</AlertDialogTitle>
            <AlertDialogDescription>
              Please set an agent name
              <Input value={agent.name} onChange={(e) => setAgent({...agent, name: e.target.value})} />
            </AlertDialogDescription>
            <AlertDialogTitle>Status</AlertDialogTitle>
            <AlertDialogDescription>
              Please set agent status
              <Input value={agent.status} onChange={(e) => setAgent({...agent, status: e.target.value})} />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={close}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  );
}

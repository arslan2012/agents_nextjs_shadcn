import { useUserContext } from '@/context/user.context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Sidebar() {
  const { userName, setUserName } = useUserContext();
  const logOut = () => {
    setUserName(undefined);
  }
  return (
    <div className="flex flex-col bg-blue-500 w-64 py-7 px-2 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out">
      <h2 className="text-2xl text-secondary font-extrabold">Gopher AI</h2>

      <div className="flex flex-col gap-1 mt-20 mb-auto">
        <Button variant="outline" asChild>
          <Link href="/">Agents</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <div className="flex flex-col">
        <p className="text-secondary font-extrabold">{ userName }</p>
        <Button variant="destructive" onClick={logOut}>Log out</Button>
      </div>
    </div>
  );
}
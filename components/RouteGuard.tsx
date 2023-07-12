'use client'
import { useUserContext } from '@/context/user.context';
import { useRouter,usePathname } from 'next/navigation';

export default function RouteGuard({ children }: {
  children: React.ReactNode
}) {
  const { userName } = useUserContext();
  const pathname = usePathname();
  const { push } = useRouter();
  if (!userName && pathname != '/login') push('/login');
  return children;
}
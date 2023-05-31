import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UsersList from "./components/UsersList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
      <UsersList users={users} />
    </Sidebar>
  );
}

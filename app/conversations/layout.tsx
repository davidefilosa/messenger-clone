import Sidebar from "../components/sidebar/Sidebar";
import getConversations from "../actions/getConversations";
import ConversationsList from "./components/ConversationsList";
import getUsers from "../actions/getUsers";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    // @ts-expect-error Server Component

    <Sidebar>
      <div className="h-full">
        <ConversationsList initialItems={conversations} users={users} />

        {children}
      </div>
    </Sidebar>
  );
}

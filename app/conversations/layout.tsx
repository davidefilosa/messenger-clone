import Sidebar from "../components/sidebar/Sidebar";
import getConversations from "../actions/getConversations";
import ConversationsList from "./components/ConversationsList";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    // @ts-expect-error Server Component

    <Sidebar>
      <div className="h-full">
        <ConversationsList initialItems={conversations} />

        {children}
      </div>
    </Sidebar>
  );
}

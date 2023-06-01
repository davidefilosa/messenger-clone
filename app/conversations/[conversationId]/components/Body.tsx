"use client";

import { FullMessageType } from "@/app/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import useConversation from "@/app/hooks/useConversation";
import axios from "axios";

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);
  const bottonRef = useRef<HTMLDivElement>(null);
  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, []);
  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          isLast={i === messages.length - 1}
          message={message}
          key={message.id}
        />
      ))}
      <div ref={bottonRef} className="pt-24" />
    </div>
  );
};

export default Body;

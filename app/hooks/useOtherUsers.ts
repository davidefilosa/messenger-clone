import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType } from "../types";
import { User } from "@prisma/client";

const useOtherUsers = (
  conversations:
    | FullConversationType
    | {
        users: User[];
      }
) => {
  const session = useSession();

  const otherUsers = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;
    const otherUsers = conversations.users.filter(
      (user) => user.email !== currentUserEmail
    );

    return otherUsers[0];
  }, [session?.data?.user?.email, conversations.users]);

  return otherUsers;
};

export default useOtherUsers;

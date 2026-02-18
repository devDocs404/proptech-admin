"use client";
import { useMutation, useQuery } from "@tanstack/react-query";

import type { authClient } from "@/lib/auth-client";
import { trpc } from "@/utils/trpc";

export default function Dashboard({
  session,
}: {
  session: typeof authClient.$Infer.Session;
}) {
  const privateData = useQuery(trpc.privateData.queryOptions());
    const toggleMutation = useMutation(
    trpc.invite.send.mutationOptions({
      onSuccess: (data) => {
        console.log("sent", data);
      },
      onError: (err) => {
        console.error("send email error", err);
      },
    })
  );

  return (
    <>
      <p>API: {privateData.data?.message}</p>
       <button
        className="cursor-pointer rounded-md bg-blue-500 p-2 text-white transition-all duration-300 hover:bg-blue-600"
        onClick={() => toggleMutation.mutate()}
      >
        send email
      </button>
    </>
  );
}

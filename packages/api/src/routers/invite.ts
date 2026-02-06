import z from "zod";
import { router, publicProcedure } from "../index";
import { sendInviteEmail } from "../lib/email";

export const inviteRouter = router({
  send: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        tempPassword: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      await sendInviteEmail(
        input.email,
        input.email,
        input.tempPassword
      );

      return { success: true };
    }),
});

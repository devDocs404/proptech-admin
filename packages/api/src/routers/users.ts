import { auth } from "@proptech-admin/auth";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure, router } from "../index";

export const usersRouter = router({
  banUser: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        banReason: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Allow only internal staff to ban users (or "admin" if that's what better auth defaults to)
      if (
        ctx.session.user.role !== "internal_staff" &&
        ctx.session.user.role !== "admin"
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Only internal staff can ban users",
        });
      }

      try {
        await auth.api.banUser({
          body: {
            userId: input.userId,
            banReason: input.banReason,
          },
        });
        return { success: true };
      } catch (error) {
        console.error("Failed to ban user", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to ban user",
        });
      }
    }),
  unbanUser: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Allow only internal staff to unban users
      if (
        ctx.session.user.role !== "internal_staff" &&
        ctx.session.user.role !== "admin"
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Only internal staff can unban users",
        });
      }

      try {
        await auth.api.unbanUser({
          body: {
            userId: input.userId,
          },
        });
        return { success: true };
      } catch (error) {
        console.error("Failed to unban user", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to unban user",
        });
      }
    }),
});

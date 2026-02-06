import { Resend } from "resend";
import { InvitationEmail } from "@proptech-admin/emails";
import { env } from "@proptech-admin/env/server";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendInviteEmail(
  to: string,
  userEmail: string,
  tempPassword: string
) {
  return resend.emails.send({
    from: "Proptech <tsyokeshs@gmail.com>",
    to,
    subject: "You're invited to Proptech",
    react: InvitationEmail({
      userEmail,
      tempPassword,
    }),
  });
}

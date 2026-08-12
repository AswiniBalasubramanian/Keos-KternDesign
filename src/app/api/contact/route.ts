import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const fd = await req.formData()

  const firstName = fd.get("first") as string | null
  const lastName = fd.get("last") as string | null
  const email = fd.get("email") as string | null
  const topic = fd.get("topic") as string | null
  const message = fd.get("message") as string | null
  const attachmentFile = fd.get("attachment") as File | null

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.office365.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      tls: { ciphers: "SSLv3" },
      auth: {
        user: process.env.SMTP_USER ?? "baswini@kaartech.com",
        pass: process.env.SMTP_PASS,
      },
    })

    // Convert File to Buffer if present and non-empty
    const attachments: nodemailer.Attachment[] = []
    if (attachmentFile && attachmentFile.size > 0) {
      const buffer = Buffer.from(await attachmentFile.arrayBuffer())
      attachments.push({
        filename: attachmentFile.name,
        content: buffer,
        contentType: attachmentFile.type || "application/octet-stream",
      })
    }

    await transporter.sendMail({
      from: `"KEOS Design System" <${process.env.SMTP_USER}>`,
      to: "baswini@kaartech.com",
      replyTo: email,
      subject: `[KEOS Contact] ${topic ?? "General"} — ${firstName} ${lastName ?? ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#111">
          <div style="background:#FF6900;padding:24px 32px;border-radius:12px 12px 0 0">
            <h2 style="color:#fff;margin:0;font-size:20px">New message from KEOS Design System</h2>
          </div>
          <div style="border:1px solid #e5e5e5;border-top:none;padding:32px;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:6px 0;color:#888;width:100px">Name</td><td style="padding:6px 0;font-weight:600">${firstName} ${lastName ?? ""}</td></tr>
              <tr><td style="padding:6px 0;color:#888">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#FF6900">${email}</a></td></tr>
              <tr><td style="padding:6px 0;color:#888">Topic</td><td style="padding:6px 0">${topic ?? "—"}</td></tr>
              ${attachments.length ? `<tr><td style="padding:6px 0;color:#888">Attachment</td><td style="padding:6px 0">${attachmentFile!.name}</td></tr>` : ""}
            </table>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0"/>
            <p style="font-size:14px;color:#444;line-height:1.7;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      `,
      attachments,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[contact]", err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}

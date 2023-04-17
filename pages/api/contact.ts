import sgMail from "@sendgrid/mail"

export default function sendMessage(req: any, resp: any) {
  if (req.method !== "POST") {
    resp.status(405).json({ message: "INVALID_METHOD" })
    return
  }

  const { email, message } = req.body
  if (!email || !message) {
    resp.status(400).json({ message: "INVALID_PARAMETER" })
    return
  }

  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!pattern.test(email)) {
    resp.status(400).send({ message: "EMAIL_SYNTAX_INCORRECT" })
    return
  }

  const formatedMessage = message
    .replace(/\n/g, "<br />")
    .replace(/\r/g, "<br />")
    .replace(/\t/g, "<br />")
    .replace(/\n/g, "<br />")
    .replace(/<(?!br\s$\/?)[^>]+>/g, "")

  sgMail.setApiKey(process.env.SENDGRID_KEY ? process.env.SENDGRID_KEY : "")

  const sendGridMail = {
    from: "no-reply@mes.mc",
    to: "contact@mes.mc",
    templateId: "d-aa8bb86f146c475fb9d13e2e497885f4",
    dynamic_template_data: {
      email: email,
      message: formatedMessage,
    },
  } as any
  ;(async () => {
    try {
      await sgMail.send(sendGridMail)
      resp.status(200).json({ message: "EMAIL_SENDED_SUCCESSFULLY" })
    } catch {
      resp.status(500).json({ message: "ERROR_WITH_SENDGRID" })
    }
  })()
}

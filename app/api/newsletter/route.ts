import { NextResponse } from "next/server"

const FORM_ID = process.env.CONVERTKIT_FORM_ID ?? "9079328"

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim()
      : ""

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  const apiKey = process.env.CONVERTKIT_API_KEY?.trim()
  if (!apiKey) {
    return NextResponse.json(
      {
        error: "Newsletter API not configured",
        code: "NO_API_KEY",
      },
      { status: 503 }
    )
  }

  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: apiKey, email }),
      }
    )

    const data = (await res.json()) as { message?: string; subscription?: unknown }

    if (!res.ok) {
      return NextResponse.json(
        { error: data.message ?? "Subscription failed. Please try again." },
        { status: res.status >= 400 && res.status < 500 ? res.status : 400 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendEmail } from "@/lib/email";
import { saveContactSubmission } from "@/lib/supabase";

// Rate limiting - simple in-memory store (use Redis in production)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate using Zod schema
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map(err => ({
        field: err.path.join("."),
        message: err.message,
      }));
      
      return NextResponse.json(
        { 
          error: "Validation failed", 
          errors 
        },
        { status: 400 }
      );
    }

    const { name, email, phone, org, message } = validationResult.data;

    // Log submission (in production, save to database)
    console.log("Contact Form Submission:", {
      name,
      email,
      phone: phone || "Not provided",
      org: org || "Not provided",
      message,
      timestamp: new Date().toISOString(),
      ip,
    });

    // Send email notification
    try {
      await sendEmail({
        to: process.env.CONTACT_EMAIL || "contact@geosync.agency",
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Organization:</strong> ${org || "Not provided"}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Continue processing even if email fails
    }
    
    // Save to database
    try {
      await saveContactSubmission({
        name,
        email,
        phone,
        org,
        message,
      });
    } catch (dbError) {
      console.error("Failed to save to database:", dbError);
      // Continue processing even if database save fails
    }
    
    // TODO: Future integrations
    // 1. CRM Integration (HubSpot, Salesforce):
    //    await crm.createContact({ name, email, phone, company: org, message });
    //
    // 2. Notification Service (Slack, Discord):
    //    await notifySlack(`New lead from ${name} (${email})`);

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your submission. We'll get back to you soon!" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional - for testing)
export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint is active" },
    { status: 200 }
  );
}


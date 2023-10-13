import { NextResponse } from "next/server";
import { getViews } from "@/firebase/views/views";

// Make a get request to the API
export async function GET(req) {
  const views = await getViews();

  return NextResponse.json({ views });
}

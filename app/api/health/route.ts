import { NextResponse } from "next/server";

export async function GET() {
  // 200 OK를 반환하면 배포 스크립트가 "서버 살아있음"으로 판단함
  return NextResponse.json(
    { status: "ok", timestamp: new Date().toISOString() },
    { status: 200 }
  );
}
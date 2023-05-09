import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
  try {
    const conn = postgres({
      ssl: require,
    });
    const result = await conn.unsafe("SELECT * FROM users order by id asc");
    return new NextResponse(JSON.stringify(result));
  } catch (error) {
    console.log('users get error', error);
    return new Response(JSON.stringify(error), {
      status: 404,
    });
  }
}

export async function POST(request: Request) {
  let body = await request.json();
  try {
      const conn = postgres({
        ssl: require,
      });
      const result = await conn.unsafe(`UPDATE users SET status = ${!body.status} where id = ${body.id}`);
      return new NextResponse(JSON.stringify({success:true, message:"Status updated successfully"}));
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 404,
    });
  }
}
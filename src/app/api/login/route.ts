import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";


export async function POST(request: Request) {
  let body = await request.json();
  try {

      const conn = postgres({
        ssl: require,
      });
      const result = await conn.unsafe(`SELECT * FROM users where email = '${body.email}' and password = '${body.password}'`);
      if (result.length > 0) {
        return new NextResponse(JSON.stringify({success:true, message:"Successfully loggedin", user: result[0]}));
      } else {
        return new NextResponse(JSON.stringify({success:false, message:"Invalid Credentials"}));
      }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 404,
    });
  }
}
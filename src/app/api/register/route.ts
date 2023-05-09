import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request: Request) {
  let body = await request.json();
  try {

      let emailExist = await checkEmailExist(body.email);
      if (emailExist) {
        return new NextResponse(JSON.stringify({success:false, message:"Email already exist"}));
      } else {
        const conn = postgres({
          ssl: require,
        });
        const result = await conn.unsafe(`INSERT INTO users(name, company_name, designation, email, password, role, status) VALUES ('${body.name}','${body.companyName}','${body.designation}','${body.email}','${body.password}','developer', false)`);
        return new NextResponse(JSON.stringify({success:true, message:"Successfully register"}));
      }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 404,
    });
  }
}

async function checkEmailExist(email:any) {
  const conn = postgres({
    ssl: require,
  });
  const result = await conn.unsafe(`SELECT * FROM users where email = '${email}'`);
  return result.length > 0 ? true: false;
}
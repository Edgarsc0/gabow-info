import { pool } from "../db";

import { NextResponse } from "next/server";

export async function GET() {
    const query = "select * from contact";
    try {
        const res = await pool.query(query);
        return NextResponse.json(
            {
                data: res
            },
            {
                status: 200
            }
        );
    } catch (err) {
        return NextResponse.json({
            err
        }, {
            status: 500
        })
    }
}
export async function POST(request) {
    const { name, email, message } = await request.json();
    console.log({ name, email, message })
    const query = "insert into contact(name, email, message) values($1,$2,$3)";
    try {
        const res = await pool.query(query, [name, email, message]);
        return NextResponse.json(
            {
                status: 200
            }
        )
    } catch (err) {
        console.log(err);
        return NextResponse.json({
            err
        }, {
            status: 500
        })
    }
}
import { NextResponse } from "next/server";
import  nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const {email,message} = await request.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
            user: 'faxraddinyuzbashew@gmail.com',
            pass: 'yunnxrgcajibsjqx'
            },
        });
        
        const mailOptions = {
            from: 'faxraddinyuzbashew@gmail.com',
            to: "reydivonay@gmail.com",
            html:`
            <li> from ${email}</li>
            <li>${message}</li>
            `
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({message:"Email sent"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Failed to sent email..."},{status:500})   
    }
}
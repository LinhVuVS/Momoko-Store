import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async (req: NextResponse) => {
    try{
        const {userId} = auth();

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401})
        }

        await connectToDB()
        
        let user = await User.findOne({clerkId: userId})

        //Khi người dùng đăng nhập vào lần đầu tiên thì hệ thống sẽ tạo usser mới
        if(!user){
            user = await User.create({clerkId: userId});
            await user.save();
        }

    return NextResponse.json(user, {status: 200});

    } catch(err){
        console.log("[users_GET]", err);
        return new NextResponse("Internal Serve Error", {status: 500})
    }
}
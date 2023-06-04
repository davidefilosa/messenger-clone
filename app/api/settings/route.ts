import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse, userAgent } from "next/server";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { name, image } = body;
    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updateUser = await prisma.user.update({
      where: { id: currentUser.id },
      data: { name: name, image: image },
    });

    return NextResponse.json(updateUser);
  } catch (error: any) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

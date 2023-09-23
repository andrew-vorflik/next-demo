import { NextResponse } from "next/server";

export const DELETE = async (req: Request, {params} : {params: {id: string}}) => {
  const id = params.id;

  return NextResponse.json({id});
}
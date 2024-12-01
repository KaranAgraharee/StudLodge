import { NextResponse } from "next/server";
import { connectDB } from "../lib/mongodb";
import PostPgAccommodation from '../lib/properties'
import { writeFile } from "fs/promises";


export async function POST(req){
connectDB()
    try {
        const formData = await req.formData()

        const textData =formData.get("textFieldName")
        const imageFile = formData.get("imageFieldName")
        if(!imageFile){
          console.log('no image is uploaded')
        }

        const buffer =await imageFile.arrayBuffer()
        const path = `./public/${file.name}`
        await writeFile(path, buffer)
        const postPgData = await PostPgAccommodation.create({
          text: textData,
          image: Buffer.from(buffer)
        })
        return NextResponse.json({"message":"image added"})
        
        
      } catch (error) {
        return NextResponse.json({"message":"image added"})
      }

} 
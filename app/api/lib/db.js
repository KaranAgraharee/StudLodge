import clientPromise from "./mongodb"

export const dynamic = "force-dynamic"; 

// Server Action
export async function createUser(formData) {
    const client = await clientPromise;
    const db = client.db("mydatabase"); 
    const collection = db.collection("users"); 

    const user = {
        name: formData.get("name"),
        email: formData.get("email"),
    };

    // Insert into MongoDB
    await collection.insertOne(user);
    return { success: true, message: "User added successfully" };
}
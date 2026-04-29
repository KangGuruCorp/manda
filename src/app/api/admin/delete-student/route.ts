import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
    try {
        const { studentId, adminPassword } = await req.json();

        // Security check: ensure the request is from a legitimate admin
        // using the same password check as the login page
        if (adminPassword !== "11223344") {
            return NextResponse.json({ error: "Unauthorized: Invalid admin password" }, { status: 401 });
        }

        if (!studentId) {
            return NextResponse.json({ error: "Student ID is required" }, { status: 400 });
        }

        // Use Firebase Admin to delete the document (bypasses security rules)
        await adminDb.collection("students").doc(studentId).delete();

        return NextResponse.json({ success: true, message: `Responden ${studentId} berhasil dihapus.` });

    } catch (error: any) {
        console.error("Admin Delete Error:", error);
        return NextResponse.json({ error: error.message || "Failed to delete student from server" }, { status: 500 });
    }
}

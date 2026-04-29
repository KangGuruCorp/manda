import * as admin from "firebase-admin";

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                // These are placeholders - in production you need the actual service account fields
                // but sometimes for local/specific setups, having the projectId is enough if 
                // GOOGLE_APPLICATION_CREDENTIALS is set in the environment.
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            }),
        });
    } catch (error) {
        console.error("Firebase Admin Init Error:", error);
    }
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();

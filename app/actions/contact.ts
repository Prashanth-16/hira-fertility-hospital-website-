"use server"

import { db } from "../../lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

export type ContactFormState = {
  success: boolean
  message: string
}

export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const fullName = String(formData.get("fullName") || "").trim()
  const phone = String(formData.get("phone") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const branch = String(formData.get("branch") || "").trim()

  if (!fullName) {
    return { success: false, message: "Please enter your full name." }
  }
  if (!phone) {
    return { success: false, message: "Please enter your phone number." }
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." }
  }

  try {
    await addDoc(collection(db, "appointments"), {
  fullName,
  phone,
  email: email || "",
  branch: branch || "",
  status: "New",
  createdAt: serverTimestamp(),
})
    
  } catch (error) {
  console.error("Firebase Error:");
  console.error(error);

  return {
    success: false,
    message: "Something went wrong. Please try again.",
  };
}

  return {
    success: true,
    message: "Thank you! Your consultation request has been received. We'll get back to you shortly.",
  }
}

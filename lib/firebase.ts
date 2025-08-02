import { db } from "./firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getProductBySlug(slug: string) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("slug", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
}

import admin from "firebase-admin";
import fs from "fs";

// ✅ JSON file read karo bina import assert ke
const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", "utf8"));
const productsData = JSON.parse(fs.readFileSync("./scripts/products.json", "utf8"));

// ✅ Firebase Admin initialize
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function updateProducts() {
  try {
    for (const product of productsData) {
      if (product.id && product.id.trim() !== "") {
        console.log(`🔄 Updating existing product: ${product.name}`);
        await db.collection("products").doc(product.id).set(product, { merge: true });
      } else {
        console.log(`➕ Adding new product: ${product.name}`);
        await db.collection("products").add(product);
      }
    }
    console.log("✅ Firestore update completed!");
  } catch (error) {
    console.error("🔥 Error uploading products:", error);
  }
}

updateProducts();

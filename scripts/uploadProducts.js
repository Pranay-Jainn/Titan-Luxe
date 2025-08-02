// scripts/uploadProducts.js

const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

// ✅ Firebase Service Account key ka path
const serviceAccount = require("../serviceAccountKey.json");

// ✅ Firebase App initialize
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// ✅ Products JSON file ka path
const productsFile = path.join(__dirname, "products.json");
const productsData = JSON.parse(fs.readFileSync(productsFile, "utf-8"));

async function uploadProducts() {
  const productsCollection = db.collection("products");

  for (const product of productsData) {
    try {
      // ✅ Slug ko document ID banate hain taaki duplicate na bane
      await productsCollection.doc(product.slug).set(product);
      console.log(`✅ Uploaded: ${product.name}`);
    } catch (error) {
      console.error(`❌ Error uploading ${product.name}:`, error);
    }
  }

  console.log("🎉 All products uploaded successfully!");
}

uploadProducts();

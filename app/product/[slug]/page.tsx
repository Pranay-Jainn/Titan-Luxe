import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { getProductBySlug } from "@/lib/firebase"; // ✅ Firebase se data laane ka function

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  // ✅ 1️⃣ Slug read karo
  const { slug } = params;

  // ✅ 2️⃣ Firebase se product fetch karo
  const product = await getProductBySlug(slug);

  // ✅ 3️⃣ Agar nahi mila to 404 page dikhado
  if (!product) {
    notFound();
  }

  // ✅ 4️⃣ UI render karo
  return <ProductDetail product={product} />;
}

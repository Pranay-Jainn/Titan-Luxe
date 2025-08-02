import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { getProductBySlug } from "@/lib/firebase";
import type { PageProps } from "next"; // ✅ Add this import

export default async function ProductPage({ params }: PageProps<{ slug: string }>) {
  // ✅ Slug read karo
  const { slug } = params;

  // ✅ Firebase se product fetch karo
  const product = await getProductBySlug(slug);

  // ✅ Agar nahi mila to 404 page dikhado
  if (!product) {
    notFound();
  }

  // ✅ UI render karo
  return <ProductDetail product={product} />;
}

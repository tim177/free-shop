import CategoryManagement from "@/components/category-management/category-management";
import { MainLayout } from "@/components/layout/main-layout";

export default function Home() {
  return (
    <MainLayout activeItem="Category">
      <CategoryManagement />
    </MainLayout>
  );
}

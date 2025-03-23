"use client";

import { useEffect, useState } from "react";
import CategoryTable from "./category-table";
import AddCategoryForm from "./add-category-form";

const API_URL =
  "https://mamun-reza-freeshops-backend.vercel.app/api/v1/SubCategory/all/Subcategory";

export default function CategoryManagement() {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (data.status === 200) {
          setCategories(data.data);
        } else {
          throw new Error(data.message || "Failed to fetch categories");
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const toggleCategoryExpansion = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleCategorySelection = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedCategories.length === categories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(categories.map((cat) => cat.category._id));
    }
  };

  const handleAddCategory = (newCategory: {
    name: string;
    description: string;
    parentCategory: string | null;
  }) => {
    // In a real app, this would make an API call
    const newCategoryItem = {
      category: {
        _id: `new-${Date.now()}`,
        name: newCategory.name,
        image: "https://alamupload.s3.eu-north-1.amazonaws.com/user.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __v: 0,
      },
      subCategory: [],
    };

    setCategories([...categories, newCategoryItem]);
  };

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-6xl mx-auto space-y-6 ">
      {/* Main Category Table Card */}
      <div className="bg-white rounded-lg shadow-sm overflow-auto scrollbar-hidden">
        <div className="p-6">
          <h1 className="text-xl font-bold mb-2">Category Management</h1>
          <p className="text-sm opacity-90">
            Create, edit, and organize categories to structure products and
            services in the app. Use sub-categories for more specific
            organization.
          </p>
        </div>

        <div className="max-h-[calc(100vh-300px)] ">
          <CategoryTable
            categories={categories}
            selectedCategories={selectedCategories}
            expandedCategories={expandedCategories}
            toggleCategorySelection={toggleCategorySelection}
            toggleSelectAll={toggleSelectAll}
            toggleCategoryExpansion={toggleCategoryExpansion}
          />
        </div>
      </div>

      {/* Separate Add Category Card */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <AddCategoryForm onAddCategory={handleAddCategory} />
      </div>
    </div>
  );
}

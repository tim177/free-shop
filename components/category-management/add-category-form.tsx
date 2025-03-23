"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddCategoryFormProps {
  onAddCategory: (category: {
    name: string;
    description: string;
    parentCategory: string | null;
    image: string;
  }) => void;
}

const API_URL =
  "https://mamun-reza-freeshops-backend.vercel.app/api/v1/SubCategory/addSubcategory";

export default function AddCategoryForm({
  onAddCategory,
}: AddCategoryFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentCategory, setParentCategory] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !parentCategory || !image) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("categoryId", parentCategory);
    formData.append("image", image);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to add category");
      }

      onAddCategory({
        name,
        description,
        parentCategory,
        image: URL.createObjectURL(image),
      });

      setName("");
      setDescription("");
      setParentCategory(null);
      setImage(null);
      alert("Category added successfully!");
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Failed to add category.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Add New Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="categoryName"
            className="block text-sm font-medium mb-1"
          >
            Category Name
          </label>
          <input
            id="categoryName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter the name of the new category."
          />
        </div>

        <div>
          <label
            htmlFor="categoryDescription"
            className="block text-sm font-medium mb-1"
          >
            Category Description
          </label>
          <textarea
            id="categoryDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md min-h-[100px]"
            placeholder="Add a brief description of what this category encompasses."
          />
        </div>

        <div>
          <label
            htmlFor="parentCategory"
            className="block text-sm font-medium mb-1"
          >
            Parent Category
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Select a parent category to create a sub-category.
          </p>
          <Select onValueChange={(value) => setParentCategory(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Toys & Games" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toys">Toys & Games</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="bg-[#20b2aa] hover:bg-[#1a9e97] text-white"
          >
            Add Category
          </Button>
        </div>
      </form>
    </div>
  );
}

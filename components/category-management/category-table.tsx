"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import type { Category, SubCategory } from "@/lib/types";

interface CategoryTableProps {
  categories: {
    category: Category;
    subCategory: SubCategory[];
  }[];
  selectedCategories: string[];
  expandedCategories: string[];
  toggleCategorySelection: (categoryId: string) => void;
  toggleSelectAll: () => void;
  toggleCategoryExpansion: (categoryId: string) => void;
}

export default function CategoryTable({
  categories,
  selectedCategories,
  expandedCategories,
  toggleCategorySelection,
  toggleSelectAll,
  toggleCategoryExpansion,
}: CategoryTableProps) {
  const [showSubCategoryModal, setShowSubCategoryModal] = useState(false);

  return (
    <div>
      <table className="w-full">
        <thead className="sticky top-0 bg-white z-10">
          <tr className="border-b">
            <th className="p-4 text-left w-12">
              <Checkbox
                checked={
                  selectedCategories.length > 0 &&
                  selectedCategories.length === categories.length
                }
                onCheckedChange={toggleSelectAll}
                aria-label="Select all categories"
              />
            </th>
            <th className="p-4 text-left font-medium text-sm">Category Name</th>
            <th className="p-4 text-left font-medium text-sm">
              Sub-Categories
            </th>
            <th className="p-4 text-left font-medium text-sm">Status</th>
            <th className="p-4 text-left font-medium text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => {
            const isExpanded = expandedCategories.includes(item.category._id);
            const isSelected = selectedCategories.includes(item.category._id);
            const hasSubCategories = item.subCategory.length > 0;

            return (
              <>
                <tr
                  key={item.category._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() =>
                        toggleCategorySelection(item.category._id)
                      }
                      aria-label={`Select ${item.category.name}`}
                    />
                  </td>
                  <td className="p-4 font-medium">{item.category.name}</td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleCategoryExpansion(item.category._id)}
                      className="flex items-center text-sm text-gray-600"
                      disabled={!hasSubCategories}
                    >
                      {hasSubCategories
                        ? `${item.subCategory.length} Sub-Category`
                        : "-"}
                      {hasSubCategories && (
                        <span className="ml-2">
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </span>
                      )}
                    </button>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.category._id.includes("67d4") ||
                        item.category._id.includes("67d2")
                          ? "bg-gray-100 text-gray-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.category._id.includes("67d4") ||
                      item.category._id.includes("67d2")
                        ? "Inactive"
                        : "Active"}
                    </span>
                  </td>
                  <td className="p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          aria-label="Open menu"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                {isExpanded && hasSubCategories && (
                  <>
                    {item.subCategory.map((sub) => (
                      <tr
                        key={sub._id}
                        className="border-b bg-gray-50 hover:bg-gray-100"
                      >
                        <td className="p-4"></td>
                        <td className="p-4 pl-8 text-sm">{sub.name}</td>
                        <td className="p-4">-</td>
                        <td className="p-4">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                            Active
                          </span>
                        </td>
                        <td className="p-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                className="h-8 w-8 p-0"
                                aria-label="Open menu"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center my-4 pb-4">
        <Button
          onClick={() => setShowSubCategoryModal(true)}
          className="bg-[#20b2aa] hover:bg-[#1a9e97] text-white"
        >
          Add Sub-Category
        </Button>
      </div>

      {showSubCategoryModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add Sub-Category</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Sub-Category Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter sub-category name"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowSubCategoryModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-[#20b2aa] hover:bg-[#1a9e97] text-white"
                  onClick={() => setShowSubCategoryModal(false)}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

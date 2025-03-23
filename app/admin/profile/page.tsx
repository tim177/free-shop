"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PageContainer } from "@/components/ui/page-container";
import { CardContainer } from "@/components/ui/card-container";
import { Camera } from "lucide-react";
import Link from "next/link";
import axios from "axios";

const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  password: z.string().min(1, "Password is required"),
});

export default function ProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const token = sessionStorage.getItem("authToken");

  //fetch data on mount
  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data } = await axios(
          "https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/getProfile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("from get profile --> ", data);
        form.reset({
          name: data.data.fullName,
          email: data.data.email,
          phone: data.data.phone,
          password: "can't change it", // Masked password
        });
        setProfileImage(data.data.image || null);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }
    fetchProfile();
  }, [form, token]);

  async function onSubmit(values: z.infer<typeof profileSchema>) {
    setIsLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...dataToUpdate } = values;

    try {
      await axios.put(
        "https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/update",
        dataToUpdate,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSkip = () => {
    router.push("/admin/dashboard");
  };

  return (
    <PageContainer>
      <CardContainer className="w-full max-w-md">
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            className="text-gray-500 hover:text-gray-700"
            onClick={handleSkip}
          >
            Skip
          </Button>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {profileImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profileImage || "/placeholder.svg"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Camera className="h-10 w-10 text-gray-400" />
              )}
            </div>
            <input
              type="file"
              id="profile-image"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label
              htmlFor="profile-image"
              className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full cursor-pointer"
            >
              <Camera className="h-4 w-4" />
            </label>
          </div>
          <p className="text-primary font-medium">Upload Profile Picture</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput id="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center">
                <Link
                  href="/auth/change-password"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Change Password
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save"}
              </Button>
            </form>
          </Form>
          Skip button to view go dashboard
        </div>
      </CardContainer>
    </PageContainer>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, ChangeEvent } from "react";
import { updateUserSchema, UpdateUserInput } from "@/lib/schema/profile";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof UpdateUserInput, string>>>({});

  const [profileData, setProfileData] = useState<UpdateUserInput & { avatar?: string; cover?: string }>({
    name: "Hasib Rahman",
    bio: "I am a developer passionate about creating amazing web experiences.",
    location: "Dhaka, Bangladesh",
    website: "https://example.com",
    avatar: "", // avatar URL or base64
    cover: "",  // cover photo URL or base64
  });

  const [formData, setFormData] = useState(profileData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof UpdateUserInput]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, cover: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    try {
      updateUserSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const newErrors: Partial<Record<keyof UpdateUserInput, string>> = {};
      error.errors.forEach((err: any) => {
        const field = err.path[0] as keyof UpdateUserInput;
        newErrors[field] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSave = () => {
    if (validateForm()) {
      setProfileData(formData);
      setIsEditing(false);
      console.log("Profile updated:", formData);
    }
  };

  const handleCancel = () => {
    setFormData(profileData);
    setErrors({});
    setIsEditing(false);
  };

  const avatarPlaceholder = profileData.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex justify-center py-10 px-4">
      <Card className="w-full max-w-2xl overflow-hidden relative">
        {/* --- COVER PHOTO --- */}
        <div className="relative h-40 bg-gray-200 w-full">
          {(isEditing ? formData.cover : profileData.cover) && (
            <img
            src={isEditing ? formData.cover : profileData.cover}
            alt="Cover"
            className="w-full h-full object-cover"
            />
        )}

        {isEditing && (
            <label className="absolute top-2 right-2 cursor-pointer bg-white px-2 py-1 rounded shadow text-sm text-secondary">
            <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCoverChange}
            />
            Change Cover
            </label>
        )}

          {/* --- EDIT BUTTON TOP RIGHT --- */}
          {!isEditing && (
            <Button
              onClick={() => setIsEditing(true)}
              className="absolute top-2 right-2 bg-white px-3 py-1 rounded shadow hover:bg-gray-100 text-secondary"
            >
              Edit Profile
            </Button>
          )}
        </div>

        <CardHeader className="relative pt-0 mt-[-3rem] flex flex-col items-center">
          {/* --- AVATAR --- */}
          <div className="relative">
            {isEditing ? (
              <label className="cursor-pointer">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-500">
                  {formData.avatar ? (
                    <img
                      src={formData.avatar}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    avatarPlaceholder
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </label>
            ) : (
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-500">
                {profileData.avatar ? (
                  <img
                    src={profileData.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  avatarPlaceholder
                )}
              </div>
            )}
          </div>

          <CardTitle className="mt-4 text-2xl">{profileData.name}</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-6">
          {!isEditing ? (
            // VIEW MODE
            <div className="space-y-4 w-full text-center">
              {profileData.bio && <p className="text-lg">{profileData.bio}</p>}
              {profileData.location && <p className="text-gray-500">{profileData.location}</p>}
              {profileData.website && (
                <a
                  href={profileData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {profileData.website}
                </a>
              )}
            </div>
          ) : (
            // EDIT MODE
            <div className="space-y-4 w-full">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Bio <span className="text-gray-400 text-xs">(max 160 characters)</span>
                </label>
                <Input
                  name="bio"
                  value={formData.bio || ""}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself"
                />
                <div className="flex justify-between mt-1">
                  {errors.bio && <p className="text-red-500 text-sm">{errors.bio}</p>}
                  <p className="text-gray-400 text-xs ml-auto">{(formData.bio || "").length}/160</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Location <span className="text-gray-400 text-xs">(max 30 characters)</span>
                </label>
                <Input
                  name="location"
                  value={formData.location || ""}
                  onChange={handleInputChange}
                  placeholder="Where are you based?"
                />
                <div className="flex justify-between mt-1">
                  {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                  <p className="text-gray-400 text-xs ml-auto">{(formData.location || "").length}/30</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Website</label>
                <Input
                  name="website"
                  value={formData.website || ""}
                  onChange={handleInputChange}
                  placeholder="https://yourwebsite.com"
                />
                {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
              </div>

              <div className="flex gap-3 pt-2">
                <Button onClick={handleSave}>Update Profile</Button>
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

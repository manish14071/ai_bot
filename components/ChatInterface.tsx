"use client";

import { useState } from "react";
import { useChat } from "ai/react";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { user } = useUser();

  const handleUploadSuccess = (result: any) => {
    setImageUrl(result.info.secure_url);
  };

  return (
    <div className="flex flex-col h-[80vh]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start space-x-2 ${
                m.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <Avatar>
                <AvatarFallback>
                  {m.role === "user" ? user?.firstName?.charAt(0) || "U" : "AI"}
                </AvatarFallback>
              </Avatar>
              <div
                className={`p-2 rounded-lg ${
                  m.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {imageUrl && (
          <div className="flex justify-center">
            <Image
              src={imageUrl || "#"}
              alt="Description"
              className="max-w-xs rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit">Send</Button>
        </div>
        <CldUploadButton
          uploadPreset="YOUR_UPLOAD_PRESET"
          onSuccess={handleUploadSuccess}
        >
          <Button type="button" variant="outline">
            Upload Image
          </Button>
        </CldUploadButton>
      </form>
    </div>
  );
}

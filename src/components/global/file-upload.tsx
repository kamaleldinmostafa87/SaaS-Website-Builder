import { FileIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { UploadDropzone } from "@/lib/uploadthings";
import Error from "next/error";
type Props = {
  apiEndpoint?: "agencyLogo" | "avatar" | "subaccountLogo";
  onChange: (url?: string) => void;
  value: string;
};

export const FileUpload = ({ onChange, value }: Props) => {
  const type = value?.split(".").pop();

  if (value) {
    return (
      <div className="flex flex-col justify-center">
        {type !== "pdf" ? (
          <div className="relative h-40 w-40">
            <Image
              src={value}
              alt="uploaded image"
              className="object-container"
              fill
            ></Image>
          </div>
        ) : (
          <div className="relative mt-2 flex items-center rounded-md bg-background/10 p-2">
            <FileIcon />
            <a
              href={value}
              target="_blank"
              className="ml-2 text-sm text-indigo-500 hover:underline dark:text-indigo-400"
            >
              View PDF
            </a>
          </div>
        )}

        <Button variant={"ghost"} type="button" onClick={() => onChange("")}>
          <X className="h-4 w-4" />
          Remove Logo
        </Button>
      </div>
    );
  }
  return (
    <div className="w-full bg-muted/30">
      <UploadDropzone
        endpoint={apiEndpoint}
        onClientUploadComplete={(res) => {
          console.log(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
};

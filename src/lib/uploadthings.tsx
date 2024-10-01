import { generateUploadButton } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthings/core";

export const { UploadButton, UploadDropzone, Uploader } =
  generateUploadButton<OurFileRouter>;

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

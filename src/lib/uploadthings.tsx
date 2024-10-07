import { generateReactHelpers } from "@uploadthing/react";
import { generateUploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthings/core";

import { generateUploadButton } from "@uploadthing/react";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

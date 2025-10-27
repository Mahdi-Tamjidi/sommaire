"use client";
import React from "react";
import UploadFormInput from "./uploadFormInput";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary } from "@/actions/uploadActions";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

const UploadForm = () => {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
    },
    onUploadError: (err) => {
      console.error("error occurred while uploading", err);
      toast(" Error occurred while uploading", {
        description: err.message,
      });
    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    //Validating the fields
    const validatedFields = schema.safeParse({ file });
    if (!validatedFields.success) {
      toast("❌ Something went wrong", {
        description:
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
          "Invalid file.",
        style: { color: "red" },
      });

      return;
    }

    toast("📄 Uploading PDF...", {
      description: "We are uploading your PDF!",
    });

    //Upload to uploadthing
    const resp = await startUpload([file]);
    if (!resp) {
      toast("Something went wrong", {
        description: "Please use a different file",
        style: { color: "red" },
      });
      return;
    }

    toast("⏳ Processing PDF...", {
      description: "Hang tight! Our AI is reading through your document! ✨",
    });

    //Parse the pdf using lang chain

    const summary = await generatePdfSummary(resp);
    console.log(summary);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
};
export default UploadForm;

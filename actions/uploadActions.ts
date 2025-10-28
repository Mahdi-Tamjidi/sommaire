"use server";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromLlama } from "@/lib/llamaai";
import { generateSummaryFromGPT } from "@/lib/openai";

export const generatePdfSummary = async (
  uploadResponse: [
    {
      serverData: {
        userId: string;
        file: {
          url: string;
          name: string;
        };
      };
    }
  ]
) => {
  if (!uploadResponse) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  const {
    serverData: {
      userId,
      file: { url: pdfUrl, name: fileName },
    },
  } = uploadResponse[0];

  if (!pdfUrl) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);
    console.log(pdfText);

    let summary;

    try {
      summary = await generateSummaryFromGPT(pdfText);
      console.log(summary);
    } catch (gptError) {
      console.log(gptError);
      // call llama
      if (
        gptError instanceof Error &&
        gptError.message === "RATE_LIMIT_EXCEEDED"
      ) {
        try {
          summary = await generateSummaryFromLlama(pdfText);
          console.log(summary);
        } catch (llamaError) {
          console.error(
            "Llama API failed after open ai quote exceeded",
            llamaError
          );
          throw new Error(
            "Failed to generate summary with available AI providers"
          );
        }
      }
    }

    if (!summary) {
      return {
        success: false,
        message: "Filed to generate summary",
        data: null,
      };
    }
    return {
      success: true,
      message: "Summary Generated Successfully",
      data: { summary },
    };
  } catch (err) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }
};

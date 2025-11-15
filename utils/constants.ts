import { isDev } from "@/utils/helpers";

export const pricingPlans = [
  {
    id: "basic",
    name: "basic",
    description: "Perfect for occasional use",
    price: 9,
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    paymentLink: isDev
      ? "https://buy.stripe.com/test_cNicN65tyajsas94Ca7AI00"
      : "",
    priceId: isDev ? "price_1SRtQNJcDfsZXuWSN861THlD" : "",
  },
  {
    id: "pro",
    name: "pro",
    description: "For professionals and teams",
    price: 19,
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: isDev
      ? "https://buy.stripe.com/test_14AbJ22hmgHQdEl0lU7AI01"
      : "",
    priceId: isDev ? "price_1SRtQNJcDfsZXuWSucX0IC4c" : "",
  },
];

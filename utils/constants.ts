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

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      easing: "ease-out",
    },
  },
};

export const buttonVariants = {
  scale: 1.05,
  transition: {
    duration: 0.25,
    easing: "ease-out",
  },
};

export const listVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      easing: "ease-out",
    },
  },
};

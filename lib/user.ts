import { getDbConnection } from "@/lib/db";
import { getUserUploadCount } from "@/lib/summaries";
import { pricingPlans } from "@/utils/constants";
import { User } from "@clerk/nextjs/server";

export const getPriceIdForActiveUSer = async (email?: string) => {
  const sql = await getDbConnection();

  const query =
    await sql`SELECT price_id FROM users WHERE email = ${email} AND status = 'active'`;

  return query?.[0]?.price_id || null;
};

export const hasActivePlan = async (email: string) => {
  const sql = await getDbConnection();

  const query =
    await sql`SELECT price_id, status FROM users WHERE email = ${email} AND status = 'active' AND price_id IS NOT NULL`;

  return query && query.length > 0;
};

export const hasReachedUploadLimit = async ({
  userId,
  email,
}: {
  userId?: string;
  email?: string;
}) => {
  const uploadCount = await getUserUploadCount(userId);

  const priceId = await getPriceIdForActiveUSer(email);

  const isPro =
    pricingPlans.find((plan) => plan.priceId === priceId)?.id === "pro";

  const uploadLimit: number = isPro ? 1000 : 5;

  return { hasReachedLimit: uploadCount >= uploadLimit, uploadLimit };
};

export const getSubscriptionStatus = async (user: User) => {
  const hasSubscription = await hasActivePlan(
    user.emailAddresses[0].emailAddress
  );

  return hasSubscription;
};

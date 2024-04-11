import { auth } from "@clerk/nextjs";

const adminIds = [process.env.ADMIN_USER_ID];

export const isAdmin = () => {
  const { userId } = auth();

  return adminIds.indexOf(userId || "") !== -1;
};

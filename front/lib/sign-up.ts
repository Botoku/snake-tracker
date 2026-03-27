import { redirect } from "next/navigation";
import { authClient } from "./auth-client";
import { UserType } from "./types";

export const signUserUp = async (userData: UserType) => {
  console.log("userdata", userData);
  if (!userData.name || !userData.password) {
    throw new Error("Name and Password required for signup");
  }
  const { data, error } = await authClient.signUp.email(
    {
      email: userData.email,
      name: userData.name,
      password: userData.password,
    },
    {
      onRequest: (ctx) => {
        // show loading
      },
      onSuccess: (ctx) => {
        // redirect to dashboard or signin page
        console.log("Success signing up");
      },
      onError: (ctx) => {
        // display error message

        alert(ctx.error.message);
      },
    },
  );

  if (error) {
    console.log(error);
    throw new Error("Error signing up");
  }
  if (data) {
    console.log(data);
  }
};
export const signUserIn = async (userData: UserType) => {
  if (!userData.password) {
    throw new Error("Password required for signin");
  }
  const { data, error } = await authClient.signIn.email(
    {
      email: userData.email,
      password: userData.password,
    },
    {
      onRequest: (ctx) => {
        // show loading
      },
      onSuccess: (ctx) => {
        // redirect to dashboard or signin page
        console.log("Success signing In");
        
      },
      onError: (ctx) => {
        // display error message

        alert(ctx.error.message);
      },
    },
  );
  if (error) {
    console.log(error);
    throw new Error("Error signing up");
  }
  if (data) {
    console.log(data);
  }
};

export const signOutUser = async () => {
  await authClient.signOut({});
  redirect("/");
};

export const sessionInfo = async () => {
  const { data: session, error } = await authClient.getSession();

  return {session, error}
};

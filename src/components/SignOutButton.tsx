"use client";

import { ButtonHTMLAttributes, FC, useState } from "react";
import Button from "./ui/button";
import { Loader2, LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton: FC<SignOutButtonProps> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState<Boolean>(false);

  const handleClick = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
    } catch (error) {
      toast.error("There was a problem signing out");
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <Button {...props} variant="ghost" onClick={handleClick}>
      {isSigningOut ? (
        <Loader2 className="animage-spin h-4 w-4" />
      ) : (
        <LogOut className="h-4 w-4" />
      )}
    </Button>
  );
};

export default SignOutButton;

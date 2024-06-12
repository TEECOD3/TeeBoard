"use client";
import { Button } from "@/components/ui/button";
import google from "@/public/assets/svg/google.svg";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const formSchema = z.object({
  username: z
    .string({ message: "username is required" })
    .min(6, { message: "minimum of 6 letters required" })
    .max(50),
  password: z
    .string({ message: "password is required to login" })
    .min(6, { message: "minimum of 6 characters is required" }),
});

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "temi236topemicheal@gmail.com",
      password:"Password1"
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/Dashboard");
  }
  return (
    <div>
      <p className=" text-[0.74rem] lg:text-[0.75rem] text-black/90 font-medium text-center">
        Don&apos;t have an account yet?{" "}
        <span className="text-dark-blue">Create an account</span>
      </p>
      <Button
        variant="outline"
        className="w-full capitalize flex gap-x-2 py-3 mt-8"
      >
        <div className="relative overflow-hidden  size-8  flex items-center justify-center">
          <Image
            src={google}
            alt="user profile image"
            height={150}
            width={150}
          />
        </div>
        <span className="text-[0.8rem]"> signup with Google</span>
      </Button>

      <div className="flex gap-x-3 w-full items-center justify-center my-6">
        <span className="bg-gray-200 w-full h-[1px] "></span>
        <span className="text-gray-400 text-sm">OR</span>
        <span className="w-full bg-gray-200 h-[1px]"></span>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[0.74rem] lg:text-[0.75rem]">
                  Username
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage className="text-[10px] text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="text-[0.74rem] lg:text-[0.75rem]">
                    Password
                  </FormLabel>
                  <span className="text-dark-blue text-[0.74rem] lg:text-[0.75rem]">
                    Remember me
                  </span>
                </div>

                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage className="text-[0.74rem] lg:text-[0.75rem] text-red-400" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#3855B3] hover:bg-[#3855B3]/60"
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;

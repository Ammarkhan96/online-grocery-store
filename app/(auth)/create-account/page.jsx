"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function CreateAccount() {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  const onCreateAccount = () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    GlobalApi.registerUser(username, email, password).then((resp) => {
      console.log(resp.data.user);
      console.log(resp.data.jwt);
    });
  };

  return (
    <div className="flex items-baseline justify-center my-10">
      <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border 
        border-gray-200">
        <Image src="/logo.png" width={200} height={200} alt="logo" />
        <h2 className="font-bold text-3xl">Create an Account</h2>
        <h2 className="text-gray-500">Enter your Email and Password to Create an account</h2>
        <div className="w-full flex flex-col gap-5 mt-7">
          <Input placeholder="Username" value={username} 
            onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="name@example.com" value={email} 
          onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} 
            onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={() => onCreateAccount()} disabled={!(username && email && password)}>
            Create an Account</Button>
          <p> Already have an account
            <Link href={"/sign-in"} className="text-blue-500">
              {" "}
              Click here to Sign-in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;

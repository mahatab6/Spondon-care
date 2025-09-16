"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar2() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <div className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-3xl">
      <nav className=" px-1 w-11/12 mx-auto py-4 flex items-center justify-between text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 font-playfair flex gap-1 items-center">
        <img className="w-10 h-10" src="/images/Logo.webp" alt="" />
        <h1>Spondon Care</h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-blue-500 font-medium text-lg"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block ">
        <Button className="btn-primary">Sign In</Button>
        <Button className="btn-secondary ml-5">Sign Up</Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Menu</Button>
          </DialogTrigger>
          <DialogContent className="w-64">
            <DialogHeader>
              <DialogTitle>Menu</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col mt-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-500"
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={() => setOpen(false)}>Sign In</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
    </div>
  );
}

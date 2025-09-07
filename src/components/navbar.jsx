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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">Spondon care</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-blue-500"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block ">
        <Button>Sign In</Button>
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
  );
}

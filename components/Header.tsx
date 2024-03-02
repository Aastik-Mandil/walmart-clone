"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store";
import { getCartTotal } from "@/lib/getCartTotal";

function Header() {
  const [cart] = useCartStore((state) => [state.cart]);
  const total = getCartTotal(cart);
  const router = useRouter();

  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = search;
    router.push(`/search?q=${input}`);
  };

  return (
    <header className="flex flex-col md:flex-row items-center bg-walmart px-10 py-7 space-x-5">
      <Link href={"/"} className="mb-5 md:mb-0">
        <Image
          src="https://links.papareact.com/yur"
          //   src="https://i.ingur.com/5V4ehM.png"
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>

      <form
        className="flex items-center bg-white rounded-full w-full flex-1"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-xs text-xs"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />

        <button className="" type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
          {""}
        </button>
      </form>

      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />

          <p className="">Department</p>
        </Link>

        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />

          <p className="">Services</p>
        </Link>

        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />

          <div className="">
            <p className="text-xs font-extralight">Reorder</p>

            <p className="">My Items</p>
          </div>
        </Link>

        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />

          <div className="">
            <p className="text-xs font-extralight">Sign In</p>

            <p className="">Account</p>
          </div>
        </Link>

        <Link
          href={"/basket"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />

          <div className="">
            <p className="text-xs font-extralight">
              {cart?.length > 0 ? `${cart?.length} item(s)` : "No item(s)"}
            </p>

            <p className="">{cart?.length > 0 ? total : "0"}</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;

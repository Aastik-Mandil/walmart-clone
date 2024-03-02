import React from "react";
import fetchSearch from "@/lib/fetchSearch";
import { Organic, Result } from "@/typings/searchTypings";
import Product from "@/components/Product";

async function SearchPage({
  searchParams: { q },
}: {
  searchParams: { q: string };
}) {
  const results: void | Result | null = await fetchSearch(q);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-2">Result for {q}</h1>

      <h2 className="mb-5 text-gray-400">
        ({results?.content?.total_results} results)
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {results?.content?.organic?.map((product: Organic) => (
          <li key={product?.product_id} className="">
            <p className="">{product?.title}</p>

            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;

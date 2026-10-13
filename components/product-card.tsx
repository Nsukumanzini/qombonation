"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { whatsappNumber } from "@/app/data";

export function ProductCard({ product }: { product: { name: string; category: string; image: string; note: string } }) {
  const text = encodeURIComponent(`Hi QomboNation, I would like to buy or enquire about the ${product.name}. Please share availability, price and delivery options.`);
  return <article className="product-card"><div className="product-image"><img src={product.image} loading="lazy" decoding="async" alt={product.name}/><span>{product.category}</span></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.note}</p></div><Dialog><DialogTrigger className="text-button">Buy / enquire <ArrowUpRight size={17}/></DialogTrigger><DialogContent className="bg-[#f5f1e8] text-[#0b0d13] border-0 rounded-none sm:max-w-md"><DialogHeader><DialogTitle className="text-2xl font-semibold">Order {product.name}</DialogTitle><DialogDescription className="text-[#4b4d55] leading-6">Each QomboNation piece may vary because of the materials used. Confirm availability, price, customisation and delivery directly with the team.</DialogDescription></DialogHeader><img src={product.image} loading="lazy" decoding="async" alt="" className="mt-3 h-56 w-full object-cover"/><a href={`https://wa.me/${whatsappNumber}?text=${text}`} target="_blank" rel="noreferrer" className="dialog-buy"><MessageCircle size={18}/> Continue order on WhatsApp</a></DialogContent></Dialog></div></article>;
}

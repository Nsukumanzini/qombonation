import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GalleryGrid } from "@/components/gallery-grid";
export const metadata: Metadata={title:"Gallery",description:"Explore QomboNation campaigns, product concepts, lookbooks and recycled-denim designs."};
export default function Gallery(){return <main><section className="gallery-hero"><div><p className="eyebrow light">QomboNation gallery</p><h1>Craft, culture<br/>& <em>character.</em></h1></div><p>Every QomboNation product, campaign and moment in one visual archive. Tap any image for a closer look, then swipe or use the arrows to keep exploring.</p></section><GalleryGrid/><section className="gallery-shop-cta"><p className="eyebrow light">Carry the story</p><h2>Seen something<br/>you <em>love?</em></h2><p>Explore the collection and find the QomboNation piece that speaks to you.</p><Link href="/shop">Shop the collection <ArrowUpRight/></Link></section></main>}

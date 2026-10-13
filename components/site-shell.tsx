"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, UsersRound, Phone, ArrowUpRight, Mail, Music2, Home, Images, ShoppingBag, Info, MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/app/data";
import { SplashScreen } from "@/components/splash-screen";

const links = [["Home", "/"], ["Gallery", "/gallery"], ["Shop", "/shop"], ["About", "/about"], ["Contact", "/contact"]];
const mobileLinks = [{label:"Home",href:"/",icon:Home},{label:"Gallery",href:"/gallery",icon:Images},{label:"Shop",href:"/shop",icon:ShoppingBag},{label:"About",href:"/about",icon:Info},{label:"Contact",href:"/contact",icon:MessageCircle}];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div className="site-shell">
    <SplashScreen/>
    <header className="topbar">
      <Link href="/" className="brand" aria-label="QomboNation home"><img src="/qombo/PHOTO-2026-08-13-08-13-44.jpg" alt="QomboNation"/><span>QOMBO<span>NATION</span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>)}</nav>
      <a className="nav-cta" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi QomboNation, I would like to discuss a custom design.")}`} target="_blank" rel="noreferrer">Start a project <ArrowUpRight size={16}/></a>
    </header>
    {children}
    <footer>
      <div className="footer-lead"><div><p className="eyebrow light">Designed in South Africa</p><h2>Good design should carry a better story.</h2></div><Link href="/contact" className="circle-link">Let’s talk <ArrowUpRight/></Link></div>
      <div className="footer-grid">
        <div><div className="footer-brand">QOMBO<span>NATION</span></div><p>Recycled materials. Useful objects.<br/>Made with intention since 2021.</p><p className="company-meta">QomboNation · Reg. 2021/635004/07<br/>Joy J Mdluli</p></div>
        <div><strong>Explore</strong>{links.slice(1).map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}</div>
        <div><strong>Contact</strong><a href="tel:+27847155665"><Phone size={14}/> 084 715 5665</a><a href="mailto:njabulojoy38@gmail.com"><Mail size={14}/> njabulojoy38@gmail.com</a></div>
        <div><strong>Follow</strong><a href="https://www.facebook.com/Qombonation" target="_blank" rel="noreferrer"><UsersRound size={14}/> Qombonation / Joy Mdluli</a><a href="https://www.instagram.com/QNation" target="_blank" rel="noreferrer"><Camera size={14}/> @QNation</a><a href="https://www.tiktok.com/@QNation" target="_blank" rel="noreferrer"><Music2 size={14}/> @QNation</a></div>
      </div><div className="copyright"><span>© {new Date().getFullYear()} QomboNation. All rights reserved.</span><a href="https://ogtechnologies.co.za" target="_blank" rel="noreferrer">Website designed by <strong>OG Technologies</strong> <ArrowUpRight size={12}/></a></div>
    </footer>
    <nav className="bottom-nav" aria-label="Mobile navigation">{mobileLinks.map(({label,href,icon:Icon})=><Link key={href} href={href} className={pathname===href?"active":""}><Icon/><span>{label}</span></Link>)}</nav>
  </div>;
}

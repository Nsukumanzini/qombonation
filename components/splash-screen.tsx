"use client";
import { useEffect, useState } from "react";
export function SplashScreen(){const [visible,setVisible]=useState(true);useEffect(()=>{const timer=window.setTimeout(()=>setVisible(false),850);return()=>window.clearTimeout(timer)},[]);if(!visible)return null;return <div className="splash" aria-hidden="true"><div className="splash-mark"><img src="/qombo/PHOTO-2026-08-13-08-13-44.jpg" alt=""/><div><strong>QOMBO<span>NATION</span></strong><small>Reduce · Reuse · Reimagine</small></div></div><div className="splash-line"/></div>}

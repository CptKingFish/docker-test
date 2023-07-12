"use client";

import Image from "next/image";
import axios from "axios";

import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:80").then((res) => setData(res.data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">{data || ""}</h1>
        <h1 className="text-6xl font-bold text-center">{data || ""}</h1>
      </div>
    </main>
  );
}

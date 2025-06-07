"use client";

import { Button } from "antd";
import "./BackButton.css"
import { useRouter } from "next/navigation";

export default function BackButton (){
    const router = useRouter();


    return(
        <Button className="back-button" onClick={() => router.back()}>
          ← Geri
        </Button>
    )
}
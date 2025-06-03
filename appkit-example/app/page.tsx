"use client"
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="flex items-center justify-between h-dvh w-full">
      <w3m-button />
      {isConnected && <w3m-network-button/>}
    </div>
  )
}

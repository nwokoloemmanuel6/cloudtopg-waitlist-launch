// src/lib/config.ts
type ResolvedConfig = {
  paystackPublicKey?: string;
  feeNgn?: number;
  reason?: string; // why config is missing/invalid (dev-only hint)
};

// Lovable preview sometimes injects runtime vars on window._env_.
// We also support standard Vite envs (import.meta.env).
declare global {
  interface Window { _env_?: Record<string, string>; }
}

function readEnv(key: string): string | undefined {
  // Prefer Vite env
  const v = (import.meta as any).env?.[key];
  if (v != null && v !== "") return String(v);

  // Then Lovable runtime env
  const r = window._env_?.[key];
  if (r != null && r !== "") return String(r);

  return undefined;
}

export function resolveConfig(): ResolvedConfig {
  // Accept common variants to be friendly in preview/CI
  const paystackPublicKey =
    readEnv("VITE_PAYSTACK_PUBLIC_KEY") ||
    readEnv("PAYSTACK_PUBLIC_KEY") ||
    readEnv("LOVABLE_PAYSTACK_PUBLIC_KEY"); // optional Lovable secret name

  const feeStr =
    readEnv("VITE_FEE_NGN") ||
    readEnv("FEE_NGN");

  const feeNgn = feeStr ? Number(feeStr) : undefined;

  let reason: string | undefined;
  if (!paystackPublicKey) reason = "Missing Paystack public key (VITE_PAYSTACK_PUBLIC_KEY).";
  else if (!(feeNgn! > 0)) reason = "Invalid or missing fee (VITE_FEE_NGN).";

  return { paystackPublicKey, feeNgn, reason };
}

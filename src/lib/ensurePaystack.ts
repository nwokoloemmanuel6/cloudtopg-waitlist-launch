// src/lib/ensurePaystack.ts
declare global {
  interface Window {
    PaystackPop?: any;
  }
}

const PAYSTACK_URL = "https://js.paystack.co/v1/inline.js";

export function ensurePaystackLoaded(timeoutMs = 8000): Promise<void> {
  return new Promise((resolve, reject) => {
    // Already loaded
    if (window.PaystackPop) {
      return resolve();
    }

    // Check if script tag already exists
    const existing = Array.from(document.scripts).find(
      (s) => s.src?.includes("js.paystack.co/v1/inline.js")
    );

    if (!existing) {
      // Create new script tag
      const script = document.createElement("script");
      script.src = PAYSTACK_URL;
      script.async = true;
      script.onload = () => {
        if (window.PaystackPop) {
          resolve();
        } else {
          reject(new Error("Paystack script loaded but PaystackPop not found."));
        }
      };
      script.onerror = () => reject(new Error("Failed to load Paystack inline script."));
      document.head.appendChild(script);
    } else {
      // Script tag exists, wait for it to load
      if (window.PaystackPop) {
        return resolve();
      }
      
      const onLoad = () => {
        if (window.PaystackPop) {
          resolve();
        } else {
          reject(new Error("Paystack script loaded but PaystackPop not found."));
        }
      };
      const onError = () => reject(new Error("Failed to load Paystack inline script."));
      
      existing.addEventListener("load", onLoad);
      existing.addEventListener("error", onError);
    }

    // Timeout safety
    const timeoutId = setTimeout(() => {
      reject(new Error("Timed out loading Paystack."));
    }, timeoutMs);

    // Wrap resolve/reject to clear timeout
    const originalResolve = resolve;
    const originalReject = reject;
    
    resolve = (...args: any) => {
      clearTimeout(timeoutId);
      originalResolve(...(args as [void]));
    };
    
    reject = (...args: any) => {
      clearTimeout(timeoutId);
      originalReject(...(args as [Error]));
    };
  });
}

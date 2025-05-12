"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use state to track client-side rendering
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted after hydration is complete
    setIsMounted(true);

    // Add antialiased class to body
    if (typeof document !== 'undefined') {
      document.body.classList.add("antialiased");
    }
  }, []);

  // During server rendering or first client render before hydration,
  // wrap content in a div that will be replaced after hydration
  if (!isMounted) {
    return <div suppressHydrationWarning>{children}</div>;
  }

  // After hydration and mounting, return the actual content
  return <div>{children}</div>;
}

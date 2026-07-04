"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { type PageKey } from "@/lib/site-data";

/* ------------------------------------------------------------------ */
/* Router context                                                      */
/* ------------------------------------------------------------------ */
interface RouterCtx {
  page: PageKey;
  navigate: (page: PageKey) => void;
}
const Ctx = React.createContext<RouterCtx | null>(null);

const VALID: PageKey[] = [
  "home", "services", "industries", "technology",
  "network", "about", "careers", "insights", "contact",
];

function pageFromHash(): PageKey {
  if (typeof window === "undefined") return "home";
  const raw = window.location.hash.replace(/^#\/?/, "").split("?")[0].trim();
  return (VALID as string[]).includes(raw) ? (raw as PageKey) : "home";
}

export function SiteRouter({ children }: { children: React.ReactNode }) {
  const [page, setPage] = React.useState<PageKey>("home");
  const [loading, setLoading] = React.useState(false);

  // Sync from hash on mount + when hash changes (back/forward)
  React.useEffect(() => {
    setPage(pageFromHash());
    const onHash = () => setPage(pageFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = React.useCallback((next: PageKey) => {
    if (next === page) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Simulate page-load: show top bar, then swap
    setLoading(true);
    window.location.hash = `/${next}`;
    // small artificial delay so the loading bar reads as a real navigation
    window.setTimeout(() => {
      setPage(next);
      window.scrollTo({ top: 0, auto: true });
      setLoading(false);
    }, 420);
  }, [page]);

  const value = React.useMemo(() => ({ page, navigate }), [page, navigate]);

  return (
    <Ctx.Provider value={value}>
      <TopLoadingBar loading={loading} />
      {children}
    </Ctx.Provider>
  );
}

export function useSiteRouter() {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useSiteRouter must be used within SiteRouter");
  return ctx;
}

/* ------------------------------------------------------------------ */
/* Top loading bar                                                     */
/* ------------------------------------------------------------------ */
function TopLoadingBar({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-x-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-brand-500 via-saffron-400 to-saffron-600"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
        />
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* Page transition wrapper                                             */
/* ------------------------------------------------------------------ */
export function PageTransition({ pageKey, children }: { pageKey: PageKey; children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* PageLink — navigates within the SPA                                 */
/* ------------------------------------------------------------------ */
export function PageLink({
  page,
  className,
  children,
  onClick,
  ...rest
}: {
  page: PageKey;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  const { navigate } = useSiteRouter();
  return (
    <a
      href={`#/${page}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        navigate(page);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* NavButton — button-styled SPA navigation                            */
/* ------------------------------------------------------------------ */
export function NavButton({
  page,
  className,
  children,
  ...rest
}: {
  page: PageKey;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">) {
  const { navigate } = useSiteRouter();
  return (
    <button
      type="button"
      className={className}
      onClick={() => navigate(page)}
      {...rest}
    >
      {children}
    </button>
  );
}

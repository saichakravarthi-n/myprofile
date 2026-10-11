"use client";

import { useEffect, useId, useRef, useState } from "react";
import { profile } from "@/data/profile";

type ShareProfileProps = {
  variant?: "light" | "dark" | "ghost-dark";
  className?: string;
  label?: string;
};

function ShareIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="2.4" fill="currentColor" />
      <circle cx="6" cy="12" r="2.4" fill="currentColor" />
      <circle cx="18" cy="19" r="2.4" fill="currentColor" />
      <path
        d="M8.2 10.8 15.8 6.7M8.2 13.2l7.6 4.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShareProfile({
  variant = "light",
  className = "",
  label = "Share",
}: ShareProfileProps) {
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const getShareData = () => {
    const url = window.location.origin + "/";
    const title = `${profile.name} — ${profile.title}`;
    const text = `${profile.name} · ${profile.title} at bigbasket. ${profile.tagline}`;
    return { url, title, text };
  };

  const shareNative = async () => {
    const data = getShareData();
    try {
      await navigator.share(data);
      setOpen(false);
    } catch (error) {
      if ((error as Error).name !== "AbortError") setOpen(true);
    }
  };

  const copyLink = async () => {
    const { url } = getShareData();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      window.prompt("Copy this profile link:", url);
    }
  };

  const openShare = (kind: "linkedin" | "whatsapp" | "x" | "email") => {
    const { url, title, text } = getShareData();
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    const encodedTitle = encodeURIComponent(title);

    const hrefs = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`,
    };

    window.open(hrefs[kind], "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  const onPrimaryClick = async () => {
    if (canNativeShare && !open) {
      await shareNative();
      return;
    }
    setOpen((value) => !value);
  };

  const buttonClass =
    variant === "dark"
      ? "btn btn-on-dark !min-h-10 !px-3.5 !text-sm"
      : variant === "ghost-dark"
        ? "btn btn-ghost-on-dark !min-h-10 !px-3.5 !text-sm"
        : "inline-flex h-10 items-center gap-2 rounded-[var(--radius)] border border-[var(--line)] bg-white/70 px-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)] hover:bg-white";

  return (
    <div ref={rootRef} className={`relative inline-flex ${className}`}>
      <button
        type="button"
        className={buttonClass}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={onPrimaryClick}
      >
        <ShareIcon />
        <span>{copied ? "Link copied" : label}</span>
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[13.5rem] overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--bg-elevated)] py-1.5 text-[var(--ink)] shadow-[0_16px_40px_rgba(13,17,22,0.14)]"
        >
          <button
            type="button"
            role="menuitem"
            className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm font-medium hover:bg-[var(--bg)]"
            onClick={copyLink}
          >
            Copy profile link
          </button>
          {canNativeShare && (
            <button
              type="button"
              role="menuitem"
              className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm font-medium hover:bg-[var(--bg)]"
              onClick={shareNative}
            >
              Share via device
            </button>
          )}
          <button
            type="button"
            role="menuitem"
            className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm font-medium hover:bg-[var(--bg)]"
            onClick={() => openShare("linkedin")}
          >
            Share on LinkedIn
          </button>
          <button
            type="button"
            role="menuitem"
            className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm font-medium hover:bg-[var(--bg)]"
            onClick={() => openShare("whatsapp")}
          >
            Share on WhatsApp
          </button>
          <button
            type="button"
            role="menuitem"
            className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm font-medium hover:bg-[var(--bg)]"
            onClick={() => openShare("x")}
          >
            Share on X
          </button>
          <button
            type="button"
            role="menuitem"
            className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm font-medium hover:bg-[var(--bg)]"
            onClick={() => openShare("email")}
          >
            Share by email
          </button>
        </div>
      )}
    </div>
  );
}

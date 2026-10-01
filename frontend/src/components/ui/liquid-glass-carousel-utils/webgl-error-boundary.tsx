"use client";

import React, { Component, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface WebGLFallbackProps {
  className?: string;
  message?: string;
}

export function WebGLFallback({
  className,
  message = "This carousel needs WebGL, which is unavailable in this browser.",
}: WebGLFallbackProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center p-6 text-center text-sm text-stone-500",
        className
      )}
    >
      <p>{message}</p>
    </div>
  );
}

export interface WebGLErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface WebGLErrorBoundaryState {
  hasError: boolean;
}

export class WebGLErrorBoundary extends Component<
  WebGLErrorBoundaryProps,
  WebGLErrorBoundaryState
> {
  constructor(props: WebGLErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): WebGLErrorBoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: Error) {
    console.warn("WebGL Error caught by boundary:", error);
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <WebGLFallback />;
    }
    return this.props.children;
  }
}

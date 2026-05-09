// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Storage Error State
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface StorageErrorStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function StorageErrorState(_props: StorageErrorStateProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant flex flex-col py-lg z-50">
      {/* Header */}
      <div className="px-margin mb-xl flex items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div>
      <h1 className="text-headline font-headline font-black text-primary">FloraOps</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Facility Maintenance</p>
      </div>
      </div>
      {/* CTA */}
      <div className="px-md mb-lg">
      <button className="w-full flex items-center justify-center gap-xs min-h-touch_target bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-on-primary-fixed-variant transition-colors">
      <span className="material-symbols-outlined text-[18px]">add</span>
                      New Log Entry
                  </button>
      </div>
      {/* Main Navigation */}
      <nav className="flex-1 flex flex-col gap-unit">
      {/* Active Tab (Dashboard default for context) */}
      <a className="bg-secondary-container text-on-secondary-container font-bold rounded-lg mx-md px-md min-h-touch_target flex items-center gap-md scale-98 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-md text-label-md uppercase tracking-wider">Dashboard</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all mx-md px-md min-h-touch_target flex items-center gap-md rounded-lg" href="#">
      <span className="material-symbols-outlined">assignment</span>
      <span className="font-label-md text-label-md uppercase tracking-wider">Task Board</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all mx-md px-md min-h-touch_target flex items-center gap-md rounded-lg" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span className="font-label-md text-label-md uppercase tracking-wider">Equipment</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all mx-md px-md min-h-touch_target flex items-center gap-md rounded-lg" href="#">
      <span className="material-symbols-outlined">database</span>
      <span className="font-label-md text-label-md uppercase tracking-wider">Logs</span>
      </a>
      </nav>
      {/* Footer Navigation */}
      <div className="mt-auto flex flex-col gap-unit">
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all mx-md px-md min-h-touch_target flex items-center gap-md rounded-lg" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-md text-label-md uppercase tracking-wider">Settings</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all mx-md px-md min-h-touch_target flex items-center gap-md rounded-lg" href="#">
      <span className="material-symbols-outlined">help</span>
      <span className="font-label-md text-label-md uppercase tracking-wider">Support</span>
      </a>
      </div>
      </aside>
      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-64 z-40 flex justify-between items-center px-lg h-14 bg-surface border-b border-outline-variant">
      <div className="flex items-center gap-sm">
      {/* Space for breadcrumbs or context if needed, currently minimal */}
      </div>
      <div className="flex items-center gap-sm text-primary">
      <button aria-label="notifications" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-low transition-colors duration-200">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="account_circle" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-low transition-colors duration-200">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content Area (Replaced by Error State) */}
      <main className="pl-64 pt-14 min-h-screen flex items-center justify-center p-margin">
      {/* Error Card */}
      <div className="bg-surface border border-outline-variant rounded-lg max-w-lg w-full p-xl shadow-sm">
      <div className="flex items-start gap-md mb-lg">
      <div className="w-12 h-12 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0 border border-error/20">
      <span className="material-symbols-outlined text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>cloud_off</span>
      </div>
      <div>
      <h2 className="text-display font-display text-on-surface mb-xs">Storage Connection Error</h2>
      <p className="text-body-lg font-body-lg text-on-surface-variant">
                              The console is unable to persist data to local storage. This may be due to restrictive browser settings, an active private browsing session, or storage limits being reached.
                          </p>
      </div>
      </div>
      {/* Technical Details (Optional but good for corporate minimal utility) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md mb-xl">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-unit">Diagnostics</p>
      <code className="font-body-sm text-body-sm text-error">DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'floraOps_session' exceeded the quota.</code>
      </div>
      <div className="flex items-center gap-md">
      <button className="min-h-touch_target px-lg bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-on-primary-fixed-variant transition-colors flex-1 flex justify-center items-center">
                          Retry
                      </button>
      <button className="min-h-touch_target px-lg bg-surface text-primary border border-outline-variant rounded font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-low transition-colors flex-1 flex justify-center items-center">
                          Reset Session
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}

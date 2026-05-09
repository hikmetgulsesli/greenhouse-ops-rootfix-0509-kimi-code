// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Empty State
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

export interface EmptyStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function EmptyState(_props: EmptyStateProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="docked fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant flex flex-col h-full py-lg z-50">
      {/* Header */}
      <div className="px-md mb-xl flex items-center gap-md">
      <img alt="Greenhouse Logo" className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A subtle, minimalist logo icon suitable for a corporate agricultural or facility maintenance brand, featuring clean geometric lines in a soft, monochromatic blue-gray palette against a pure white background. The aesthetic is strictly modern, professional, and understated, aligning with a light-mode corporate minimal UI design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdEFGaOkv9VLl14W0jtuEpOPiLqqAJhUssm6UhtZKZ4dz6SUdLHmRCbbeGEOoyY2jmUNy36xllPitCbNsd9d4Dw_hpxcnKkWNBBw3Jrxdu_CFQU73gRU_98ZOYsYluXBprhx3dyJeRon8pLsiU4rClodZOL7vd78H4A9S8PM-yMSM76b-8QxeWGo9kwYylLqLalBF826ui3d0srALqCQtck4sS7vORhPTtPHdJeYwEFUIhNZ5uI57-L_wGkKXkjYLEyWEeHHJ0DDas" />
      <div>
      <h1 className="text-headline font-headline font-black text-primary">FloraOps</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Facility Maintenance</p>
      </div>
      </div>
      {/* CTA */}
      <div className="px-md mb-lg">
      <button className="w-full h-touch_target bg-primary text-on-primary rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">add</span>
                      New Log Entry
                  </button>
      </div>
      {/* Main Tabs */}
      <div className="flex-1 flex flex-col gap-unit">
      <a className="text-on-surface-variant hover:text-on-surface mx-md hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider h-touch_target flex items-center gap-md px-md rounded-lg" href="#">
      <span className="material-symbols-outlined">dashboard</span>
                      Dashboard
                  </a>
      <a className="bg-secondary-container text-on-secondary-container font-bold rounded-lg mx-md h-touch_target flex items-center gap-md px-md font-label-md text-label-md uppercase tracking-wider scale-98 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
                      Task Board
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-md hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider h-touch_target flex items-center gap-md px-md rounded-lg" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-md hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider h-touch_target flex items-center gap-md px-md rounded-lg" href="#">
      <span className="material-symbols-outlined">database</span>
                      Logs
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-md hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider h-touch_target flex items-center gap-md px-md rounded-lg" href="#">
      <span className="material-symbols-outlined">monitoring</span>
                      Monitoring
                  </a>
      </div>
      {/* Footer Tabs */}
      <div className="flex flex-col gap-unit mt-auto border-t border-outline-variant pt-md">
      <a className="text-on-surface-variant hover:text-on-surface mx-md hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider h-touch_target flex items-center gap-md px-md rounded-lg" href="#">
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-md hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider h-touch_target flex items-center gap-md px-md rounded-lg" href="#">
      <span className="material-symbols-outlined">help</span>
                      Support
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 ml-64 min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-64 z-40 flex justify-between items-center px-lg h-14 bg-surface border-b border-outline-variant flat no shadows">
      <div className="flex items-center gap-md w-1/3">
      <div className="relative w-full max-w-sm">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
      <input className="w-full h-10 bg-surface-container-low border-none rounded-xl pl-[40px] pr-sm font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary-container outline-none transition-all placeholder:text-on-surface-variant" placeholder="Search tasks, equipment..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <span className="text-headline font-headline font-bold text-primary mr-md">FloraOps Console</span>
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-primary font-body-md hover:bg-surface-container-low transition-colors duration-200">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-primary font-body-md hover:bg-surface-container-low transition-colors duration-200">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      <img alt="Maintenance Supervisor Profile" className="w-8 h-8 rounded-full ml-xs object-cover border border-outline-variant" data-alt="A professional headshot of a facility maintenance supervisor, looking directly at the camera with a neutral, reliable expression. The lighting is bright and even, set against a clean, out-of-focus background that suggests a modern, pristine indoor environment. The image style is sharp and corporate, fitting seamlessly into a clean, light-mode minimalist application dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgV6K5dq0V1FHwcIvzcLt-Wnil59f3q1qqpD8oN2VVMYCQc0jODBKXVLbzUobsB6UiWoZiCPo6C7VhFLvAaC_IajTzOMonK73JIfwoJWxm8eoYshLV_9lpQvNmqAfW2TMljLSmUHZp2YGXDgvWjpmvwRGD9YU-GZyxZwxAE5ZJ2zvhyowVgWcFIAv_7qjtpNyz9ELdXzTfrVYqnenmldBt17Ok4gTXjwLwIuH00NwPVSAJegbe6tCRddfCzgcsUy7XJiWy-yLf78tx" />
      </div>
      </header>
      {/* Canvas (Empty State) */}
      <main className="flex-1 pt-[80px] p-margin flex items-center justify-center bg-background">
      <div className="max-w-xl w-full flex flex-col items-center justify-center text-center p-xl bg-surface rounded-xl border border-outline-variant shadow-[0px_1px_3px_rgba(15,23,42,0.04)]">
      {/* Illustrative Graphic Placeholder */}
      <div className="w-[120px] h-[120px] rounded-full bg-surface-container flex items-center justify-center mb-xl border border-outline-variant">
      <span className="material-symbols-outlined text-[64px] text-primary opacity-80" style={{fontVariationSettings: "'wght' 200"}}>
                              assignment_add
                          </span>
      </div>
      <div className="space-y-sm mb-xl max-w-md">
      <h2 className="font-display text-display text-on-surface">Get Started with FloraOps</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                              Your operational board is currently clear. Begin by establishing your baseline routines. Create your first task to schedule maintenance, or log an entry to record current facility status.
                          </p>
      </div>
      <div className="flex items-center gap-md">
      <button className="h-touch_target px-lg bg-primary text-on-primary rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-on-primary-fixed-variant transition-all duration-200 flex items-center gap-sm shadow-[0px_1px_3px_rgba(15,23,42,0.08)]">
      <span className="material-symbols-outlined text-[18px]">add_task</span>
                              Create First Task
                          </button>
      <button className="h-touch_target px-lg bg-surface text-secondary border border-outline-variant rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-highest transition-all duration-200">
                              View Documentation
                          </button>
      </div>
      {/* Subtle contextual help */}
      <div className="mt-xl pt-lg border-t border-outline-variant w-full flex items-center justify-center gap-xs text-on-surface-variant">
      <span className="material-symbols-outlined text-[16px]">info</span>
      <span className="font-body-sm text-body-sm">Need help structuring your tasks? Explore our templates.</span>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}

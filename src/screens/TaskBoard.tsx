// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Task Board
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

export interface TaskBoardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function TaskBoard(_props: TaskBoardProps = {}) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-surface-dim font-body-md text-body-md dark:text-on-surface docked full-width top-0 h-14 border-b border-outline-variant dark:border-outline flat no shadows fixed top-0 right-0 left-64 z-40 flex justify-between items-center px-lg h-14 md:flex hidden">
      <div className="flex items-center">
      {/* Search bar omitted for space, placeholder */}
      <div className="w-64 h-8 bg-surface-container-low rounded flex items-center px-sm">
      <span className="material-symbols-outlined text-on-surface-variant mr-xs" style={{fontVariationSettings: "'FILL' 0"}}>search</span>
      <span className="text-on-surface-variant font-body-sm text-body-sm">Search tasks...</span>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button aria-label="notifications" className="w-touch_target h-touch_target flex items-center justify-center rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 text-primary dark:text-primary-fixed-dim">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>notifications</span>
      </button>
      <button aria-label="account_circle" className="w-touch_target h-touch_target flex items-center justify-center rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 text-primary dark:text-primary-fixed-dim">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>account_circle</span>
      </button>
      </div>
      </nav>
      {/* SideNavBar */}
      <aside className="bg-surface-container-low dark:bg-surface-container-lowest font-label-md text-label-md uppercase tracking-wider docked fixed left-0 top-0 h-full w-64 border-r border-outline-variant dark:border-outline flat no shadows flex flex-col h-full py-lg md:flex hidden z-50">
      <div className="px-lg mb-xl flex items-center gap-md">
      <img alt="Greenhouse Logo" className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A macro, minimalist photograph of a perfect, vibrant green leaf against a stark white background. High key lighting, incredibly sharp details, modern corporate agricultural aesthetic, quiet and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADmGGBwhSkyhmmq1ur3sKAF6127UrM_F04cg_cgDgfHsujdNjNCghmTDxWnJCqsGuygBqb0nJykaQhQFdfHveJ2QNa9hDpPnycgIQVe-u_-0iTzxYcd_iowZJJS20ObnNTRFGz3m_xj06y29qGPDTqpBfUh-MvQ11vV1xXwOWPub_qIXSHdk4lHEJaW33Bab0N8TWVIWyHr4S4CHORtkCwq6MIFUW5Swwni_TeMaAmRv4-qocCZvFKuK0MAxcSWgO5c_MyrylH6HER" />
      <div>
      <h1 className="text-headline font-headline font-black text-primary dark:text-primary-fixed-dim">FloraOps</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant normal-case tracking-normal">Facility Maintenance</p>
      </div>
      </div>
      <button className="mx-md mb-xl h-touch_target bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider rounded-lg flex items-center justify-center gap-xs hover:bg-primary transition-colors">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                  New Log Entry
              </button>
      <nav className="flex-1 flex flex-col gap-xs">
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md h-touch_target flex items-center px-md rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all" href="#">
      <span className="material-symbols-outlined mr-md" style={{fontVariationSettings: "'FILL' 0"}}>dashboard</span>
                      Dashboard
                  </a>
      <a className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-bold rounded-lg mx-md h-touch_target flex items-center px-md transition-all hover:bg-surface-variant dark:hover:bg-surface-container-highest" href="#">
      <span className="material-symbols-outlined mr-md" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
                      Task Board
                  </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md h-touch_target flex items-center px-md rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all" href="#">
      <span className="material-symbols-outlined mr-md" style={{fontVariationSettings: "'FILL' 0"}}>precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md h-touch_target flex items-center px-md rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all" href="#">
      <span className="material-symbols-outlined mr-md" style={{fontVariationSettings: "'FILL' 0"}}>database</span>
                      Logs
                  </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md h-touch_target flex items-center px-md rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all" href="#">
      <span className="material-symbols-outlined mr-md" style={{fontVariationSettings: "'FILL' 0"}}>monitoring</span>
                      Monitoring
                  </a>
      </nav>
      <div className="mt-auto flex flex-col gap-xs">
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md h-touch_target flex items-center px-md rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all" href="#">
      <span className="material-symbols-outlined mr-md" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
                      Settings
                  </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md h-touch_target flex items-center px-md rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all" href="#">
      <span className="material-symbols-outlined mr-md" style={{fontVariationSettings: "'FILL' 0"}}>help</span>
                      Support
                  </a>
      </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-14 p-margin min-h-screen">
      {/* Header */}
      <header className="mb-lg flex justify-between items-end">
      <div>
      <h2 className="font-display text-display text-on-surface mb-xs">Maintenance Task Board</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Manage and track ongoing greenhouse maintenance operations.</p>
      </div>
      <div className="flex gap-sm">
      <button className="h-touch_target px-md bg-surface text-on-surface border border-outline-variant rounded-lg font-label-md text-label-md flex items-center gap-xs hover:bg-surface-container-low transition-colors shadow-sm">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>filter_list</span>
                          Filter
                      </button>
      </div>
      </header>
      {/* Kanban Board */}
      <div className="flex gap-gutter overflow-x-auto pb-lg snap-x">
      {/* Column 1: To Do */}
      <div className="flex-shrink-0 w-80 bg-surface-container-low rounded-xl border border-outline-variant p-md flex flex-col gap-md snap-start h-[calc(100vh-180px)] overflow-y-auto">
      <div className="flex justify-between items-center px-xs">
      <h3 className="font-title text-title text-on-surface flex items-center gap-xs">
      <span className="w-3 h-3 rounded-full bg-outline"></span>
                              To Do
                          </h3>
      <span className="font-label-sm text-label-sm bg-surface-variant text-on-surface-variant px-2 py-1 rounded-full">4</span>
      </div>
      {/* Task Card 1 */}
      <div className="bg-surface rounded-lg border border-outline-variant p-md hover:shadow-md transition-shadow cursor-grab">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant">TSK-1042</span>
      <span className="material-symbols-outlined text-outline-variant text-[18px]" style={{fontVariationSettings: "'FILL' 0"}}>more_vert</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface mb-md">Calibrate Zone B climate control sensors.</p>
      <div className="flex justify-between items-end mt-auto">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-outline mb-xs">Created</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Oct 24, 2023</span>
      </div>
      <img alt="Assignee" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A tiny, perfectly circular headshot of a professional maintenance worker wearing a hardhat. Minimalist grey background, sharp focus, corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc1_JNRSUzVxQ7KeacpBWZq1aFNo9SiC3dGbrE5FNDOIjsPorcIasx2_h_gfeUb-7VsGgS_G1Q5HfLVOXG56yWIsAK6yyxKCnITgfoLRJBTCd3h_CN1X4nfP7HvZry1Sgjd_FqXf4jyWgstuhKa-lnQAJYysrnAWZYGwuKxIdf0BxBZ-ovjY1ihAiM4Im9j7-zi94LfR-fXx3HFjqICok7B3aSmI4w-KwXFz7sxmF8iGtDbnH5mWIogsoxvukSQ4sQMvxyBIE1OGtT" />
      </div>
      </div>
      {/* Task Card 2 */}
      <div className="bg-surface rounded-lg border border-outline-variant p-md hover:shadow-md transition-shadow cursor-grab">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant">TSK-1045</span>
      <span className="material-symbols-outlined text-outline-variant text-[18px]" style={{fontVariationSettings: "'FILL' 0"}}>more_vert</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface mb-md">Replace worn irrigation drip lines in Sector 4.</p>
      <div className="flex justify-between items-end mt-auto">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-outline mb-xs">Created</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Oct 25, 2023</span>
      </div>
      <div className="w-8 h-8 rounded-full border border-outline-variant bg-surface-container-high flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface-variant text-[16px]" style={{fontVariationSettings: "'FILL' 0"}}>person_add</span>
      </div>
      </div>
      </div>
      </div>
      {/* Column 2: In Progress */}
      <div className="flex-shrink-0 w-80 bg-surface-container-low rounded-xl border border-outline-variant p-md flex flex-col gap-md snap-start h-[calc(100vh-180px)] overflow-y-auto">
      <div className="flex justify-between items-center px-xs">
      <h3 className="font-title text-title text-on-surface flex items-center gap-xs">
      <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                              In Progress
                          </h3>
      <span className="font-label-sm text-label-sm bg-surface-variant text-on-surface-variant px-2 py-1 rounded-full">2</span>
      </div>
      {/* Task Card 3 */}
      <div className="bg-surface rounded-lg border border-primary-container shadow-sm p-md hover:shadow-md transition-shadow cursor-grab">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-label-sm text-label-sm text-primary-container">TSK-1038</span>
      <span className="material-symbols-outlined text-outline-variant text-[18px]" style={{fontVariationSettings: "'FILL' 0"}}>more_vert</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface mb-md">Diagnose irregular pressure drop in main water pump.</p>
      <div className="flex justify-between items-end mt-auto">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-outline mb-xs">Started</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Today, 08:30 AM</span>
      </div>
      <img alt="Assignee" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A tiny, perfectly circular headshot of a female engineer with safety glasses. Minimalist grey background, sharp focus, corporate industrial aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5IAyqYV5QZDSm2PVo66wLqWcvmvU_seHD8xfU8_IZC1cdZ3ypm3yNFPDzMwb0nHo3unlKfQv4z1ULCM9FjSy5EOhltS5h0gCqwZUy2Qp1LEFL_98nfTI6tnT6opC77XBT0kMCp0b3z8RUNy2GzY5n9CStx9OfD7qPLqdAoEpo479UdgEHr0ksZFxmz5i8PoPY1yQ-GoA1iDPKS-5htcxxQNgS44KZ0V2pyskZFn1nKQamd1rCS2IiexWGPc9V79MvrpRPD1zak9A" />
      </div>
      </div>
      </div>
      {/* Column 3: Done */}
      <div className="flex-shrink-0 w-80 bg-surface-container-low rounded-xl border border-outline-variant p-md flex flex-col gap-md snap-start h-[calc(100vh-180px)] overflow-y-auto opacity-80">
      <div className="flex justify-between items-center px-xs">
      <h3 className="font-title text-title text-on-surface flex items-center gap-xs">
      <span className="w-3 h-3 rounded-full bg-tertiary-container"></span>
                              Done
                          </h3>
      <span className="font-label-sm text-label-sm bg-surface-variant text-on-surface-variant px-2 py-1 rounded-full">12</span>
      </div>
      {/* Task Card 4 */}
      <div className="bg-surface rounded-lg border border-outline-variant p-md cursor-grab">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant line-through">TSK-1021</span>
      <span className="material-symbols-outlined text-outline-variant text-[18px]" style={{fontVariationSettings: "'FILL' 0"}}>more_vert</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md">Clean exhaust vents in Nursery Greenhouse 1.</p>
      <div className="flex justify-between items-end mt-auto">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-outline mb-xs">Completed</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Oct 22, 2023</span>
      </div>
      <span className="material-symbols-outlined text-tertiary-container" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}

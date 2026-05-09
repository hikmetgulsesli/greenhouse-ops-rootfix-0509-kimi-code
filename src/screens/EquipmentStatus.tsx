// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Equipment Status
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

export interface EquipmentStatusProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function EquipmentStatus(_props: EquipmentStatusProps = {}) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <nav className="bg-surface-container-low border-r border-outline-variant fixed left-0 top-0 h-full w-64 hidden md:flex flex-col py-lg z-50">
      {/* Header */}
      <div className="px-lg mb-xl flex items-center gap-md">
      <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
      <span className="material-symbols-outlined" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>local_florist</span>
      </div>
      <div>
      <h1 className="text-headline font-headline font-black text-primary">FloraOps</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Facility Maintenance</p>
      </div>
      </div>
      {/* CTA */}
      <div className="px-md mb-xl">
      <button className="w-full h-touch_target bg-primary text-on-primary font-title text-title rounded-lg flex items-center justify-center gap-sm hover:opacity-90 transition-opacity shadow-[0px_1px_3px_rgba(15,23,42,0.08)]">
      <span className="material-symbols-outlined text-[20px]">add</span>
                      New Log Entry
                  </button>
      </div>
      {/* Main Nav Links */}
      <div className="flex-1 flex flex-col gap-sm">
      {/* Dashboard (Inactive) */}
      <a className="text-on-surface-variant hover:text-on-surface mx-md px-md h-10 flex items-center gap-md rounded-lg hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="dashboard">dashboard</span>
      <span>Dashboard</span>
      </a>
      {/* Task Board (Inactive) */}
      <a className="text-on-surface-variant hover:text-on-surface mx-md px-md h-10 flex items-center gap-md rounded-lg hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="assignment">assignment</span>
      <span>Task Board</span>
      </a>
      {/* Equipment (Active) */}
      <a className="bg-secondary-container text-on-secondary-container font-bold rounded-lg mx-md px-md h-10 flex items-center gap-md transition-all scale-98 duration-150 font-label-md text-label-md uppercase tracking-wider" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="precision_manufacturing" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>precision_manufacturing</span>
      <span>Equipment</span>
      </a>
      {/* Logs (Inactive) */}
      <a className="text-on-surface-variant hover:text-on-surface mx-md px-md h-10 flex items-center gap-md rounded-lg hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="database">database</span>
      <span>Logs</span>
      </a>
      {/* Monitoring (Inactive) */}
      <a className="text-on-surface-variant hover:text-on-surface mx-md px-md h-10 flex items-center gap-md rounded-lg hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="monitoring">monitoring</span>
      <span>Monitoring</span>
      </a>
      </div>
      {/* Footer Nav Links */}
      <div className="mt-auto flex flex-col gap-sm border-t border-outline-variant pt-md">
      <a className="text-on-surface-variant hover:text-on-surface mx-md px-md h-10 flex items-center gap-md rounded-lg hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
      <span>Settings</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-md px-md h-10 flex items-center gap-md rounded-lg hover:bg-surface-variant transition-all font-label-md text-label-md uppercase tracking-wider" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="help">help</span>
      <span>Support</span>
      </a>
      </div>
      </nav>
      {/* Shared Component: TopNavBar */}
      <header className="bg-surface border-b border-outline-variant fixed top-0 right-0 left-0 md:left-64 z-40 flex justify-between items-center px-lg h-14">
      {/* Left: Search/Brand (Mobile) */}
      <div className="flex items-center gap-md">
      <button className="md:hidden text-on-surface-variant flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="text-headline font-headline font-bold text-primary md:hidden">FloraOps Console</div>
      {/* Search Bar (on_left) */}
      <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-md h-10 border border-outline-variant/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all w-80">
      <span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-sm">search</span>
      <input className="bg-transparent border-none outline-none text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/70 w-full p-0 focus:ring-0" placeholder="Search equipment, logs..." type="text" />
      </div>
      </div>
      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-sm">
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <div className="h-6 w-[1px] bg-outline-variant mx-sm"></div>
      <button className="flex items-center gap-sm pl-sm pr-xs py-xs rounded-full hover:bg-surface-container-highest transition-colors duration-200">
      <div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden border border-outline-variant flex items-center justify-center">
      <span className="material-symbols-outlined text-on-secondary-container">person</span>
      </div>
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="pt-14 md:ml-64 p-margin min-h-screen">
      {/* Page Header */}
      <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
      <div>
      <h2 className="font-display text-display text-on-surface mb-xs">Equipment Health Center</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">Real-time telemetry and maintenance status for all operational hardware.</p>
      </div>
      <div className="flex items-center gap-md">
      <button className="h-touch_target px-md bg-surface-container-lowest border border-outline-variant text-primary font-title text-title rounded-lg flex items-center gap-sm hover:bg-surface-container-low transition-colors shadow-[0px_1px_3px_rgba(15,23,42,0.04)]">
      <span className="material-symbols-outlined text-[20px]">tune</span>
                          Filter View
                      </button>
      </div>
      </div>
      {/* KPI Bento Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-xl">
      {/* Total */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md flex flex-col justify-between h-32">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Active Units</span>
      <span className="material-symbols-outlined text-on-surface-variant">precision_manufacturing</span>
      </div>
      <div className="font-display text-[32px] leading-tight font-bold text-on-surface">124</div>
      </div>
      {/* Healthy */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md flex flex-col justify-between h-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="relative flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Optimal Health</span>
      <span className="material-symbols-outlined text-primary">check_circle</span>
      </div>
      <div className="relative font-display text-[32px] leading-tight font-bold text-primary">118</div>
      </div>
      {/* Warning */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md flex flex-col justify-between h-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-tertiary/5"></div>
      <div className="relative flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Needs Maintenance</span>
      <span className="material-symbols-outlined text-tertiary">warning</span>
      </div>
      <div className="relative font-display text-[32px] leading-tight font-bold text-tertiary">5</div>
      </div>
      {/* Error */}
      <div className="bg-surface-container-lowest rounded-xl border border-error/30 p-md flex flex-col justify-between h-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-error/5"></div>
      <div className="relative flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Critical Errors</span>
      <span className="material-symbols-outlined text-error">error</span>
      </div>
      <div className="relative font-display text-[32px] leading-tight font-bold text-error">1</div>
      </div>
      </div>
      {/* Equipment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      {/* Card 1: Warning */}
      <div className="bg-surface-container-lowest rounded-lg border border-outline-variant flex flex-col overflow-hidden hover:shadow-[0px_1px_3px_rgba(15,23,42,0.08)] transition-shadow">
      <div className="p-md border-b border-outline-variant/50 bg-surface flex justify-between items-start">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
      <span className="material-symbols-outlined">water_pump</span>
      </div>
      <div>
      <h3 className="font-title text-title text-on-surface line-clamp-1">Irrigation Pump Main</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Zone A - Hydroponics</p>
      </div>
      </div>
      <div className="bg-tertiary/10 text-tertiary font-label-md text-label-md px-sm py-xs rounded uppercase tracking-wider whitespace-nowrap">
                              Warning
                          </div>
      </div>
      <div className="p-md flex-1 flex flex-col gap-sm">
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Flow Rate</span>
      <span className="font-title text-title text-tertiary">84 L/min (Low)</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Pressure</span>
      <span className="font-title text-title text-on-surface">3.2 Bar</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Last Calibrated</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">45 days ago</span>
      </div>
      </div>
      <div className="p-md border-t border-outline-variant/50 bg-surface/50 grid grid-cols-2 gap-sm">
      <button className="h-touch_target bg-primary text-on-primary font-title text-title rounded-lg hover:opacity-90 transition-opacity">Calibrate</button>
      <button className="h-touch_target bg-transparent border border-outline-variant text-on-surface-variant font-title text-title rounded-lg hover:bg-surface-variant transition-colors">Restart</button>
      </div>
      </div>
      {/* Card 2: Error */}
      <div className="bg-surface-container-lowest rounded-lg border border-error/50 flex flex-col overflow-hidden hover:shadow-[0px_1px_3px_rgba(15,23,42,0.08)] transition-shadow">
      <div className="p-md border-b border-error/20 bg-error/5 flex justify-between items-start">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-error/10 flex items-center justify-center text-error shrink-0">
      <span className="material-symbols-outlined">ac_unit</span>
      </div>
      <div>
      <h3 className="font-title text-title text-on-surface line-clamp-1">Climate Control HVAC-2</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Zone C - Nursery</p>
      </div>
      </div>
      <div className="bg-error/10 text-error font-label-md text-label-md px-sm py-xs rounded uppercase tracking-wider whitespace-nowrap">
                              Critical
                          </div>
      </div>
      <div className="p-md flex-1 flex flex-col gap-sm">
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Compressor Temp</span>
      <span className="font-title text-title text-error">112°C (High)</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Fan Speed</span>
      <span className="font-title text-title text-error">0 RPM (Failed)</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Uptime</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">0h 0m</span>
      </div>
      </div>
      <div className="p-md border-t border-outline-variant/50 bg-surface/50 grid grid-cols-2 gap-sm">
      <button className="h-touch_target bg-error text-on-error font-title text-title rounded-lg hover:opacity-90 transition-opacity col-span-2">Emergency Stop Engaged</button>
      </div>
      </div>
      {/* Card 3: Healthy */}
      <div className="bg-surface-container-lowest rounded-lg border border-outline-variant flex flex-col overflow-hidden hover:shadow-[0px_1px_3px_rgba(15,23,42,0.08)] transition-shadow">
      <div className="p-md border-b border-outline-variant/50 bg-surface flex justify-between items-start">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
      <span className="material-symbols-outlined">lightbulb</span>
      </div>
      <div>
      <h3 className="font-title text-title text-on-surface line-clamp-1">Grow Light Array Alpha</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Zone B - Maturation</p>
      </div>
      </div>
      <div className="bg-primary/10 text-primary font-label-md text-label-md px-sm py-xs rounded uppercase tracking-wider whitespace-nowrap">
                              Optimal
                          </div>
      </div>
      <div className="p-md flex-1 flex flex-col gap-sm">
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Intensity</span>
      <span className="font-title text-title text-on-surface">100%</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Power Draw</span>
      <span className="font-title text-title text-on-surface">4.2 kW</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Schedule</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">06:00 - 22:00</span>
      </div>
      </div>
      <div className="p-md border-t border-outline-variant/50 bg-surface/50 grid grid-cols-2 gap-sm">
      <button className="h-touch_target bg-surface-container-lowest border border-outline-variant text-primary font-title text-title rounded-lg hover:bg-surface-container-low transition-colors">Adjust</button>
      <button className="h-touch_target bg-transparent border border-outline-variant text-on-surface-variant font-title text-title rounded-lg hover:bg-surface-variant transition-colors">Restart</button>
      </div>
      </div>
      {/* Card 4: Healthy */}
      <div className="bg-surface-container-lowest rounded-lg border border-outline-variant flex flex-col overflow-hidden hover:shadow-[0px_1px_3px_rgba(15,23,42,0.08)] transition-shadow">
      <div className="p-md border-b border-outline-variant/50 bg-surface flex justify-between items-start">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
      <span className="material-symbols-outlined">sensors</span>
      </div>
      <div>
      <h3 className="font-title text-title text-on-surface line-clamp-1">Env. Sensor Node 4</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Zone A - Canopy Level</p>
      </div>
      </div>
      <div className="bg-primary/10 text-primary font-label-md text-label-md px-sm py-xs rounded uppercase tracking-wider whitespace-nowrap">
                              Optimal
                          </div>
      </div>
      <div className="p-md flex-1 flex flex-col gap-sm">
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">CO2 Level</span>
      <span className="font-title text-title text-on-surface">850 ppm</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Humidity</span>
      <span className="font-title text-title text-on-surface">65% RH</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="font-body-md text-body-md text-on-surface-variant">Battery</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">92%</span>
      </div>
      </div>
      <div className="p-md border-t border-outline-variant/50 bg-surface/50 grid grid-cols-2 gap-sm">
      <button className="h-touch_target bg-surface-container-lowest border border-outline-variant text-primary font-title text-title rounded-lg hover:bg-surface-container-low transition-colors">Calibrate</button>
      <button className="h-touch_target bg-transparent border border-outline-variant text-on-surface-variant font-title text-title rounded-lg hover:bg-surface-variant transition-colors disabled:opacity-50" disabled={true}>Restart</button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}

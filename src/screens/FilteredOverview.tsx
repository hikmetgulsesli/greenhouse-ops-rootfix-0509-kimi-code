// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Filtered Overview
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

export interface FilteredOverviewProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function FilteredOverview(_props: FilteredOverviewProps = {}) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="hidden md:flex flex-col bg-surface-container-low docked fixed left-0 top-0 h-full w-64 border-r border-outline-variant py-lg z-50">
      <div className="px-margin mb-lg flex items-center gap-md">
      <div className="w-10 h-10 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div>
      <h2 className="text-headline font-headline font-black text-primary">FloraOps</h2>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Facility Maintenance</p>
      </div>
      </div>
      <div className="px-md mb-lg">
      <button className="w-full h-touch_target bg-primary text-on-primary font-title text-title rounded-lg flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
      <span className="material-symbols-outlined">add</span>
                      New Log Entry
                  </button>
      </div>
      <ul className="flex-1 flex flex-col gap-unit">
      <li>
      <a className="flex items-center gap-md h-touch_target px-md mx-md bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-wider font-bold rounded-lg hover:bg-surface-variant transition-all" href="#">
      <span className="material-symbols-outlined">dashboard</span>
                          Dashboard
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md h-touch_target px-md mx-md text-on-surface-variant font-label-md text-label-md uppercase tracking-wider hover:text-on-surface hover:bg-surface-variant transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined">assignment</span>
                          Task Board
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md h-touch_target px-md mx-md text-on-surface-variant font-label-md text-label-md uppercase tracking-wider hover:text-on-surface hover:bg-surface-variant transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
                          Equipment
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md h-touch_target px-md mx-md text-on-surface-variant font-label-md text-label-md uppercase tracking-wider hover:text-on-surface hover:bg-surface-variant transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined">database</span>
                          Logs
                      </a>
      </li>
      </ul>
      <div className="mt-auto">
      <ul className="flex flex-col gap-unit border-t border-outline-variant pt-md mx-md">
      <li>
      <a className="flex items-center gap-md h-touch_target px-md text-on-surface-variant font-label-md text-label-md uppercase tracking-wider hover:text-on-surface hover:bg-surface-variant transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined">settings</span>
                              Settings
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-md h-touch_target px-md text-on-surface-variant font-label-md text-label-md uppercase tracking-wider hover:text-on-surface hover:bg-surface-variant transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined">help</span>
                              Support
                          </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 relative w-full h-full">
      {/* TopNavBar (Shared Component) */}
      <header className="bg-surface fixed top-0 right-0 left-0 md:left-64 z-40 flex justify-between items-center px-lg h-[56px] border-b border-outline-variant flat no shadows">
      <div className="flex-1 flex items-center">
      <div className="relative w-full max-w-md hidden md:block">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full h-10 pl-xl pr-sm bg-surface-container-low border-none rounded focus:ring-2 focus:ring-primary text-body-md font-body-md text-on-surface placeholder-on-surface-variant" placeholder="Search operational logs..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 rounded-full">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-title text-title cursor-pointer border border-outline-variant">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>account_circle</span>
      </div>
      </div>
      </header>
      {/* Scrollable Canvas */}
      <main className="flex-1 overflow-y-auto mt-[56px] p-margin bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-lg">
      <h1 className="font-display text-display text-on-surface">Search &amp; Filter Results</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-unit">Filtered overview of greenhouse operations and equipment telemetry.</p>
      </div>
      {/* Complex Filter Controls (Bento Style Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-margin">
      {/* Search Overide for mobile or explicit focus */}
      <div className="md:col-span-4 bg-surface border border-outline-variant rounded-lg p-md flex flex-col md:flex-row gap-md items-end">
      <div className="flex-1 w-full">
      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs uppercase">Query</label>
      <input className="w-full h-[40px] px-sm bg-surface-container border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md" type="text" value="Zone B Humidity Faults" />
      </div>
      <div className="w-full md:w-48">
      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs uppercase">Status</label>
      <select className="w-full h-[40px] px-sm bg-surface-container border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md appearance-none">
      <option>All Critical</option>
      <option>Warning</option>
      <option>Nominal</option>
      </select>
      </div>
      <div className="w-full md:w-48">
      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs uppercase">Equipment</label>
      <select className="w-full h-[40px] px-sm bg-surface-container border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md appearance-none">
      <option>HVAC Systems</option>
      <option>Irrigation</option>
      <option>Sensors</option>
      </select>
      </div>
      <button className="h-[40px] px-lg bg-surface-variant text-on-surface-variant border border-outline-variant rounded font-title text-title hover:bg-surface-container-high transition-colors w-full md:w-auto">
                                  Clear Filters
                              </button>
      </div>
      </div>
      {/* Results Context */}
      <div className="flex justify-between items-center mb-md border-b border-outline-variant pb-sm">
      <span className="font-title text-title text-on-surface">Found 12 Matching Records</span>
      <div className="flex gap-sm">
      <button className="flex items-center gap-xs text-on-surface-variant hover:text-primary font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-[18px]">download</span> Export CSV
                              </button>
      </div>
      </div>
      {/* High-Density Data Table */}
      <div className="bg-surface border border-outline-variant rounded-lg overflow-x-auto">
      <table className="w-full text-left border-collapse whitespace-nowrap">
      <thead>
      <tr className="bg-surface-container-low border-b border-outline-variant">
      <th className="py-sm px-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Log ID</th>
      <th className="py-sm px-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Timestamp</th>
      <th className="py-sm px-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Equipment Node</th>
      <th className="py-sm px-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
      <th className="py-sm px-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Metric / Value</th>
      <th className="py-sm px-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant">
      <tr className="hover:bg-surface-container-low transition-colors h-[48px]">
      <td className="py-xs px-md font-title text-primary">#FLR-8921</td>
      <td className="py-xs px-md text-on-surface-variant">Today, 08:42 AM</td>
      <td className="py-xs px-md">Zone B - Main Dehumidifier</td>
      <td className="py-xs px-md">
      <span className="inline-flex items-center px-sm py-[2px] rounded text-label-sm font-label-sm bg-error-container text-on-error-container">
                                              Critical Fault
                                          </span>
      </td>
      <td className="py-xs px-md">Humidity: 88% (Target: 60%)</td>
      <td className="py-xs px-md text-right">
      <button className="text-secondary hover:text-primary p-xs"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-low transition-colors h-[48px]">
      <td className="py-xs px-md font-title text-primary">#FLR-8919</td>
      <td className="py-xs px-md text-on-surface-variant">Today, 07:15 AM</td>
      <td className="py-xs px-md">Zone B - Exhaust Fan 2</td>
      <td className="py-xs px-md">
      <span className="inline-flex items-center px-sm py-[2px] rounded text-label-sm font-label-sm bg-surface-variant text-on-surface-variant border border-outline-variant">
                                              Maintenance Reqd
                                          </span>
      </td>
      <td className="py-xs px-md">Vibration Anomaly</td>
      <td className="py-xs px-md text-right">
      <button className="text-secondary hover:text-primary p-xs"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-low transition-colors h-[48px]">
      <td className="py-xs px-md font-title text-primary">#FLR-8905</td>
      <td className="py-xs px-md text-on-surface-variant">Yesterday, 11:30 PM</td>
      <td className="py-xs px-md">Zone A - Climate Node</td>
      <td className="py-xs px-md">
      <span className="inline-flex items-center px-sm py-[2px] rounded text-label-sm font-label-sm bg-secondary-container text-on-secondary-container">
                                              Warning
                                          </span>
      </td>
      <td className="py-xs px-md">Temp Drop: 2°C/hr</td>
      <td className="py-xs px-md text-right">
      <button className="text-secondary hover:text-primary p-xs"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-low transition-colors h-[48px]">
      <td className="py-xs px-md font-title text-primary">#FLR-8890</td>
      <td className="py-xs px-md text-on-surface-variant">Yesterday, 04:20 PM</td>
      <td className="py-xs px-md">Zone C - Irrigation Valve</td>
      <td className="py-xs px-md">
      <span className="inline-flex items-center px-sm py-[2px] rounded text-label-sm font-label-sm bg-error-container text-on-error-container">
                                              Offline
                                          </span>
      </td>
      <td className="py-xs px-md">No Response (Timeout)</td>
      <td className="py-xs px-md text-right">
      <button className="text-secondary hover:text-primary p-xs"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
      </td>
      </tr>
      </tbody>
      </table>
      {/* Pagination (Minimal) */}
      <div className="p-sm flex justify-between items-center border-t border-outline-variant bg-surface-container-lowest">
      <span className="font-body-sm text-body-sm text-on-surface-variant pl-sm">Showing 1-4 of 12</span>
      <div className="flex gap-xs">
      <button className="h-8 w-8 flex items-center justify-center border border-outline-variant rounded text-on-surface-variant hover:bg-surface-variant disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <button className="h-8 w-8 flex items-center justify-center border border-outline-variant rounded text-on-surface-variant hover:bg-surface-variant">
      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}

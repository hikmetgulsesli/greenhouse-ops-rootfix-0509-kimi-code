// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Operational Dashboard
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

export interface OperationalDashboardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function OperationalDashboard(_props: OperationalDashboardProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-lowest text-primary dark:text-primary-fixed-dim font-label-md text-label-md uppercase tracking-wider docked fixed left-0 top-0 h-full w-64 border-r border-outline-variant dark:border-outline flat no shadows flex flex-col h-full py-lg z-50 hidden md:flex">
      <div className="px-md mb-xl flex items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">F</div>
      <div>
      <h1 className="text-headline font-headline font-black text-primary dark:text-primary-fixed-dim tracking-normal normal-case">FloraOps</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant tracking-normal normal-case">Facility Maintenance</p>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto">
      <ul className="space-y-sm">
      {/* Dashboard (Active) */}
      <li>
      <a className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-bold rounded-lg mx-md flex items-center gap-md px-md py-sm hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all scale-98 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span>Dashboard</span>
      </a>
      </li>
      {/* Task Board */}
      <li>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md flex items-center gap-md px-md py-sm hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
      <span>Task Board</span>
      </a>
      </li>
      {/* Equipment */}
      <li>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md flex items-center gap-md px-md py-sm hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
      <span>Equipment</span>
      </a>
      </li>
      {/* Logs */}
      <li>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md flex items-center gap-md px-md py-sm hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="database">database</span>
      <span>Logs</span>
      </a>
      </li>
      {/* Monitoring */}
      <li>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md flex items-center gap-md px-md py-sm hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
      <span>Monitoring</span>
      </a>
      </li>
      </ul>
      </div>
      <div className="mt-auto px-md pt-lg border-t border-outline-variant opacity-50">
      <button className="w-full bg-primary-container text-on-primary-container h-touch_target rounded-DEFAULT font-label-md text-label-md flex items-center justify-center gap-sm mb-md hover:bg-primary hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined" data-icon="add">add</span>
                       New Log Entry
                   </button>
      <ul className="space-y-sm">
      <li>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface flex items-center gap-md px-md py-sm hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span>Settings</span>
      </a>
      </li>
      <li>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface flex items-center gap-md px-md py-sm hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="help">help</span>
      <span>Support</span>
      </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface-dim text-primary dark:text-primary-fixed-dim font-body-md text-body-md dark:text-on-surface docked full-width top-0 h-14 border-b border-outline-variant dark:border-outline flat no shadows fixed top-0 right-0 left-0 md:left-64 z-40 flex justify-between items-center px-lg h-14">
      <div className="flex items-center gap-md">
      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-on-surface-variant hover:bg-surface-container-low p-sm rounded-full transition-colors duration-200">
      <span className="material-symbols-outlined" data-icon="menu">menu</span>
      </button>
      <span className="text-headline font-headline font-bold text-primary dark:text-primary-fixed-dim md:hidden">FloraOps Console</span>
      {/* Search Bar (on_left as per JSON, but leaving space for potential expansion) */}
      <div className="hidden md:flex items-center bg-surface-container-low rounded-DEFAULT px-md py-sm border border-outline-variant min-w-[240px]">
      <span className="material-symbols-outlined text-on-surface-variant mr-sm text-[18px]" data-icon="search">search</span>
      <input className="bg-transparent border-none outline-none text-body-md font-body-md w-full placeholder:text-on-surface-variant focus:ring-0 p-0 text-on-surface" placeholder="Search logs, equipment..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 p-sm rounded-full relative">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 p-sm rounded-full">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="pt-[72px] md:pl-64 min-h-screen px-lg pb-xl max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-xl mt-md">
      <div>
      <h2 className="font-display text-display text-on-background">Overview</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">System status and active maintenance tasks across all zones.</p>
      </div>
      <div className="mt-md md:mt-0 flex gap-sm">
      <button className="bg-surface text-on-surface border border-outline-variant h-touch_target px-md rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-colors shadow-[0px_1px_3px_rgba(15,23,42,0.08)]">
                          Generate Report
                      </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-gutter">
      {/* Key Metrics (Top Row) */}
      <div className="col-span-1 md:col-span-8 lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
      {/* Metric 1 */}
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Active Alerts</span>
      <span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
      </div>
      <div>
      <span className="font-display text-display text-on-surface block">3 Critical</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">+1 since last shift</span>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Open Tasks</span>
      <span className="material-symbols-outlined text-primary" data-icon="assignment">assignment</span>
      </div>
      <div>
      <span className="font-display text-display text-on-surface block">12 Pending</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">4 high priority</span>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">System Health</span>
      <span className="material-symbols-outlined text-[#16a34a]" data-icon="check_circle">check_circle</span>
      </div>
      <div>
      <span className="font-display text-display text-on-surface block">98.2%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">All primary nodes active</span>
      </div>
      </div>
      {/* Metric 4 */}
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-between h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Climate Delta</span>
      <span className="material-symbols-outlined text-secondary" data-icon="thermostat">thermostat</span>
      </div>
      <div>
      <span className="font-display text-display text-on-surface block">±1.4°C</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Average deviance (24h)</span>
      </div>
      </div>
      </div>
      {/* Left Column: Active Tasks & Recent Logs */}
      <div className="col-span-1 md:col-span-5 lg:col-span-8 flex flex-col gap-margin">
      {/* Active Tasks */}
      <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden flex flex-col">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
      <h3 className="font-title text-title text-on-surface">Priority Maintenance Tasks</h3>
      <button className="font-label-sm text-label-sm text-primary hover:underline">View All</button>
      </div>
      <div className="p-0">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-lowest border-b border-outline-variant">
      <th className="font-label-sm text-label-sm text-on-surface-variant py-sm px-md font-medium uppercase tracking-wider">Task ID</th>
      <th className="font-label-sm text-label-sm text-on-surface-variant py-sm px-md font-medium uppercase tracking-wider">Description</th>
      <th className="font-label-sm text-label-sm text-on-surface-variant py-sm px-md font-medium uppercase tracking-wider">Zone</th>
      <th className="font-label-sm text-label-sm text-on-surface-variant py-sm px-md font-medium uppercase tracking-wider">Status</th>
      </tr>
      </thead>
      <tbody className="font-body-md text-body-md text-on-surface">
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors h-[48px]">
      <td className="py-xs px-md font-medium">TSK-892</td>
      <td className="py-xs px-md">Recalibrate Zone B Humidity Sensors</td>
      <td className="py-xs px-md text-on-surface-variant">Zone B</td>
      <td className="py-xs px-md"><span className="bg-error/10 text-error px-2 py-1 rounded-full font-label-sm text-label-sm border border-error/20">Critical</span></td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors h-[48px]">
      <td className="py-xs px-md font-medium">TSK-893</td>
      <td className="py-xs px-md">Filter Replacement - Main HVAC Line 2</td>
      <td className="py-xs px-md text-on-surface-variant">Central Plant</td>
      <td className="py-xs px-md"><span className="bg-[#f59e0b]/10 text-[#d97706] px-2 py-1 rounded-full font-label-sm text-label-sm border border-[#f59e0b]/20">Pending</span></td>
      </tr>
      <tr className="hover:bg-surface-container-low transition-colors h-[48px]">
      <td className="py-xs px-md font-medium">TSK-890</td>
      <td className="py-xs px-md">Inspect Drip Irrigation Line 4 Clog</td>
      <td className="py-xs px-md text-on-surface-variant">Zone A</td>
      <td className="py-xs px-md"><span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-label-sm text-label-sm border border-primary/20">In Progress</span></td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Recent Logs (Glassmorphism inspired subtle transparency) */}
      <div className="bg-surface/80 backdrop-blur-sm border border-outline-variant rounded-xl overflow-hidden flex flex-col">
      <div className="p-md border-b border-outline-variant flex justify-between items-center">
      <h3 className="font-title text-title text-on-surface">Recent System Logs</h3>
      </div>
      <div className="p-md space-y-md">
      <div className="flex gap-md items-start">
      <div className="w-2 h-2 rounded-full bg-[#16a34a] mt-2"></div>
      <div>
      <p className="font-body-md text-body-md text-on-surface">Automated nutrient mixing sequence completed successfully.</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">System • 10:45 AM</p>
      </div>
      </div>
      <div className="flex gap-md items-start">
      <div className="w-2 h-2 rounded-full bg-error mt-2"></div>
      <div>
      <p className="font-body-md text-body-md text-on-surface font-medium">Pressure drop detected in Line 3.</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Pump Monitor • 09:12 AM</p>
      </div>
      </div>
      <div className="flex gap-md items-start">
      <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
      <div>
      <p className="font-body-md text-body-md text-on-surface">Routine diagnostic scan initiated by Supervisor.</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Admin • 08:00 AM</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column: Equipment Health */}
      <div className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col gap-margin">
      <div className="bg-surface border border-outline-variant rounded-xl flex flex-col h-full">
      <div className="p-md border-b border-outline-variant bg-surface-container-low">
      <h3 className="font-title text-title text-on-surface">Equipment Health Matrix</h3>
      </div>
      <div className="p-md flex-1 flex flex-col gap-md">
      {/* Item 1 */}
      <div className="border border-outline-variant rounded-lg p-md hover:shadow-[0px_1px_3px_rgba(15,23,42,0.08)] transition-shadow bg-surface-container-lowest">
      <div className="flex justify-between items-center mb-sm">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="hvac">hvac</span>
      <span className="font-body-md text-body-md font-medium text-on-surface">Main Climate Control</span>
      </div>
      <span className="bg-[#16a34a]/10 text-[#16a34a] px-2 py-0.5 rounded-full font-label-sm text-label-sm">Optimal</span>
      </div>
      <div className="w-full bg-surface-variant rounded-full h-1.5 mb-1">
      <div className="bg-[#16a34a] h-1.5 rounded-full" style={{width: "95%"}}></div>
      </div>
      <div className="flex justify-between text-[10px] text-on-surface-variant">
      <span>Efficiency: 95%</span>
      <span>Next Maint: 14d</span>
      </div>
      </div>
      {/* Item 2 */}
      <div className="border border-outline-variant rounded-lg p-md border-error/50 bg-error/5 hover:shadow-[0px_1px_3px_rgba(15,23,42,0.08)] transition-shadow">
      <div className="flex justify-between items-center mb-sm">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-error" data-icon="water_drop">water_drop</span>
      <span className="font-body-md text-body-md font-medium text-on-surface">Irrigation Pump 2</span>
      </div>
      <span className="bg-error/10 text-error px-2 py-0.5 rounded-full font-label-sm text-label-sm">Warning</span>
      </div>
      <div className="w-full bg-surface-variant rounded-full h-1.5 mb-1">
      <div className="bg-error h-1.5 rounded-full" style={{width: "45%"}}></div>
      </div>
      <div className="flex justify-between text-[10px] text-on-surface-variant">
      <span>Flow Rate: 45% (Low)</span>
      <span className="text-error font-medium">Action Required</span>
      </div>
      </div>
      {/* Item 3 */}
      <div className="border border-outline-variant rounded-lg p-md hover:shadow-[0px_1px_3px_rgba(15,23,42,0.08)] transition-shadow bg-surface-container-lowest">
      <div className="flex justify-between items-center mb-sm">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="lightbulb">lightbulb</span>
      <span className="font-body-md text-body-md font-medium text-on-surface">Grow Light Array B</span>
      </div>
      <span className="bg-[#16a34a]/10 text-[#16a34a] px-2 py-0.5 rounded-full font-label-sm text-label-sm">Optimal</span>
      </div>
      <div className="w-full bg-surface-variant rounded-full h-1.5 mb-1">
      <div className="bg-[#16a34a] h-1.5 rounded-full" style={{width: "88%"}}></div>
      </div>
      <div className="flex justify-between text-[10px] text-on-surface-variant">
      <span>Output: 88%</span>
      <span>Next Maint: 45d</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}

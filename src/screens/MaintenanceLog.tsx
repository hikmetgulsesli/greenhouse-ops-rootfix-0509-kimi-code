// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Maintenance Log
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

export interface MaintenanceLogProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function MaintenanceLog(_props: MaintenanceLogProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-lowest docked fixed left-0 top-0 h-full w-64 border-r border-outline-variant dark:border-outline flat no shadows flex flex-col h-full py-lg z-50">
      <div className="px-md mb-lg flex items-center gap-sm">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
      <img alt="Greenhouse Logo" className="w-6 h-6 object-cover rounded" data-alt="A clean, minimalist logo mark for a modern agricultural technology or facility maintenance company. The design is simple and geometric, rendered in bright, clear colors suitable for a light mode interface. The image is cropped tightly around the icon itself, creating a clear, recognizable avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPP5r0AMmLpcuzhLrXqFA9SG7nxFzFTuqh4ICjFr4pdXhI_OsuCMNp_EG5YKh3rUwF_a6_GBAGQypV32KvGSTbDA0S9rWlotTxKkny8iEd7AtvCiCu_4OCta-s8eoZu422y3T6L-Q7cojC3SWpyc_J-R93s8TF81edi0IFKIc3qNijbdbHqW8RAgTlfpV_7_0DBut1AZkYEv8C-201--NWTySj-qc5mM-6uvMbi53coZmPv5WXJsJ9r-Yoo1kGnHF2qk-vIPnccBQa" />
      </div>
      <div>
      <h1 className="text-headline font-headline font-black text-primary dark:text-primary-fixed-dim m-0 leading-tight">FloraOps</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant m-0">Facility Maintenance</p>
      </div>
      </div>
      <button className="mx-md mb-lg bg-primary-container text-on-primary-container h-touch_target rounded hover:bg-surface-tint hover:text-on-primary transition-colors flex items-center justify-center gap-xs font-title text-title">
      <span className="material-symbols-outlined text-[20px]">add</span>
                  New Log Entry
              </button>
      <div className="flex-1 flex flex-col gap-xs">
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md h-[40px] flex items-center px-sm rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all font-label-md text-label-md uppercase tracking-wider gap-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                      Dashboard
                  </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md h-[40px] flex items-center px-sm rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all font-label-md text-label-md uppercase tracking-wider gap-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
                      Task Board
                  </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface mx-md h-[40px] flex items-center px-sm rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all font-label-md text-label-md uppercase tracking-wider gap-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-bold rounded-lg mx-md h-[40px] flex items-center px-sm transition-all duration-150 font-label-md text-label-md uppercase tracking-wider gap-sm" href="#">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>database</span>
                      Logs
                  </a>
      </div>
      <div className="mt-auto flex flex-col gap-xs border-t border-outline-variant dark:border-outline pt-md mx-md">
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface h-[40px] flex items-center px-sm rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all font-label-md text-label-md uppercase tracking-wider gap-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">settings</span>
                      Settings
                  </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface h-[40px] flex items-center px-sm rounded-lg hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all font-label-md text-label-md uppercase tracking-wider gap-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">help</span>
                      Support
                  </a>
      </div>
      </nav>
      {/* TopNavBar & Main Content Wrapper */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface-dim docked full-width top-0 h-14 border-b border-outline-variant dark:border-outline flat no shadows fixed top-0 right-0 left-64 z-40 flex justify-between items-center px-lg h-14">
      <div className="flex items-center gap-md">
      <span className="text-headline font-headline font-bold text-primary dark:text-primary-fixed-dim hidden">FloraOps Console</span> {/* Hidden visually, present for structure/JSON intent if needed */}
      {/* Search Bar on Left */}
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
      <input className="w-full h-10 pl-10 pr-sm bg-surface-container-low border border-outline-variant rounded focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant transition-all outline-none" placeholder="Search logs..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2">
      <img alt="Maintenance Supervisor Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a facility maintenance supervisor. The individual is wearing practical, neat attire appropriate for an industrial or technical environment. The background is simple and uncluttered, emphasizing the person. The lighting is even and natural." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1cBRKb-GdrQG4jUaXzyC5GeWP7nMIyezXRl47DxxujSod3GRLQLe7FHIgHduI3iLFrmnVV0tiluppf2pDGC7TvlqzRSgSCpf5lx7o3Z-afiN_8skyLeMxmojMrGiHQPzTjQ52PuDc35oDarAV29C1uuxFyrFRb8b9cW3HgypzJzkQ-LljWou6tk5z4G0FVssXRkEpNERL0f-judwd93z809h8WEnSTRswO_uVqzWBdQDrwLCqwV-3CirwDVB94f7ZXcRQ2DsLtpPR" />
      </button>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 pt-14 p-margin">
      <div className="flex justify-between items-end mb-lg mt-md">
      <div>
      <h2 className="font-display text-display text-on-background mb-xs">Facility Maintenance Log</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Chronological record of all equipment servicing and operational tasks.</p>
      </div>
      <div className="flex gap-sm">
      <button className="h-10 px-md bg-surface text-on-surface border border-outline-variant rounded flex items-center gap-xs hover:bg-surface-container-low transition-colors font-title text-title">
      <span className="material-symbols-outlined text-[18px]">filter_list</span>
                              Filter
                          </button>
      <button className="h-10 px-md bg-surface text-on-surface border border-outline-variant rounded flex items-center gap-xs hover:bg-surface-container-low transition-colors font-title text-title">
      <span className="material-symbols-outlined text-[18px]">download</span>
                              Export
                          </button>
      </div>
      </div>
      {/* Table Container */}
      <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-low border-b border-outline-variant">
      <th className="py-md px-md font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant w-48">Date &amp; Time</th>
      <th className="py-md px-md font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Equipment</th>
      <th className="py-md px-md font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Action</th>
      <th className="py-md px-md font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant w-32">Status</th>
      <th className="py-md px-md font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant w-48">Performed By</th>
      </tr>
      </thead>
      <tbody className="font-body-md text-body-md text-on-surface">
      {/* Row 1 */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors h-12">
      <td className="py-sm px-md whitespace-nowrap text-on-surface-variant">Oct 24, 2023 08:30</td>
      <td className="py-sm px-md font-title text-title text-primary-container">Climate Unit A-12</td>
      <td className="py-sm px-md">Filter Replacement &amp; Coil Cleaning</td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Completed</span>
      </td>
      <td className="py-sm px-md flex items-center gap-xs">
      <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden">
      <img alt="Tech" className="w-full h-full object-cover" data-alt="A very small, circular headshot of a male technician. The image is simple, showing a friendly face against a neutral background. Lighting is clear and well-lit, suitable for a tiny UI avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhw-if3y8oIYDkWHpcJ1ogTqyGLN40lnCzZEpG1_n3256ey-octP4evlcw2hGdyyHjerXaLTQp15Se_S_ozx_T9Hp2H1qwvYZx2A40hliwyJSp8WVZRw2TWovxGHZhlopKBN7XMhPOxYofSIs5ga5QbTjpVqNrXynmGhnaXNZ7StWKsaa2uKE4ZQNH102EV0y0r1uueWh1lH6LcIegid9JEUQbqVhDXAAfb3kQT6pZ9l0HiOe_C8zzFPlSlXbtkse461OGGHgJ_zc6" />
      </div>
                                          M. Chen
                                      </td>
      </tr>
      {/* Row 2 */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors h-12">
      <td className="py-sm px-md whitespace-nowrap text-on-surface-variant">Oct 24, 2023 10:15</td>
      <td className="py-sm px-md font-title text-title text-primary-container">Irrigation Pump P-3</td>
      <td className="py-sm px-md">Pressure Calibration Check</td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Completed</span>
      </td>
      <td className="py-sm px-md flex items-center gap-xs">
      <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden flex items-center justify-center text-on-surface-variant font-label-sm text-label-sm">
                                              SJ
                                          </div>
                                          S. Jones
                                      </td>
      </tr>
      {/* Row 3 */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors h-12 bg-surface-container-low/50">
      <td className="py-sm px-md whitespace-nowrap text-on-surface-variant">Oct 24, 2023 11:00</td>
      <td className="py-sm px-md font-title text-title text-primary-container">Ventilation Fan V-04</td>
      <td className="py-sm px-md">Bearing Inspection - Noise Reported</td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-tertiary-container/10 text-tertiary-container font-label-sm text-label-sm border border-tertiary-container/20">In Progress</span>
      </td>
      <td className="py-sm px-md flex items-center gap-xs">
      <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden">
      <img alt="Tech" className="w-full h-full object-cover" data-alt="A very small, circular headshot of a male technician. The image is simple, showing a friendly face against a neutral background. Lighting is clear and well-lit, suitable for a tiny UI avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj17Ywl0Tb5IOUj3mVD2pbSpimvxT6KvgqWUY_gxQ3Uj_I7Q5FtZ4RTvTaqiAEajMWZQ08wSFybn-pAA3GpqmKiggp0BmOju-QuYgMn-Wvth3tDRP6rwdtJBpINLJeJrWrCgNRJ3KF9oniV8LR5PTpl4yYITaZz0PiPHu80YZZs2y7nKxG3GLdwHUwHO99eOn-RdyOUmA-T93RnuKWlyrWVuRPCYieuuL-RJnJ0lJEBOdW_FAeoMq9Pl5TAizdS_pJPN2JV_bdOByw" />
      </div>
                                          M. Chen
                                      </td>
      </tr>
      {/* Row 4 */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors h-12">
      <td className="py-sm px-md whitespace-nowrap text-on-surface-variant">Oct 23, 2023 15:45</td>
      <td className="py-sm px-md font-title text-title text-primary-container">Sensor Array S-North</td>
      <td className="py-sm px-md">Routine Calibration &amp; Cleaning</td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Completed</span>
      </td>
      <td className="py-sm px-md flex items-center gap-xs">
      <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden flex items-center justify-center text-on-surface-variant font-label-sm text-label-sm">
                                              LD
                                          </div>
                                          L. Davis
                                      </td>
      </tr>
      {/* Row 5 */}
      <tr className="hover:bg-surface-container-low transition-colors h-12 bg-error-container/10">
      <td className="py-sm px-md whitespace-nowrap text-on-surface-variant">Oct 23, 2023 16:30</td>
      <td className="py-sm px-md font-title text-title text-primary-container">Main Valve MV-1</td>
      <td className="py-sm px-md">Seal Replacement Attempted</td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm">Failed</span>
      </td>
      <td className="py-sm px-md flex items-center gap-xs">
      <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden flex items-center justify-center text-on-surface-variant font-label-sm text-label-sm">
                                              SJ
                                          </div>
                                          S. Jones
                                      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination / Footer */}
      <div className="border-t border-outline-variant bg-surface px-md py-sm flex justify-between items-center text-body-sm text-on-surface-variant">
      <div>Showing 1 to 5 of 124 entries</div>
      <div className="flex gap-xs">
      <button className="h-8 w-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-low disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <button className="h-8 w-8 flex items-center justify-center rounded border border-outline-variant bg-primary-container text-on-primary-container">1</button>
      <button className="h-8 w-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-low">2</button>
      <button className="h-8 w-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-low">3</button>
      <button className="h-8 w-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-low">
      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}

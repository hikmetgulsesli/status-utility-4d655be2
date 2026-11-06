// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" className="flex-1 flex flex-col justify-between p-6 md:p-10" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_ROUTE_RETAINED OBS_REFRESH_STATUS_STATUS_PERSISTENCE OBS_REFRESH_STATUS_STATUS_TEXT_DISPLAY OBS_REFRESH_STATUS_STATUS_VALUE_DISPLAY">
          <header className="w-full max-w-5xl mx-auto flex items-center justify-between pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm tracking-wider">
                SU
              </div>
              <div>
                <span className="font-semibold text-slate-900 block leading-tight">Status Utility</span>
                <span className="text-xs text-slate-500">System Monitoring &amp; Telemetry</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-medium text-emerald-700">Systems Operational</span>
            </div>
          </header>
      
          <main className="w-full max-w-lg mx-auto my-auto py-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-slate-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-xl font-bold text-slate-900">Application Status</h1>
                    <p className="text-xs font-mono text-slate-400 mt-1">Route: /status</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-emerald-100 text-emerald-800">
                    Live Service
                  </span>
                </div>
              </div>
      
              <div className="p-6 md:p-8 space-y-5">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Current State:</span>
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-100 text-emerald-800">refreshed</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Status Message:</span>
                    <span className="font-medium text-slate-900 text-right">Status refreshed</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Data Persistence:</span>
                    <span className="text-xs text-slate-600">Synchronized with local storage</span>
                  </div>
                </div>
      
                <div className="pt-2">
                  <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_CONTROL" className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-sm" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_REFRESH_CONTROL_STATE" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                    <span>Refresh Status</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
      
          <footer className="w-full max-w-5xl mx-auto pt-6 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-400">
              Status Utility © 2025. All telemetry endpoints operating normally.
            </p>
          </footer>
        </div>
    </>
  );
}

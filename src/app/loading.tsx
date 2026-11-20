export default function Loading() {
  return (
    <div className="grid min-h-[50vh] place-items-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-3 text-ink-soft">
        <span className="h-10 w-10 animate-spin rounded-full border-4 border-blush-deep border-t-rose" aria-hidden="true" />
        <span className="text-sm">Loading…</span>
      </div>
    </div>
  );
}

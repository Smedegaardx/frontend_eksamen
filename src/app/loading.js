export default function Loading() {
  return (
    <div className="fixed h-full w-full bg-stone-950 flex items-center justify-center z-50">
      <img
        src="/assets/loader/madbars.gif"
        alt="Loading"
        className="w-20"
      />
    </div>
  );
}

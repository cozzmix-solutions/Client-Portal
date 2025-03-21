export const Button = (props: React.PropsWithChildren) => {
  return (
    <button
    className={`
      relative py-2 px-4 rounded-2xl font-medium text-sm text-white
      bg-gradient-to-b from-[#282CFC] to-[#262CFC]
      shadow-[0_0_20px_rgba(40,44,252,0.5)]
      transition-all duration-300 ease-out
      hover:shadow-[0_0_25px_rgba(40,44,252,0.65)]
      hover:from-[#3e42fd] hover:to-[#282CFC]
      active:scale-[0.98]`}
    {...props}
  >
    <div className="absolute inset-0">
      <div className="rounded-2xl border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="rounded-2xl border border-white/30 absolute inset-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(40,44,252,0.1),transparent_70%)]" />
      <div className="absolute inset-0 shadow-[0_0_15px_rgba(40,44,252,0.4)_inset] rounded-2xl" />
    </div>
    <span className="relative z-10">{props.children}</span>
  </button>
  );
};

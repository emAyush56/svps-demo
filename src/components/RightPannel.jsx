function RightPannel({ children, isPannelOpen, pannelToggler }) {
  return (
    <div
      onClick={pannelToggler}
      className={`pannel-wrapper fixed inset-0 ${
        isPannelOpen ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`right-pannel fixed top-0 right-0 h-[100dvh] w-full bg-white p-6 shadow-lg transition-all sm:w-[512px] ${
          isPannelOpen
            ? "translate-x-0"
            : "translate-x-full sm:translate-x-[512px]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default RightPannel;

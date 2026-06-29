export default function BackgroundGlow() {
  return (
    <>
      <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[180px] rounded-full" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500 opacity-20 blur-[180px] rounded-full" />
    </>
  );
}
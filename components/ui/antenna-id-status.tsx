export function AntennaIDStatus(antennaId: { antennaId: string }) {
  return (
    <div className="flex items-center gap-1 bg-black/5 rounded-full p-1.5 pr-3">
      <img
        src="/radiowaves.circle.svg"
        alt="raidiowaves"
        width={25}
        height={25}
      />
      <p>{antennaId.antennaId}</p>
    </div>
  );
}

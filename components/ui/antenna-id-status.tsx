export function AntennaIDStatus(antennaId: { antennaId: string }) {
  const formattedAntennaId = antennaId.antennaId.replace(
    /^(\d{3})(\d{3})$/,
    "$1 $2",
  );

  return (
    <div className="flex items-center gap-1 bg-black/5 rounded-full p-1.5 pr-3 backdrop-blur-md">
      <img
        src="/radiowaves.circle.svg"
        alt="raidiowaves"
        width={25}
        height={25}
      />
      <p>{formattedAntennaId}</p>
    </div>
  );
}


export function ChatComponent({ index, id, date, message }: { index: number; id: string; date: string; message: string }) {
  return (
    <div className="flex items-start justify-start gap-4 w-full border-t-1 border-zinc-100 py-4">
      <p>{index}</p>
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <div className="flex items-center justify-between gap-2 w-full">
          <p className="font-medium text-indigo-700">id: {id}</p>
          <p className="text-sm text-muted-foreground">
            {date}
          </p>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}
import type { SubmitEvent } from "react";
import { ChatComponent } from "@/components/ui/chat-component";
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group"
import type { AntennaLog } from "@/stores/antennaSpaceStore";

import { ArrowUp } from "lucide-react";

type LogsViewProps = {
  logs: AntennaLog[];
  onSubmit: (message: string) => void;
};

export function LogsView({ logs, onSubmit }: LogsViewProps) {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = String(formData.get("message") ?? "").trim();

    if (!message) {
      return;
    }

    onSubmit(message);
    event.currentTarget.reset();
  }

  return (
    <form className="flex h-full w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex h-full w-full flex-col items-center justify-start gap-4 overflow-y-scroll px-2">
        {logs.map((log, index) => (
          <ChatComponent
            key={log.id}
            index={index + 1}
            id={log.authorId}
            date={log.date}
            message={log.message}
          />
        ))}
      </div>

      <Field className="h-12 w-full">
        <InputGroup className="pl-2 h-12 rounded-full">
          <InputGroupInput
            name="message"
            type="text"
            placeholder="Enter chat"
          />
          <InputGroupAddon align="inline-end">
            <Button type="submit" className="h-10 rounded-full p-4" variant="primary">
              <ArrowUp className="size-6" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </form>
  );
}
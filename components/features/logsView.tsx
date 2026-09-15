import { Message } from "@/components/ui/message";
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group"

import { ArrowUp } from "lucide-react";

export function LogsView() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex flex-col items-center justify-start gap-4 w-full h-full overflow-y-scroll px-2">
        <Message index={1} id="xy_0x0_yx" date="2026/09/05 00:19:43" message="今日ひとすくな" />
        <Message index={2} id="nemu_o0x" date="2026/09/05 00:20:01" message="わかる最近いない" />
        <Message index={3} id="_x_y_x_o0" date="2026/09/05 00:22:09" message="みんなホテルじゃない?" />
        <Message index={4} id="nyan_x_y_x" date="2026/09/05 00:22:40" message="土日は広場おおい" />
        <Message index={5} id="nemu_o0x" date="2026/09/05 00:22:59" message="新宿ログイン" />
        <Message index={6} id="nyan_x_y_x" date="2026/09/05 00:26:47" message=">>1 神社のところには人いたけど" />
      </div>

      <Field className="w-full h-12">
        <InputGroup className="pl-2 h-12 rounded-full">
          <InputGroupInput
            type="text"
            placeholder="Enter chat"
          />
          <InputGroupAddon align="inline-end">
            <Button className="p-4 h-10 rounded-full" variant="primary"><ArrowUp className="size-6" /></Button>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </div>
  );
}
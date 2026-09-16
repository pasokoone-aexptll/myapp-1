import { create } from "zustand";

export type Person = {
  id: string;
  name: string;
  lng: number;
  lat: number;
};

export type AntennaLog = {
  id: string;
  authorId: string;
  date: string;
  message: string;
};

type AntennaSpaceState = {
  antennaId: string;
  people: Person[];
  logs: AntennaLog[];
  setAntennaId: (antennaId: string) => void;
  setPeople: (people: Person[]) => void;
  setLogs: (logs: AntennaLog[]) => void;
  addLog: (log: AntennaLog) => void;
};

export const useAntennaSpaceStore = create<AntennaSpaceState>((set) => ({
  antennaId: "",
  people: [
    {
      id: "1",
      name: "xy_0x0_yx",
      lng: 139.7025,
      lat: 35.6955,
    },
    {
      id: "2",
      name: "nemu_o0x",
      lng: 139.7008,
      lat: 35.697,
    },
    {
      id: "3",
      name: "_x_y_x_o0",
      lng: 139.7042,
      lat: 35.6942,
    },
  ],

  setAntennaId: (antennaId) => {
    set({ antennaId });
  },

  logs: [
    {
      id: "1",
      authorId: "xy_0x0_yx",
      date: "2026/09/05 00:19:43",
      message: "今日ひとすくな",
    },
    {
      id: "2",
      authorId: "nemu_o0x",
      date: "2026/09/05 00:20:01",
      message: "わかる最近いない",
    },
    {
      id: "3",
      authorId: "_x_y_x_o0",
      date: "2026/09/05 00:22:09",
      message: "みんなホテルじゃない?",
    },
    {
      id: "4",
      authorId: "nyan_x_y_x",
      date: "2026/09/05 00:22:40",
      message: "土日は広場おおい?",
    },
    {
      id: "5",
      authorId: "nemu_o0x",
      date: "2026/09/05 00:22:59",
      message: "新宿ログイン?",
    },
    {
      id: "6",
      authorId: "nyan_x_y_x",
      date: "2026/09/05 00:26:47",
      message: ">>1 神社のところには人いたけど?",
    },
  ],
  setPeople: (people) => {
    set({ people });
  },

  setLogs: (logs) => {
    set({ logs });
  },

  addLog: (log) => {
    set((state) => ({
      logs: [...state.logs, log],
    }));
  },
}));
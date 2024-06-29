import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 99,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 0,
});


export const totalNotificationCount = selector({
  key : "totalNotificationCount",
  get : ({get}) =>{
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messageAtomCount = get(messageAtom);
    return networkAtomCount+jobsAtomCount+notificationAtomCount+messageAtomCount;
  }
})

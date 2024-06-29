import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationCount } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {

  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);


const totalNotificationValue = useRecoilValue(totalNotificationCount)

  return (
    <div>
      <button>Home </button>
      
      <button>Network ({networkNotificationCount > 100 ? "99+" :networkNotificationCount  })</button>
      <button>Messages ({messageCount})</button>
      <button>Jobs ({ jobsCount } )</button>
      <button>Notifications ({ notificationCount } ) </button>


      <button>Me ({totalNotificationValue})</button>
    </div>
  );
}

export default App;

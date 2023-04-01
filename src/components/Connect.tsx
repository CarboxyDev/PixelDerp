import { useEffect, useState } from "react";
import { randint } from "../utils/util";
import clsx from "clsx";
import { CheckIcon, RingsAnimatedIcon } from "../utils/icons";

type connectType = "connecting" | "success" | "failure";

const Connect = () => {
  const [connected, setConnected] = useState<connectType>("connecting");

  useEffect(() => {
    // simulate an api call for some hypothetical connection
    setTimeout(() => {
      const r = randint(1, 2);
      if (r == 1) {
        setConnected("failure");
      } else {
        setConnected("success");
      }
    }, 2000);
  }, []);

  return (
    <>
      <div className="h-18 w-80 rounded-xl border border-gray-200 bg-white sm:w-100">
        <div className="flex h-full w-full flex-row items-center px-6 py-6">
          <div>
            {connected == "connecting" && (
              <span className="font-semibold text-slate-600">
                Connecting...
              </span>
            )}
            {connected == "success" && (
              <span className="font-semibold text-green-500">Connected</span>
            )}
            {connected == "failure" && (
              <span className="font-semibold text-red-500">
                Failed to connect
              </span>
            )}
          </div>
          <div className="ml-auto">
            {connected != "success" && (
              <RingsAnimatedIcon
                className={clsx(
                  "h-8 w-8 stroke-slate-600",
                  connected == "connecting" && "visible",
                  connected == "failure" && "invisible"
                )}
              />
            )}
            {connected == "success" && (
              <CheckIcon className="h-8 w-8 text-green-500"></CheckIcon>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;

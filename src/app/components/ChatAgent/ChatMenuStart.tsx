import { startChatR, addMessage, startChat } from "@/redux/chatbotSlice";
import { RootState } from "@/redux/store";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { CgClose } from "react-icons/cg";
import { FaBrain } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { useSelector, useDispatch } from "react-redux";

interface ChatMenuStartProps {
  onClose: () => void; // onClose es una función que no devuelve nada
}

const ChatMenuStart: React.FC<ChatMenuStartProps> = ({ onClose }) => {
  const t = useTranslations("chtabot");
  const dispatch = useDispatch();
  const isChatStarted = useSelector(
    (state: RootState) => state.chatbot.isChatStarted
  );

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const startChatF = () => {
    if (!isChatStarted) {
      dispatch(startChatR());

      const welcomeMessage = {
        sender: "bot" as const,
        text: t("welcome_message"),
        time: getCurrentTime(),
      };
      dispatch(addMessage(welcomeMessage));
    }
    dispatch(startChat()); // Cambia la vista a 'chatStarted'
  };

  return (
    <div className="bg-black h-full">
      <div className=" p-4 text-white">
        <div className="flex w-full justify-end mb-4 p-2">
          <button onClick={onClose} className="text-white">
            <CgClose color="white" size={20} />
          </button>
        </div>
        <div className="mb-8">
          <h1 className="text-xl">{t("title")}</h1>
          <p className="font-light">{t("subtitle")}</p>
        </div>
        <div className="flex w-full justify-center mb-4">
          <button onClick={startChatF} className="">
            {t("bca-start")}
          </button>
        </div>
      </div>

      {/* Aquí se encuentra la sección del chatbot */}
      <div className="bg-gray-50  p-4 text-black rounded-t-[20px] h-full">
        {/* Lista de contactos */}

        <h2 className="mb-4">{t("titleAgent")}</h2>

        <div className="space-y-4">
          {/* Contacto 1 */}
          <div
            onClick={startChatF}
            className="flex items-center justify-between bg-whitte border border-gray-100  p-4 rounded-2xl shadow-md gap-2 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 "
          >
            <div className="flex gap-2">
              <Image
                alt="Avatar"
                className="rounded-full w-12 h-12"
                src={
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                width={500}
                height={500}
              />

              <div>
                <div className="flex items-center gap-1">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {t("info_agent_1.name")}
                  </h2>
                  <span>
                    {" "}
                    <FaBrain size={10} className="text-green-500" />
                  </span>
                </div>
                <i className="text-sm  font-light text-gray-400">
                  {t("info_agent_1.shortDescription")}
                </i>
              </div>
            </div>
            <div></div>
            <SlOptions color="gray" size={20} />
          </div>

          {/* Contacto 2 */}
          <div className="flex items-center justify-between bg-gray-100  p-4 rounded-2xl shadow-sm gap-2 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ">
            <div className="flex gap-2">
              <Image
                alt="Avatar"
                className="rounded-full w-12 h-12"
                src={
                  "https://my-page-negiupp.s3.amazonaws.com/1733133353804.jpg"
                }
                width={500}
                height={500}
              />

              <div>
                <div className="flex items-center gap-1">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {" "}
                    {t("info_agent_2.name")}
                  </h2>
                  <FaBrain size={10} className="text-gray-300" />
                  <i className="italic text-sm text-gray-300">
                    {" "}
                    {t("info_agent_2.state")}
                  </i>
                </div>
                <i className="text-sm  font-light text-gray-400">
                  {t("info_agent_2.shortDescription")}
                </i>
              </div>
            </div>
            <div></div>
            <SlOptions color="gray" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMenuStart;
'use client'
import React, { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import ChatWindow from "./ChatWindow";
import { CgClose } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { openChatWindow, closeChatWindow } from "@/redux/chatbotSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useTranslations } from "next-intl";

const UiChatBot = () => {
    const t = useTranslations("chtabot");
    const dispatch = useDispatch();
    const isChatWindowOpen = useSelector(
        (state: RootState) => state.chatbot.isChatWindowOpen
    );

    // Función para manejar la apertura/cierre del chat usando Redux
    const toggleChat = () => {
        if (isChatWindowOpen) {
            dispatch(closeChatWindow());
            toast(t("toast_message_3"), {
                icon: "💬",
                style: {
                    marginBottom: "50px",
                    background: "#3b82f6",
                    marginRight: "0px",
                    color: "#ffffff",
                },
                position: "bottom-right",
                duration: 4000,
            });
        } else {
            dispatch(openChatWindow());
        }
    };

    // Efecto para mostrar un mensaje al cargar la página y cada 5 minutos
    useEffect(() => {
        const welcomeMessageShown = sessionStorage.getItem("welcomeMessageShown");

        if (!welcomeMessageShown) {
            toast(t("toast_message_1"), {
                icon: "🤖",
                style: {
                    marginBottom: "50px",
                    marginRight: "0px",
                    background: "#4ade80",
                    color: "#ffffff",
                },
                position: "bottom-right",
                duration: 5000,
            });

            sessionStorage.setItem("welcomeMessageShown", "true");
        }

        const intervalId = setInterval(() => {
            toast(t("toast_message_2"), {
                icon: "✨",
                style: {
                    marginBottom: "50px",
                    marginRight: "0px",
                    background: "#facc15",
                    color: "#000000",
                },
                position: "bottom-right",
                duration: 5000,
            });
        }, 5 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <Toaster position="bottom-center" containerStyle={{
                zIndex: isChatWindowOpen ? 10 : 50, // Dinámico según el estado de la ventana del chat
            }} />

            <div
                className={`fixed ${isChatWindowOpen ? "z-0 bottom-1" : "z-50"
                    } right-2 bottom-2`}
            >
                <div
                    onClick={toggleChat}
                    className={`p-2 ${isChatWindowOpen ? "rounded-full bg-blue-500 " : "rounded-xl"
                        } shadow-lg flex gap-2 items-center justify-center bg-purple-500 dark:bg-purple-500 hover:bg-blue-500 transition-colors duration-300 cursor-pointer px-3`}
                >
                    {isChatWindowOpen ? (
                        <CgClose color="white" className="font-bold" size={23} />
                    ) : (
                        <>
                            <div className="w-8 rounded-full animate-shake">
                                <Image
                                    className="rounded-full"
                                    alt="Avatar"
                                    src={
                                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    }
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <h3 className="text-lg font-bold text-white transition-all duration-300">
                                Chat
                            </h3>
                        </>
                    )}
                </div>
            </div>

            {/* Ventana del chat con animación */}

            {isChatWindowOpen && <ChatWindow onClose={toggleChat} />}

        </div>
    );
};

export default UiChatBot;
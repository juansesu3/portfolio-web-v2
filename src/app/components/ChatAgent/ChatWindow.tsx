import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { FaChevronLeft, FaChevronRight, FaPaperPlane, FaStop } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { LuImagePlus } from "react-icons/lu";
import { SyncLoader } from "react-spinners";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addMessage,
  closeChatWindow,
  goToMenu,
  goToAgentProfile,
} from "@/redux/chatbotSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { FaBrain } from "react-icons/fa";
import Link from "next/link";
// import { useTranslations } from "next-intl";
import ChatMenuStart from "./ChatMenuStart";
import PerfilAgent from "./PerfilAgent";

interface ChatWindowProps {
  onClose: () => void;
}


const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  // const t = useTranslations("chtabot");
  const { isChatWindowOpen, userUUID } = useSelector((state: RootState) => state.chatbot);
  const currentView = useSelector(
    (state: RootState) => state.chatbot.currentView
  );
  const messages = useSelector((state: RootState) => state.chatbot.messages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [botTypingMessage, setBotTypingMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  // Nuevo estado para manejar la cancelación
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };


  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = {
        sender: "user" as const,
        text: input,
        time: getCurrentTime(),
      };
      dispatch(addMessage(userMessage));

      setInput("");
      setIsTyping(true);
      setBotTypingMessage(null);
      const controller = new AbortController();
      setAbortController(controller);
      ;

      try {
        const response = await axios.post(
          // 
          `https://ecommerce-demo-960512295965.us-central1.run.app/chatbot/query`,
          {
            query: input,
            userUUID: userUUID,
          },
          {
            signal: controller.signal,
          }
        );
        const botResponseText = response.data.response;
        const productData = response.data.products?.principal || null;
        const secondaryProducts = response.data.products?.secondary || [];

        const botMessage = {
          sender: "bot" as const,
          text: botResponseText,
          time: getCurrentTime(),
          product: productData,
        };

        dispatch(addMessage(botMessage));

        if (secondaryProducts.length > 0) {
          const secondaryMessage = {
            sender: "bot" as const,
            text: "", // Este mensaje puede tener un texto opcional, algo como "Otros productos que te pueden interesar:"
            time: getCurrentTime(),
            secondaryProducts: secondaryProducts
          };
          dispatch(addMessage(secondaryMessage));
        }
        setIsTyping(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Solicitud cancelada por el usuario");
          const cancelMessage = {
            sender: "bot" as const,
            text: "La solicitud ha sido cancelada.",
            time: getCurrentTime(),
          };
          dispatch(addMessage(cancelMessage));

        } else {
          console.error("Error al obtener la respuesta del bot:", error);
          const errorMessage = {
            sender: "bot" as const,
            text: "Lo siento, ha ocurrido un error. Por favor, intenta nuevamente.",
            time: getCurrentTime(),
          };
          dispatch(addMessage(errorMessage));
          setIsTyping(false);
        }
      }
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleScrollLeft = (carouselId: string) => {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
      carousel.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = (carouselId: string) => {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
      carousel.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  const handleBack = () => {
    dispatch(goToMenu());
  };
  const handleGotoAgenntProfile = () => {
    dispatch(goToAgentProfile());
  };

  const handleAbort = () => {
    if (abortController) {
      abortController.abort();
      setIsTyping(false);
      setAbortController(null);
    }
  };




  return (
    <div
      className={`fixed z-50 m bottom-0 right-0 w-full md:w-[600px]  bg-white shadow-lg transition-all duration-200 h-full flex flex-col mt-24
                ${isChatWindowOpen ? "slide-up" : "slide-down"}`}
    >
      {currentView === "menu" && <ChatMenuStart onClose={onClose} />}

      {currentView === "chatStarted" && (
        <>
          <div className="flex justify-between items-center bg-black px-3 py-4">
            <div className=" flex  items-center gap-4">
              <button onClick={handleBack}>
                <IoIosArrowBack color="white" size={20} />
              </button>
              <div className="flex gap-2">
                <Image
                  onClick={handleGotoAgenntProfile}
                  className="w-10 h-10 rounded-full"
                  alt="Avatar"
                  src={
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  width={500}
                  height={500}
                />
                <div className="felx flex-col">
                  <h2 onClick={handleGotoAgenntProfile} className="text-white hover:text-gray-300 cursor-pointer font-semibold">Sofia </h2>

                  <div className="flex flex-row items-center gap-1">
                    <span>
                      {" "}
                      <FaBrain className="text-green-500" />
                    </span>

                    <span>
                      {" "}
                      <i className="text-sm">Online</i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={onClose} className="text-white">
              <CgClose size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3">
            {messages.map((message, index) => (
              <div key={index}>
                {/* Renderiza el ChatMessage solo si hay texto */}
                {message.text && (
                  <ChatMessage
                    message={message.text}
                    time={message.time}
                    isBot={message.sender === "bot"}
                  />
                )}

    

                {/* Si hay productos secundarios, renderizar el carrusel sin mensaje de texto */}
                {message.sender === "bot" && message.secondaryProducts && (
                  <div className="relative w-[95%] m-auto flex items-center my-4">
                    {/* Contenedor del carrusel con gradientes a los lados */}
                    <div className="relative w-full">
                      {/* Gradient Left */}
                      <div className="pointer-events-none absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
                      {/* Gradient Right */}
                      <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10"></div>

                      <button
                        onClick={() => handleScrollLeft(`carousel-${index}`)}
                        className="absolute left-0 z-20 flex items-center justify-center p-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 text-white hover:scale-105 transition-all duration-200 shadow-lg"
                        style={{ transform: "translateY(-50%)", top: "50%" }}
                      >
                        <FaChevronLeft size={14} />
                      </button>

                      <div
                        id={`carousel-${index}`}
                        className="carousel carousel-start bg-gray-100 rounded-box py-2 px-6 w-full flex gap-4 overflow-x-scroll no-scrollbar relative z-0"
                      >
                        {message.secondaryProducts.map((sproduct) => (
                          <div
                            key={sproduct.slug}
                            className="flex items-center gap-4 shadow-lg rounded-lg p-2 w-72 bg-white"
                          >
                            <div className="w-24 h-24 flex-shrink-0">
                              <Image
                                src={sproduct.image_url[0]}
                                alt="product"
                                width={96}
                                height={96}
                                className="rounded-lg object-cover"
                              />
                            </div>
                            <div className="p-1 overflow-hidden">
                              <h3 className="text-gray-600 font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                                {sproduct.name}
                              </h3>
                              <p className="text-green-600 font-semibold text-sm">
                                {sproduct.price ? `CHF ${sproduct.price.toFixed(2)}` : "N/A"}
                              </p>
                              <Link
                                onClick={() => dispatch(closeChatWindow())}
                                href={`https://ecomerce-demo-pandorai.vercel.app/${sproduct.lang}/product/${sproduct.slug}`}
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium hover:bg-blue-600 transition-all shadow focus:ring-2 focus:ring-blue-300"
                              >
                                Ver detalles
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleScrollRight(`carousel-${index}`)}
                        className="absolute right-0 z-20 flex items-center justify-center p-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 text-white hover:scale-105 transition-all duration-200 shadow-lg"
                        style={{ transform: "translateY(-50%)", top: "50%" }}
                      >
                        <FaChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                )}
              </div>
            ))}


            {isTyping && botTypingMessage && (
              <ChatMessage
                message={botTypingMessage}
                time={getCurrentTime()}
                isBot={true}
              />
            )}
            {isTyping && !botTypingMessage && (
              <div className="self-start">
                <SyncLoader size={8} color="#333" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 px-6 flex flex-col gap-3 items-center border-t border-gray-200">
            <div className="flex items-center w-full">
              <button
                onClick={handleSendMessage}
                className="p-2 rounded-full text-blue-500 focus:outline-none transform transition-all duration-300"
              >
                <LuImagePlus size={23} />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !isTyping && handleSendMessage()}
                className="w-full p-2 border rounded-lg focus:outline-none bg-white text-black"
                placeholder="Escribe tu mensaje..."
                disabled={isTyping}
              />
              {isTyping ? (
                <button
                  onClick={handleAbort}
                  className="ml-2 p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white focus:outline-none transform transition-all duration-300"
                >
                  <FaStop size={18} />
                </button>
              ) : (
                <button
                  onClick={handleSendMessage}
                  className={`ml-2 p-2 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none transform transition-all duration-300 ${input.trim()
                    ? "opacity-100 translate-x-0"
                    : "hidden opacity-0 translate-x-5 pointer-events-none"
                    }`}
                >
                  <FaPaperPlane size={18} />
                </button>
              )}
            </div>
          </div>
        </>
      )}
      {currentView === "agent_profile" && <PerfilAgent onClose={onClose} />}
    </div>
  );
};

export default ChatWindow;
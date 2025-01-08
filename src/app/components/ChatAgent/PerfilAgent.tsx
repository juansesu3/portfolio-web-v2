import { clearMessages, finishChatR, goToMenu, removeUUID, startChat } from "@/redux/chatbotSlice";
import Image from "next/image";
import React from "react";
import { CgClose } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch} from "react-redux";
import { RiMessage3Line } from "react-icons/ri";
import { MdOutlineCleaningServices } from "react-icons/md";
import { LiaDrumstickBiteSolid } from "react-icons/lia";


import Swal from "sweetalert2";
import { useTranslations } from "next-intl";

interface PerfilAgentProps {
    onClose: () => void;
}

const PerfilAgent: React.FC<PerfilAgentProps> = ({ onClose }) => {
    const t = useTranslations("chtabot");
    const dispatch = useDispatch();
    const handleBack = () => {
        dispatch(startChat());
    };

    const handleCleanChat = () => {
        Swal.fire({
            title: t('info_agent_1.profile-detail.alert_clean_chat.title'),
            text: t('info_agent_1.profile-detail.alert_clean_chat.text'),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#a855f7", // Color morado del botón de confirmar
            cancelButtonColor: "#f5f5f5",
            confirmButtonText: t('info_agent_1.profile-detail.alert_clean_chat.ok'),
            cancelButtonText: t('info_agent_1.profile-detail.alert_clean_chat.cancel'),
            target: "#chat-container", // Establece el contenedor objetivo
            customClass: {
                popup: "relative", // Asegúrate de que SweetAlert2 respete el diseño del contenedor
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // Acción para limpiar el chat
                dispatch(clearMessages());
                dispatch(removeUUID());
                dispatch(finishChatR());
                dispatch(goToMenu());
                Swal.fire({
                    title: t('info_agent_1.profile-detail.alert_clean_chat.succes_tittle'),
                    text: t('info_agent_1.profile-detail.alert_clean_chat.succes'),
                    icon: "success",
                    confirmButtonColor: "#a855f7",
                    target: "#chat-container", // Mantén el contexto en el contenedor del chat
                    customClass: {
                        popup: "relative",
                    },
                });
            }
        });
    };


    return (

        <>


            <div className="h-full overflow-y-auto bg-gray-50 relative">
                <div className="flex justify-between items-center bg-black px-3 py-4  sticky top-0 w-full">
                    <div className=" flex  items-center gap-4">
                        <button onClick={handleBack}>
                            <IoIosArrowBack color="white" size={20} />
                        </button>
                    </div>

                    <button onClick={onClose} className="text-white">
                        <CgClose size={20} />
                    </button>
                </div>
                <div className="px-3">
                    <div className="flex flex-col items-center mt-10">
                        <div className="flex gap-2 flex-col items-center">
                            <Image
                                className="w-36 h-36 rounded-full"
                                alt="Avatar"
                                src={
                                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                }
                                width={500}
                                height={500}
                            />

                            <div className="felx flex-col">
                                <h2 className="text-gray-800 text-2xl font-semibold">Sofia </h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4  flex justify-center gap-2">

                        <div onClick={handleBack} className="cursor-pointer bg-white text-gray-400 border font-light  border-gray-50 hover:shadow-lg transition-all duration-300 shadow-sm hover:-translate-y-1 w-full xs:max-w-24 p-4 flex flex-col gap-1 items-center justify-center rounded-lg "><RiMessage3Line className="text-purple-500" size={23} /><h4 className="text-sm whitespace-nowrap ">{t("info_agent_1.profile-detail.options.option_1")} </h4></div>
                        <div onClick={handleCleanChat} className="cursor-pointer bg-white text-gray-400  font-light  border border-gray-50 hover:shadow-lg transition-all duration-300 shadow-sm hover:-translate-y-1 w-full xs:max-w-24  p-4 flex flex-col gap-1 items-center justify-center rounded-lg "><MdOutlineCleaningServices className="text-purple-500" size={23} /><h4 className="text-sm whitespace-nowrap">{t("info_agent_1.profile-detail.options.option_2")}</h4></div>
                        <div className=" cursor-pointer bg-white  border border-gray-50 text-gray-400 font-light hover:shadow-lg transition-all duration-300 shadow-sm hover:-translate-y-1 w-full xs:max-w-24  p-4 flex flex-col gap-1 items-center justify-center rounded-lg "><LiaDrumstickBiteSolid className="text-purple-500" size={23} /><h4 className="text-sm whitespace-nowrap">{t("info_agent_1.profile-detail.options.option_3")} </h4></div>


                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-gray-600 font-medium">{t("info_agent_1.profile-detail.how_can_i_help")} </h3>
                            <p className="font-light text-gray-500">{t("info_agent_1.profile-detail.how_can_i_hep_desc")}</p>
                        </div>
                        <div className="flex flex-col gap-2">

                            <h3 className="text-gray-600 font-medium">{t("info_agent_1.profile-detail.look_")}</h3>
                            <div className="w-full p-4 bg-white rounded-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                                {/* <Image
                                    className="w-full h-auto rounded-2xl object-cover"
                                    alt="Avatar"
                                    src={
                                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    }
                                    width={500}
                                    height={500}
                                />
                                <Image
                                    className="w-full h-auto rounded-2xl object-cover"
                                    alt="Avatar"
                                    src={
                                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    }
                                    width={500}
                                    height={500}
                                />
                                <Image
                                    className="w-full h-auto rounded-2xl object-cover"
                                    alt="Avatar"
                                    src={
                                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    }
                                    width={500}
                                    height={500}
                                />
                                <Image
                                    className="w-full h-auto rounded-2xl object-cover"
                                    alt="Avatar"
                                    src={
                                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    }
                                    width={500}
                                    height={500}
                                /> */}
                                <h1 className="text-center text-purple-500 font-semibold">{t("info_agent_1.profile-detail.comming_soon")}</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PerfilAgent;
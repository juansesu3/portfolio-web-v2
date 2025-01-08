import Image from "next/image";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
interface ChatMessageProps {
  message: string;
  time: string;
  isBot?: boolean;
  product?: {
    name: string;
    description: string;
    image_url: string[];
    slug: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  time,
  isBot,
}) => {
  return (
    <div className={`flex flex-col ${isBot ? "items-start" : "items-end"} mb-4`}>
      {/* Avatar */}
      <div className={`flex items-end ${isBot ? 'flex-row' : 'flex-row-reverse gap-2 '} space-x-2 `}>
        {isBot ? (
          <div className="w-10 h-10 rounded-full mb-2  ">
            <Image
              alt="Bot Avatar"
              src={
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              width={40}
              height={40}
              className="object-cover rounded-full border border-gray-300 "
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full mb-2 border border-gray-300">
            <span className="text-xs font-semibold">you</span>
          </div>
        )}
        {/* Message Content */}
        <div className="relative max-w-sm">
          <div
            className={`rounded-lg p-3 relative ${isBot
              ? "bg-gray-100 text-gray-600"
              : "bg-black text-white shadow-md"
              }`}
          >

            {/* Viñeta del Bot */}
            {isBot && (
              <div className="absolute -left-2 bottom-1 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-gray-100 border-b-[5px] border-b-transparent"></div>
            )}

            {/* Viñeta del Usuario */}
            {!isBot && (
              <div className="absolute -right-2 bottom-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-black border-b-[5px] border-b-transparent"></div>
            )}
            <div
              className="whitespace-pre-line break-words"
              dangerouslySetInnerHTML={{ __html: message }}
            ></div>
          </div>
          <div className={`flex items-center  ${isBot ? 'justify-start ml-2' : 'justify-end mr-2'}  mt-1 gap-1`}>
            <time className="text-gray-400 text-xs">{time}</time>
            {!isBot && (
              <div className="flex gap-1 items-center opacity-70">
                <IoCheckmarkDoneSharp color="blue" size={15} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Footer (Checkmark for user messages) */}

    </div>
  );
};

export default ChatMessage;
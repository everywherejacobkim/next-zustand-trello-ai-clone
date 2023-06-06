import React from 'react';
import { FcAssistant } from 'react-icons/fc';

const AIPrompt: React.FC = () => {
    return (
        <div className="w-full flex flex-row justify-center items-center">
            <div className="flex flex-row gap-2 justify-center bg-blue-500 text-white p-4 drop-shadow-xl rounded-full my-4 px-6 w-fit">
                <FcAssistant className="w-8 h-8" />
                <p className="mt-2">AI is summarizing your tasks...</p>
            </div>
        </div>
    );
};

export default AIPrompt;

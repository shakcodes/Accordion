import { useState } from "react";

const info = [
    {
        id: '1',
        question: "What is JavaScript?",
        answer: "JavaScript is the world's most popular programming language..."
    },
    {
        id: '2',
        question: "What is Array?",
        answer: "An array is a special variable, which can hold more than one value..."
    },
    {
        id: '3',
        question: "What is functions?",
        answer: "JavaScript functions are defined with the function keyword..."
    },
    {
        id: '4',
        question: "What is Objects?",
        answer: "In contrast, objects are used to store keyed collections..."
    }
];

export const Accordion = () => {
    const [select, setSelect] = useState(null);

    const changeHandle = (item) => {
        setSelect(select === item.id ? null : item.id);
    };

    return (
        <div className="w-full p-4">
            {info.map(item => (
                <div key={item.id} className="border-b border-gray-300 mb-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg font-semibold">{item.question}</h1>
                        <button
                            onClick={() => changeHandle(item)}
                            className="text-2xl font-bold text-blue-500 transform transition-transform duration-300"
                        >
                            {select === item.id ? '-' : '+'}
                        </button>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
                            select === item.id ? "max-h-[500px] opacity-100 p-4" : "max-h-0 opacity-0"
                        }`}
                    >
                        <p className="text-gray-700">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

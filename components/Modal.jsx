import { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";


export default function Modal({
    title = "",
    content = "",
    buttons = [],
    classes = "",
    onDiscard = "",
    onConfirm = "",
    children
}) {
    let [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        setIsOpen(isOpen);
        if(!isOpen) {
            document.documentElement.style.overflow = "auto";
        } else {
            document.documentElement.style.overflow = "hidden";
        }
    }, [isOpen]);

    const HandleChange = () => {
        setIsOpen(!isOpen);
        
    }
    return <>
        <div onClick={() => HandleChange()}>
            {children}
        </div>

        <Transition show={isOpen}>
            <Transition.Child
                as={Fragment}
                enter="transition-all duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all duration-200"
                leaveTo="opacity-0"
                leaveFrom="opacity-100"
            >
                <div style={{ zIndex: '1' }} onClick={() => HandleChange()} className="w-full h-full left-0 top-0 bg-black/50 fixed" />
            </Transition.Child>
            <Transition.Child
                as={Fragment}
                enter="transition-all duration-200"
                enterFrom="opacity-0 scale-75"
                enterTo="opacity-100 scale-100"
                leave="transition-all duration-200"
                leaveTo="opacity-0 scale-75"
                leaveFrom="opacity-100 scale-100"
            >
                <div  id="modal" className="h-[50%] w-[50%] absolute top-0 bottom-0 left-0 right-0 m-auto bg-slate-100 z-50">
                    <header className="w-full h-1/6 flex items-center justify-center p-4">
                        <h1>{title}</h1>
                    </header>
                    <section className="w-full h-2/3 flex items-start justify-center p-4">
                        {content}
                    </section>
                    <footer className="w-full h-1/6 flex justify-end items-center p-4">
                       buttons
                    </footer>
              </div>
            </Transition.Child>
        </Transition>
    </>
}

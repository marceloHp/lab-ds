import {clsx} from "clsx";
import {InputHTMLAttributes, ReactNode} from "react";
import {Slot} from "@radix-ui/react-slot";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
}

export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode
}

function TextIcon(props: TextInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {props.children}
        </Slot>
    )
}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input className={clsx(
            'bg-transparent flex-1 text-gray-100 outline-none text-xs  placeholder:text-gray-400'
        )} {...props}></input>
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextIcon
}
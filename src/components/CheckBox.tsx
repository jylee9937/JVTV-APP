import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as LabelPrimitive from "@radix-ui/react-label";
import { clsx } from "clsx";
import React from "react";

interface CheckboxProps {
    value: boolean;
    label: string;
    id: string;
}

const Checkbox = (props: CheckboxProps) => {
    return (
        <div className="flex items-center">
            <CheckboxPrimitive.Root
                id={props.id}
                defaultChecked={props.value}
                className={clsx(
                    "flex h-9 w-9 items-center justify-center rounded",
                    "radix-state-checked:bg-purple-600 radix-state-unchecked:bg-gray-100",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
            >
                <CheckboxPrimitive.Indicator>
                    <CheckIcon className="h-8 w-8 self-center text-white" />
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
            
            <LabelPrimitive.Label
                htmlFor={props.id}
                className="ml-3 select-none text-sm font-medium text-gray-900"
            >
                {props.label}
            </LabelPrimitive.Label>
        </div>
    );
};

export { Checkbox };

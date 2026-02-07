import { LoaderCircleIcon } from "lucide-react";

export default function Spinner({message =  'Loading...'}) {
    return (
        <div className="flex justify-center items-center h-full">
            <LoaderCircleIcon className="animate-spin text-blue-500" size={48} />
            <span className="text-gray-600">{message}</span>
        </div>
    );
}       
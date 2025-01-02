import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <div>
            <time dateTime="2016-10-25" suppressHydrationWarning />
            <Toaster />
        </div>
    );
};

export default ToasterProvider;

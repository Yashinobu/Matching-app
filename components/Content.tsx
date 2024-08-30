import { PropsWithChildren } from "react";
export default function HomeContent({ children }: PropsWithChildren) {
    return (
        <div className="w-[90%] mt-5 relative">{children}</div>
    );
}

import { Suspense } from "react";
import { LOADING } from "src/utils/constants/stringConstants";

export const useSuspense = (children: JSX.Element, loading?: React.ReactNode) => {
    const fallback = loading || <div>{LOADING}</div>
    return (
        <Suspense fallback={fallback}>
            {children}
        </Suspense>
    )
}
// updates page title on route changes
import { useEffect } from "react";

export default function PageTitle(title) {

    useEffect(() => {
        if (title) {
            document.title = title;
            return;
        }
        
        // fallback title
        document.title = 'Seth Morenos';
    }, [title]);

    return null;
}

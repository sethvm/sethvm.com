// update page title
export const pageTitle = (title) => {

    if (title) {
        document.title = title;
        return;
    }
    
    // fallback title
    document.title = 'Seth Morenos';
}

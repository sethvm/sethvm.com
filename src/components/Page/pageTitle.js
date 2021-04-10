// update page title
export default function PageTitle(title) {
    
    if (title) {
        document.title = title;
        return;
    }
    
    // fallback title
    document.title = 'Seth Morenos';
}

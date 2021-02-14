import React from 'react';
import '../styles/Project.css';

export default function Error() {

    return(
        <>
        <main className='project'>
            <div className='project_body'>
                <div className='error'>
                    <h4 className='error_text'><span class='bold'>ERROR 404</span>  |  <strong>PAGE NOT FOUND</strong></h4>
                <p>
                    <br />
                    Whoops! It looks like you've ended up on what appears to be a nonexistent page.
                    <br />
                    <br />
                    Don't worry though - jump to another section of the site using the surrounding links!
                </p>
                </div>
            </div>
        </main>
        </>
    );
}

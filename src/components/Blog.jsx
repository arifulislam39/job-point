import React from 'react';

const Blog = () => {
    return (
        <div className='ml-56 me-56'>
            <h1 className='font-bold mt-10 text-3xl'>Blog Questions:</h1>
            <hr className='border-zinc-950' />

            <h3 className='font-bold mt-5'>1. What is a custom hook?</h3>
            <p>A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks.
                <br />
                Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications.</p>

            <h3 className='font-bold mt-5'>2. When should you use context API?</h3>
            <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                <br />
                Context API in React is to share data or the app state across all the app components. This means that the props can be accessed from any component. Therefore, no need to pâss props through other components to send it at the end to our destination component. Less code, less debugging hassle, and more code visibility.
            </p>

            <h3 className='font-bold mt-5'>3. What is useRef?</h3>
            <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.reference.
                <br />
                current accesses the reference value, and reference.current = newValue updates the reference value. Pretty simple.</p>
            <h3 className='font-bold mt-5'>4. What is useMemo?</h3>
            <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
        </div>
    );
};

export default Blog;
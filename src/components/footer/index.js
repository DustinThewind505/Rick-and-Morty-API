import React from "react";

import "./footer.css"


export default function Footer() {



    return(
        <footer>
            <p>
                More from Rick and Morty
            </p>
            <div className="footer-extra-rick-and-morty-links">
                <div className="footer-social-media-links">
                    <a href="https://www.facebook.com/RickandMorty">
                        <svg viewBox="0 0 28.8 28.8" aria-label="RickandMorty on Facebook"><path d="M20.6 14.4h-4v14.4h-6V14.4H7.7V9.3h2.8V6c0-2.4 1.1-6 6-6H21v5h-3.2c-.5 0-1.3.3-1.3 1.4v3h4.6z"></path></svg>
                    </a>
                    <a href="https://twitter.com/rickandmorty">
                        <svg viewBox="0 0 250 203.1" aria-label="@rickandmorty on Twitter"><path d="M-75-98.5h400v400H-75z" fill="none"></path><path d="M78.6 203.1c94.3 0 145.9-78.2 145.9-145.9 0-2.2 0-4.4-.1-6.6 10-7.3 18.7-16.3 25.6-26.5-9.4 4.1-19.3 6.9-29.5 8.1 10.7-6.4 18.7-16.5 22.5-28.4-10.1 6-21.1 10.2-32.6 12.4C191-4.5 158.5-5.5 137.8 14c-13.3 12.5-19 31.2-14.8 49C81.9 60.9 43.4 41.4 17.4 9.4 3.8 32.8 10.7 62.8 33.3 77.8c-8.2-.2-16.1-2.4-23.3-6.4v.6c0 24.4 17.2 45.4 41.2 50.3-7.6 2.1-15.5 2.4-23.2.9 6.7 20.9 26 35.2 47.9 35.6-18.2 14.3-40.6 22-63.7 22-4.1 0-8.2-.3-12.2-.7 23.5 15.1 50.7 23 78.6 23"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/rickandmorty/">
                        <svg viewBox="0 0 512 512" aria-label="@rickandmorty on Instagram"><path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1S23.8 74.5 17.3 91c-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6s28.1 22.6 44.6 29.1c16 6.2 34.3 10.5 61.2 11.7s35.4 1.5 103.9 1.5 77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1s22.6-28.1 29.1-44.6c6.2-16 10.5-34.3 11.7-61.2s1.5-35.4 1.5-103.9-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6s-28.1-22.6-44.6-29.1C405.2 11 386.9 6.7 360 5.5c-27-1.1-35.6-1.4-104-1.4z"></path><path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"></path><circle cx="390.5" cy="121.5" r="30.2"></circle></svg>
                    </a>
                </div>
                <div>
                    <a className="footer-game-links" href="https://rickandmortywormageddon.com/" rel="noopener noreferrer" target="_blank">Wormageddon</a>
                </div>
                <div> 
                    <a className="footer-game-links" href="https://gorickyourself.com/" rel="noopener noreferrer" target="_blank">Go Rick Yourself</a> 
                </div>
                <div>
                    <a className="footer-game-links" href="https://www.adultswim.com/games/pocket-mortys" rel="noopener noreferrer" target="_blank">Pocket Mortys</a>
                </div>
                <div>
                    <a className="footer-game-links" href="https://wbshop.com/collections/rick-and-morty" rel="noopener noreferrer" target="_blank">Shop Rick and Morty</a>
                </div>
            </div>
        </footer>
    )
}
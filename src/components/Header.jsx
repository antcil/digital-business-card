import React from "react"
import headshot from "../images/Headshot.jpeg"
import linkedlogo from "../images/linkedin-logo.png"
import gitlogo from "../images/github-logo.png"

export default function Header() {
    return (
        <div class="header">
            <img class="header-pic" src={headshot} width="200px" />
            <h1 class="header-name">Anthony Ciliberto</h1>
            <h2 class="header-desc"> Computer Science Student</h2>
            <h3 class="header-email">anthonyciliberto2@gmail.com</h3>
            <div class="buttons">
                <a href="https://www.linkedin.com/in/anthony-ciliberto-637912223/">
                    <button class="btn-linkedin">
                        <img class="linkedin-logo" src={linkedlogo} width={20} />
                        <h4>LinkedIn</h4>
                    </button>
                </a>
                <a href="https://github.com/antcil">
                    <button class="btn-github">
                        <img class="github-logo" src={gitlogo} width={20} />
                        <h5>GitHub</h5>
                    </button>
                </a>


            </div>
        </div>
    )
}
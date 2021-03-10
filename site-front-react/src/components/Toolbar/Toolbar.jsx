import React from 'react'

// import { FaBell } from 'react-icons/fa'

function Toolbar() {
    return (
        <header class="toolbar">
            <div style="flex: 1">
                <img class="logo" src="./img/fakebook-icon.png" />
            </div>
            <div class="main">
                <a class="tab" href="~/">
                    <i class="fa fa-home fa-2x" aria-hidden="true"></i>
                </a>
                <a class="tab" href="~/friends">
                    <i class="fa fa-users fa-2x" aria-hidden="true"></i>
                </a>
            </div>
            <div class="toolbar-end">
                <div>
                    <button onclick="openNewPostModal()" class="toolbar-btn">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <button class="toolbar-btn">
                        <i class="fa fa-comments" aria-hidden="true"></i>
                    </button>
                    <button class="toolbar-btn">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                    </button>
                    <a href="~/account/logout">
                        <button class="toolbar-btn">
                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                        </button>
                    </a>
                </div>
            </div>
        </header>
    )
}
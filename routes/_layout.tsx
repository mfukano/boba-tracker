import { PageProps } from "$fresh/server.ts";
import { Component } from "preact";

export default function Layout({ Component }: PageProps) {
    return (
        <div className="layout">
            <header>
                <h1 class="text-3xl">Maggie's Boba Tracker</h1>
                <ul>
                    <li><a href="/boba">Home</a></li>
                    <li><a href="/add">Add</a></li>
                    <li><a href="">Stats</a></li>
                </ul>
            </header>

            <Component />
        </div>
    )
}
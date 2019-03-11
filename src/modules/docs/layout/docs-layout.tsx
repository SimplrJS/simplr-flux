import React from "react";

import { Sidebar } from "../sidebar/sidebar";
import { Toc } from "../toc/toc";

import "./docs-layout.scss";

interface Props {
    children: React.ReactNode;
}

export function DocsLayout(props: Props): JSX.Element {
    return (
        <div className="docs-layout">
            <Sidebar className="docs-navigation" />
            <main className="docs-content">{props.children}</main>
            <Toc className="docs-toc" />
        </div>
    );
}
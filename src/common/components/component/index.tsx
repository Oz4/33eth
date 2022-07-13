import React from "react";

export default function Component({children} : {children: React.ReactNode} ): JSX.Element {
  return <div>
    Component
    {children}
    </div>;
}

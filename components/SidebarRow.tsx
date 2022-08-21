import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => {};
}

function SidebarRow({ Icon, title, onClick }: Props) {
  return (
    <div
      onClick={()=>onClick?.()}
      className="max-w-fit flex items-center space-x-2 cursor-pointer rounded-full
     px-4 py-3 hover:bg-gray-100 transition-all duration-200 group"
    >
      <Icon className="w-6 h-6" />
      <p className="group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-lg">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;

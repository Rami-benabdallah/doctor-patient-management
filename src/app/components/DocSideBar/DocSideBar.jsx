"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

import { iconButtons } from '@/app/utils/Sidebar';

import { DocIconButton } from '../DocIconButton/DocIconButton';

export const DocSideBar = ({ }) => {
  const pathname = usePathname();

  return (
    <div className="bg-sideBarBg h-screen p-4 transition-all duration-300 ease-in-out border-r border-gray-300 shadow-md w-64">
      <div className='h-full flex flex-col items-center'>
        <div>
          LOGO
        </div>
        <div className='mt-auto mb-auto flex flex-col items-start gap-6'>
          {iconButtons.map((button, index) => (
            <Link key={index} href={button.href}>
              <DocIconButton
                mode="transparent"
                icon={button.icon}
                hoverEffects="hover:bg-primary hover:text-light"
                rounded="rounded-2xl"
                size="w-8 h-8"
                active={pathname === button.href}
                showLabel={true}
                label={button.label}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const modeToBgColor = {
  dark: 'bg-dark text-light',
  light: 'bg-light text-dark border border-dark',
};

const modeToIconFillColor = {
  dark: 'text-fill-light',
  light: 'text-fill-dark',
};


DocSideBar.propTypes = {

};

DocSideBar.defaultProps = {

};

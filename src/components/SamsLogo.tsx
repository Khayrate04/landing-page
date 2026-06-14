/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function SamsLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Sam%27s_Club_Logo_2019.svg/1280px-Sam%27s_Club_Logo_2019.svg.png"
        alt="Sam's Club Logo"
        className="w-auto h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

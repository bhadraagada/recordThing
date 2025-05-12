"use client";

import Image from "next/image";
import { useState } from "react";

export const DropDownList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="hamburger"
              width={14}
              height={14}
            />
            {/* <span>{selectedFilter}</span> */}
            Most recent
          </figure>
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="arrow-down"
            width={20}
            height={20}
          />
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown">
          {["Most recent", "Most viewed", "Most liked", "Most commented"].map(
            (option) => (
              <li key={option} className="list-item">
                {option}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

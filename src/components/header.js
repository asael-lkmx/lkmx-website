import React, { useEffect } from "react";
import { Column, Block } from "@lkmx/flare-react";
import styles from "@/components/header.module.scss";
import PagesLinks from "@/components/pages-links.js";
import Link from "next/link";
import Image from "next/image"

export default function Header(props) {

  return (
    <header className={styles.header}>
      <Column>
        <Block>
          <div className={styles.header__content}>
            <div className={styles.header__content__logo}>
              <Link href="/">
                <Image fill src="/lkmx-logotype-black.svg" alt="Logo"/>
              </Link>
            </div>
            <div className={styles.header__content__links}>
              <PagesLinks className={styles.header__content__links__pages}/>
            </div>
            <a onClick={handleClick} className={styles.header__content__menu}>
              <Image src="/icons/hamburger-black.svg" alt="Menu" height="24" width="24"/>
            </a>
          </div>
        </Block>
      </Column>
    </header>
  );

  function handleClick() {
    props.setShowSideMenu(true);
  }

}
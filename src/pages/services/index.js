import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import PhasesSvg from '@/assets/phases.svg';
import PhasesMobileSvg from '@/assets/phases--mobile.svg';
import Banner from '@/components/banner.js';
import styles from "./index.module.scss";
import { Block, Column, Page } from "@lkmx/flare-react";
import getLang from '@/lang';
import siteMetadata from "../../meta/siteMetadata"
import HeadSeo from "../../components/HeadSeo"
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {

  const { locale } = useRouter();
  const $t = getLang(locale);

  return (
    <BaseLayout>
      <HeadSeo
        title={$t.services.title + ' - ' + siteMetadata.companyName}
        description={$t.services.ogDescription}
        ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
        ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
      />

      <Page className={styles.page}>

        <Column number={2} numberS={1} className={styles.page__services} weight="right" weightS="Normal" modeXl="normal" modeL="full" modeM="full">
          <Block>
            <div className={styles.page__services__content}>
              <h2>{$t.services.title}</h2>
              <p>{$t.services.hero[0]} <strong>{$t.services.hero[1]}</strong> {$t.services.hero[2]} <strong>{$t.services.hero[3]}</strong>, {$t.services.hero[4]}.</p>
            </div>
          </Block>
          <Block className={styles.page__services__dragon}>
            <div className={styles.page__services__dragon__content}>
            <div className={styles.page__services__dragon__content__elipseContainer}>
              <Image fill priority src="/dragonServices.svg" alt="ellipse" className={styles.page__services__dragon__content__elipseContainer__elipse}/>
            </div>
            </div>
          </Block>
        </Column>

        <Banner>
          <div className={styles.page__about}>
            <div>
              <p>{$t.services.banner[0]}</p>
              <div>
                <h3>{$t.services.banner[1]},</h3>
                <p>
                  {$t.services.banner[2]}.
                </p>
              </div>
            </div>
            <p>{$t.services.banner[3]}.</p>
          </div>
        </Banner>

        <Column mode="full" className={styles['page__phases-links']}>
          <Block>
            <div>
              <div className={styles.page__phases}>
                <div className={styles.page__phases__discovery}>
                  <Link href="/services/discovery" legacyBehavior>
                    <Image
                    fill
                    src="/phases/discovery_default.svg"
                    alt="discovery"
                    />
                  </Link>
                </div>
                <div className={styles.page__phases__agileDev}>
                  <Link href="/services/agileDevelopment" legacyBehavior>
                    <Image
                    fill
                    src="/phases/agile-dev_default.svg"
                    alt="discovery"
                    />
                  </Link>                  
                </div>
                <div className={styles.page__phases__agileMain}>
                  <Link href="/services/agileMaintenance" legacyBehavior>
                    <Image
                    fill
                    src="/phases/agile-maintenance_default.svg"
                    alt="discovery"
                    />
                  </Link>                  
                </div>
                <div className={styles.page__phases__scopeDev}>
                  <Link href="/services/agileMaintenance" legacyBehavior>
                    <Image
                    fill
                    src="/phases/scope-dev_default.svg"
                    alt="discovery"
                    />
                  </Link>                  
                </div>
                <div className={styles.page__phases__contSup}>
                  <Link href="/services/agileMaintenance" legacyBehavior>
                    <Image
                    fill
                    src="/phases/cont-support_default.svg"
                    alt="discovery"
                    />
                  </Link>                  
                </div>
              </div>              
              {/* <PhasesSvg className={styles['page__phases-links__svg-desktop']}/>
              <PhasesMobileSvg className={styles['page__phases-links__svg-mobile']}/> */}
              <div className={styles['page__phases-links__arrow']}>
                <div></div>
              </div>
            </div>
          </Block>
        </Column>

        <Column numberS={1} modeL="normal" modeS="full" className={styles.page__phases}>
          <Block className={styles.page__phases__block}>
            <div className={styles.page__phases__content}>
              <div>
                <h4>DISCOVERY</h4>
                <p>{$t.services.phases[0]}</p>
                <Link href="/services/discovery" legacyBehavior>
                  <div className={styles.page__iconContainer}>
                    <Image fill src="/icons/arrow-right--pink.svg" alt="arrow"/>
                  </div>                  
                </Link> 
              </div>
              <div>
                <h4>AGILE<br/>DEVELOPMENT</h4>
                <p>{$t.services.phases[1]}</p>
                <Link href="/services/agileDevelopment" legacyBehavior>
                  <div className={styles.page__iconContainer}>
                    <Image fill src="/icons/arrow-right--pink.svg" alt="arrow"/>
                  </div>  
                </Link>
                
              </div>
              <div>
                <h4>AGILE MAINTENANCE, SCOPE DEV. & CONTINUOUS SUPPORT</h4>
                <p>{$t.services.phases[2]}</p>
                <Link href="/services/agileMaintenance" legacyBehavior>
                  <div className={styles.page__iconContainer}>
                    <Image fill src="/icons/arrow-right--pink.svg" alt="arrow"/>
                  </div>    
                </Link> 
              </div>
            </div>
          </Block>
        </Column>

      </Page>
    </BaseLayout>
  );
}
.page_desktopOnly__7wcFY {
    display: block!important
}

.page_mobileOnly__ZGVF9 {
    display: none!important
}

.page_heroImageMobile__JLqGS,.page_mobileHeroBackground__7hEjd {
    display: none
}

.page_headerRight__M86vK {
    top: 30px;
    right: 30px;
    z-index: 1001;
    gap: 20px;
    width: auto;
    opacity: 1;
    pointer-events: auto
}

.page_fieldGuide__ZFotC {
    font-size: 18px;
    text-transform: uppercase;
    background: radial-gradient(149.16% 203.55% at 149.16% 147.06%,#d349ae 0,#13d9e8 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent
}

.page_fieldGuideButton__lp1Jf,.page_fieldGuide__ZFotC {
    font-family: DM Sans,sans-serif;
    line-height: 140%;
    letter-spacing: .1em
}

.page_fieldGuideButton__lp1Jf {
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 8px 12px;
    transition: all .3s ease;
    white-space: nowrap
}

.page_fieldGuideButton__lp1Jf:hover {
    opacity: .8
}

.page_fieldGuideButtonActive__Kqx68 {
    background: hsla(0,0%,100%,.1);
    border-radius: 4px
}

.page_menuButton__3y3__ span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff
}

.page_heroBackgroundSvg__kPq7N {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100vw;
    min-height: 80vh;
    object-fit: cover;
    margin: 0
}

.page_scrollIndicator__OEoWZ {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 15px;
    color: hsla(0,0%,100%,.9);
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 500;
    display: none
}

.page_scrollDot__E2Yil {
    width: 24px;
    height: 36px;
    border: 1.5px solid hsla(0,0%,100%,.3);
    border-radius: 20px;
    position: relative;
    background: hsla(0,0%,100%,.1)
}

.page_scrollDot__E2Yil:before {
    content: "";
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: #3dd9c4;
    border-radius: 50%;
    animation: page_scrollAnim__By84t 2s infinite
}

@keyframes page_scrollAnim__By84t {
    0% {
        top: 6px;
        opacity: 1
    }

    to {
        top: 20px;
        opacity: 0
    }
}

@media (max-width: 1400px) {
    .page_heroBackgroundSvg__kPq7N {
        width:100vw;
        bottom: 5vh
    }
}

@media (max-width: 1024px) {
    .page_heroBackgroundSvg__kPq7N {
        width:100vw;
        bottom: 10vh;
        opacity: .4
    }
}

@media (max-width: 768px) {
    .page_heroBackgroundSvg__kPq7N {
        display:none!important;
        visibility: hidden!important;
        opacity: 0!important
    }
}

.page_emphasis__AYb5a {
    color: #5dd9c4
}

.page_startButton__monj7 {
    display: inline-block;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer
}

.page_startButton__monj7:hover {
    background: transparent
}

.page_startButton__monj7:before {
    display: none
}

.page_startButtonImage__liZIg {
    height: 56px;
    width: auto;
    display: block
}

.page_buttonDiamond__AqND_ {
    width: 14px;
    height: 14px;
    object-fit: contain;
    flex-shrink: 0
}

@media (max-width: 768px) {
    .page_heroContent__dzLob {
        flex-direction:column;
        padding: 20px 24px;
        align-items: flex-start;
        text-align: left!important;
        gap: 0
    }

    .page_heroLeft__HzzSB {
        width: 100%;
        margin-bottom: 15px;
        order: 1
    }

    .page_scrollIndicator__OEoWZ {
        display: none
    }

    .page_heroImageMobile__JLqGS {
        display: block;
        width: 250%;
        height: auto;
        order: 2;
        object-fit: contain;
        z-index: 5;
        right: -79%;
        position: absolute;
        margin: 20px 0 10px;
        transform: translateY(10vh)
    }

    .page_heroBackgroundSvg__kPq7N {
        display: none!important;
        visibility: hidden!important;
        opacity: 0!important
    }

    .page_dotsPattern__PKcCq {
        display: none
    }

    .page_heroRight__IMnLr {
        width: 100%!important;
        max-width: 100%!important;
        margin-top: 45px!important;
        padding-left: 0!important;
        order: 3;
        text-align: left!important;
        display: flex;
        flex-direction: column;
        align-items: flex-start!important;
        transform: translateY(50vh);
        margin-bottom: 100px
    }

    .page_mobileHeroBackground__7hEjd {
        display: block!important;
        position: relative;
        width: 150%;
        height: auto;
        order: 4;
        z-index: 5;
        right: 5vh;
        margin: -10vh 0 0
    }

    .page_heroTitle__ixXIp,.page_titleLine1__0uSRS,.page_titleLine2__ElzGf {
        font-size: 11vw!important;
        text-align: left!important;
        line-height: .95;
        width: 100%;
        display: block;
        margin-left: 0!important;
        transform: translateX(-5%)
    }

    .page_heroSubtitle__ZW2Yq {
        font-size: 22px;
        line-height: 1.3
    }

    .page_heroDescription__BOlMS,.page_heroSubtitle__ZW2Yq {
        text-align: left!important;
        margin-bottom: 16px;
        width: 100%
    }

    .page_heroDescription__BOlMS {
        font-size: 15px;
        line-height: 1.6
    }

    .page_startButton__monj7 {
        width: auto;
        min-width: auto;
        background: transparent;
        border: none;
        border-radius: 0;
        padding: 0;
        margin-top: 10px;
        margin-bottom: 20px;
        align-self: flex-start!important
    }

    .page_startButtonImage__liZIg {
        height: 48px;
        width: auto
    }
}

.page_heroBottom__zK1CZ {
    margin: -140px auto 0
}

.page_highlight__Jnelb {
    background: radial-gradient(circle,#0fb8c5 0,#93cd4d 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent
}

.page_selectChapter__kJdAp {
    color: hsla(0,0%,100%,.5)
}

.page_chaptersSection__mBUxA {
    padding-bottom: 300px
}

.page_chaptersSectionSticky__xYSih {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    overflow: visible;
    animation: page_slideUpAndFix__GzP72 .5s ease-out forwards
}

@keyframes page_slideUpAndFix__GzP72 {
    0% {
        transform: translateY(40%)
    }

    to {
        transform: translateY(0)
    }
}

.page_chapterContainer___EjN_ {
    height: auto;
    min-height: 100vh;
    will-change: opacity;
    transition: opacity .5s ease,visibility .5s ease
}

.page_chapterActive__kgD9I {
    position: relative
}

.page_chapterFuture__H0Uus,.page_chapterPast__XqqZ7 {
    opacity: 0;
    visibility: hidden;
    display: none!important
}

.page_chapterPanel__GYZFg {
    box-shadow: 0 -20px 60px rgba(0,0,0,.4),0 -5px 20px rgba(0,0,0,.2)
}

.page_chapterContentSticky__Cc8B5 {
    height: auto;
    overflow-y: auto
}

.page_barSection__AcqfL {
    position: absolute;
    top: 0
}

.page_tabSection__l25Rb {
    height: 50px;
    flex-shrink: 0
}

.page_tabContainer__hqncc,.page_tabSection__l25Rb {
    width: 100%;
    position: relative;
    background: transparent
}

.page_tabContainer__hqncc {
    height: 100%
}

.page_horizontalBar__ZJ7d_ {
    position: absolute;
    top: 0;
    height: 60px;
    background: transparent;
    border: none;
    z-index: 0
}

.page_chapterTab__f0RSE {
    position: absolute;
    top: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: opacity .2s ease;
    z-index: 100;
    pointer-events: auto
}

.page_chapterTab__f0RSE:hover {
    opacity: .9
}

.page_tabImage___JNbZ {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1
}

.page_tabText__ffI2U {
    position: relative;
    z-index: 2;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    white-space: nowrap
}

.page_contentSection__c0mv3::-webkit-scrollbar {
    display: none
}

.page_chapterPanel__GYZFg.page_active__9fwfh {
    box-shadow: 0 -20px 80px rgba(0,0,0,.4)
}

.page_scrollContainer__l9YKN {
    padding: 30px 60px 200px
}

.page_footerSection__NPFDG {
    padding: 60px 80px 200px
}

.page_footerDescription__cgrV5 {
    text-wrap: balance
}

.page_heroBottom__zK1CZ {
    margin: 100px auto 0
}

.page_chapterSelectionWrapper__VcdnF {
    margin-top: 60px
}

.page_gridColumn__NC9R3 {
    cursor: pointer
}

.page_bonusDiamond__ubeu4 {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg,#ff8da1,#e91e8c);
    transform: rotate(45deg);
    margin-bottom: 30px;
    position: relative
}

.page_bonusDiamond__ubeu4:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 20px;
    height: 20px;
    background: #12363b;
    border-radius: 2px
}

.page_bonusLabel__oqeoN {
    color: #4dd4d4
}

.page_bonusTitle__r9iqz {
    font-size: 48px;
    color: #4dd4d4
}

.page_bonusTitleHighlight__M9Bsm {
    color: #fff
}

.page_bonusDot__UbShU {
    width: 12px;
    height: 12px;
    background: #b8e986;
    border-radius: 50%;
    flex-shrink: 0
}

.page_bonusCard__hDZ0u {
    display: flex;
    align-items: center;
    justify-content: center
}

.page_bonusCardImage__JvmAM {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 500px;
    object-fit: contain;
    filter: drop-shadow(0 20px 60px rgba(0,0,0,.3));
    z-index: 10
}

.page_bonusDotsPattern__bfKXk {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center
}

.page_bonusDotsImage__6nLaL {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: .8
}

.page_pageWrapper__KGwsZ {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    background: #12363b
}

.page_pageWrapper__KGwsZ::-webkit-scrollbar {
    display: none
}

.page_heroSection__OcWIo {
    width: 100%;
    min-height: 100vh;
    background: #12363b;
    position: relative;
    padding: 0;
    z-index: 1
}

.page_heroHeader__slR6C {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    position: relative;
    z-index: 10
}

.page_logoArea___LnCn {
    display: flex;
    align-items: center;
    gap: 10px
}

.page_logoIcon__FOO5m {
    font-size: 24px
}

.page_logoText__M1jdM {
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
    line-height: 1.2
}

.page_headerRight__M86vK {
    position: fixed;
    right: 40px;
    top: 4%;
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 14px;
    backdrop-filter: blur(54px);
    -webkit-backdrop-filter: blur(54px);
    border-radius: 14px
}

.page_fieldGuideWrapper__W2SZC {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border-radius: 999px
}

.page_fieldGuide__ZFotC {
    font-size: 11px;
    font-weight: 600;
    color: #38f1ff;
    letter-spacing: 1px
}

.page_diamond__uDuBN {
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background: radial-gradient(149.16% 203.55% at 149.16% 147.06%,#d349ae 0,#13d9e8 100%)
}

.page_menuDots__0DUQr {
    font-size: 20px;
    color: #fff;
    cursor: pointer
}

.page_heroContent__dzLob {
    display: flex;
    justify-content: space-between;
    padding: 40px 60px;
    position: relative;
    z-index: 5
}

.page_heroLeft__HzzSB {
    flex: 1 1;
    position: relative;
    z-index: 10
}

.page_heroTitle__ixXIp {
    margin: 0
}

.page_titleLine1__0uSRS {
    color: #fff
}

.page_titleLine1__0uSRS,.page_titleLine2__ElzGf {
    display: block;
    font-family: Zalando Sans Expanded,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 80px;
    line-height: 94%;
    letter-spacing: 0
}

.page_titleLine2__ElzGf {
    background: radial-gradient(circle,#0fb8c5 0,#93cd4d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    padding-bottom: 20px
}

.page_heroBackgroundSvg__kPq7N {
    position: relative;
    display: block;
    width: 100%;
    max-width: 100vw;
    height: auto;
    margin: -70vh auto -225;
    z-index: 1;
    pointer-events: none;
    opacity: 1;
    transition: all .3s ease
}

@media (max-width: 1400px) {
    .page_heroBackgroundSvg__kPq7N {
        width:900px
    }
}

@media (max-width: 1024px) {
    .page_heroBackgroundSvg__kPq7N {
        width:700px;
        top: 87%;
        opacity: .6
    }
}

@media (max-width: 768px) {
    .page_heroBackgroundSvg__kPq7N {
        width:100%;
        top: 25%;
        transform: translate(-50%);
        opacity: .2
    }
}

.page_heroRight__IMnLr {
    max-width: 380px;
    padding-top: 80px;
    position: relative;
    z-index: 10
}

.page_heroSubtitle__ZW2Yq {
    font-family: DM Sans,sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 28px;
    line-height: 110%;
    letter-spacing: -.03em;
    color: #fff;
    margin-bottom: 20px
}

.page_heroDescription__BOlMS {
    font-family: DM Sans,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -.02em;
    color: hsla(0,0%,100%,.8);
    margin-bottom: 30px;
    text-align: left
}

.page_heroDescription__BOlMS em {
    color: #38f1ff;
    font-style: italic;
    font-weight: inherit
}

.page_emphasis__AYb5a {
    color: #3af1ff;
    font-weight: 600
}

.page_buttonArrow__dNJqj {
    background: #3dd9c4;
    color: #0d2b2e;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px
}

.page_heroBottom__zK1CZ {
    padding-bottom: 0;
    z-index: 5
}

.page_cultivationLabel__mEig_ {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 30px
}

.page_heroBottomTitle__RN_jk {
    font-size: 36px;
    font-weight: 400;
    line-height: 1.4
}

.page_highlight__Jnelb {
    color: #a8e583
}

.page_heroBottomDesc__HEhHv {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 40px
}

.page_selectChapter__kJdAp {
    font-size: 13px;
    color: #93cd4d
}

.page_chaptersSection__mBUxA {
    min-height: 130vh;
    position: -webkit-sticky;
    position: sticky;
    z-index: 50
}

.page_chapterContainer___EjN_ {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: transform;
    transition: transform .8s cubic-bezier(.4,0,.2,1)
}

.page_chapterActive__kgD9I {
    opacity: 1;
    visibility: visible
}

.page_chapterFuture__H0Uus,.page_chapterPast__XqqZ7 {
    pointer-events: none;
    opacity: 1;
    visibility: visible
}

.page_chapterPanel__GYZFg {
    border-radius: 24px 24px 0 0;
    position: relative;
    overflow: visible;
    box-shadow: none;
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.page_chapterContentSticky__Cc8B5 {
    width: 100%;
    height: 100%;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: visible;
    scrollbar-width: none;
    -ms-overflow-style: none
}

.page_chapterContentSticky__Cc8B5::-webkit-scrollbar {
    display: none
}

.page_chaptersWrapper__7kGSi,.page_container__jZF7q {
    position: relative;
    width: 100%
}

.page_container__jZF7q {
    height: 100vh;
    overflow: hidden;
    background: #4a4a4a
}

.page_topBar__ZVnu0 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    z-index: 2000;
    background: transparent;
    pointer-events: none;
    opacity: .85;
    display: flex
}

.page_topBar__ZVnu0>* {
    pointer-events: auto
}

.page_chaptersSection__mBUxA {
    height: 100vh;
    overflow: hidden
}

.page_bottomBar__CXnyx {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    z-index: 2000;
    background: #4a4a4a
}

.page_barSection__AcqfL {
    width: 25%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: opacity .2s ease
}

.page_barSection__AcqfL:hover {
    opacity: .8
}

.page_barImage__LkA33 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none
}

.page_barText__Au2k7 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 14px;
    font-weight: 600;
    color: #000;
    z-index: 10;
    white-space: nowrap;
    pointer-events: none;
    text-align: center
}

.page_barLabel__ziJVP {
    font-size: 14px;
    font-weight: 600;
    color: #fff
}

.page_chapterPanel__GYZFg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column
}

.page_contentSection__c0mv3 {
    flex: 1 1;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    border: 3px solid rgba(0,0,0,.3);
    box-sizing: border-box;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none
}

.page_chapterPanel__GYZFg.page_active__9fwfh {
    box-shadow: none
}

.page_chapterPanel__GYZFg.page_past__sqLd4 {
    filter: brightness(.7);
    pointer-events: none
}

.page_chapterPanel__GYZFg.page_future__3K2B1 {
    cursor: pointer
}

.page_chapterPanel__GYZFg.page_future__3K2B1:hover {
    transform: translateY(calc(100% - 80px))!important
}

.page_topLeftTab__rMGL7 {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    padding: 12px 30px;
    border-radius: 0;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    z-index: 20;
    box-shadow: none
}

.page_headerTabWrapper__n3Eh3 {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 65px;
    z-index: 15;
    cursor: pointer;
    transition: all .3s ease
}

.page_headerTabImage__iRpPE {
    width: auto;
    height: 65px;
    display: block;
    object-fit: contain
}

.page_headerTabText__jIeYL {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    font-size: 13px;
    font-weight: 600;
    color: #1a4d3a;
    letter-spacing: .5px;
    z-index: 2;
    white-space: nowrap
}

.page_headerTabWrapper__n3Eh3:hover {
    filter: brightness(1.05)
}

.page_chapterContent__k6sdt {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity .4s ease .2s;
    overflow: hidden
}

.page_chapterContent__k6sdt.page_visible__jPm2_ {
    opacity: 1;
    pointer-events: auto
}

.page_scrollContainer__l9YKN {
    min-width: 100%;
    height: 100%;
    overflow: visible;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 60px;
    align-items: center;
    scrollbar-width: none;
    -ms-overflow-style: none
}

.page_scrollContainer__l9YKN::-webkit-scrollbar {
    display: none
}

.page_chapterHeader__BXvS8 {
    min-width: 600px;
    flex-shrink: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    top: 120px
}

.page_chapterLabel__Gmb7F {
    font-size: 11px;
    letter-spacing: 2px;
    color: rgba(26,77,58,.7);
    margin-bottom: 12px
}

.page_chapterTitle__w8RTl {
    font-size: 48px;
    font-weight: 700;
    color: #1a4d3a;
    margin-bottom: 18px;
    line-height: 1.1;
    letter-spacing: -1px
}

.page_chapterDescription__ITAId {
    font-size: 14px;
    line-height: 1.6;
    color: #2d5f4e;
    font-weight: 400
}

.page_contentArea__S2Tzm {
    display: flex;
    gap: 60px;
    align-items: center;
    position: relative;
    padding: 0 40px;
    min-width: -moz-fit-content;
    min-width: fit-content;
    height: 100%
}

.page_leftColumn__gOFov {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 0 0 320px;
    min-width: 320px;
    align-self: center
}

.page_flowchartItem__XlXBl {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    position: relative
}

.page_diamondShape__YJSGv {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg,#e91e8c,#ff6b9d);
    transform: rotate(45deg);
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(233,30,140,.3)
}

.page_connectLine__8r7QY {
    position: absolute;
    left: 19px;
    top: 40px;
    width: 3px;
    height: 70px;
    background: linear-gradient(180deg,#e91e8c,#f4d03f)
}

.page_flowText__Senk_ {
    font-size: 15px;
    line-height: 1.5;
    color: #1a4d3a;
    font-weight: 500;
    padding-top: 5px
}

.page_didYouKnowCard__htxrL {
    background: rgba(77,166,190,.85);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 25px 30px;
    margin-top: 20px;
    box-shadow: 0 8px 32px rgba(0,0,0,.15)
}

.page_smallLabel__Vtben {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: hsla(0,0%,100%,.8);
    margin-bottom: 10px
}

.page_cardHeading__Fv_3b {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px
}

.page_cardDescription__N4ojo {
    font-size: 13px;
    line-height: 1.5;
    color: hsla(0,0%,100%,.95)
}

.page_rightColumn__1r0p7 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 0 0 380px;
    min-width: 380px;
    align-self: center
}

.page_lightbulbSection__yC27n {
    display: flex;
    gap: 20px;
    align-items: flex-start
}

.page_lightbulbIcon__tK_ms {
    font-size: 45px;
    flex-shrink: 0;
    filter: drop-shadow(0 4px 8px rgba(255,193,7,.4))
}

.page_lightbulbText__d1mXk {
    font-size: 15px;
    line-height: 1.6;
    color: #1a4d3a;
    font-weight: 500;
    padding-top: 8px
}

.page_statsBox__tU6m5 {
    background: rgba(77,166,170,.8);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 25px 30px;
    box-shadow: 0 8px 32px rgba(0,0,0,.15)
}

.page_emojiRow___Mp0k {
    font-size: 22px;
    margin-bottom: 12px;
    letter-spacing: 4px
}

.page_statsHeading__nNbIT {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px
}

.page_statsDescription__F5A7l {
    font-size: 13px;
    line-height: 1.5;
    color: hsla(0,0%,100%,.95)
}

.page_verticalLine__urEUM {
    width: 3px;
    height: 350px;
    background: linear-gradient(180deg,rgba(255,215,0,.6),rgba(255,215,0,.3));
    flex-shrink: 0;
    align-self: center
}

.page_additionalContent__zUCgp {
    min-width: 250px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0 20px
}

.page_additionalText__v7C_0 {
    font-size: 16px;
    line-height: 1.6;
    color: #1a4d3a;
    font-weight: 600
}

.page_optionCard__ucJOv {
    min-width: 280px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 40px
}

.page_optionBadge__nNtV_ {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    color: hsla(0,0%,100%,.9);
    padding: 8px 20px;
    background: hsla(0,0%,100%,.15);
    border-radius: 20px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px)
}

.page_optionText__bUW7r {
    font-size: 18px;
    line-height: 1.6;
    color: #fff;
    font-weight: 400;
    text-align: center
}

.page_scenarioCard__zs_7y {
    min-width: 380px;
    max-width: 380px;
    flex-shrink: 0;
    background: rgba(20,60,60,.85);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 10px 40px rgba(0,0,0,.3)
}

.page_scenarioLabel__6HFtY {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    color: hsla(0,0%,100%,.7);
    margin-bottom: 20px;
    text-align: center
}

.page_scenarioText__xWaKY {
    font-size: 16px;
    line-height: 1.7;
    color: #fff;
    font-weight: 400;
    text-align: center;
    margin-bottom: 40px
}

.page_scenarioDecoration__Y_iMO {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px
}

.page_decorativeSemicircle__13Frh {
    width: 140px;
    height: 70px;
    background: linear-gradient(180deg,#20a8a8,#1a8888);
    border-radius: 140px 140px 0 0
}

.page_decorativeDiamond__n8LaK {
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg,#e91e8c,#ff6b9d);
    transform: rotate(45deg);
    box-shadow: 0 4px 15px rgba(233,30,140,.4)
}

.page_decorativeCircles__jPsSw {
    display: flex;
    gap: 15px;
    margin-bottom: 10px
}

.page_decorativeCircle__C4CLJ {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg,#20a8a8,#1a8888);
    border-radius: 50%
}

.page_decorativeCirclesGrid__gRepd {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
    gap: 10px;
    margin-bottom: 10px
}

.page_decorativeCirclesGrid__gRepd .page_decorativeCircle__C4CLJ {
    width: 50px;
    height: 50px
}

.page_nextButton__SXkJM {
    position: fixed;
    bottom: 80px;
    right: 80px;
    background: linear-gradient(135deg,#1a4d3a,#2d6b50);
    border: none;
    border-radius: 50px;
    padding: 18px 40px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all .3s ease;
    box-shadow: 0 8px 30px rgba(26,77,58,.4);
    z-index: 50
}

.page_nextButton__SXkJM:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 15px 40px rgba(26,77,58,.5)
}

.page_arrow___4ZtK {
    font-size: 20px;
    font-weight: 700;
    transition: transform .3s ease
}

.page_nextButton__SXkJM:hover .page_arrow___4ZtK {
    transform: translateX(6px)
}

.page_bottomTabs__6FolZ {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 60px;
    z-index: 30
}

.page_bottomTab__SKGH8 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(26,77,58,.7);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    font-weight: 600;
    color: hsla(0,0%,100%,.8);
    border-right: 1px solid hsla(0,0%,100%,.1)
}

.page_bottomTab__SKGH8:last-child {
    border-right: none
}

.page_bottomTab__SKGH8:hover {
    background: rgba(26,77,58,.85);
    color: #fff
}

.page_bottomTabActive__yQt_V {
    background: rgba(26,77,58,.9);
    color: #fff;
    box-shadow: inset 0 3px 0 rgba(30,181,154,.8)
}

@media (max-width: 768px) {
    .page_chapterTab__f0RSE {
        width:200px;
        height: 45px
    }

    .page_tabTitle__ZdUQ2 {
        font-size: 12px
    }

    .page_chapterTitle__w8RTl {
        font-size: 32px
    }

    .page_scrollContent__Pd6Tj {
        padding: 20px 25px;
        gap: 25px
    }
}

.page_footerSection__NPFDG {
    background: linear-gradient(180deg,#0a2233,#071a28);
    padding: 60px 80px 40px;
    z-index: 100
}

.page_footerContent__aXrXd {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    margin-bottom: 60px
}

.page_footerLeft__4jJlx {
    flex: 0 0 280px
}

.page_footerLogo__LcRrq {
    gap: 10px
}

.page_footerLogoText__7nE6X {
    font-size: 18px;
    color: #3dd9c4;
    line-height: 1.1;
    letter-spacing: 2px
}

.page_footerLogoSubtext__HPM5v {
    font-size: 10px;
    font-weight: 500;
    color: #3dd9c4;
    letter-spacing: 3px;
    margin-left: 45px;
    margin-bottom: 20px
}

.page_footerDescription__cgrV5 {
    font-size: 13px;
    color: hsla(0,0%,100%,.7);
    margin-bottom: 30px
}

.page_footerMap__lBE5x {
    width: 150px;
    opacity: .3
}

.page_mapIcon__Ly22T {
    font-size: 60px;
    opacity: .5
}

.page_footerLocation__XM66_ {
    font-size: 12px;
    color: hsla(0,0%,100%,.6);
    display: flex;
    align-items: center;
    gap: 8px
}

.page_footerLocation__XM66_:before {
    content: "📍";
    font-size: 14px
}

.page_footerMiddle__FA8Dq {
    flex: 0 0 250px
}

.page_footerNav__vNHk8 {
    margin-bottom: 30px
}

.page_footerNavLink__ALVdM {
    color: #fff
}

.page_footerNavLink__ALVdM:hover {
    color: #3dd9c4
}

.page_footerSectionTitle__fbomS {
    font-weight: 600;
    color: #3dd9c4;
    margin-bottom: 15px
}

.page_footerLink__ntXAe {
    font-size: 13px;
    color: hsla(0,0%,100%,.9);
    margin-bottom: 10px
}

.page_footerLink__ntXAe:hover {
    color: #3dd9c4
}

.page_footerSubLink__a66MP {
    font-size: 12px;
    margin-bottom: 8px;
    margin-left: 15px
}

.page_footerSubLink__a66MP:hover {
    color: #3dd9c4
}

.page_footerRight__A7LMy {
    flex: 0 0 300px
}

.page_footerContact__U3y_8 {
    margin-bottom: 30px
}

.page_footerEmail__yQTj9 {
    font-size: 13px;
    color: hsla(0,0%,100%,.9)
}

.page_footerAddress__Czk92 {
    margin-bottom: 20px
}

.page_footerAddressText__j5KxJ {
    font-size: 13px;
    line-height: 1.5;
    color: hsla(0,0%,100%,.9)
}

.page_getInvolved__tYfOY {
    padding-top: 40px;
    margin-bottom: 60px
}

.page_getInvolvedTitle__BywqC {
    font-weight: 600;
    margin-bottom: 25px
}

.page_getInvolvedForm___Ab9E {
    align-items: center;
    gap: 5px
}

.page_formInput__j2g1R {
    border-bottom: 1px solid hsla(0,0%,100%,.4);
    color: #fff;
    padding: 5px 10px;
    min-width: 120px
}

.page_formInput__j2g1R::placeholder {
    color: hsla(0,0%,100%,.4)
}

.page_formInput__j2g1R:focus {
    border-bottom-color: #3dd9c4
}

.page_getInvolvedText__fLhC6 {
    margin-bottom: 15px
}

.page_getInvolvedEmail__2aGPg {
    align-items: center;
    gap: 5px
}

.page_subscribeButton__vuqjo {
    border: none;
    color: #3dd9c4;
    display: flex;
    padding: 0
}

.page_subscribeButton__vuqjo:hover {
    color: #5be8d5
}

.page_subscribeArrow__m2ahd {
    width: 28px;
    height: 28px;
    background: #3dd9c4;
    display: flex;
    color: #0a2233;
    font-size: 14px;
    transition: transform .3s ease
}

.page_subscribeButton__vuqjo:hover .page_subscribeArrow__m2ahd {
    transform: translateX(5px)
}

.page_footerDots__XI1lC {
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-image: radial-gradient(circle,#38f1ff 3px,transparent 0),radial-gradient(circle,#b8e986 3px,transparent 0),radial-gradient(circle,#3dd9c4 2px,transparent 0);
    background-size: 40px 40px,60px 60px,25px 25px;
    background-position: 0 0,20px 20px,10px 10px;
    opacity: .6
}

.page_heroBottom__zK1CZ {
    width: 100%;
    max-width: 1200px;
    margin: -600px auto 0;
    text-align: center;
    position: relative
}

.page_cultivationLabel__mEig_ {
    font-family: DM Sans,sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 110%;
    letter-spacing: .12em;
    color: #38f1ff;
    text-transform: uppercase;
    margin-bottom: 20px
}

.page_heroBottomTitle__RN_jk {
    font-family: Zalando Sans Expanded,sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 52px;
    line-height: 100%;
    letter-spacing: -.03em;
    color: #fff;
    text-align: center;
    margin-bottom: 30px
}

.page_heroBottomDesc__HEhHv {
    font-family: DM Sans,sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -.02em;
    color: hsla(0,0%,100%,.7);
    max-width: 900px;
    margin: 0 auto 40px
}

.page_chapterSelectionWrapper__VcdnF {
    margin-top: 100px;
    width: 100%
}

.page_heroDividerLine__aMJ82 {
    width: 1px;
    height: 60px;
    border-left: 2px dashed #0fb8c5;
    margin: 0 auto 20px;
    opacity: .6
}

.page_chapterGrid__Zzu4B {
    width: 100vw;
    max-width: none;
    margin: 40px 0 0 calc(50% - 50vw);
    border-radius: 0;
    overflow: hidden;
    padding: 0;
    background-color: #12363b;
    display: flex;
    border: none;
    border-top: 1px solid rgba(80,227,194,.3)
}

.page_gridColumn__NC9R3 {
    flex: 1 1;
    border-right: 1px solid rgba(80,227,194,.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
    cursor: none;
    transition: background .3s ease;
    position: relative
}

.page_gridColumn__NC9R3:last-child {
    border-right: none
}

.page_gridColumn__NC9R3:hover {
    background: hsla(0,0%,100%,.03)
}

.page_gridLabel__wmP1y {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #ff6dde;
    text-transform: uppercase;
    margin-bottom: 20px
}

.page_gridLabel__wmP1y,.page_gridTitle__aeC38 {
    font-family: DM Sans,sans-serif;
    text-align: center
}

.page_gridTitle__aeC38 {
    font-size: 28px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 40px;
    line-height: 1.2
}

.page_gridImage__J02X0 {
    width: 180px;
    height: 180px;
    object-fit: contain;
    transition: transform .3s ease
}

.page_gridColumn__NC9R3:hover .page_gridImage__J02X0 {
    transform: scale(1.05)
}

.page_bonusSection__x1KgI {
    background: #12363b;
    padding: 100px 0;
    position: relative;
    overflow: hidden
}

.page_bonusContent__p8YL_ {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    padding: 0
}

.page_bonusLeft__woqnL {
    flex: 1 1;
    position: relative;
    left: 10%
}

.page_bonusFlowerImage__b7AJX {
    position: absolute;
    top: 35px;
    bottom: auto;
    left: -150px;
    right: auto;
    width: 900px;
    height: 340px
}

.page_bonusFlowerDot__UUo_g {
    position: absolute;
    top: 220px;
    left: -70px;
    width: 20px;
    height: 97px;
    z-index: 2
}

.page_bonusLabel__oqeoN {
    font-family: DM Sans,sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #38f1ff;
    text-transform: uppercase;
    margin-bottom: 20px
}

.page_bonusTitle__r9iqz {
    font-family: Zalando Sans Expanded,sans-serif;
    font-size: 42px;
    font-weight: 300;
    line-height: 1.1;
    color: #fff;
    margin-bottom: 30px
}

.page_bonusTitleHighlight__M9Bsm {
    background: radial-gradient(circle,#0fb8c5 0,#93cd4d 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent
}

.page_bonusText__iVsRq {
    font-family: DM Sans,sans-serif;
    font-size: 15px;
    line-height: 1.6;
    color: hsla(0,0%,100%,.8);
    margin-bottom: 30px
}

.page_bonusCallout__quMMZ {
    display: flex;
    align-items: center;
    gap: 12px
}

.page_bonusCalloutText__XwTYs {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    color: hsla(0,0%,100%,.9);
    font-style: italic
}

.page_bonusRight__rk0CL {
    flex: 1 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center
}

.page_bonusCard__hDZ0u {
    width: 350px;
    height: 450px;
    background: linear-gradient(135deg,#b8e986,#a8d975);
    border-radius: 12px;
    padding: 40px 30px;
    position: relative;
    transform: rotate(-5deg);
    box-shadow: 0 20px 60px rgba(0,0,0,.3)
}

.page_bonusCardInner__rF2x9 {
    position: relative;
    z-index: 2
}

.page_bonusCardTitle__oF2Z3 {
    font-family: Zalando Sans Expanded,sans-serif;
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.2
}

.page_bonusCardText__Sutx_ {
    font-family: DM Sans,sans-serif;
    font-size: 13px;
    line-height: 1.6;
    color: hsla(0,0%,100%,.95)
}

.page_bonusCardPattern__Od31H {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 200px
}

.page_patternCircle__hc_HQ {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    opacity: .9
}

.page_patternTriangle__eM4sU {
    position: absolute;
    top: 40%;
    left: 45%;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 43px solid #ff8da1;
    transform: rotate(30deg)
}

.page_bonusCardDimensions__2vxFO {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: #e91e8c;
    color: #fff;
    font-family: DM Sans,sans-serif;
    font-size: 11px;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 4px
}

.page_bonusDotsPattern__bfKXk {
    position: absolute;
    width: 80%;
    height: 80%;
    top: 200px;
    left: 40%;
    right: 100px;
    pointer-events: none;
    z-index: 1
}

.page_bonusDotCircle__YcQCx {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    opacity: .6
}

.page_gridCardContent__3e5JV {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%
}

.page_gridCardLabel__NHa3T {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #c54897;
    text-transform: uppercase;
    margin-bottom: 15px
}

.page_gridCardTitle__i_2SH {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    margin: 0 0 40px;
    line-height: 1.2
}

.page_gridIconContainer__AdLQ6 {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative
}

.page_iconDiamondLarge__DAScW {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg,teal,#1e5c5c);
    transform: rotate(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(0,0,0,.3)
}

.page_iconCenterSquare__lfVqX {
    width: 25px;
    height: 25px;
    background: linear-gradient(135deg,#ff8da1,#d65db1);
    box-shadow: 0 0 10px rgba(214,93,177,.5)
}

.page_iconCupShape__PkLPN {
    width: 100px;
    height: 50px;
    background: linear-gradient(180deg,#137777,#0d4d4d);
    border-radius: 0 0 50px 50px;
    position: relative;
    margin-top: 25px;
    display: flex;
    justify-content: center
}

.page_iconCupShape__PkLPN:before {
    content: "";
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(0deg,#189898,#20b2b2);
    border-radius: 0 0 50px 50px;
    transform: scaleY(-1);
    opacity: .8
}

.page_iconCenterDiamond__uZ7rH {
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg,#e91e8c,#ff6b9d);
    transform: rotate(45deg);
    position: absolute;
    top: -10px;
    z-index: 10;
    box-shadow: 0 0 10px rgba(233,30,140,.4)
}

.page_iconClover__F9KA_ {
    width: 100px;
    height: 100px;
    position: relative
}

.page_cloverCircle__YXhR2 {
    width: 55px;
    height: 55px;
    background: linear-gradient(135deg,#189898,#0d4d4d);
    border-radius: 50%;
    position: absolute
}

.page_iconCenterDiamondSmall__gcCO_ {
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg,#e91e8c,#ff6b9d);
    transform: rotate(45deg);
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -10px;
    z-index: 10;
    box-shadow: 0 0 10px rgba(233,30,140,.4)
}

.page_iconGridCircles__r2r36 {
    width: 100px;
    height: 100px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 5px;
    gap: 5px;
    position: relative
}

.page_gridDotCircle__smDd3 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(135deg,#189898,#0d4d4d)
}

.page_iconCenterDiamondLarge__ncyv5 {
    width: 25px;
    height: 25px;
    background: linear-gradient(135deg,#ff8da1,#d65db1);
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -12.5px;
    margin-left: -12.5px;
    z-index: 10;
    box-shadow: 0 0 15px rgba(214,93,177,.6)
}

.page_topNavigation__vAuxs {
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 100;
    display: flex;
    align-items: center
}

.page_navLeft__keKOX {
    display: flex;
    align-items: center;
    background: rgba(26,77,58,.4);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    border: 1px solid hsla(0,0%,100%,.1)
}

.page_navButton__G_SkT {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background .3s ease,color .3s ease;
    color: #fff;
    gap: 8px
}

.page_navButton__G_SkT:hover {
    background: #0a1731!important
}

.page_navArrowIcon__DB7FT {
    width: 10px;
    height: 13px;
    margin-left: 4px;
    flex-shrink: 0;
    stroke: #fff;
    transition: stroke .3s ease
}

.page_navButton__G_SkT:hover .page_navArrowIcon__DB7FT,.page_navButton__G_SkT:hover .page_navArrowIcon__DB7FT path {
    stroke: url(#navArrowGradient)!important
}

.page_navText__pWhGK {
    font-family: DM Sans,sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: -.02em;
    color: #fff;
    text-transform: none
}

.page_navDivider__LC_MW {
    color: hsla(0,0%,100%,.2);
    margin: 0 4px;
    font-size: 14px;
    pointer-events: none
}

.page_chaptersSection__mBUxA {
    position: relative;
    top: 0;
    width: 100%;
    height: auto;
    min-height: 100vh;
    overflow: visible;
    padding-bottom: 250px
}

.page_chapter1Wrapper__i0k6M {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
    position: relative;
    box-sizing: border-box;
    justify-content: flex-start;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none
}

.page_chapter1Wrapper__i0k6M::-webkit-scrollbar {
    display: none
}

.page_chapter1Header__FU6nJ {
    width: 996px;
    text-align: center;
    margin-bottom: 30px;
    position: relative;
    z-index: 10;
    padding: 0 10px;
    top: 120px
}

.page_ch1Label__2pmx8 {
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin-bottom: 16px;
    opacity: .6
}

.page_ch1Label__2pmx8,.page_ch1Title__yqgDv {
    font-family: DM Sans,sans-serif;
    color: #1a4d3a;
    text-align: center
}

.page_ch1Title__yqgDv {
    font-size: 28px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -.03em;
    margin-bottom: 125px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto
}

.page_ch1Instruction__m_pAN {
    font-family: DM Sans,sans-serif;
    font-size: 16px;
    width: 100%;
    max-width: 600px;
    position: relative;
    z-index: 20;
    margin: 0 auto 30px
}

.page_scenarioContainer__PsUEO {
    align-items: flex-start;
    padding-top: 20px;
    top: 120px
}

.page_hoverFlowerLeftMain__NPMmx {
    position: absolute;
    bottom: -180px;
    left: -80px;
    width: 200px;
    height: auto;
    pointer-events: none;
    z-index: 4
}

.page_ch2OptionAWrapper___vQ_x {
    flex: 1 1;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column
}

.page_ch2ScrollContainer__dr5pU {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
    padding: 30px 100px;
    overflow-x: auto;
    overflow-y: hidden;
    min-width: max-content;
    height: 100%;
    min-height: 500px;
    scrollbar-width: none;
    -ms-overflow-style: none
}

.page_ch2ScrollContainer__dr5pU::-webkit-scrollbar {
    display: none
}

.page_ch4OptionAWrapper__HYnzQ {
    flex: 1 1
}

.page_ch4ScrollContainer__5mAk5 {
    gap: 50px;
    padding: 30px 100px;
    min-width: max-content;
    min-height: 500px
}

.page_ch2Column__IDAmW {
    flex-shrink: 0;
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: flex-start;
    position: relative;
    padding-left: 25px
}

.page_ch2Column__IDAmW:first-child:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 100px;
    background: linear-gradient(180deg,gold 0,#cddc39 50%,#8bc34a);
    border-radius: 4px
}

.page_ch2FloatingText__z5MOg {
    font-family: DM Sans,sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #38f1ff;
    letter-spacing: .1em;
    text-transform: uppercase;
    line-height: 140%;
    margin: 0 0 4px
}

.page_ch2FloatingDesc___Neob {
    font-family: DM Sans,sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    line-height: 120%;
    letter-spacing: -.04em;
    margin: 0 0 8px
}

.page_ch2InitialText__dDZne {
    flex-shrink: 0;
    width: 280px;
    padding: 20px 0;
    align-self: flex-start;
    margin-top: 30px
}

.page_ch2InitialText__dDZne p {
    font-family: DM Sans,sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #1a4d3a;
    line-height: 1.5;
    margin: 0
}

.page_ch2TopRow__fjggm {
    display: none
}

.page_ch2Card1__dVr4x {
    flex-shrink: 0;
    width: 260px;
    background: transparent;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px
}

.page_ch2Card1Label__LzRUF {
    font-family: DM Sans,sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    letter-spacing: .1em;
    text-transform: uppercase;
    line-height: 140%
}

.page_ch2StatIcons__R368t {
    display: flex;
    gap: 4px;
    margin-bottom: 4px
}

.page_ch2StatIcon__262r_ {
    width: 16px;
    height: 16px;
    background: hsla(0,0%,100%,.3);
    -webkit-clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
    clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%)
}

.page_ch2StatIcon__262r_.page_active__9fwfh {
    background: #ffb84d
}

.page_ch2Card1Text___Q6yi {
    font-family: DM Sans,sans-serif;
    font-size: 11px;
    font-weight: 400;
    color: hsla(0,0%,100%,.9);
    line-height: 1.4;
    margin: 0
}

.page_ch2Card2__an7xt {
    flex-shrink: 0;
    width: 280px;
    background: transparent;
    border-radius: 12px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 8px
}

.page_ch2Card2Label__Nr3AJ {
    font-family: DM Sans,sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #38f1ff;
    letter-spacing: .1em;
    text-transform: uppercase;
    line-height: 140%
}

.page_ch2Card2Text__h1rEl {
    font-family: DM Sans,sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    line-height: 1.4;
    margin: 0
}

.page_ch2Card3Content__lJCdS {
    gap: 4px
}

.page_ch2Card3Stat__uRl4u {
    font-family: DM Sans,sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -.04em
}

.page_ch2Card3Text__8XRcp {
    font-size: 10px;
    color: hsla(0,0%,100%,.9);
    line-height: 1.4
}

.page_ch2Card3Label__61VLY {
    font-family: DM Sans,sans-serif;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    opacity: .9
}

.page_ch2Card3Content__lJCdS {
    display: flex;
    flex-direction: column;
    gap: 8px
}

.page_ch2Card3Stat__uRl4u {
    font-family: Zalando Sans Expanded,sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    line-height: 1
}

.page_ch2Card3Text__8XRcp {
    font-family: DM Sans,sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #fff;
    line-height: 1.5;
    margin: 0;
    opacity: .95
}

.page_ch2YellowStick__Y7O_J {
    display: none
}

.page_ch2YellowStick__Y7O_J img {
    height: 50px;
    width: auto
}

.page_ch2GreenSection__nZ_ZP {
    flex-shrink: 0;
    width: 260px;
    background: transparent;
    border-radius: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: none;
    align-self: flex-start;
    margin-top: 0
}

.page_ch2GreenTitle__MoF0P {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3
}

.page_ch2GreenText__WPQX8,.page_ch2GreenTitle__MoF0P {
    font-family: DM Sans,sans-serif;
    color: #1a4d3a;
    margin: 0
}

.page_ch2GreenText__WPQX8 {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5
}

.page_ch2ToolkitCard__oeD34 {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 320px;
    align-self: center
}

.page_ch2ToolkitImage__BYq90 {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: rotate(6deg)
}

.page_ch2NextChapterCard__f1j7e {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    align-self: center
}

.page_ch2NextChapterButton___YKiT {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: rgba(26,77,58,.3);
    border: 2px solid #1a4d3a;
    border-radius: 50px;
    color: #1a4d3a;
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s ease;
    white-space: nowrap
}

.page_ch2NextChapterButton___YKiT:hover {
    background: rgba(26,77,58,.5);
    transform: translateX(5px)
}

.page_ch2NextArrow__2Bdok {
    font-size: 16px;
    transition: transform .3s ease
}

.page_ch2NextChapterButton___YKiT:hover .page_ch2NextArrow__2Bdok {
    transform: translateX(4px)
}

.page_optionColumnRight__WF0ee {
    align-items: flex-start;
    text-align: left
}

.page_optionLabel__UIcmx {
    color: #38f1ff
}

.page_centerCard__e153k {
    height: 340px;
    margin-top: -60px;
    align-self: center
}

.page_cardScenarioLabel__Hu5lh {
    font-family: DM Sans,sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    color: hsla(0,0%,100%,.6);
    margin-bottom: 30px;
    text-transform: uppercase
}

.page_cardQuestion__dbbAE {
    font-family: DM Sans,sans-serif;
    font-size: 26px;
    font-weight: 400;
    line-height: 1.3;
    color: #fff;
    text-align: center;
    margin-bottom: auto
}

.page_cardGraphic__Sst_Q {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: flex-end
}

.page_triangleBig__0W5dI {
    width: 0;
    height: 0;
    border-left: 160px solid transparent;
    border-right: 160px solid transparent;
    border-bottom: 110px solid rgba(31,163,163,.6);
    position: absolute;
    bottom: 0
}

.page_triangleSmall__9SxyD {
    width: 0;
    height: 0;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 35px solid #ff6b9d;
    position: relative;
    z-index: 2;
    margin-bottom: 0
}

.page_bottomNavContainer__HtsQd {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none
}

.page_bottomNavContainer__HtsQd>* {
    pointer-events: auto
}

.page_switchChaptersPill__KoOxW {
    background: #152c33;
    color: #fff;
    font-family: DM Sans,sans-serif;
    font-size: 11px;
    font-weight: 600;
    padding: 8px 24px;
    border-radius: 20px;
    margin-bottom: -15px;
    z-index: 10;
    border: 1px solid hsla(0,0%,100%,.15);
    transform: translateY(50%)
}

.page_bottomTabsWrapper__BtVj_ {
    display: flex;
    width: 100%;
    height: 70px;
    background: #1fa3a3
}

.page_bottomTab__SKGH8 {
    flex: 1 1;
    background: #39b5a9;
    border: none;
    font-family: DM Sans,sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #0f353a;
    cursor: pointer;
    transition: all .3s ease;
    position: relative;
    margin-left: -20px;
    padding-left: 30px;
    z-index: 1;
    -webkit-clip-path: polygon(10% 0,100% 0,100% 100%,0 100%);
    clip-path: polygon(10% 0,100% 0,100% 100%,0 100%)
}

.page_bottomTab__SKGH8:first-child {
    margin-left: 0;
    padding-left: 0;
    -webkit-clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
    clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
    background-color: #5ccd95
}

.page_bottomTab__SKGH8:nth-child(2) {
    background-color: #3bbcb3
}

.page_bottomTab__SKGH8:nth-child(3) {
    background-color: #26aeb8
}

.page_bottomTab__SKGH8:nth-child(4) {
    background-color: #2fb0b5
}

.page_bottomTab__SKGH8:nth-child(5) {
    background-color: #31b3bb
}

.page_activeBottomTab__HPb2S {
    background: linear-gradient(90deg,#93cd4d,#0fb8c5)!important;
    background: linear-gradient(90deg,#0fb8c5,#93cd4d)!important;
    z-index: 10;
    font-weight: 700;
    box-shadow: 0 -5px 20px rgba(0,0,0,.1);
    color: #103035
}

.page_footerSection__NPFDG {
    background: #041a1d;
    padding: 80px 60px 40px
}

.page_footerContent__aXrXd {
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 80px;
    gap: 80px;
    margin: 0 auto 80px
}

.page_footerLeft__4jJlx {
    display: flex;
    flex-direction: column;
    gap: 20px
}

.page_footerLogo__LcRrq {
    gap: 12px;
    margin-bottom: 5px
}

.page_footerLogoIcon__R_4rp {
    font-size: 32px
}

.page_footerLogoText__7nE6X {
    font-family: DM Sans,sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1.5px;
    line-height: 1.3
}

.page_footerLogoSubtext__HPM5v {
    font-family: DM Sans,sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    color: hsla(0,0%,100%,.6);
    margin: 0 0 15px
}

.page_footerDescription__cgrV5 {
    font-size: 12px;
    line-height: 1.6;
    color: hsla(0,0%,100%,.8);
    margin: 0 0 30px
}

.page_footerMap__lBE5x {
    width: 120px;
    height: 80px;
    background: hsla(0,0%,100%,.05);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px
}

.page_mapIcon__Ly22T {
    font-size: 40px;
    opacity: .6
}

.page_footerLocation__XM66_ {
    font-family: DM Sans,sans-serif;
    font-size: 13px;
    color: hsla(0,0%,100%,.7);
    margin: 0
}

.page_footerMiddle__FA8Dq {
    display: flex;
    flex-direction: column;
    gap: 40px
}

.page_footerNav__vNHk8 {
    display: flex;
    flex-direction: column;
    gap: 12px
}

.page_footerNavTitle__QVRwn {
    font-family: DM Sans,sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #0fb8c5;
    margin: 0 0 5px
}

.page_footerNavLink__ALVdM {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    color: hsla(0,0%,100%,.8);
    margin: 0;
    cursor: pointer;
    transition: color .3s ease
}

.page_footerNavLink__ALVdM:hover {
    color: #0fb8c5
}

.page_footerResources__N6Ld5 {
    display: flex;
    flex-direction: column;
    gap: 12px
}

.page_footerSectionTitle__fbomS {
    font-family: DM Sans,sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #0fb8c5;
    margin: 0 0 5px
}

.page_footerLink__ntXAe {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    color: hsla(0,0%,100%,.8);
    margin: 0;
    cursor: pointer;
    transition: color .3s ease
}

.page_footerLink__ntXAe:hover {
    color: #0fb8c5
}

.page_footerSubLink__a66MP {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    color: hsla(0,0%,100%,.6);
    margin: 0;
    padding-left: 15px;
    cursor: pointer;
    transition: color .3s ease
}

.page_footerSubLink__a66MP:hover {
    color: #0fb8c5
}

.page_footerRight__A7LMy {
    display: flex;
    flex-direction: column;
    gap: 40px
}

.page_footerContact__U3y_8 {
    display: flex;
    flex-direction: column;
    gap: 12px
}

.page_footerEmail__yQTj9 {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    color: hsla(0,0%,100%,.8);
    margin: 0;
    word-break: break-word
}

.page_footerAddress__Czk92 {
    display: flex;
    flex-direction: column;
    gap: 12px
}

.page_footerAddressText__j5KxJ {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: hsla(0,0%,100%,.8);
    margin: 0
}

.page_getInvolved__tYfOY {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 0;
    border-top: 1px solid hsla(0,0%,100%,.1)
}

.page_getInvolvedTitle__BywqC {
    font-family: DM Sans,sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #38f1ff;
    margin: 0 0 25px
}

.page_getInvolvedForm___Ab9E {
    font-size: 16px;
    color: hsla(0,0%,100%,.9);
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 8px
}

.page_getInvolvedText__fLhC6 {
    margin: 15px 0
}

.page_getInvolvedEmail__2aGPg,.page_getInvolvedText__fLhC6 {
    font-family: DM Sans,sans-serif;
    font-size: 16px;
    color: hsla(0,0%,100%,.9)
}

.page_getInvolvedEmail__2aGPg {
    margin-bottom: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 8px
}

.page_formInput__j2g1R {
    background: transparent;
    border: none;
    border-bottom: 1px solid #0fb8c5;
    color: #0fb8c5;
    font-family: DM Sans,sans-serif;
    font-size: 16px;
    padding: 4px 8px;
    outline: none;
    min-width: 150px;
    transition: border-color .3s ease
}

.page_formInput__j2g1R::placeholder {
    color: #0fb8c5;
    opacity: .8
}

.page_formInput__j2g1R:focus {
    border-bottom-color: #93cd4d
}

.page_subscribeButton__vuqjo {
    background: transparent;
    border: 2px solid hsla(0,0%,100%,.3);
    border-radius: 30px;
    color: #fff;
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 12px 30px;
    cursor: pointer;
    transition: all .3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px
}

.page_subscribeButton__vuqjo:hover {
    background: hsla(0,0%,100%,.05);
    border-color: #0fb8c5
}

.page_subscribeArrow__m2ahd {
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #0fb8c5;
    border-radius: 50%;
    color: #0d4d4d
}

.page_footerDots__XI1lC {
    position: absolute;
    bottom: 20px;
    right: 60px;
    width: 100px;
    height: 100px;
    opacity: .3;
    pointer-events: none
}

@media (max-width: 768px) {
    .page_chaptersSection__mBUxA {
        position:relative;
        width: 100%;
        height: 100vh;
        min-height: 100vh;
        overflow: hidden
    }

    .page_topNavigation__vAuxs {
        display: none
    }

    .page_chapterContainer___EjN_ {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%
    }

    .page_chapterPanel__GYZFg {
        width: 100%;
        height: 100%;
        border-radius: 0
    }

    .page_contentSection__c0mv3 {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        border: none;
        padding-bottom: 70px;
        scroll-behavior: smooth;
        scrollbar-width: none;
        -ms-overflow-style: none
    }

    .page_scrollContainer__l9YKN {
        min-width: unset;
        padding: 16px 16px 0;
        gap: 0;
        box-sizing: border-box
    }

    .page_chapter1Wrapper__i0k6M,.page_scrollContainer__l9YKN {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden
    }

    .page_chapter1Wrapper__i0k6M {
        align-items: center;
        padding-top: 10px;
        padding-bottom: 0
    }

    .page_chapter1Header__FU6nJ {
        width: 100%;
        text-align: left;
        margin-bottom: -100px;
        padding: 0 4px;
        flex-shrink: 0
    }

    .page_ch1Label__2pmx8 {
        font-size: 12px;
        letter-spacing: .08em;
        margin-bottom: 12px;
        text-align: left
    }

    .page_ch1Title__yqgDv {
        font-size: 16px;
        line-height: 135%;
        text-align: left;
        margin-bottom: 10px;
        max-width: 100%
    }

    .page_ch1Title__yqgDv br {
        display: none
    }

    .page_scenarioContainer__PsUEO {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
        max-width: 100%;
        margin-top: 0;
        padding: 0;
        flex: 1 1;
        overflow: hidden
    }

    .page_centerCard__e153k {
        order: 1;
        width: 100%;
        max-width: 240px;
        height: auto;
        aspect-ratio: 280/320;
        margin: 0 auto 12px;
        flex-shrink: 0
    }

    .page_centerCard__e153k img {
        width: 100%;
        height: 100%;
        object-fit: contain
    }

    .page_ch1Instruction__m_pAN {
        order: 2;
        font-size: 11px;
        text-align: center;
        margin: 0 0 8px;
        width: 100%;
        color: #1a4d3a;
        font-style: italic;
        opacity: .7;
        flex-shrink: 0
    }

    .page_optionColumnLeft__nxw4f,.page_optionColumnRight__WF0ee {
        order: 3;
        width: 100%;
        max-width: 100%;
        margin-bottom: 0;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        background: hsla(0,0%,100%,.35);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 10px;
        padding: 8px 12px;
        gap: 2px;
        flex-shrink: 0;
        border: 1px solid hsla(0,0%,100%,.2);
        height: auto;
        max-height: 80px;
        overflow: hidden
    }

    .page_optionColumnRight__WF0ee {
        order: 4;
        align-items: flex-start;
        text-align: left
    }

    .page_optionLabel__UIcmx {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .1em;
        color: #0fb8c5;
        margin-bottom: 4px;
        opacity: 1
    }

    .page_optionDesc__GMLe_ {
        font-size: 15px;
        line-height: 130%;
        letter-spacing: -.02em;
        color: #1a4d3a;
        font-weight: 400
    }

    .page_optionDesc__GMLe_ br {
        display: none
    }

    .page_ch2HoverEmptyBubble2__oEypR,.page_ch2HoverEmptyBubble__9zjj9,.page_ch2HoverFilledBubble2__csrE7,.page_ch2HoverFilledBubble__e6Mzc,.page_ch2HoverFly__MzUUG,.page_ch2HoverImageLeft__b3A9j,.page_ch2HoverImageRight__4rdNB,.page_ch2HoverLamp__QI7_z,.page_ch2RightFlower1__VaXXN,.page_ch2RightFlowerPetal1__gYfKl,.page_ch2RightFlowerPetal2__ZdQ8N,.page_ch2RightFlowerPetal3__YmkUv,.page_ch2RightFly__v_Ex9,.page_ch2RightHalfBottom___ebWR,.page_ch2RightHalfTop__Pdkjm,.page_ch2RightImage__VLOYL,.page_ch2RightStick__ADoor,.page_ch3DiamondBottom__IZf_y,.page_ch3LeftFlower__df4RZ,.page_ch3RightFlower__hcGTN,.page_ch3RightFly__pHd6c,.page_ch3TopSection__qLBJz,.page_hoverFlowerLeftmost__I_7Fk,.page_hoverFlowerMiddle__LbYtm,.page_hoverFlowerRightmost___cTyi,.page_hoverFly__f1TKR,.page_hoverPetal__JtPdU,.page_hoverRightFlowerBottom__SePj4,.page_hoverRightFlowerTop__JoPkW,.page_hoverRightFly__NI02G {
        display: none!important
    }

    .page_optionColumnLeft__nxw4f>div:last-child,.page_optionColumnRight__WF0ee>div:last-child {
        display: none
    }

    .page_chapterContentSticky__Cc8B5 {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden
    }

    .page_chapterSelectionWrapper__VcdnF {
        margin-top: 30px;
        width: 100%;
        padding: 0
    }

    .page_heroDividerLine__aMJ82 {
        height: 40px;
        margin: 0 auto 15px
    }

    .page_selectChapter__kJdAp {
        font-family: DM Sans,sans-serif;
        font-weight: 400;
        font-style: italic;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: -2%;
        text-align: center;
        margin-bottom: 20px
    }

    .page_chapterGrid__Zzu4B {
        width: 100%;
        margin: 20px 0 0;
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;
        padding: 0;
        gap: 0;
        border-top: 1px solid rgba(80,227,194,.3);
        border-bottom: 1px solid rgba(80,227,194,.3);
        background-color: #12363b
    }

    .page_chapterGrid__Zzu4B::-webkit-scrollbar {
        display: none
    }

    .page_gridColumn__NC9R3 {
        flex: 0 0 85%;
        min-width: 280px;
        max-width: 320px;
        scroll-snap-align: center;
        border: none;
        border-right: 1px solid rgba(80,227,194,.3);
        border-radius: 0;
        padding: 30px 20px;
        background: transparent
    }

    .page_gridColumn__NC9R3:last-child {
        border-right: none
    }

    .page_gridLabel__wmP1y {
        font-size: 10px;
        letter-spacing: 1.2px;
        margin-bottom: 15px
    }

    .page_gridTitle__aeC38 {
        font-size: 22px;
        margin-bottom: 25px
    }

    .page_gridImage__J02X0 {
        width: 140px;
        height: 140px
    }
}

.page_downloadSection__QCzrf {
    width: 100%;
    min-height: 100vh;
    background: #12363b;
    justify-content: center;
    padding: 100px 20px 300px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

.page_downloadCard__31xt1,.page_downloadSection__QCzrf {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden
}

.page_downloadCard__31xt1 {
    width: 950px;
    height: auto;
    max-width: 95%;
    margin: 0 auto;
    flex-direction: row;
    gap: 30px;
    background: linear-gradient(90deg,#96b600 0,#c9cd33 50%,#f0df5b);
    border-radius: 40px;
    padding: 80px;
    z-index: 100;
    box-shadow: 0 20px 40px rgba(0,0,0,.2);
    max-height: 330px
}

.page_downloadBackgroundImage__C4a7O {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    min-width: unset;
    background-size: cover;
    object-fit: cover;
    z-index: 15;
    pointer-events: none;
    opacity: 1
}

.page_downloadContent__zyn8R {
    position: relative;
    z-index: 30;
    width: 100%;
    display: flex;
    justify-content: center;
    right: 10px
}

.page_downloadIcons__JY01p {
    position: relative;
    flex-shrink: 0;
    top: 0;
    left: 0
}

.page_downloadIconsImage__mKUYN {
    position: relative;
    display: block;
    width: 80px;
    height: auto;
    top: -90px;
    left: -10px
}

.page_downloadInfo__CCWwH {
    display: flex;
    flex-direction: column;
    text-align: left
}

.page_downloadTitle__ZvW89 {
    font-family: Zalando Sans Expanded,sans-serif;
    font-size: 48px;
    font-weight: 300;
    line-height: 100%;
    color: #fff;
    margin: 0 0 15px;
    letter-spacing: -3%;
    transform: translateY(-5px)
}

.page_downloadDescription__7n8WH {
    font-family: DM Sans,sans-serif;
    font-size: 18px;
    line-height: 150%;
    color: #fff;
    font-style: regular;
    max-width: 750px;
    margin-bottom: 15px;
    font-weight: 400;
    opacity: .95;
    letter-spacing: -2%
}

.page_downloadButtons__VHvEe {
    display: flex;
    gap: 20px;
    align-items: center
}

.page_downloadAllBtn__0tM2o {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all .3s ease;
    position: relative;
    top: -10px;
    left: 0
}

.page_downloadAllBtn__0tM2o:hover {
    transform: scale(1.05)
}

.page_downloadAllImage__Gyexb {
    height: 56px;
    width: auto
}

.page_diamond__uDuBN {
    font-size: 14px;
    color: #fff
}

.page_viewAllBtn__LIkSP {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all .3s ease;
    position: relative;
    top: -10px;
    left: 0
}

.page_viewAllBtn__LIkSP:hover {
    transform: scale(1.05)
}

.page_viewAllImage__W7hN8 {
    height: 56px;
    width: auto
}

.page_downloadBtnPrimary__DfFC1:hover,.page_downloadBtnSecondary__CUwFV:hover {
    background: hsla(0,0%,100%,.1);
    border-color: #fff
}

.page_btnIcon__WYUat {
    font-size: 18px;
    font-weight: 300
}

.page_btnArrowCircle__gWVOn {
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
    color: #689f38;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px
}

.page_leftPlant__5ZTQU {
    position: absolute;
    left: 15%;
    top: 40%;
    z-index: 5
}

.page_plantStem__TVJ7w {
    width: 2px;
    height: 200px;
    background: #689f38;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%)
}

.page_plantHead__2pNBg {
    width: 60px;
    height: 60px;
    background: #d81b60;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    position: absolute;
    bottom: 180px;
    left: -30px;
    box-shadow: inset -5px -5px 10px rgba(0,0,0,.2)
}

.page_plantSpore__mPe_6 {
    width: 10px;
    height: 30px;
    border: 1px solid #aed581;
    border-radius: 50%;
    position: absolute;
    bottom: 240px;
    left: 50%;
    transform: translateX(-50%)
}

.page_rightPlant__eWQIE {
    position: absolute;
    right: 15%;
    bottom: 20%;
    z-index: 5;
    display: flex;
    align-items: flex-end
}

.page_longStem__bYxAn {
    width: 20px;
    height: 300px;
    background: linear-gradient(180deg,#8bc34a,#33691e);
    border-radius: 10px 10px 0 0;
    position: absolute;
    bottom: 0;
    right: 0
}

.page_longStem__bYxAn:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 6px;
    height: 6px;
    background: #cddc39;
    border-radius: 50%
}

@media (max-width: 1024px) {
    .page_downloadCard__31xt1 {
        padding:60px 20px;
        width: 95%;
        flex-direction: column;
        text-align: center;
        gap: 30px;
        min-height: auto
    }

    .page_downloadInfo__CCWwH {
        align-items: center;
        text-align: center
    }

    .page_downloadTitle__ZvW89 {
        font-size: 36px;
        margin-bottom: 20px
    }

    .page_downloadDescription__7n8WH {
        font-size: 16px;
        margin-bottom: 30px
    }

    .page_downloadButtons__VHvEe {
        flex-direction: column;
        gap: 15px
    }

    .page_downloadIconsImage__mKUYN {
        width: 80px
    }
}

.page_exploreSection__8Gl2c {
    width: 100%;
    min-height: 80vh;
    background: #12363b;
    padding: 100px 40px;
    display: flex;
    flex-direction: column;
    align-items: center
}

.page_exploreHeader__1kttC {
    text-align: center;
    margin-bottom: -10px
}

.page_exploreLabel__Tig4b {
    font-family: DM Sans,sans-serif;
    font-weight: 700;
    font-size: 11px;
    letter-spacing: .15em;
    color: #38f1ff;
    text-transform: uppercase;
    display: block;
    margin-bottom: 20px
}

.page_exploreTitle__i1ZyK {
    font-family: Zalando Sans Expanded,sans-serif;
    font-weight: 300;
    font-size: 48px;
    color: #fff;
    margin: 0
}

.page_exploreGrid__U_qsh {
    position: relative;
    width: 1000px;
    height: 500px;
    margin-top: -30px
}

.page_exploreCardBase__E9OVH {
    position: absolute;
    width: 450px;
    height: 480px;
    opacity: 1;
    transition: transform .3s ease;
    overflow: visible
}

.page_hoverTrigger__V7zXV {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 402.5px;
    z-index: 20;
    cursor: none!important
}

.page_exploreCard1__E8Lwe {
    top: 0;
    left: 0
}

.page_exploreCard2__b6JSM {
    top: 20.5px;
    left: 550px
}

.page_exploreCardImage__LIWZI {
    display: block
}

.page_exploreCardImage__LIWZI,.page_exploreHoverImage__N2kt9 {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left bottom
}

.page_exploreHoverImage__N2kt9 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    pointer-events: none
}

@media (max-width: 1024px) {
    .page_desktopOnly__7wcFY {
        display:none!important
    }

    .page_mobileOnly__ZGVF9 {
        display: block!important
    }

    .page_hoverTrigger__V7zXV {
        display: none
    }

    .page_exploreSection__8Gl2c {
        padding: 60px 20px
    }

    .page_exploreHeader__1kttC {
        margin-bottom: 15px
    }

    .page_exploreGrid__U_qsh {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin-top: 30px
    }

    .page_exploreCardBase__E9OVH {
        position: relative;
        width: 100%;
        max-width: 350px;
        height: auto;
        top: 0!important;
        left: 0!important
    }

    .page_exploreTitle__i1ZyK {
        font-size: 32px;
        line-height: 1.2;
        padding: 0 20px
    }

    .page_folderTitle__asME9 {
        font-size: 32px
    }

    .page_folderContent__C_w5c {
        margin-bottom: 10px
    }

    .page_downloadCard__31xt1 {
        padding: 40px 24px;
        width: 90%;
        margin-top: 60px
    }

    .page_downloadBall1__KaIlv,.page_downloadBall2__xBS7d,.page_downloadPetal1___oMWV,.page_downloadPetal2__Wtm89,.page_downloadPetal3__RKtrS {
        display: none
    }

    .page_downloadTitle__ZvW89 {
        font-size: 32px;
        text-align: left;
        margin-bottom: 20px
    }

    .page_downloadDescription__7n8WH {
        text-align: left;
        padding: 0;
        margin-bottom: 30px;
        font-size: 14px
    }

    .page_downloadButtons__VHvEe {
        justify-content: flex-start;
        flex-direction: row;
        gap: 10px;
        transform: translateY(-10px)
    }

    .page_downloadBackgroundImage__C4a7O {
        height: 100%;
        object-fit: cover
    }
}

.page_footerSection__NPFDG {
    width: 100%;
    background: linear-gradient(180deg,#12363b,#041a1d);
    padding: 80px 100px 170px;
    position: relative;
    overflow: hidden;
    color: #fff
}

.page_footerContainer__eXMkR {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    gap: 60px;
    position: relative;
    z-index: 10
}

.page_footerLeftColumn__IZApc {
    width: 30%;
    padding-top: 10px
}

.page_footerLogo__LcRrq {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px
}

.page_footerTreeIcon__5qiBb {
    width: 60px;
    height: 60px
}

.page_footerLogoTextGroup__SfYDr {
    display: flex;
    flex-direction: column
}

.page_footerLogoTitle__bdEl8 {
    font-family: Zalando Sans Expanded,sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: .05em;
    color: #fff
}

.page_footerLogoSubtitle__q_yDr {
    font-family: DM Sans,sans-serif;
    font-size: 10px;
    letter-spacing: .3em;
    margin-top: 4px;
    opacity: .8;
    color: #fff
}

.page_footerDescription__cgrV5 {
    font-family: DM Sans,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -.02em;
    opacity: .9;
    margin-bottom: 60px;
    max-width: 405px;
    color: hsla(0,0%,100%,.9)
}

.page_footerMapPlaceholder__1asnk {
    width: 200px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: .3;
    margin-bottom: 15px;
    background-image: radial-gradient(circle at 30% 50%,rgba(30,181,154,.4) 0,transparent 40%),radial-gradient(circle at 70% 60%,rgba(30,181,154,.4) 0,transparent 40%)
}

.page_footerLocationText__odThY {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    opacity: .8;
    color: hsla(0,0%,100%,.8)
}

.page_footerRightColumn__rUMQq {
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-left: 10px
}

.page_getInvolvedRow__zu9wi {
    gap: 10px
}

.page_getInvolvedLabel__qpi_Y {
    font-family: DM Sans,sans-serif;
    font-weight: 700;
    font-size: 11px;
    letter-spacing: .1em;
    color: #38f1ff;
    text-transform: uppercase;
    margin-bottom: 30px
}

.page_getInvolvedForm___Ab9E {
    font-family: DM Sans,sans-serif;
    font-weight: 500;
    color: #fff;
    max-width: 700px
}

.page_footerFormDesktop__dH39A {
    display: block
}

.page_footerFormMobile__hAQOa {
    display: none
}

.page_getInvolvedForm___Ab9E.page_footerFormDesktop__dH39A {
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -.04em
}

.page_footerFormDesktop__dH39A .page_formLine__wlunq {
    margin-bottom: 5px
}

.page_footerFormDesktop__dH39A .page_inlineInput__iZ4OK {
    background: transparent;
    font-family: DM Sans,sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -.04em;
    background: radial-gradient(circle,#0fb8c5 0,#93cd4d 100%) text;
    -webkit-text-fill-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(30,181,154,.3);
    padding: 0 5px;
    width: -moz-fit-content;
    width: fit-content
}

.page_inputEmail__Gd751,.page_inputName__hRjmF,.page_inputOrg__lCRcs {
    width: auto
}

.page_inlineInput__iZ4OK::placeholder {
    color: hsla(0,0%,100%,.5)
}

.page_inlineInput__iZ4OK:focus {
    outline: none;
    border-bottom: 1px solid #38f1ff
}

.page_subscribeBtn__RnRUv {
    margin-top: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    border: none;
    color: #fff;
    font-family: DM Sans,sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -.04em;
    cursor: pointer;
    padding: 0
}

.page_subscribeBtn__RnRUv:hover {
    opacity: 1
}

.page_btnArrow__40N_6 {
    width: 34.5px;
    height: 24px;
    background: #fff;
    color: #000;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding-bottom: 2px;
    position: relative;
    top: 2px
}

.page_subscribeBtn__RnRUv:hover .page_btnArrow__40N_6 {
    transform: none
}

.page_footerLinksGrid__vdOHr {
    display: grid;
    grid-template-columns: .8fr 1.2fr 1.5fr;
    grid-gap: 10px;
    gap: 10px;
    align-items: start
}

.page_footerGridCol__E_wQU {
    display: flex;
    flex-direction: column;
    height: 100%
}

.page_footerColTitle__nhyib {
    font-family: DM Sans,sans-serif;
    font-weight: 600;
    font-size: 13px;
    line-height: 140%;
    letter-spacing: .1em;
    color: #38f1ff;
    text-transform: uppercase;
    margin-bottom: 25px;
    margin-top: 0
}

.page_footerLinkList__DqcUq {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px
}

.page_addressText__OnPVS,.page_contactLink__hWdLE,.page_footerLinkList__DqcUq li a {
    font-family: DM Sans,sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -.04em;
    color: hsla(0,0%,100%,.9)!important;
    text-decoration: none;
    transition: color .2s
}

.page_contactLink__hWdLE:hover,.page_footerLinkList__DqcUq li a:hover {
    color: #38f1ff!important
}

.page_indentedItem__0anRx {
    padding-left: 15px;
    font-size: 15px;
    opacity: .8
}

.page_arrowItem__3Lkyw a {
    display: flex;
    align-items: center;
    gap: 5px
}

.page_contactLink__hWdLE {
    overflow-wrap: anywhere;
    margin-bottom: 10px;
    display: block
}

.page_addressText__OnPVS {
    line-height: 1.6;
    opacity: .8;
    margin-top: 0
}

.page_footerBackgroundPattern__sLArn {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 0;
    pointer-events: none;
    margin-top: 60px
}

@media (max-width: 1024px) {
    .page_footerSection__NPFDG {
        padding:130px 20px
    }

    .page_footerContainer__eXMkR {
        flex-direction: column;
        padding: 0;
        gap: 40px
    }

    .page_footerLeftColumn__IZApc,.page_footerRightColumn__rUMQq {
        width: 100%;
        align-items: flex-start
    }

    .page_footerDescription__cgrV5 {
        font-size: 18px;
        max-width: 100%;
        text-wrap: balance
    }

    .page_footerLogoTitle__bdEl8 {
        font-size: 24px
    }

    .page_getInvolvedForm___Ab9E,.page_inlineInput__iZ4OK {
        font-size: 20px
    }

    .page_footerLinksGrid__vdOHr {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        grid-template-rows: auto auto;
        width: 100%
    }

    .page_footerLinksGrid__vdOHr>div:first-child {
        grid-column: 1;
        grid-row: 1
    }

    .page_footerLinksGrid__vdOHr>div:nth-child(2) {
        grid-column: 1;
        grid-row: 2
    }

    .page_footerLinksGrid__vdOHr>div:nth-child(3) {
        grid-column: 2;
        grid-row: 1/span 2
    }

    .page_footerGridCol__E_wQU {
        padding-left: 20px
    }

    .page_footerMapContainer__zGN6T {
        display: flex;
        flex-direction: column;
        align-items: flex-start
    }

    .page_footerBackgroundPattern__sLArn {
        width: 250%!important;
        height: auto!important;
        bottom: 20px!important;
        left: 50%!important;
        transform: translateX(-50%)!important
    }
}

@media (max-width: 640px) {
    .page_footerLinksGrid__vdOHr {
        grid-template-columns:1fr 1fr;
        grid-template-rows: auto auto;
        gap: 30px 20px
    }

    .page_footerLinksGrid__vdOHr>div:first-child {
        grid-column: 1;
        grid-row: 1;
        padding-left: 0
    }

    .page_footerLinksGrid__vdOHr>div:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
        padding-left: 0
    }

    .page_footerLinksGrid__vdOHr>div:nth-child(3) {
        grid-column: 2;
        grid-row: 1/span 2;
        padding-left: 0
    }

    .page_footerGridCol__E_wQU {
        padding-left: 0
    }

    .page_footerColTitle__nhyib {
        font-size: clamp(9px,2.5vw,11px)
    }

    .page_addressText__OnPVS,.page_contactLink__hWdLE,.page_footerLinkList__DqcUq li a {
        font-size: clamp(12px,3.5vw,16px)
    }

    .page_contactLink__hWdLE {
        word-break: break-word
    }

    .page_getInvolvedForm___Ab9E {
        font-size: clamp(12px,3.5vw,18px);
        line-height: 1.6;
        max-width: 100%;
        word-wrap: break-word;
        overflow-wrap: break-word;
        -webkit-hyphens: auto;
        hyphens: auto
    }

    .page_getInvolvedForm___Ab9E .page_formLine__wlunq {
        margin-bottom: 8px;
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 4px
    }

    .page_footerFormMobile__hAQOa .page_inlineInput__iZ4OK {
        font-size: clamp(12px,3.5vw,18px);
        max-width: 100%;
        width: auto;
        min-width: 60px;
        flex-shrink: 1
    }

    .page_getInvolvedLabel__qpi_Y {
        font-size: clamp(9px,2.5vw,11px)
    }

    .page_subscribeBtn__RnRUv {
        font-size: clamp(14px,4vw,20px);
        margin-top: 15px
    }
}

.page_logoImage__ILPbl {
    height: 50px;
    width: auto
}

.page_footerLogoImage__FVoo3 {
    height: 70px;
    width: auto
}

.page_ch4OptionAWrapper__HYnzQ {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column
}

.page_backToScenarioBtn__siknW {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: none;
    color: #1a4d3a;
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    z-index: 100;
    display: flex;
    align-items: center;
    gap: 8px
}

.page_backToScenarioBtn__siknW:hover {
    opacity: .8
}

.page_ch4ScrollContainer__5mAk5 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 60px;
    padding: 20px 0 0;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    height: 100%;
    transform: scale(.85);
    width: 118%
}

.page_ch4ScrollContainer__5mAk5::-webkit-scrollbar {
    display: none
}

.page_ch4Section1__bDYDW {
    min-width: 400px;
    position: relative;
    padding-top: 0;
    margin-left: 80px
}

.page_ch4BalloonDecor__79Wtk {
    position: absolute;
    top: 0;
    left: 20px;
    width: 120px;
    height: 200px
}

.page_ch4BalloonLarge__a_sqk {
    width: 80px;
    height: 100px;
    background: linear-gradient(180deg,#b8e986,#93cd4d);
    border-radius: 50% 50% 50% 50%;
    position: absolute;
    top: 0;
    left: 20px
}

.page_ch4BalloonSmall__O9ruX {
    width: 50px;
    height: 60px;
    background: linear-gradient(180deg,#0fb8c5,#1bd5e4);
    border-radius: 50%;
    position: absolute;
    top: 50px;
    left: 60px
}

.page_ch4BalloonLine__ZM46d {
    width: 2px;
    height: 80px;
    background: #1a4d3a;
    position: absolute;
    top: 100px;
    left: 55px;
    opacity: .5
}

.page_ch4GrowthContent__fkPyu {
    margin-top: 60px
}

.page_ch4GrowthTitle__W0G72 {
    font-family: DM Sans,sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 16px
}

.page_ch4GrowthDesc__MYcAg {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: hsla(0,0%,100%,.9);
    line-height: 160%
}

.page_ch4CircleDecor1__LR0p_ {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(183,255,0,.3);
    position: absolute;
    bottom: 80px;
    left: 100px
}

.page_ch4CircleDecor2__rHmSU {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(183,255,0,.5);
    position: absolute;
    bottom: 50px;
    left: 200px
}

.page_ch4VerticalBar__n_pCW {
    width: 8px;
    min-height: 300px;
    background: linear-gradient(180deg,#0fb8c5,#93cd4d);
    border-radius: 4px;
    flex-shrink: 0
}

.page_ch4Section2__beX6M {
    min-width: 400px;
    position: relative
}

.page_ch4DecorBars__B4ld5 {
    position: absolute;
    top: -30px;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 15px
}

.page_ch4DecorBar1__EY4H5 {
    width: 8px;
    height: 60px;
    background: linear-gradient(180deg,#0fb8c5,#1bd5e4);
    border-radius: 4px
}

.page_ch4DecorBar2__f8ajV {
    width: 8px;
    height: 80px;
    background: linear-gradient(180deg,#93cd4d,#b8e986);
    border-radius: 4px;
    margin-left: 20px
}

.page_ch4DecorBar3__0rcTH {
    width: 8px;
    height: 50px;
    background: linear-gradient(180deg,#0fb8c5,#1bd5e4);
    border-radius: 4px;
    margin-left: 10px
}

.page_ch4ChangesContent__VpeZ8 {
    margin-left: 60px
}

.page_ch4SectionLabel__bskZs {
    font-family: DM Sans,sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .15em;
    color: hsla(0,0%,100%,.7);
    text-transform: uppercase;
    margin-bottom: 16px
}

.page_ch4ChangesTitle__8_pFL {
    font-family: DM Sans,sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    line-height: 140%;
    margin-bottom: 30px
}

.page_ch4BulletList__TIYr5 {
    display: flex;
    flex-direction: column;
    gap: 20px
}

.page_ch4BulletItem__tcUZ4 {
    display: flex;
    align-items: flex-start;
    gap: 16px
}

.page_ch4BulletDot__OzinA {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 4px
}

.page_ch4BulletItem__tcUZ4 p {
    font-family: DM Sans,sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    line-height: 150%;
    margin: 0
}

.page_ch4Section3__b91TA {
    min-width: 350px;
    position: relative
}

.page_ch4DiamondDecor__NNshl {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%)
}

.page_ch4Arrows__GV9b1 {
    width: 60px;
    height: auto
}

.page_ch4WhyContent__mJmWW {
    margin-top: 60px
}

.page_ch4WhyTitle__AP3RA {
    font-family: DM Sans,sans-serif;
    font-size: 22px;
    font-weight: 500;
    color: #fff;
    line-height: 140%;
    margin-bottom: 30px
}

.page_ch4ToolkitIntro__H_976 {
    display: flex;
    align-items: flex-start;
    gap: 12px
}

.page_ch4YellowDiamond__AiB5Q {
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg,#ffcd86,#ffef3d);
    transform: rotate(45deg);
    flex-shrink: 0;
    margin-top: 4px
}

.page_ch4ToolkitIntro__H_976 p {
    font-family: DM Sans,sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    line-height: 160%;
    margin: 0
}

.page_ch4ToolkitSection__UdoKy {
    display: flex;
    gap: 30px;
    flex-shrink: 0
}

.page_ch4ToolkitCard__9RxBo {
    width: 320px;
    background: #0d3b3f;
    border-radius: 20px;
    overflow: hidden;
    flex-shrink: 0
}

.page_ch4ToolkitImage__2AG8M {
    width: 100%;
    height: 180px;
    object-fit: cover
}

.page_ch4ToolkitContent__PYqjx {
    padding: 24px
}

.page_ch4ToolkitLabel___iXDr {
    font-family: DM Sans,sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .15em;
    color: #0fb8c5;
    text-transform: uppercase;
    margin-bottom: 12px
}

.page_ch4ToolkitTitle__OfsvK {
    font-family: DM Sans,sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    line-height: 130%;
    margin-bottom: 16px
}

.page_ch4ToolkitDesc__gzyU4 {
    font-family: DM Sans,sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: hsla(0,0%,100%,.8);
    line-height: 160%;
    margin-bottom: 24px
}

.page_ch4ToolkitActions__U3zAe {
    display: flex;
    align-items: center;
    gap: 16px
}

.page_ch4DownloadBtn__MQtxm {
    background: transparent;
    border: none;
    color: #fff;
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px
}

.page_ch4DownloadBtn__MQtxm:hover {
    opacity: .8
}

.page_ch4ViewBtn__FVR46 {
    background: hsla(0,0%,100%,.1);
    border: 1px solid hsla(0,0%,100%,.3);
    border-radius: 25px;
    padding: 10px 20px;
    color: #fff;
    font-family: DM Sans,sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all .3s ease
}

.page_ch4ViewBtn__FVR46:hover {
    background: hsla(0,0%,100%,.2)
}

.page_ch4RightDecor__eAvN5 {
    position: relative;
    min-width: 150px;
    flex-shrink: 0
}

.page_ch4DecorCircle1__EJYA6 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg,#0fb8c5,#1bd5e4);
    position: absolute;
    top: 50px;
    right: 20px
}

.page_ch4DecorCircle2__NHzV_ {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg,#93cd4d,#b8e986);
    position: absolute;
    top: 130px;
    right: 80px
}

.page_ch4DecorDiamond__lWbcz {
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg,#ff6b9d,#e91e8c);
    transform: rotate(45deg);
    position: absolute;
    top: 200px;
    right: 50px
}

.page_ch4NextChapterBtn__0eIUm {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    background: #0d3b3f;
    border: none;
    border-radius: 30px;
    padding: 14px 28px;
    color: #fff;
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 100;
    box-shadow: 0 4px 20px rgba(0,0,0,.2);
    transition: all .3s ease
}

.page_ch4NextChapterBtn__0eIUm:hover {
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 6px 25px rgba(0,0,0,.3)
}

.page_ch4NextDiamond__g4BZI {
    color: #0fb8c5;
    font-size: 12px
}

.page_footerMapImage__88Vw1 {
    width: 150px;
    height: auto;
    opacity: .6;
    margin-bottom: 16px
}

.page_downloadPetal1___oMWV {
    bottom: -74px;
    right: 120px
}

.page_downloadPetal1___oMWV,.page_downloadPetal2__Wtm89 {
    position: absolute;
    width: 20px;
    height: auto;
    pointer-events: none
}

.page_downloadPetal2__Wtm89 {
    bottom: -130px;
    right: 155px
}

.page_downloadPetal3__RKtrS {
    position: absolute;
    bottom: -192px;
    right: 85px;
    width: 20px;
    height: auto;
    pointer-events: none
}

.page_downloadPetal4__2V_0z {
    position: absolute;
    bottom: -50%;
    right: 85.2%;
    width: 13px;
    height: auto;
    z-index: 35;
    pointer-events: none
}

.page_downloadBall1__KaIlv {
    top: 31%;
    right: 8%
}

.page_downloadBall1__KaIlv,.page_downloadBall2__xBS7d {
    position: absolute;
    bottom: auto;
    width: 20px;
    height: auto;
    pointer-events: none
}

.page_downloadBall2__xBS7d {
    top: 48%;
    left: auto;
    right: 10%
}

.page_downloadStick1__jpPtz {
    top: 80px;
    left: 80px;
    width: 60px;
    transform: rotate(-30deg)
}

.page_downloadStick1__jpPtz,.page_downloadStick2__V2Xpk {
    position: absolute;
    height: auto;
    pointer-events: none;
    z-index: 5
}

.page_downloadStick2__V2Xpk {
    top: 200px;
    left: 40px;
    width: 50px;
    transform: rotate(15deg)
}

.page_downloadStick3__LOtpF {
    bottom: 120px;
    right: 60px;
    width: 55px;
    transform: rotate(-45deg)
}

.page_downloadStick3__LOtpF,.page_downloadStick4__nO5D9 {
    position: absolute;
    height: auto;
    pointer-events: none;
    z-index: 5
}

.page_downloadStick4__nO5D9 {
    bottom: 80px;
    right: 120px;
    width: 45px;
    transform: rotate(25deg)
}

.page_mobileHeroBackground__7hEjd {
    display: none
}

@media (max-width: 768px) {
    .page_heroBottom__zK1CZ {
        text-align:left;
        padding: 0 24px;
        margin: -15vh auto 0
    }

    .page_cultivationLabel__mEig_ {
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 2px;
        color: #38f1ff;
        margin-bottom: 24px
    }

    .page_heroBottomTitle__RN_jk {
        font-size: 32px;
        font-weight: 300;
        color: #fff;
        line-height: 1.25;
        margin-bottom: 24px;
        text-align: left
    }

    .page_highlight__Jnelb {
        color: #4dd4d4
    }

    .page_heroBottomDesc__HEhHv {
        font-size: 15px;
        line-height: 1.7;
        color: hsla(0,0%,100%,.8);
        margin-bottom: 32px
    }

    .page_heroBottomDesc__HEhHv br,.page_heroBottomTitle__RN_jk br {
        display: none
    }

    .page_downloadSection__QCzrf {
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 20px;
        overflow: visible;
        margin-top: -2vh
    }

    .page_downloadContent__zyn8R {
        right: 0!important
    }

    .page_downloadCard__31xt1 {
        width: 100%!important;
        height: 441px!important;
        max-width: 100%!important;
        border-radius: 20px!important;
        padding: 40px 23px!important;
        margin: 0!important;
        flex-direction: column!important;
        align-items: flex-start!important;
        text-align: left!important;
        gap: 10px!important;
        min-height: unset!important;
        max-height: unset!important
    }

    .page_downloadIconsImage__mKUYN {
        width: 60px!important;
        height: auto!important;
        top: 0!important;
        left: 0!important;
        margin-bottom: 20px!important
    }

    .page_downloadInfo__CCWwH {
        text-align: left!important
    }

    .page_downloadTitle__ZvW89 {
        font-size: 8vw!important;
        line-height: 1.1!important;
        margin: 0 0 15px!important;
        transform: none!important;
        text-align: left!important
    }

    .page_downloadDescription__7n8WH {
        font-size: 3vw!important;
        line-height: 1.4!important;
        margin: 0 0 30px!important;
        text-align: left!important;
        max-width: 100%!important;
        padding: 0!important
    }

    .page_downloadDescription__7n8WH br {
        display: none
    }

    .page_downloadButtons__VHvEe {
        display: flex;
        gap: 10px;
        flex-wrap: wrap
    }

    .page_downloadAllBtn__0tM2o,.page_viewAllBtn__LIkSP {
        padding: 0;
        border: none;
        background: transparent
    }

    .page_downloadAllImage__Gyexb,.page_viewAllImage__W7hN8 {
        height: 36px!important;
        width: auto!important
    }

    .page_downloadBackgroundImage__C4a7O {
        width: 250%!important;
        height: auto!important;
        position: absolute!important;
        bottom: 30px!important;
        left: 50%!important;
        transform: translateX(-50%)!important;
        opacity: 1!important;
        z-index: 5!important;
        object-fit: contain!important
    }

    .page_downloadBall1__KaIlv,.page_downloadBall2__xBS7d,.page_downloadPetal1___oMWV,.page_downloadPetal2__Wtm89,.page_downloadPetal3__RKtrS,.page_downloadPetal4__2V_0z {
        display: none!important
    }

    .page_getInvolvedRow__zu9wi {
        max-width: 450px!important
    }

    .page_footerFormDesktop__dH39A {
        display: none!important
    }

    .page_footerFormMobile__hAQOa {
        display: block!important;
        font-size: 16px!important;
        line-height: 160%!important;
        letter-spacing: -.01em!important;
        color: #fff!important
    }

    .page_footerFormMobile__hAQOa .page_formLine__wlunq {
        margin-bottom: 12px!important;
        display: flex!important;
        flex-wrap: wrap!important;
        align-items: baseline!important;
        gap: 4px!important
    }

    .page_footerFormMobile__hAQOa .page_inlineInput__iZ4OK {
        font-size: 16px!important;
        color: #6a8b8c!important;
        border: none!important;
        border-bottom: 1px solid #1eb5ba!important;
        background: transparent!important;
        -webkit-text-fill-color: initial!important;
        padding: 2px 0!important;
        height: auto!important
    }
}

@media (max-width: 768px) {
    .page_footerFormMobile__hAQOa .page_inlineInput__iZ4OK::placeholder {
        color:#6a8b8c!important;
        opacity: .8!important
    }

    .page_footerFormMobile__hAQOa .page_inputName__hRjmF {
        width: 120px!important
    }

    .page_footerFormMobile__hAQOa .page_inputOrg__lCRcs {
        width: 200px!important
    }

    .page_footerFormMobile__hAQOa .page_inputEmail__Gd751 {
        width: 160px!important
    }

    .page_subscribeBtn__RnRUv {
        margin-top: 0!important;
        color: #1eb5ba!important;
        font-size: 22px!important;
        letter-spacing: -.02em!important
    }

    .page_btnArrow__40N_6 {
        width: 45px!important;
        height: 28px!important;
        background: #1eb5ba!important;
        color: #041a1d!important;
        border-radius: 20px!important;
        font-size: 18px!important;
        top: 0!important
    }

    .page_subscribeBtn__RnRUv:hover .page_btnArrow__40N_6 {
        transform: translateX(5px)!important
    }
}

@media (max-width: 435px) {
    .page_getInvolvedRow__zu9wi {
        max-width:100%!important
    }

    .page_footerFormMobile__hAQOa {
        display: none!important
    }

    .page_footerFormDesktop__dH39A {
        display: block!important;
        font-size: clamp(12px,3.5vw,16px)!important;
        line-height: 1.6!important;
        color: #fff!important
    }

    .page_footerFormDesktop__dH39A .page_formLine__wlunq {
        display: inline;
        margin-bottom: 0
    }

    .page_footerFormDesktop__dH39A .page_inlineInput__iZ4OK {
        font-size: clamp(12px,3.5vw,16px)!important;
        display: inline;
        width: auto;
        min-width: 50px;
        max-width: 120px;
        color: #6a8b8c!important;
        border-bottom: 1px solid #1eb5ba!important;
        -webkit-text-fill-color: initial!important
    }

    .page_footerFormDesktop__dH39A .page_inlineInput__iZ4OK::placeholder {
        color: #6a8b8c!important;
        opacity: .8!important;
        -webkit-text-fill-color: initial!important
    }

    .page_getInvolvedForm___Ab9E {
        display: block;
        word-wrap: break-word;
        overflow-wrap: break-word
    }
}

@media (max-width: 768px) {
    .page_bonusSection__x1KgI {
        padding:12vh 24px;
        background: #12363b
    }

    .page_bonusContent__p8YL_ {
        flex-direction: column;
        gap: 40px;
        padding: 0;
        background: #12363b
    }

    .page_bonusLeft__woqnL {
        text-align: left;
        order: 1;
        right: -15%;
        background: #12363b
    }

    .page_bonusRight__rk0CL {
        order: 2;
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        right: 5%;
        top: 10vh;
        background: #12363b
    }

    .page_bonusCardImage__JvmAM {
        width: 100%;
        max-width: 320px;
        height: auto;
        object-fit: contain;
        position: relative;
        z-index: 2
    }

    .page_bonusTitle__r9iqz {
        font-size: 30px;
        margin-bottom: 20px;
        background: #12363b
    }

    .page_bonusText__iVsRq {
        font-size: 14px;
        margin-bottom: 22px;
        background: #12363b
    }

    .page_bonusDiamond__ubeu4 {
        margin-bottom: 20px;
        background: #12363b
    }

    .page_bonusCallout__quMMZ {
        background: #12363b
    }

    .page_bonusDotsPattern__bfKXk {
        display: block;
        position: absolute;
        top: auto;
        bottom: 0;
        left: 50%;
        transform: translateX(0);
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: .5;
        pointer-events: none;
        background: #12363b
    }

    .page_bonusDotsImage__6nLaL {
        width: 60%;
        height: 150%;
        object-fit: contain
    }

    .page_bonusFlowerImage__b7AJX {
        position: absolute;
        top: -15%;
        bottom: auto;
        left: -15%;
        right: auto;
        width: 1190px;
        height: 780px;
        transform: scale(.6);
        transform-origin: top left
    }

    .page_bonusFlowerDot__UUo_g {
        top: 72%;
        left: -11%;
        width: 20px;
        height: 97px;
        z-index: 2
    }
}

.page_scenarioContainer__PsUEO {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    max-width: 1250px;
    margin-top: 20px;
    position: relative
}

.page_optionColumnLeft__nxw4f,.page_optionColumnRight__WF0ee {
    flex: 1 1;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: relative
}

.page_optionColumnRight__WF0ee {
    align-items: flex-end;
    text-align: right
}

.page_centerCard__e153k {
    width: 320px;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
    background: transparent;
    padding: 0;
    border-radius: 0;
    transition: transform .8s ease-out;
    transform-style: preserve-3d;
    z-index: 10
}

.page_optionLabel__UIcmx {
    font-family: DM Sans,sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: .1em;
    color: #1a4d3a;
    opacity: .6;
    text-transform: uppercase;
    margin-bottom: 5px
}

.page_optionDesc__GMLe_ {
    font-family: DM Sans,sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 110%;
    letter-spacing: -.03em;
    color: #1a4d3a;
    text-align: inherit
}

@media (max-width: 768px) {
    .page_scenarioContainer__PsUEO {
        flex-direction:column;
        margin-top: -40px;
        gap: 20px
    }

    .page_centerCard__e153k {
        width: 100%;
        max-width: 240px!important;
        height: auto;
        order: 1;
        margin-bottom: 20px;
        transform: none!important
    }

    .page_optionColumnLeft__nxw4f,.page_optionColumnRight__WF0ee {
        flex: 0 0 auto!important;
        width: 100%!important;
        max-width: 100%!important;
        align-items: flex-start!important;
        padding: 20px;
        background: linear-gradient(180deg,hsla(0,0%,100%,.2),hsla(0,0%,100%,.1));
        border-radius: 12px;
        margin-top: 0!important;
        order: 3;
        text-align: left!important;
        border: 1px solid hsla(0,0%,100%,.3)
    }

    .page_optionColumnRight__WF0ee {
        order: 4;
        align-items: flex-start!important
    }

    .page_optionLabel__UIcmx {
        color: #64e3c9;
        font-size: 12px;
        margin-bottom: 8px
    }

    .page_optionDesc__GMLe_ {
        color: #fff;
        font-size: 18px;
        line-height: 1.3
    }

    .page_hoverFlowerLeftMain__NPMmx,.page_hoverFlowerLeftmostB__Psau3,.page_hoverFlowerLeftmost__I_7Fk,.page_hoverFlowerMiddleB__8fXuC,.page_hoverFlowerMiddle__LbYtm,.page_hoverFlowerRightMain__k2t0_,.page_hoverFlowerRightmostB___42Zi,.page_hoverFlowerRightmost___cTyi,.page_hoverFlyB__Eo6oP,.page_hoverFly__f1TKR,.page_hoverPetalB__uRNvP,.page_hoverPetal__JtPdU {
        display: none!important
    }
}

.page_hoverFlowerLeftmost__I_7Fk {
    position: absolute;
    bottom: -225px;
    left: -45px;
    width: 125px;
    height: 400px;
    pointer-events: none;
    z-index: 5;
    transform: translateX(-100px)
}

.page_hoverFlowerMiddle__LbYtm {
    position: absolute;
    bottom: -150px;
    left: 90px;
    width: 60px;
    height: auto;
    pointer-events: none;
    z-index: 6
}

.page_hoverFlowerRightmost___cTyi {
    position: absolute;
    bottom: -100px;
    left: 180px;
    width: 50px;
    height: auto;
    pointer-events: none;
    z-index: 7
}

.page_hoverPetal__JtPdU {
    top: -60px;
    left: -100px;
    width: 250px;
    z-index: 8
}

.page_hoverFly__f1TKR,.page_hoverPetal__JtPdU {
    position: absolute;
    height: auto;
    pointer-events: none
}

.page_hoverFly__f1TKR {
    top: -20px;
    left: 25%;
    width: 50px;
    z-index: 9
}

.page_hoverRightFlowerTop__JoPkW {
    position: absolute;
    top: 250px;
    right: -30px;
    width: 200px;
    height: auto;
    pointer-events: none;
    z-index: 5
}

.page_hoverRightFlowerBottom__SePj4 {
    position: absolute;
    bottom: -20px;
    right: 150px;
    width: 150px;
    height: auto;
    pointer-events: none;
    z-index: 6
}

.page_hoverRightFly__NI02G {
    position: absolute;
    top: -20px;
    right: 50px;
    width: 50px;
    height: auto;
    pointer-events: none;
    z-index: 7
}

.page_ch2HoverLamp__QI7_z {
    position: absolute;
    bottom: -60px;
    left: -70px;
    width: 150px;
    height: auto;
    pointer-events: none;
    z-index: 5
}

.page_ch2HoverFly__MzUUG {
    position: absolute;
    top: 0;
    left: 300px;
    width: 50px;
    height: auto;
    pointer-events: none;
    z-index: 6
}

.page_ch2HoverEmptyBubble__9zjj9 {
    position: absolute;
    top: -120px;
    left: 45px;
    width: 60px;
    height: auto;
    pointer-events: none;
    z-index: 4
}

.page_ch2HoverFilledBubble__e6Mzc {
    position: absolute;
    top: -70px;
    left: 100px;
    width: 60px;
    height: auto;
    pointer-events: none;
    z-index: 5
}

.page_ch2HoverImageLeft__b3A9j {
    position: absolute;
    bottom: -120px;
    left: 10px;
    width: 80px;
    height: auto;
    pointer-events: none;
    z-index: 6
}

.page_ch2HoverImageRight__4rdNB {
    position: absolute;
    bottom: -70px;
    left: 100px;
    width: 80px;
    height: auto;
    pointer-events: none;
    z-index: 5
}

.page_ch2HoverEmptyBubble2__oEypR {
    position: absolute;
    top: 255px;
    left: 30%;
    width: 50px;
    height: auto;
    pointer-events: none;
    z-index: 4
}

.page_ch2HoverFilledBubble2__csrE7 {
    top: 210px;
    left: 32%;
    z-index: 5
}

.page_ch2HoverFilledBubble2__csrE7,.page_ch2RightFly__v_Ex9 {
    position: absolute;
    width: 50px;
    height: auto;
    pointer-events: none
}

.page_ch2RightFly__v_Ex9 {
    top: 70%;
    right: 350px;
    z-index: 6
}

.page_ch2RightImage__VLOYL {
    position: absolute;
    top: 50px;
    right: -30px;
    width: 80px;
    height: auto;
    pointer-events: none;
    z-index: 5
}

.page_ch2RightFlowerPetal1__gYfKl {
    position: absolute;
    top: 0;
    right: 30px;
    width: 70px;
    height: auto;
    pointer-events: none;
    z-index: 6
}

.page_ch2RightFlowerPetal2__ZdQ8N {
    top: 220px;
    right: -55px
}

.page_ch2RightFlowerPetal2__ZdQ8N,.page_ch2RightFlowerPetal3__YmkUv {
    position: absolute;
    width: 15px;
    height: auto;
    pointer-events: none;
    z-index: 6
}

.page_ch2RightFlowerPetal3__YmkUv {
    top: 240px;
    right: -38px
}

.page_ch2RightFlower1__VaXXN {
    position: absolute;
    bottom: -100px;
    right: -20px;
    width: 110px;
    height: auto;
    pointer-events: none;
    z-index: 7
}

.page_ch2RightHalfBottom___ebWR {
    top: -22px
}

.page_ch2RightHalfBottom___ebWR,.page_ch2RightHalfTop__Pdkjm {
    position: absolute;
    right: 250px;
    width: 50px;
    height: auto;
    pointer-events: none;
    z-index: 5
}

.page_ch2RightHalfTop__Pdkjm {
    top: -50px
}

.page_ch2RightStick__ADoor {
    position: absolute;
    bottom: -110px;
    right: -40px;
    width: 80px;
    height: auto;
    pointer-events: none;
    z-index: 4
}

.page_ch3RightFly__pHd6c {
    position: absolute;
    top: -80px;
    right: 350px;
    width: 50px;
    height: auto;
    pointer-events: none;
    z-index: 6
}

.page_ch3RightFlower__hcGTN {
    position: absolute;
    bottom: -10px;
    right: -65px;
    width: 70px;
    height: auto;
    pointer-events: none;
    z-index: 7;
    transform: translateY(120px)
}

.page_ch3DiamondBottom__IZf_y {
    position: absolute;
    bottom: -40px;
    right: -60px;
    width: 200px;
    height: auto;
    pointer-events: none;
    z-index: 5
}

.page_ch3TopSection__qLBJz {
    position: absolute;
    top: -90px;
    right: -120px;
    width: 250px;
    height: auto;
    pointer-events: none;
    z-index: 6
}

.page_ch3LeftFlower__df4RZ {
    position: absolute;
    bottom: -120px;
    right: 60px;
    width: 70px;
    height: auto;
    pointer-events: none;
    z-index: 7
}

.page_menuOverlay__euU2i {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: 10000;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0;
    pointer-events: none
}

.page_menuContent__4q6vn {
    width: 575px;
    height: auto;
    min-height: 583px;
    max-height: 90vh;
    background: rgba(18,54,59,.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    pointer-events: auto;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,.4);
    margin-top: 80px;
    margin-right: 20px;
    transition: height .3s ease
}

.page_menuContent__4q6vn::-webkit-scrollbar {
    display: none
}

.page_menuHeader__MUcEP {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    background: transparent;
    border-bottom: 1px solid hsla(0,0%,100%,.1)
}

.page_homeButton__6YNiG {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1em;
    color: hsla(0,0%,100%,.7);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px 16px;
    transition: color .3s ease
}

.page_homeButton__6YNiG:hover {
    color: #fff
}

.page_menuTitle__e3ON7 {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1em;
    color: #fff;
    text-transform: uppercase;
    flex: 1 1;
    text-align: center
}

.page_closeButton__067Ye {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center
}

.page_closeMenuIcon__eY6X_ {
    width: 24px;
    height: 24px
}

.page_menuBody__660Em {
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-gap: 0;
    gap: 0;
    flex: 1 1;
    overflow: hidden
}

.page_menuLeft__457oY {
    background: transparent;
    padding: 24px 16px;
    border-right: 1px solid hsla(0,0%,100%,.1);
    gap: 24px
}

.page_menuLeft__457oY,.page_menuSection__vCiYH {
    display: flex;
    flex-direction: column
}

.page_menuSectionTitle__iNQuT {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: hsla(0,0%,100%,.7);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px 0;
    text-align: left;
    transition: color .3s ease;
    display: flex;
    align-items: center;
    gap: 8px
}

.page_menuSectionTitle__iNQuT:hover {
    color: #fff
}

.page_menuSectionTitle__iNQuT.page_withBullet__KBFQN {
    color: #fff;
    font-weight: 500
}

.page_bullet__wYsNK {
    color: #13d9e8;
    font-size: 12px;
    width: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center
}

.page_expandIcon__iwEZQ {
    margin-left: auto;
    font-size: 20px;
    font-weight: 300;
    color: hsla(0,0%,100%,.5)
}

.page_menuRight__1EJbS {
    background: transparent;
    padding: 24px 20px;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

.page_menuRight__1EJbS::-webkit-scrollbar {
    display: none
}

.page_chaptersList__2JLZL {
    display: flex;
    flex-direction: column;
    gap: 12px
}

.page_chapterItem__YDXU9 {
    border-bottom: 1px solid hsla(0,0%,100%,.1);
    padding-bottom: 12px
}

.page_chapterButton__Bzv_j {
    width: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    transition: transform .2s ease
}

.page_chapterButton__Bzv_j:hover {
    transform: translateX(5px)
}

.page_chapterInfo__PrvNY {
    flex: 1 1
}

.page_chapterLabel__Gmb7F {
    font-family: DM Sans,sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .15em;
    color: rgba(109,255,206,.7);
    margin-bottom: 8px;
    text-transform: uppercase
}

.page_chapterTitle__w8RTl {
    font-family: DM Sans,sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    line-height: 1.3
}

.page_chapterExpand__TItXu {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid hsla(0,0%,100%,.2);
    background: transparent;
    color: #fff;
    font-size: 22px;
    font-weight: 300;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    flex-shrink: 0;
    margin-left: 16px
}

.page_chapterExpand__TItXu:hover {
    background: hsla(0,0%,100%,.1);
    border-color: hsla(0,0%,100%,.4)
}

.page_downloadAllButton__Uw1fY {
    background: linear-gradient(135deg,#0fb8c5,#68f4ff);
    border: none;
    border-radius: 12px;
    padding: 20px 24px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    margin-top: 20px;
    transition: transform .3s ease,box-shadow .3s ease
}

.page_downloadAllButton__Uw1fY:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(19,217,232,.3)
}

.page_downloadAllTitle__iNuqd {
    font-family: DM Sans,sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #000;
    line-height: 1.2
}

.page_downloadAllSubtitle__tfEiV {
    font-family: DM Sans,sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1em;
    color: #000;
    display: flex;
    align-items: center;
    gap: 6px
}

.page_chapterExpandedContent__wzJMl {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 0 0 20px;
    margin-top: 12px;
    border-left: 2px solid rgba(109,255,206,.3);
    margin-left: 0
}

.page_chapterSubItem__cNB7A {
    font-family: DM Sans,sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: hsla(0,0%,100%,.7);
    text-decoration: none;
    padding: 8px 0;
    transition: color .3s ease,padding-left .3s ease;
    cursor: pointer
}

.page_chapterSubItem__cNB7A:hover {
    color: #fff;
    padding-left: 8px
}

@media (max-width: 768px) {
    .page_menuBody__660Em {
        grid-template-columns:1fr
    }

    .page_menuLeft__457oY {
        border-right: none;
        border-bottom: 1px solid hsla(0,0%,100%,.1);
        padding: 30px 24px
    }

    .page_menuRight__1EJbS {
        padding: 30px 24px
    }

    .page_chapterLabel__Gmb7F {
        font-size: 9px
    }

    .page_chapterTitle__w8RTl,.page_downloadAllTitle__iNuqd {
        font-size: 18px
    }

    .page_chapterSubItem__cNB7A {
        font-size: 13px
    }
}
